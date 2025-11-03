"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: siteConfig.links.twitter },
    { name: "LinkedIn", icon: Linkedin, href: siteConfig.links.linkedin },
    { name: "GitHub", icon: Github, href: siteConfig.links.github },
  ];

  return (
    <footer className="relative border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                Vaultic AI
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Building lightning-fast AI experiences & elite web apps for forward-thinking brands.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 transition-all"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/website" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  Website
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/web-app" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  Web App
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/ai/automation" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  AI Automation
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/ai/agent" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  AI Agent
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/ai/infrastructure" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  AI Infrastructure
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  Portfolio
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  Contact
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors group inline-flex items-center">
                  About
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-sm text-white/60 mb-4">
              Get the latest insights on AI & web development.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors bg-black/20"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:from-primary/80 hover:to-accent/80 transition-all glow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-white/60">
          <p>© {year} Vaultic AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
