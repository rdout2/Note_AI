"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { startTransition, useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link"; // Pour la redirection
import { title } from "process";

type Props = {
  type: "login" | "SignUp";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
  //   setIsPending(true);

  //   console.log("form submitted");

  //   // Simuler délai
  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  //   toast.success("Form submitted successfully");

  //   setIsPending(false);
  //   router.push("/");

   startTransition( async ( )=>{
     const email = formData.get("email") as string ;
     const password = formData.get("password ") as string ;
     let errorMessage ;
     let title ;
     let description ;
     if (isLoginForm){
      errorMessage = ( await loginAction(email,password)).errorMessage;
      title = "logged in";
      description = " You have been successfully logged in";
    
     } else{
      errorMessage =( await signUpAction(email,password)).errorMessage;
      title = "signed Up";
      description = "check your email for a confiormation link";

     }
     if (!errorMessage){
      toast({
        title,
        description ,
        variant : "succes",
      });
      router.replace ("/");

     }else {
      toast({
        title : "error",
        descrition : errorMessage,
        variant : "description",
      }); 
     }

   })
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
function signUpAction(email: string, password: string) {
  throw new Error("Function not implemented.");
}

function loginAction(email: string, password: string) {
  throw new Error("Function not implemented.");
}

