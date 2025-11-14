import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl">Welcome to homepage </h1>
      <p className="mb-6 text-lg">
        These all are buttons to navigate to their respective pages
      </p>
      <ButtonGroup>
        {siteConfig.navItems.map((item) => (
          <Button variant={"outline"} key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
