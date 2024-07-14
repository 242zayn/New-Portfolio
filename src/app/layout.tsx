import "./style/globals.css";
import Footer from "./components/footer";
import { poppins } from "./utils/fonts";
import Hero from "./components/hero";
import StarsCanvas from "./components/StarBackground";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#11a5e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1738" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col ${poppins.variable} font-poppins bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Hero />
        <main className="w-full mx-auto flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
