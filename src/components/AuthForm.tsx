"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link"; // Pour la redirection

type Props = {
  type: "login" | "SignUp";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsPending(true);

    console.log("form submitted");

    // Simuler délai
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Form submitted successfully");

    setIsPending(false);
    router.push("/");
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Entrez votre email"
            required
            disabled={isPending}
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            required
            disabled={isPending}
            type="password"
          />
        </div>
      </CardContent>

      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>

        {/* Texte de redirection */}
        <p className="text-sm text-muted-foreground">
          {isLoginForm ? (
            <>
              Don’t have an account?{" "}
              <Link href="/sign-up" className="underline">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </>
          )}
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
