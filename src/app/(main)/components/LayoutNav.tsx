"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shared/components/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "کالا های دسته بندی ۱",
    href: "/products/products-1",
    description:
      "تولید کننده متن ساختگی لورم ایپسوم فارسی، انگلیسی و امکان ترکیب آن با کدهای HTML و CSS، ایجاد و ویرایش متن سفارشی، تولید رنگ گرادینت، ابزار انتخاب رنگ‌بندی, ...",
  },
  {
    title: "کالا های دسته بندی ۲",
    href: "/products/products-2",
    description:
      "تولید کننده متن ساختگی لورم ایپسوم فارسی، انگلیسی و امکان ترکیب آن با کدهای HTML و CSS، ایجاد و ویرایش متن سفارشی، تولید رنگ گرادینت، ابزار انتخاب رنگ‌بندی, ...",
  },
];

function LayoutNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">نمایندگی‌ها</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">فروشندگان</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>خدمات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/services/s1" title="خدمت اول">
                تولید کننده متن ساختگی لورم ایپسوم فارسی
              </ListItem>
              <ListItem href="/services/s2" title="خدمت دوم">
                تولید کننده متن ساختگی لورم ایپسوم فارسی
              </ListItem>
              <ListItem href="/services/s3" title="خدمت سوم">
                تولید کننده متن ساختگی لورم ایپسوم فارسی
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>کالا</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export { LayoutNavigationMenu };
