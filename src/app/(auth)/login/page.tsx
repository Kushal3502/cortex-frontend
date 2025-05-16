"use client";

import AuthForm, { FormFieldProps } from "@/components/auth/AuthForm";
import { Button } from "@/components/ui/button";
import { supabase } from "@/config/supabaseClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const formfields: FormFieldProps[] = [
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

function Login() {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleEmailLogin(values: z.infer<typeof signInSchema>) {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Welcome back");
      router.push("/dashboard");
    }
  }

  const googleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Welcome back");
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <AuthForm
        // @ts-expect-error - Form types mismatch between react-hook-form and component props
        form={form}
        formfields={formfields}
        // @ts-expect-error - Callback function type mismatch with component props
        onSubmit={handleEmailLogin}
        buttonText="Sign Up"
      />
      <Button onClick={googleLogin}>Google</Button>
    </div>
  );
}

export default Login;
