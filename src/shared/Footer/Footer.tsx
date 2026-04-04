import Section from "../Section/Sectiont";
import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";
import FooterLinkColumn, { type FooterLink } from "./FooterLinkColumn";

const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Browse Cars", href: "/cars" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book Now", href: "/book" },
];

const companyLinks: FooterLink[] = [
  { label: "Power-Ups", href: "/power-ups", badge: "New" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background">
      <Section className="px-4 sm:px-6 pt-12 pb-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_auto_auto]">
          <FooterBrand />
          <FooterLinkColumn title="Quick Links" links={quickLinks} />
          <FooterLinkColumn title="All Pages" links={companyLinks} />
        </div>
        <FooterBottom />
      </Section>
    </footer>
  );
};

export default Footer;
