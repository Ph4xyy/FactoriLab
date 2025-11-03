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
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass shadow-2xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <div className="absolute inset-0 bg-primary/50 blur-xl group-hover:bg-primary/80 transition-colors" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:via-primary group-hover:to-purple-400 transition-all duration-300">
              Vaultic AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {navigation.main.map((item) => {
                if (item.submenu) {
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="text-white/80 hover:text-white hover:bg-white/5 bg-transparent data-[active]:bg-white/10 border-0">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-gradient-to-br from-gray-900/95 to-purple-900/50 border border-purple-500/20 backdrop-blur-2xl shadow-2xl">
                        <ul className="grid w-[600px] gap-3 p-6">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subitem.href}
                                  className={cn(
                                    "block select-none space-y-2 rounded-2xl p-6 leading-none no-underline outline-none transition-all duration-300",
                                    "group relative overflow-hidden",
                                    "hover:scale-105",
                                    pathname === subitem.href &&
                                      "bg-gradient-to-br from-purple-500/30 to-cyan-500/30 ring-2 ring-purple-400/50"
                                  )}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-cyan-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:via-cyan-600/20 group-hover:to-pink-600/20 transition-all duration-500" />
                                  <div className="relative">
                                    <div className="text-lg font-bold leading-none mb-2">
                                      <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:via-pink-400 transition-all duration-300">
                                        {subitem.name}
                                      </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                                      {subitem.description}
                                    </p>
                                  </div>
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
                          "text-white/80 hover:text-white hover:bg-white/5 bg-transparent border-0",
                          pathname === item.href && "bg-white/10 text-white"
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
            <Button 
              asChild 
              variant="ghost" 
              className="text-cyan-400/80 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/30"
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 glow"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass border-white/10 w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.main.map((item) => {
                  if (item.submenu) {
                    return (
                      <Accordion key={item.name} type="single" collapsible>
                        <AccordionItem value={item.name}>
                          <AccordionTrigger className="text-white">{item.name}</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col space-y-2 pl-4">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.href}
                                  href={subitem.href}
                                  onClick={() => setIsMobileOpen(false)}
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
                      onClick={() => setIsMobileOpen(false)}
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
                  <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
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
