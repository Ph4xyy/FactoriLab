"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/lib/portfolio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.tags.some((tag) => tag === selectedCategory)
        );

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our recent work across web development, AI automation, and enterprise solutions
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {portfolioCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card
                className="h-full hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-muted-foreground">
                    {item.title}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Results</span>
                      <span className="font-semibold text-primary">
                        {item.results.conversion}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item.id);
                    }}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedItem !== null}
        onOpenChange={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {(() => {
              const item = portfolioItems.find((i) => i.id === selectedItem);
              if (!item) return null;

              return (
                <>
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                  </DialogHeader>

                  <div className="aspect-video relative overflow-hidden rounded-lg bg-muted mb-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 text-muted-foreground">
                      {item.title}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Results</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {item.results.conversion}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Improvement
                          </div>
                        </div>
                        {item.results.performance && (
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {item.results.performance}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Performance
                            </div>
                          </div>
                        )}
                        {item.results.loadTime && (
                          <div>
                            <div className="text-2xl font-bold text-primary">
                              {item.results.loadTime}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Load Time
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Visit Live Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

export default PortfolioPage;

