import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/caveat";
import "@fontsource-variable/fira-code";
import "./globals.css";

const title = "Phebian Nwokeji | Agentic Software Developer and AI Product Engineer";
const description =
  "Phebian Nwokeji builds full-stack products with AI agents and checks their work. Agentic software developer and AI product engineer in Lagos, Nigeria.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Phebian Nwokeji" }],
  openGraph: { title, description, type: "website", locale: "en_NG" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#e8e5de",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* If scripts are disabled, never leave reveal-animated content invisible. */}
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
