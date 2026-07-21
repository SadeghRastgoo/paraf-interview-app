import { z } from "zod/v4";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^\d+$/, "شماره موبایل باید فقط شامل اعداد باشد"),
  password: z.string().min(1, "رمز عبور الزامی است"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
