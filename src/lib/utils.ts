import { clsx, type ClassValue } from "clsx"
import { error } from "console"
import { twMerge } from "tailwind-merge"

// Utility function to combine class names using clsx and twMerge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Error handler function with correct syntax and consistent error key
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return { errorMessage: error.message };
  } else {
    return { errorMessage: "An error occurred" };
  }
};
