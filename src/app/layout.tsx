import type { Metadata } from "next";
export const dynamic = 'force-dynamic';
import { Providers } from "@/components/Providers";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import "@/index.css";
import { getSettings } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings("site");
  return {
    title: settings?.title || "Adam Cohen Today | Real Estate, Business & More",
    description: settings?.description || "Adam Cohen Today - Expert insights in Real Estate, Business Concierge, and Private Equity.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings("site");

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <PreloaderWrapper>
            <LenisProvider>
              <Navbar settings={settings} />
              <main>{children}</main>
              <Footer settings={settings} />
            </LenisProvider>
          </PreloaderWrapper>
        </Providers>
      </body>
    </html>
  );
}
