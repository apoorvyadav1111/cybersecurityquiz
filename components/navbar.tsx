"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router  = useRouter();
    const refresh = () => router.push("/");

    return (
        <div className="min-w-full fixed z-[99999] gap-x-2 p-2 flex right-1 justify-between">
            <Button
                onClick={refresh}
                className="text-3xl hover:bg-transparent"
                variant="ghost"
                size="lg"
            >
                K-12 Cybersecurity Readiness Tool
            </Button>
            <ModeToggle />
        </div>
      );
}
export default Navbar;