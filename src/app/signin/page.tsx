"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef, useState } from "react";
import { Button, LinkButton } from "@/components/ui/button";
import { Input, InputWrapper } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Logo from "@/components/Logo";

const FormSchema = z
  .object({
    email: z.string(),
    password: z.string(),
  })
  .superRefine((data, ctx) => {
    // Validate email first
    if (!data.email || data.email.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Email is required",
        path: ["email"],
      });
      return; // Stop here
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a valid email address",
        path: ["email"],
      });
      return; // Stop here - don't validate password
    }

    // Only validate password if email is valid
    if (!data.password || data.password.trim().length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "Password is required",
        path: ["password"],
      });
    }
  });

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function togglePasswordVisibility(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  }

  const IconComponent = showPassword ? EyeOffIcon : EyeIcon;

const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
  mode: "onChange",
  reValidateMode: "onChange",
  defaultValues: {
    email: "",
    password: "",
  },
});



  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      form.reset();
    }, 2000);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-elevation-negative px-5">
      <div className="w-100 lg:w-200 flex rounded-2xl border border-border bg-bg">
        <div className="flex-1 py-8 px-6 lg:px-7 flex justify-center flex-col gap-8">
          <div>
            <Logo />
          </div>
          <div className="flex gap-2 flex-col">
            <h1 className="heading-5">Sign In</h1>
            <p className=" text-fg-secondary text-sm font-normal">
              Don&apos;t have an account?{" "}
              <LinkButton href="/signup" color="primary">
                Sign Up
              </LinkButton>
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex gap-5 flex-col">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input size="36" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel>Password</FormLabel>
                        <LinkButton href="#" color="primary">
                          Forgot Password?
                        </LinkButton>
                      </div>
                      <FormControl>
                        <InputWrapper>
                          <Input
                            {...field}
                            id="toggle-visible-password"
                            ref={inputRef}
                            className="peer"
                            type={showPassword ? "text" : "password"}
                          />
                          <IconComponent
                            className="hover:text-fg peer-disabled:text-fg-disabled cursor-pointer peer-disabled:pointer-events-none"
                            onMouseDown={togglePasswordVisibility}
                          />
                        </InputWrapper>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner variant="default" /> : "Sign In"}
                </Button>
              </div>
            </form>
          </Form>

        </div>
        <div className="w-100 hidden lg:block">
          <Image
            className="h-full w-full rounded-r-2xl"
            src="/signin-01/bg.png"
            alt="Background Image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
