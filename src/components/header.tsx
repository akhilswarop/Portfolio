"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { BorderBeam } from "./ui/border-beam";
import Particles from "./ui/particles";
import Image from "next/image";
export default function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto mt-40 max-w-7xl px-6 text-center md:px-8"
      >
        <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
          Hey!
          <br className="hidden md:block" /> I am Akhil.
        </h1>
        <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
A passionate software developer,          <br className="hidden md:block" /> looking for work!
        </p>
        <a href="/resume/Akhil_Swarop_SDE.pdf" download>
  <Button
    className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
  >
    <span>Download CV</span>
    <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
  </Button>
</a>
        <div
          ref={ref}
          className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
        >
          <div
            className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
              inView ? "before:animate-image-glow" : ""
            }`}
          >
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <Image
              width={1500}
              height={700}
              src="/browser-dark.png"
              alt="code Image"
              className="relative hidden rounded-[inherit] border object-contain dark:block"
            />
            <Image
              width={1500}
              height={700}
              src="/browser-light.png"
              alt="code Image"
              className="relative block rounded-[inherit]  border object-contain dark:hidden"
            />
          </div>
        </div>
      </section>
      <Particles
        className="absolute inset-0 -z-10 hidden dark:block"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#ffffff"
      />
      <Particles
        className="absolute inset-0 -z-10 block dark:hidden"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#000000"
      />
    </>
  );
}
