import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";
import { Navigation } from "@/components/Navigation/Navigation";
import { Grain } from "@/components/Grain/Grain";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roslindale = localFont({
  variable: "--font-roslindale",
  src: [
    {
      path: "../../public/fonts/Roslindale-TextRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roslindale-TextMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roslindale-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roslindale-TextBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roslindale-DisplayCondensedLight.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`relative ${roslindale.variable} ${poppins.variable} font-sans`}
    >
      <Grain />
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}
