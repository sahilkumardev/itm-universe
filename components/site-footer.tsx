import { siteConfig } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="text-sm text-center mb-8">
      © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
    </footer>
  );
}
