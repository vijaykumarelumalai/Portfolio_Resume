export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  role: string;
  timeline: string;
  features: string[];
  location?: string;
  highlighted?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const profile = {
  name: 'Vijay Kumar E',
  title: '.NET Developer | Full Stack Developer | Application Developer',
  tagline: 'Building enterprise web applications, CRM solutions & construction systems',
  email: 'vijaykumarelumalai123@gmail.com',
  phone: '+91 76039 17058',
  location: 'Ranipet, Tamil Nadu, India',
  resumeUrl: '/Vijay_Kumar_E.pdf',
  github: 'https://github.com/vijaykumarelumalai',
  linkedin: 'https://www.linkedin.com/in/vijay-kumar17/',
  portfolioUrl: 'https://vijaykumarelumalai.github.io/',
  summary:
    'Results-oriented .NET Developer with 10 months of experience developing enterprise web applications, CRM solutions, and construction management systems using C#, ASP.NET Core, Blazor, Entity Framework Core, SQL Server, and RESTful APIs. Experienced in the full software development lifecycle, including requirements analysis, database design, backend and frontend development, testing, and deployment.',
  about:
    'Results-oriented .NET Developer with 10 months of experience developing enterprise web applications, CRM solutions, and construction management systems using C#, ASP.NET Core, Blazor, Entity Framework Core, SQL Server, and RESTful APIs. Skilled at delivering scalable, secure, and high-performance solutions while collaborating with cross-functional teams to translate business requirements into production-ready applications. Passionate about clean architecture, code quality, and performance optimization.',
  education: [
    {
      degree: 'B.E. – Computer Science & Engineering',
      institution: 'Kingston Engineering College – Vellore, Tamil Nadu',
      period: '2021 – 2025',
      score: 'CGPA: 8.1 / 10.0',
    },
    {
      degree: 'HSC / SSLC',
      institution: 'NAG Matriculation Hr. Sec. School – Ranipet, Tamil Nadu',
      period: '2019 – 2021',
      score: 'Percentage: 82.94%',
    },
  ],
  learning: [
    'Architecting enterprise applications using C#, ASP.NET Core, Blazor, Radzen UI, EF Core, and SQL Server.',
    'Designing analytics dashboards, policy renewal workflows, and defect management modules.',
    'Developing and optimizing SQL Server queries, stored procedures, triggers, and database objects using T-SQL and SSMS.',
    'Integrating RESTful APIs with Blazor and React.js components for secure real-time data communication.',
    'Developing backend modules using Java, Spring Boot, SQL Server, and REST APIs.',
    'Practicing clean architecture, database indexing, execution plan analysis, and performance optimization.',
  ],
};

export const skills: Skill[] = [
  { name: 'C#', level: 92, category: 'Languages' },
  { name: 'SQL (T-SQL)', level: 90, category: 'Languages' },
  { name: 'Python (DS)', level: 82, category: 'Languages' },
  { name: 'Java', level: 80, category: 'Languages' },
  { name: 'JavaScript', level: 85, category: 'Languages' },

  { name: '.NET', level: 90, category: 'Backend' },
  { name: 'ASP.NET Core', level: 90, category: 'Backend' },
  { name: 'Blazor', level: 88, category: 'Frontend' },
  { name: 'Radzen UI', level: 86, category: 'Frontend' },
  { name: 'EF Core', level: 88, category: 'Backend' },
  { name: 'React.js', level: 84, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },

  { name: 'SQL Server (SSMS)', level: 92, category: 'Database' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'Microsoft Access (MS Access)', level: 85, category: 'Database' },
  { name: 'Stored Procedures & Triggers', level: 90, category: 'Database' },
  { name: 'T-SQL & Query Optimization', level: 88, category: 'Database' },

  { name: 'Microsoft Visual Studio', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 90, category: 'Tools' },
  { name: 'Microsoft Power BI', level: 85, category: 'Tools' },
  { name: 'Microsoft Azure', level: 80, category: 'Tools' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
  { name: 'Postman', level: 85, category: 'Tools' },
];

export const skillCategories = [
  'Languages',
  'Backend',
  'Frontend',
  'Database',
  'Tools',
];

export const experiences: Experience[] = [
  {
    id: 'focuslogic',
    role: '.NET Developer',
    company: 'FocusLogic IT Services',
    location: 'Ranipet, Tamil Nadu',
    period: 'Oct 2025 – Present',
    type: 'Full-time',
    description:
      'Developing enterprise applications including Enterprise CRM Platform and AEGIS Construction Management System using C#, ASP.NET Core, Blazor, Radzen UI, EF Core, and SQL Server.',
    achievements: [
      'Developed enterprise applications including the Enterprise CRM Platform and AEGIS Construction Management System using C#, ASP.NET Core, Blazor, Radzen UI, Entity Framework Core, and SQL Server.',
      'Designed and implemented analytics dashboards, policy renewal workflows, and customer management modules to improve business operations.',
      'Built the Defect Management Module for the AEGIS platform, enabling real-time defect registration, assignment workflows, status tracking, and reporting.',
      'Developed and integrated RESTful APIs with Blazor components to ensure secure, reliable, and efficient communication.',
      'Collaborated with business stakeholders to analyze requirements and deliver production-ready features following software development best practices.',
    ],
    tech: ['C#', 'ASP.NET Core', 'Blazor', 'Radzen UI', 'EF Core', 'SQL Server', 'REST APIs'],
  },
  {
    id: 'msc-tech',
    role: 'SQL Developer Intern',
    company: 'Mediterranean Shipping Company (MSC Technology)',
    location: 'Tamil Nadu, India',
    period: 'Feb 2025 – Aug 2025',
    type: 'Internship',
    description:
      'Developed and optimized SQL Server database objects, stored procedures, and triggers for payroll and attendance management systems using T-SQL and SSMS.',
    achievements: [
      'Developed and optimized SQL Server queries, stored procedures, triggers, and database objects using T-SQL and SQL Server Management Studio (SSMS).',
      'Designed and implemented a Payroll Management System, including database schema design, data validation, stored procedure development, and performance optimization.',
      'Enhanced database performance through query optimization, indexing, execution plan analysis, and backend database integration.',
    ],
    tech: ['T-SQL', 'SQL Server (SSMS)', 'Stored Procedures', 'Triggers', 'Query Optimization'],
  },
  {
    id: 'ivtl-infoview',
    role: 'Web Developer Intern',
    company: 'IVTL Infoview Technologies Pvt. Ltd. (WORKSAP)',
    location: 'Tamil Nadu, India',
    period: 'July 2024 – Aug 2024',
    type: 'Internship',
    description:
      'Developed backend web modules and database integration using Java, Spring Boot, SQL Server, and REST APIs.',
    achievements: [
      'Developed backend modules using Java, Spring Boot, SQL Server, and REST APIs, contributing to web application development and database integration.',
      'Designed and implemented a Login Tracking System utilizing Spring Boot, SQL Server, and CRUD operations.',
      'Participated in debugging, testing, and backend feature enhancements.',
    ],
    tech: ['Java', 'Spring Boot', 'SQL Server', 'REST APIs', 'CRUD'],
  },
];

export const projects: Project[] = [
  {
    id: 'crm-product',
    title: 'Enterprise CRM Platform',
    category: 'Enterprise CRM Application',
    description:
      'Enterprise CRM application featuring interactive analytics dashboards, automated policy renewal workflows, and customer information management for operations in Walajapet.',
    longDescription:
      'Led end-to-end development of enterprise application modules at FocusLogic IT Services (Walajapet), encompassing business requirements analysis, solution design, database architecture, implementation, and client-ready UI delivery. Designed and developed interactive analytics dashboards, automated policy renewal workflows, and secure customer information management features.',
    tags: ['ASP.NET Core', 'Blazor', 'Radzen UI', 'SQL Server', 'EF Core'],
    image: '/images/crm_platform.jpg',
    role: 'Technical & Business Developer',
    timeline: 'Oct 2025 – Present',
    location: 'FocusLogic IT Services (Walajapet)',
    features: [
      'Led end-to-end development of enterprise application modules',
      'Interactive analytics dashboards & policy renewal workflows',
      'Secure customer information management features',
      'Database architecture with Entity Framework Core & SQL Server',
      'Client-ready UI delivery built with Blazor and Radzen UI',
    ],
    highlighted: true,
  },
  {
    id: 'aegis-construction',
    title: 'Enterprise AEGIS Construction Management System',
    category: 'Project Management Platform',
    description:
      'Enterprise construction management suite with Defect Management Module, workflow management, and analytics dashboards for Aegis Construction Company (Australia).',
    longDescription:
      'Designed and developed the Defect Management Module for the AEGIS platform at FocusLogic IT Services, enabling efficient defect reporting, assignment, status tracking, resolution workflows, and comprehensive management oversight for construction projects. Built responsive UI interfaces using Blazor and Radzen UI and integrated with RESTful APIs for real-time synchronization.',
    tags: ['ASP.NET Core', 'Blazor', 'Radzen UI', 'SQL Server', 'EF Core', 'Git'],
    image: '/images/aegis_app.jpg',
    role: 'Front-End Developer',
    timeline: '2025',
    location: 'Aegis Construction Company (Australia)',
    features: [
      'Defect Management Module with real-time defect registration',
      'Workflow management, task assignment & status tracking',
      'Analytical dashboards using Blazor and Radzen UI',
      'RESTful API integration for real-time frontend-backend communication',
    ],
    highlighted: true,
  },
  {
    id: 'aegis-website',
    title: 'Aegis Construction Website',
    category: 'Corporate Website',
    description:
      'Official responsive corporate website built for Aegis Construction Company in Australia, featuring project portfolios, service showcases, interactive quote requests, and modern UI.',
    longDescription:
      'A sleek, high-performance corporate website designed and developed for Aegis Construction Company based in Australia. Built using HTML5, JavaScript, Tailwind CSS, and custom Vanilla CSS animations, the website showcases commercial and residential construction projects, company capabilities, safety standards, client testimonials, and an interactive contact inquiry form.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Vanilla CSS'],
    image: '/images/aegis_website.jpg',
    role: 'Frontend Developer',
    timeline: '2024 – 2025',
    location: 'Aegis Construction Company (Australia)',
    features: [
      'Responsive multi-page layout built with Tailwind CSS & Vanilla CSS',
      'Interactive project showcase with filtering and image galleries',
      'Modern smooth-scroll navigation and custom CSS micro-animations',
      'Service catalog and client testimonial slider',
      'Contact & quote request form with client-side validation',
    ],
    highlighted: true,
  },
  {
    id: 'commercial-scrap',
    title: 'Commercial Scrap Management System',
    category: 'Industrial Web App',
    description:
      'Production-ready Industrial Scrap Management System for weight tracking, inventory management, invoicing, and operational reporting in Ranipet.',
    longDescription:
      'Conducted business requirements analysis by collaborating with stakeholders and deployed a production-ready Industrial Scrap Management System for local client operations in Ranipet. Designed for weight tracking, inventory management, invoicing, and operational reporting to improve process efficiency and data accuracy.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SQL Server', 'Python', 'Git'],
    image: '/images/scrap_management.jpg',
    role: 'Full Stack Developer',
    timeline: '2025',
    location: 'Ranipet, Tamil Nadu (Local Client Project)',
    features: [
      'Production release of industrial scrap management software',
      'Weight tracking, inventory management, and GST invoicing',
      'Operational reporting & process efficiency optimization',
      'SQL Server backend with high data reliability',
    ],
    highlighted: true,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Web Application / Portfolio',
    description:
      'Responsive personal portfolio website showcasing professional experience, technical skills, projects, certifications, and contact information, deployed on GitHub Pages.',
    longDescription:
      'Designed, developed, and deployed a responsive personal portfolio website showcasing professional experience, technical skills, projects, certifications, and contact information. Implemented a mobile-first, cross-browser compatible user interface optimized for desktop, tablet, and mobile devices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'GitHub Pages'],
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    role: 'Developer',
    timeline: '2025',
    location: 'Live Deployment (GitHub Pages)',
    features: [
      'Mobile-first, cross-browser compatible UI',
      'Interactive theme switcher and smooth scroll navigation',
      'Showcase for projects, experience timeline, and certifications',
      'Deployed live on GitHub Pages',
    ],
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend API',
    category: 'REST API / Academic Project',
    description:
      'Scalable e-commerce backend API developed as a college project, featuring product catalog, shopping cart, order processing, and payment hooks.',
    longDescription:
      'A RESTful backend API for an e-commerce platform built as a college academic project. Exposes endpoints for product catalog management, cart operations, order checkout, payment gateway integration hooks, and admin dashboards. Built with ASP.NET Core Web API, EF Core, and SQL Server with clean repository pattern separation.',
    tags: ['C#', 'ASP.NET Web API', 'EF Core', 'SQL Server', 'REST'],
    image:
      'https://images.pexels.com/photos/35560482/pexels-photo-35560482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    role: 'Backend Developer',
    timeline: '2024',
    location: 'College Project',
    features: [
      'Product catalog with categories, variants, and search',
      'Shopping cart and checkout flow APIs',
      'Order management with status tracking',
      'Payment gateway integration hooks',
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: 'csharp-prog',
    title: 'C# Programming',
    issuer: 'Professional Certification',
    date: '2025',
    skills: ['C#', 'OOP', 'LINQ', '.NET'],
    image:
      'https://images.pexels.com/photos/14553720/pexels-photo-14553720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'web-dev',
    title: 'Web Development & Full Stack',
    issuer: 'Professional Certification',
    date: '2025',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    image:
      'https://images.pexels.com/photos/37012315/pexels-photo-37012315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Data Visualization',
    issuer: 'Professional Certification',
    date: '2025',
    skills: ['Python', 'Power BI', 'SQL', 'Data Analytics'],
    image:
      'https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'cisco-networking',
    title: 'Cisco Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    skills: ['Networking Fundamentals', 'TCP/IP', 'Protocols'],
    image:
      'https://images.pexels.com/photos/8177925/pexels-photo-8177925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'Professional Certification',
    date: '2024',
    skills: ['AI Concepts', 'Machine Learning', 'Data Science'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'microsoft-powerbi',
    title: 'Microsoft Power BI',
    issuer: 'Microsoft / Professional Certification',
    date: '2024',
    skills: ['Power BI', 'Dashboards', 'DAX', 'Visual Analytics'],
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'internships',
    title: '3 Professional Technical Roles',
    description:
      'Completed three professional roles/internships across .NET Development, Full-Stack Web Development, and SQL Server Database Engineering.',
    icon: 'Briefcase',
    date: '2024 – Present',
  },
  {
    id: 'enterprise-delivery',
    title: 'Enterprise Platform Delivery',
    description:
      'Contributed to the successful delivery of two enterprise applications — Enterprise CRM Platform and AEGIS Construction Management System.',
    icon: 'Rocket',
    date: '2025',
  },
  {
    id: 'production-release',
    title: 'Production System Deployments',
    description:
      'Designed, developed, and deployed a production-ready Commercial Scrap Management System and a responsive personal portfolio website.',
    icon: 'CheckCircle',
    date: '2025',
  },
  {
    id: 'academic-record',
    title: 'Consistent Academic Record',
    description:
      'Achieved 8.1 CGPA in B.E. Computer Science & Engineering at Kingston Engineering College, and 82.94% in Schooling.',
    icon: 'GraduationCap',
    date: '2025',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];
