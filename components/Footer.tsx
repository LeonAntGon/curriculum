export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container text-center mx-auto">
        <p className="text-sm text-muted-foreground">
          © {currentYear} | Business Analyst Intern Portfolio
        </p>
      </div>
    </footer>
  );
}