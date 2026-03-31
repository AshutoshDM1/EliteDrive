import Section from "../Section/Sectiont";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  return (
    <Section className="py-4">
      <footer>
        <p className="text-center text-sm text-muted-foreground">
          copyright &copy; {new Date().getFullYear()} EliteDrive. All rights
          reserved.
        </p>
        <div className="fixed bottom-2 right-4">
          <ThemeToggle />
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
