export const site = {
  name: "Hamza Grigah",
  role: "Software Engineering Student",
  email: "hzlucifer2007@gmail.com",
  phone: "+212 684 738 785",
  whatsapp: "https://wa.me/212684738785",
  github: "https://github.com/grigah-coder",
  instagram: "https://www.instagram.com/hamza__grigah/",
  x: "https://x.com/hamzagrigah07",
  cv: "/CV.pdf",
} as const;

export const navItems = [
  { index: "01", label: "Work", href: "#work" },
  { index: "02", label: "About", href: "#about" },
  { index: "03", label: "Contact", href: "#contact" },
] as const;

export const channels = [
  { label: "WhatsApp", detail: site.phone, href: site.whatsapp },
  { label: "GitHub", detail: "grigah-coder", href: site.github },
  { label: "Instagram", detail: "@hamza__grigah", href: site.instagram },
  { label: "X", detail: "@hamzagrigah07", href: site.x },
] as const;
