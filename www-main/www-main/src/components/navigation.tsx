"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { ny } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "./logo"
import { ModeToggle } from "./mode-toggle"
import { MobileNav } from "./mobile-nav"
import { HeartIcon } from "lucide-react"
import { HeartFilledIcon } from "@radix-ui/react-icons"
 
export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description: "Learn how we handle your data. Don't worry, we don't collect anything!",
  },
  {
    title: "Discord",
    href: "https://discord.gg/nnShMQzR4b",
    description: "Join our Discord server to chat with the community."
  },
  {
    title: "Source Code",
    href: "https://github.com/zen-browser",
    description: "Check out our source code on GitHub and leave a star!"
  },
  {
    title: "Branding Assets",
    href: "/branding-assets",
    description: "Download Zen Browser branding assets for your website or project."
  },
  {
    title: "Documentation",
    href: "https://docs.zen-browser.app/",
    description: "Learn how to use Zen Browser and build your own themes."
  }
]
 
export function Navigation() {
  return (
    <div className="bg-background z-40 top-0 left-0 w-full flex fixed border-b border-grey p-2 items-center justify-center">
      <MobileNav />
      <NavigationMenu>
        <NavigationMenuList className="w-full hidden py-3 sm:flex">
          <NavigationMenuItem className="cursor-pointer mr-20">
            <NavigationMenuLink href="/">
              <Logo withText />
            </NavigationMenuLink>
          </NavigationMenuItem>
        <NavigationMenuLink href = "/release-notes">
          <NavigationMenuItem>
            Certifications
          </NavigationMenuItem>
          </NavigationMenuLink>
          <NavigationMenuLink href = "/release-notes">
          <NavigationMenuItem>
              <span className="ml-2">Projects</span>
          </NavigationMenuItem>
          </NavigationMenuLink>
          <NavigationMenuItem>
            Contact Me
          </NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={ny(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"