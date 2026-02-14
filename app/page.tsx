import dynamic from "next/dynamic";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

// Dynamically import CircuitScene with no SSR to avoid Canvas issues during build/SSR
const CircuitScene = dynamic(() => import("@/components/3d/CircuitScene"), {
  // ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/90" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-brand-yellow selection:text-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <CircuitScene />
      </div>

      {/* Foreground Content */}
      <Hero />

      {/* Footer */}
      <Footer />
    </main>
  );
}
