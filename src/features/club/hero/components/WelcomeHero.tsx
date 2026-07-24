import { Container } from "@/shared/components/ui/container";
import Image from "next/image";

function WelcomeHero() {
  return (
    <Container>
      <div className="flex my-24 justify-center items-center relative w-max mx-auto">
        <div className="bg-background flex relative flex-col gap-2 px-16 pt-10 pb-10 xl:pb-16 pl-20 xl:pl-40 rounded-full z-10">
          <div className="flex flex-col gap-2">
            <span>محمد عزیز</span>
            <p className="text-informal font-bold xl:text-3xl">
              به{" "}
              <span className="inline-block animate-scale-up-down">
                پاراف کلاب{" "}
                <span className="font-light">(باشگاه مشتریان پاراف)</span>
              </span>{" "}
              خوش اومدی!
            </p>
          </div>

          <div>
            <Image
              src="/cups/gold-cup.png"
              alt=""
              width={500}
              height={500}
              className="absolute -left-34 -bottom-14 -scale-x-100 size-72 animate-jiggle"
            />
            <Image
              src="/coins.png"
              alt=""
              width={250}
              height={250}
              className="absolute left-4 -bottom-18 size-40 animate-jiggle"
            />
          </div>
        </div>

        <>
          <Image
            src="/fireworks.png"
            alt=""
            width={350}
            height={350}
            className="absolute -left-40 delay-500 animate-scale-up-down scale-70 hidden xl:block"
          />
          <Image
            src="/fireworks.png"
            alt=""
            width={350}
            height={350}
            className="absolute animate-scale-up-down -scale-x-100"
          />
          <Image
            src="/fireworks.png"
            alt=""
            width={350}
            height={350}
            className="absolute -right-30 delay-500 animate-scale-up-down scale-70 hidden xl:block"
          />
        </>
      </div>
    </Container>
  );
}

export { WelcomeHero };
