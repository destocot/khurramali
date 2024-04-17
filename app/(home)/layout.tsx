import Navbar from "./_components/Navbar";
import { SecondaryNavbar } from "./_components/SecondaryNavbar";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
  );
}
