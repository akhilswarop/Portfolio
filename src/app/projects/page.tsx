import { Navigation } from "@/components/navigation";
import {projects } from "@/lib/projects";
import Link from "next/link";

export default function ReleaseNotes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="min-h-screen py-42 flex justify-center flex-col">
        <h1 className="text-4xl text-center font-bold mt-24">Projects</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {projects.map((project) => (
            <Link href={project.link} target="_blank" className="bg-background relative max-w-64 overflow-hidden rounded-lg border p-5 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1" key={project.name}>
              <div className="text-md font-medium mb-5">
                {project.name}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {project.description}
              </div>
              {project.completed ? (
  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-medium p-1 rounded-bl-lg">
    Completed
  </div>
) : (
  <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-medium p-1 rounded-bl-lg">
    Ongoing
  </div>
)}

              
            </Link>
          ))}
        </div>
      </div>
      <Navigation /> {/* At the bottom of the page */}
    </main>
  )
}