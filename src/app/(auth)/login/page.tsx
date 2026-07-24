import { LoginForm } from "@/features/auth/components/LoginForm";
import { Container } from "@/shared/components/ui/container";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Container>
      <div className="flex justify-center items-center relative w-full max-w-lg mx-auto ">
        <div className="bg-background relative flex flex-col gap-8 p-10 pb-12 rounded-3xl z-10 w-full shadow-sm">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-informal font-bold text-3xl">
              ورود به <span className="font-light">پاراف کلاب</span>
            </h1>
            <p className="text-content-secondary text-sm">
              برای ورود به باشگاه مشتریان پاراف وارد حساب کاربری خود شوید.
            </p>
          </div>

          <LoginForm />

          <Image
            src="/coins.png"
            alt=""
            width={150}
            height={150}
            className="absolute -left-8 -bottom-8 size-24 opacity-90"
          />
        </div>

        <Image
          src="/cups/gold-cup.png"
          alt=""
          width={200}
          height={200}
          className="absolute -right-16 -top-10 size-36 opacity-90"
        />
      </div>
    </Container>
  );
}
