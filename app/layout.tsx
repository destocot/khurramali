import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  // url of the application
  metadataBase: new URL("http://localhost:3000"),

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
    url: "http://localhost:3000",
    siteName: "Khurram Ali",
    // screenshot of application
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-black overflow-x-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
