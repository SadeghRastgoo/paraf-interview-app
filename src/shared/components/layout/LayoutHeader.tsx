import { Container } from "@/shared/components/ui/container";
import { Logo } from "@/shared/components/ui/logo";
import { LayoutNavigationMenu } from "./LayoutNav";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon, CircleQuestionMarkIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import Image from "next/image";
import { LayoutMobileNav } from "./LayoutMobileNav";

function LayoutHeader() {
  return (
    <div>
      <header className="bg-background py-4">
        <Container>
          <div className="flex gap-10 items-center justify-between">
            <Logo />

            {/* Mobile navigation menu */}
            <div className="xl:hidden">
              <LayoutMobileNav />
            </div>

            {/* Desktop navigation menu */}
            <div className="hidden xl:flex gap-10 items-center justify-between w-full">
              <LayoutNavigationMenu />
            </div>
          </div>
        </Container>
      </header>

      <div className="bg-content-body py-2">
        <Container>
          <div className="flex items-center flex-col lg:flex-row justify-between gap-4 lg:gap-10">
            <div className="flex items-center justify-between w-full xl:justify-start gap-3">
              <Button variant={"ghost"}>
                <ArrowRightIcon />
                <span>برگشت</span>
              </Button>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">صفحه اصلی</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="rotate-180" />
                  <BreadcrumbItem className="text-content-tertiary-inverse">
                    <BreadcrumbLink href="/">پاراف کلاب</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="text-xs">
                <span className="text-content-tertiary-inverse">کیف پول:</span>

                <strong> 173٬579٬050 تومان</strong>
              </Button>

              <Button
                variant={"ghost"}
                className="flex justify-center items-center"
              >
                <CircleQuestionMarkIcon className="stroke-content-tertiary-inverse size-5" />
              </Button>

              <div className="bg-background flex items-center h-8 relative rounded-full w-52 shadow">
                <div className="rounded-full size-9 absolute right-0 bg-background top-1/2 -translate-y-1/2 shadow flex justify-center items-center">
                  <Image
                    src="/cups/bronze-cup.png"
                    width={50}
                    height={50}
                    alt=""
                    className="size-7"
                  />
                </div>

                <div className="bg-informal text-background w-1/2 rounded-full">
                  124
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export { LayoutHeader };
