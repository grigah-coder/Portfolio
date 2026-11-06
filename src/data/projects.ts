export type Project = {
  index: string;
  title: string;
  summary: string;
  format: string;
  stack: string[];
  path: string;
  action: string;
  href?: string;
  github: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Library Management System",
    summary:
      "A Java desktop application built with OOP principles to manage library members, employees, and borrowing operations.",
    format: "Desktop",
    stack: ["Java 25", "JavaFX", "Maven"],
    path: "JAVA / AppGBib",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/JAVA/Library-Management-System",
  },
  {
    index: "02",
    title: "Magazine Catalog System",
    summary:
      "A Java application for organizing magazine categories and articles using advanced OOP and data structures.",
    format: "Desktop",
    stack: ["Java 25", "JavaFX", "Maven"],
    path: "JAVA / AppMag",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/JAVA/Magazine-Catalog-System",
  },
  {
    index: "03",
    title: "Dental Clinic Manager",
    summary:
      "A C# WinForms application for patient CRUD operations, featuring search, sort, and PostgreSQL database integration.",
    format: "Desktop",
    stack: ["C#", "WinForms", "PostgreSQL"],
    path: "C# / ProjectGestionDentaire",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/CS/Dental-Clinic-Manager",
  },
  {
    index: "04",
    title: "Doctoral Studies Portal",
    summary:
      "A responsive web portal built with HTML, CSS, and Bootstrap for doctoral students.",
    format: "Web app",
    stack: ["HTML", "CSS", "Bootstrap"],
    path: "WEB / cedoc-porta",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/WEB/Doctoral-Studies-Portal",
  },
  {
    index: "05",
    title: "Vanilla JS Calculator",
    summary:
      "A functional web calculator built with pure HTML, CSS, and Vanilla JavaScript.",
    format: "Web app",
    stack: ["HTML", "CSS", "JavaScript"],
    path: "WEB / Calculatrice",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/WEB/Vanilla-JS-Calculator",
  },
  {
    index: "06",
    title: "Restaurant Landing Page",
    summary: "A clean, static landing page for a restaurant.",
    format: "Web landing page",
    stack: ["HTML", "CSS"],
    path: "WEB / Burger",
    action: "View on GitHub",
    github: "https://github.com/grigah-coder/Portfolio/tree/main/Projects/WEB/Restaurant-Landing-Page",
  },
];
