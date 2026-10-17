import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Prompt } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const title = "ก้าวแรก เวนเจอร์ส (Kaoraek Ventures) | ที่ปรึกษา Strategy, Financial & Growth สำหรับ SME ไทย";
const description =
  "Kaoraek Ventures (KRV) ที่ปรึกษาและผู้สร้างองค์ความรู้ด้าน Strategy, Financial & Growth ช่วยธุรกิจไทยเดิน “ก้าวแรก” สู่การเติบโตอย่างมีระบบ นำทีมโดยคุณเบนซ์ วรภัทร";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "ก้าวแรก เวนเจอร์ส",
  openGraph: {
    title,
    description,
    siteName: "ก้าวแรก เวนเจอร์ส (Kaoraek Ventures)",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexThai.variable} ${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
