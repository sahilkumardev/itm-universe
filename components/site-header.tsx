"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { BsDiscord } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import React, { ComponentProps } from "react";
import ModeToggler from "@/components/mode-toggler";

export default function SiteHeader() {
  return (
    <header className="sticky w-full right-0 z-50 transition-all duration-100 ease-in flex items-center shadow backdrop-blur-md top-0 border-b h-14 bg-surface/70 border-border/70">
      <div className="flex items-center justify-between w-full px-10 md:px-16">
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:cursor-default select-none">
            Logo
          </Link>
          <NavLinks className="hidden md:flex items-center gap-6" />
        </div>

        <div className="flex items-center md:gap-1 h-6">
          <Button
            variant="ghost"
            size="icon"
            className="group/toggle extend-touch-target size-8"
          >
            <BsDiscord />
          </Button>
          <ModeToggler />

          <MobileNav className="md:hidden ml-2" />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ className }: ComponentProps<"div">) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          <MenuIcon />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-full p-0 backdrop-blur-xl">
        <SheetTitle className="pt-4 pl-4">Logo</SheetTitle>

        <NavLinks className="mt-3" />
      </SheetContent>
    </Sheet>
  );
}

const NavLinks = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <nav className={className}>
    {siteConfig.navItems.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        onClick={onClick}
        className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/90 hover:text-app transition-colors md:px-0 md:py-0"
      >
        {label}
      </Link>
    ))}
  </nav>
);
