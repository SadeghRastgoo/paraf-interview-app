"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Separator } from "@/shared/components/ui/separator";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/shared/components/ui/navigation-menu";
import {
  LanguagesIcon,
  BellRingIcon,
  ShoppingCartIcon,
  LayoutGridIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Button } from "@/shared/components/ui/button";
import {
  NavigationMenuData,
  NavigationMenuProductsData,
  NavigationMenuServicesData,
} from "@/shared/data/NavigationMenuData";
import { LayoutSearch } from "./LayoutSearch";

export function LayoutMobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] px-4 overflow-y-auto"
      >
        <div className="mt-14 flex flex-col gap-4">
          {/* Mobile Navigation Items */}
          <div className="flex flex-col gap-2 w-full">
            <NavigationMenu className="w-full max-w-[unset]">
              <NavigationMenuList className="flex flex-col gap-2 w-full">
                {/* Products Dropdown */}
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-between">
                    کالا
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-full gap-2 p-2">
                      {NavigationMenuProductsData.map((component) => (
                        <li key={component.title}>
                          <NavigationMenuLink asChild className="flex flex-col">
                            <Link
                              href={component.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={closeMenu}
                            >
                              <div className="text-sm font-medium leading-none">
                                {component.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-between">
                    خدمات
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-full p-2">
                      {NavigationMenuServicesData.map((component) => (
                        <li key={component.href}>
                          <NavigationMenuLink asChild className="flex flex-col">
                            <Link
                              href={component.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={closeMenu}
                            >
                              <div className="text-sm font-medium leading-none">
                                {component.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {component.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Direct Links */}
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/docs" className="w-full" onClick={closeMenu}>
                      فروشندگان
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/docs" className="w-full" onClick={closeMenu}>
                      نمایندگی‌ها
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Separator />

          {/* Mobile Searchbox */}
          <LayoutSearch />

          <Separator />

          {/* Mobile Actions */}
          <div className="flex flex-col gap-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LanguagesIcon className="h-4 w-4" />
              فارسی / IRT
            </Button>
            <Button variant="default" className="w-full justify-center">
              ثبت آگهی جدید
            </Button>

            <div className="flex gap-2 justify-around mt-2">
              <Button variant="ghost" size="icon">
                <BellRingIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCartIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LayoutGridIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
