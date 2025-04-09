"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <section className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to My IT 431 App
        </h1>
        <p className="text-lg text-gray-600">
          Build and manage your projects with ease. Get started in seconds.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="px-8 py-6 text-lg">
            Get Started
          </Button>
        </Link>
      </section>
    </main>
  );
}
