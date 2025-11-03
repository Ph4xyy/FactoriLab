import Link from "next/link";
import { siteConfig, navigation } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vaultic AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building lightning-fast AI experiences & elite web apps for forward-thinking brands.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/website" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website
                </Link>
              </li>
              <li>
                <Link href="/web-app" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web App
                </Link>
              </li>
              <li>
                <Link href="/ai/automation" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/ai/agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Agent
                </Link>
              </li>
              <li>
                <Link href="/ai/infrastructure" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-muted-foreground">
          <p>© {year} Vaultic AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

