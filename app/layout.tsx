import "@/styles/globals.css";

import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { META_THEME_COLORS } from "@/hooks/meta-colors";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Hanken_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "itm universe",
  description:
    "A universe of interesting things related to IT, programming, technology, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />

        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground overscroll-none antialiased",
          "font-inter tracking-wide font-normal",
          mono.variable,
          inter.variable
        )}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <SiteHeader />
              {children}
            <SiteFooter />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
