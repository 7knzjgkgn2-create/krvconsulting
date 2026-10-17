import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const serifThai = Noto_Serif_Thai({
  variable: "--font-serif-thai",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const title = "ก้าวแรก เวนเจอร์ส | ที่ปรึกษากลยุทธ์และการเงินสำหรับ SME ไทย";
const description =
  "บริษัท ก้าวแรก เวนเจอร์ส จำกัด ที่ปรึกษาธุรกิจและวิทยากรด้าน Business Strategy & Finance สำหรับ SME ไทย นำทีมโดยคุณเบนซ์ Vorapat — ลงมือทำจริง ไม่ใช่แค่ให้คำแนะนำ";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "ก้าวแรก เวนเจอร์ส",
  openGraph: {
    title,
    description,
    siteName: "ก้าวแรก เวนเจอร์ส (KRV Consulting)",
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
  themeColor: "#2a1748",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexThai.variable} ${serifThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
