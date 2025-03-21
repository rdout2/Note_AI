import { shadow } from "@/styles/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Import du bouton Shadcn
import DarkModeToggle from "./ui/DarkModeToggle"

function Header() {
    const user = 1

    return (
        <header
            className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
            style={{ boxShadow: shadow }}
        >
            <Link className="flex items-end gap-2" href="/">
                <Image
                    src="/goatius.png"
                    height={60}
                    width={60}
                    alt="logo"
                    className="rounded-full"
                />
                <h1 className="flex flex-col p-1 text-2xl font-semibold leading-6">
                    GOAT <span>Notes</span>
                </h1>
            </Link>

            <div className="flex gap-4">
                {user ? (
                    <Button variant="outline">Logout</Button>
                ) : (
                    <> <Button asChild variant="outline">
                        <Link href="/signup" className="hiden sm:block ">Sign Up</Link>
                    </Button>
                        <Button asChild variant="default">
                            <Link href="/login">Login</Link>
                        </Button>

                    </>
                )}
                <DarkModeToggle/>
            </div>
        </header>
    )
}

export default Header
