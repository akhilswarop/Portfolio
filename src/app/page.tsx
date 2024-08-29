"use client";

import Header from "@/components/header";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-start">
      <Header />
      <Navigation /> {/* At the bottom of the page */}
    </main>   
  );
}
      