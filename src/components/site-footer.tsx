export default function SiteFooter() {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="container py-8 flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cube Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
