import type { Metadata } from "next";
export const dynamic = 'force-dynamic';
import { Providers } from "@/components/Providers";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import ClickSpark from "@/components/ui/ClickSpark";
import "@/index.css";
import { getSettings } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings("site");
  const siteTitle = settings?.name || "Adam Cohen Today";
  const siteDesc = settings?.description || "Expert insights in Real Estate, Business Concierge, and Private Equity.";
  const iconUrl = "https://adam-cohen.vercel.app/assets/1-BwDLCnC3.png";

  return {
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    description: siteDesc,
    icons: {
      icon: iconUrl,
      shortcut: iconUrl,
      apple: iconUrl,
    },
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      images: [iconUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDesc,
      images: [iconUrl],
    },
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
              <ClickSpark sparkColor='#D4AF37' sparkSize={12} sparkRadius={22} sparkCount={10} duration={500}>
                <Navbar settings={settings} />
                <main>{children}</main>
                <Footer settings={settings} />
              </ClickSpark>
            </LenisProvider>
          </PreloaderWrapper>
        </Providers>
      </body>
    </html>
  );
}
