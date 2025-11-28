"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-xl md:border md:transition-all md:ease-out",
        {
          "bg-background/90 supports-[backdrop-filter]:bg-background/70 border-border backdrop-blur-xl md:top-4 md:max-w-5xl md:shadow-lg":
            scrolled && !open,
          "bg-background/90": open,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out",
          {
            "md:px-3": scrolled,
          },
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <WordmarkIcon className="h-5" />
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Factorilab
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: "ghost", className: "text-xs" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" className="text-xs">
            Client Portal
          </Button>
          <Button className="text-xs rounded-full bg-[#f4d68b] text-black hover:bg-[#eac66c] transition-colors">
            Book a call
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          "bg-background/90 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-4 p-4",
          )}
        >
          <div className="grid gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({
                  variant: "ghost",
                  className: "justify-start text-base",
                })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              Client Portal
            </Button>
            <Button className="w-full rounded-full bg-[#f4d68b] text-black hover:bg-[#eac66c] transition-colors">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 84 24" fill="currentColor" {...props}>
    <text
      x="0"
      y="18"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
      fontSize="16"
      letterSpacing="4"
    >
      FL
    </text>
  </svg>
);

