import {
  FacebookIcon,
  GithubIcon,
  Grid2X2Plus,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const company = [
    { title: "Studio", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Process", href: "#process" },
    { title: "Contact", href: "#contact" },
  ];

  const resources = [
    { title: "Portfolio", href: "#work" },
    { title: "FAQ", href: "#" },
    { title: "Status", href: "#" },
    { title: "Legal", href: "#" },
  ];

  const socialLinks = [
    { icon: <TwitterIcon className="size-4" />, link: "#" },
    { icon: <InstagramIcon className="size-4" />, link: "#" },
    { icon: <LinkedinIcon className="size-4" />, link: "#" },
    { icon: <GithubIcon className="size-4" />, link: "#" },
    { icon: <YoutubeIcon className="size-4" />, link: "#" },
  ];

  return (
    <footer className="relative mt-20">
      <div className="mx-auto max-w-6xl border-t border-border/60">
        <div className="grid grid-cols-6 gap-6 px-4 py-10 md:px-0 md:py-12">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <a href="#" className="w-max opacity-70">
              <Grid2X2Plus className="size-7" />
            </a>
            <p className="text-muted-foreground max-w-sm text-xs md:text-sm">
              Factorilab is a lean studio building conversion-focused websites,
              robust web apps, and production-ready AI systems for teams that
              care about speed and reliability.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-accent rounded-md border border-border/60 p-1.5"
                  target="_blank"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-xs md:text-sm duration-150 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-1 text-xs">
              Company
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-1 text-xs md:text-sm duration-150 hover:underline"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border/60 px-4 py-4 text-center md:flex-row md:px-0">
          <p className="text-muted-foreground text-[11px] md:text-xs">
            © {year} Factorilab Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-[11px] md:text-xs">
            Built on Next.js, Vercel, and production AI tooling.
          </p>
        </div>
      </div>
    </footer>
  );
}

