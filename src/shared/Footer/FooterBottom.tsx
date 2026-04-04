import { ThemeToggle } from "@/components/theme-toggle";

const FooterBottom = () => {
  return (
    <div className="mt-12 flex items-center justify-between border-t border-border pt-6 pb-2">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} EliteDrive. All rights reserved.
      </p>
      <ThemeToggle />
    </div>
  );
};

export default FooterBottom;
