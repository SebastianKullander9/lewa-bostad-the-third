import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import "./styles/globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lewa Bostad",
    description:
        "Vi bygger arkitektritade radhus och parhus med omsorgsfull design i attraktiva tillväxtområden. Kvalitet, hållbarhet och ett långsiktigt boende.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv" className={`antialiased ${dmSans.variable} ${cormorant.variable}`}>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
