"use client";

import AuthForm, { FormFieldProps } from "@/components/auth/AuthForm";
import { supabase } from "@/config/supabaseClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const formfields: FormFieldProps[] = [
  {
    name: "username",
    label: "Username",
    placeholder: "Enter your username here. Ex. John Doe",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email here. Ex. john@doe.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password here.",
    type: "password",
  },
];

function Signup() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function handleSignup(values: z.infer<typeof signUpSchema>) {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          username: values.username,
        },
      },
    });

    if (error) {
      console.error("Signup error:", error.message);
    } else {
      console.log("Signup success:", data);
      router.push("/login");
    }
  }

  return (
    <div>
      <AuthForm
        // @ts-expect-error - Form types mismatch between react-hook-form and component props
        form={form}
        formfields={formfields}
        // @ts-expect-error - Callback function type mismatch with component props
        onSubmit={handleSignup}
        buttonText="Sign Up"
      />
    </div>
  );
}

export default Signup;
