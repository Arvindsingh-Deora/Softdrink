import { Github, Linkedin, Instagram, Link as LinkIcon } from 'lucide-react';

const socialLinks = [
  { url: "https://github.com/Arvindsingh-Deora", icon: <Github className="h-5 w-5" /> },
  { url: "https://www.linkedin.com/in/arvindsingh-deora-043707223/", icon: <Linkedin className="h-5 w-5" /> },
  { url: "https://instagram.com/arvindsingh.deora", icon: <Instagram className="h-5 w-5" /> },
  { url: "https://linktr.ee/arvind_deora_12", icon: <LinkIcon className="h-5 w-5" /> },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by Arvind
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.icon}
              <span className="sr-only">{link.url}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
