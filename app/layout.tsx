import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations';

export const metadata: Metadata = {
  title: {
    template: "%s - Loja online Shopcart",
    default: "Loja online Shopcart",
  },
  description: "Shopcart: sua loja online completa para tudo o que você precisa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
