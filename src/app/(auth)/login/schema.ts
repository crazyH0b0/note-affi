import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: "邮箱或密码错误" }),
  password: z.string().describe("Password").min(6, "邮箱或密码错误"),
});
