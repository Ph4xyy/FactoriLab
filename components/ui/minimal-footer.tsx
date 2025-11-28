"use client"

import {
  FacebookIcon,
  GithubIcon,
  Grid2X2Plus,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react"

export function MinimalFooter() {
  const year = new Date().getFullYear()

  const company = [
    { title: "About Factorilab", href: "#about" },
    { title: "Careers (closed beta)", href: "#" },
    { title: "Brand assets", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
  ]

  const resources = [
    { title: "Insights", href: "#" },
    { title: "AI playbooks", href: "#" },
    { title: "Implementation guide", href: "#" },
    { title: "Support", href: "#" },
    { title: "Security", href: "#" },
  ]

  const socialLinks = [
    { icon: <TwitterIcon className="size-4" />, link: "#" },
    { icon: <InstagramIcon className="size-4" />, link: "#" },
    { icon: <LinkedinIcon className="size-4" />, link: "#" },
    { icon: <GithubIcon className="size-4" />, link: "#" },
    { icon: <FacebookIcon className="size-4" />, link: "#" },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-black/90">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-0 md:py-14">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="#" className="w-max opacity-60">
              <Grid2X2Plus className="size-7" />
            </a>
            <p className="max-w-sm text-sm text-muted-foreground">
              Factorilab is a web & AI studio building made-to-measure digital
              experiences, automations, and infrastructure for teams that
              outgrow generic tools.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="rounded-md border border-white/10 p-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                  target="_blank"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-muted-foreground">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm text-muted-foreground transition hover:text-foreground hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-muted-foreground">
              Company
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-sm text-muted-foreground transition hover:text-foreground hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-4 text-xs text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">
            © {year} Factorilab. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Built to orchestrate web, AI automation, and infrastructure — end to
            end.
          </p>
        </div>
      </div>
    </footer>
  )
}
