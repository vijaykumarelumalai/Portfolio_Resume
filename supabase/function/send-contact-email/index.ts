import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RESEND_FROM = Deno.env.get("RESEND_FROM") || "Portfolio <onboarding@resend.dev>";
const RESEND_TO = Deno.env.get("RESEND_TO") || "vijaykumarelumalai123@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long (max 5000 characters)." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message });

    if (dbError) {
      console.error("DB insert error:", dbError.message);
    }

    let emailSent = false;
    if (RESEND_API_KEY) {
      try {
        const emailSubject = subject
          ? `Portfolio Contact: ${subject}`
          : `Portfolio Contact from ${name}`;

        const html = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #0ea5e9; margin-bottom: 4px;">New message from your portfolio</h2>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>From:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #0ea5e9;">${escapeHtml(email)}</a></p>
            ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
            <p><strong>Message:</strong></p>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; white-space: pre-wrap; color: #334155; line-height: 1.6;">${escapeHtml(message)}</div>
            <p style="color: #64748b; font-size: 12px; margin-top: 24px;">This message was sent from your portfolio contact form.</p>
          </div>
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: RESEND_FROM,
            to: RESEND_TO,
            reply_to: email,
            subject: emailSubject,
            html,
          }),
        });

        if (res.ok) {
          emailSent = true;
        } else {
          const errText = await res.text();
          console.error("Resend error:", res.status, errText);
        }
      } catch (err) {
        console.error("Email send error:", err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: emailSent
          ? "Your message has been sent. I'll get back to you soon!"
          : "Your message has been received. I'll get back to you soon!",
        emailSent,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Handler error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
