import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl">Welcome to Staff</h1>
      <p className="mb-6 text-lg">
        These all are buttons to navigate to their respective pages
      </p>
      <Button variant={"outline"}>
        <Link href={"/"}>Home</Link>
      </Button>
    </div>
  );
}
