import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Single animated background covering entire site */}
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
