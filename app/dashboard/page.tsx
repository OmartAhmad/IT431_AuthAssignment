// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  const [clicks, setClicks] = useState(0);

  return (
    <main className="min-h-screen bg-muted/50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Welcome Back 👋</h1>
        <p className="text-muted-foreground text-lg mt-2">
          Here's a quick look at activity today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Button Tracker</CardTitle>
            <CardDescription>
              Just for fun — how many times can you click?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{clicks} clicks</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setClicks((prev) => prev + 1)}>
              Click Me
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Daily Overview</CardTitle>
            <CardDescription>
              Some example data you could pull in later
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tasks Completed</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">New Messages</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Upcoming Meetings</span>
              <span className="font-medium">3</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
