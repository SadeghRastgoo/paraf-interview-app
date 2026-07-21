"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createZodResolver } from "@/lib/form/create-zod-resolver";
import { Loader2Icon, LogInIcon } from "lucide-react";
import { Button } from "@/shared/components/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/field";
import { Input } from "@/shared/components/input";
import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login.schema";
import { useAuthStore } from "@/features/auth/stores/auth.store";

function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: createZodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    clearError();

    try {
      await login(values);
      router.push("/");
    } catch {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="phone">شماره موبایل</FieldLabel>
          <FieldContent>
            <Input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="989027927890"
              disabled={isLoading}
              dir="ltr"
              className="text-left placeholder:text-right"
              {...register("phone")}
            />
            <FieldError errors={[errors.phone]} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
          <FieldContent>
            <Input
              id="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              disabled={isLoading}
              dir="ltr"
              className="text-left placeholder:text-right"
              {...register("password")}
            />
            <FieldError errors={[errors.password]} />
          </FieldContent>
        </Field>

        {error && (
          <div role="alert" className="text-sm text-destructive text-center">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 bg-brand hover:bg-brand/90 text-background rounded-full text-base"
        >
          {isLoading ? <Loader2Icon className="animate-spin" /> : <LogInIcon />}
          ورود به پاراف کلاب
        </Button>
      </FieldGroup>
    </form>
  );
}

export { LoginForm };
