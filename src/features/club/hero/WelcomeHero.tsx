import { Container } from "@/shared/components/ui/container";
import Image from "next/image";

function WelcomeHero() {
  return (
    <Container>
      <div className="flex my-24 justify-center items-center relative">
        <div className="bg-background flex relative flex-col gap-2 px-16 pt-10 pb-16 pl-40 rounded-full z-10">
          <div className="flex flex-col gap-2">
            <span>آرین عزیز</span>
            <p className="text-informal font-bold text-3xl">
              به پاراف کلاب{" "}
              <span className="font-light">(باشگاه مشتریان پاراف)</span> خوش
              اومدی!
            </p>
          </div>

          <div className="flex">
            <Image
              src="/cups/gold-cup.png"
              alt=""
              width={500}
              height={500}
              className="absolute -left-34 -bottom-14 -scale-x-100 size-72"
            />
            <Image
              src="/coins.png"
              alt=""
              width={250}
              height={250}
              className="absolute left-4 -bottom-18 size-40"
            />
          </div>
        </div>

        <Image
          src="/fireworks.png"
          alt=""
          width={300}
          height={300}
          className="absolute -scale-x-100"
        />
      </div>
    </Container>
  );
}

export { WelcomeHero };
