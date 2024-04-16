import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./(home)/_components/Navbar";
import { SecondaryNavbar } from "./(home)/_components/SecondaryNavbar";
import Footer from "./(home)/_components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  // url of the application
  metadataBase: new URL("https://khurramali.site"),

  title: {
    template: "%s | Khurram Ali",
    default: "Khurram Ali",
  },
  authors: {
    name: "khurram",
  },

  description:
    "Based in New York, I'm a Fullstack developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Khurram Ali",
    description:
      "Based in New York, I'm a Fullstack developer passionate about building a modern web application that users love..",
    // url of the application
    url: "https://khurramali.site",
    siteName: "Khurram Ali",
    // screenshot of application
    images: "/portfolio.jpg",
    type: "website",
  },
  keywords: ["giraffe reactor", "khurram ali", "giraffereactor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-black overflow-x-hidden">
            <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
              <div className="max-w-7xl mx-auto p-5">
                <Navbar showResumeLabel />
                <SecondaryNavbar />
              </div>
            </div>
            {children}
            <div className="max-w-7xl mx-auto p-5 mt-20">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
