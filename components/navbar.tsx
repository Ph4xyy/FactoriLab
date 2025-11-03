"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vaultic AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.main.map((item) => {
                if (item.submenu) {
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subitem.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    pathname === subitem.href &&
                                      "bg-accent text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subitem.name}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subitem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === item.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.main.map((item) => {
                  if (item.submenu) {
                    return (
                      <Accordion key={item.name} type="single" collapsible>
                        <AccordionItem value={item.name}>
                          <AccordionTrigger>{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2 pl-4">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.href}
                                  href={subitem.href}
                                  className={cn(
                                    "text-sm transition-colors hover:text-primary",
                                    pathname === subitem.href && "text-primary"
                                  )}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href && "text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-4 space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

