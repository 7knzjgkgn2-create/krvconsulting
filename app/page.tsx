import type { ReactNode } from "react";
import Image from "next/image";
import logo from "@/public/krv-logo.png";
import leaderPhoto from "@/public/benz-vorapat-cutout.webp";
import teamVorapat from "@/public/team-vorapat.webp";
import teamNuttinee from "@/public/team-nuttinee.webp";
import teamPatara from "@/public/team-patara.webp";
import Waves from "./waves";

/* ข้อมูลติดต่อ — แก้ตรงนี้ที่เดียว (ตอนนี้เป็นข้อมูลตัวอย่าง) */
const CONTACT = {
  lineId: "@krvconsulting",
  email: "contact@krvconsulting.co.th",
  hours: "จันทร์–ศุกร์ 09:00–18:00 น.",
  area: "กรุงเทพมหานคร และให้บริการทั่วประเทศ (ออนไลน์/ออนไซต์)",
};
const LINE_URL = `https://line.me/R/ti/p/${CONTACT.lineId}`;

const STAGES = [
  "Corporate Training",
  "Shark Tank Thailand",
  "House of Wisdom",
  "House of Talents",
];

const LEADER_ROLES = [
  "CEO, Singha Ventures Capital",
  "Managing Director, BMB Capital",
  "CSO & CFO, Boonrawd Trading",
  "Director, House of Talents",
];

const TEAM = [
  {
    name: "คุณเบนซ์ วรภัทร (Vorapat)",
    role: "ผู้นำทีม",
    photo: teamVorapat,
    bio: "CEO, Singha Ventures Capital · MD, BMB Capital · CSO & CFO, Boonrawd Trading · Director, House of Talents",
    focus: ["Strategy", "Investment", "Corporate Finance"],
  },
  {
    name: "Nuttinee Chavananikul",
    role: "ทีมที่ปรึกษา",
    photo: teamNuttinee,
    bio: "ผู้บริหารธุรกิจ อดีต Chief Executive Officer (CEO) ของ 88 (Thailand) Public Company Limited",
    focus: ["Leadership", "Business Management"],
  },
  {
    name: "Patara Kittivanich",
    role: "ทีมที่ปรึกษา",
    photo: teamPatara,
    bio: "Senior Manager, New Business Development, Boonrawd Trading · นักวางกลยุทธ์ธุรกิจประจำกรุงเทพฯ",
    focus: ["Post-Merger Integration", "PMO", "New Business Development"],
  },
];

const PAINS = [
  "ธุรกิจโต แต่ไม่กำไร",
  "อยากขยาย แต่ไม่มั่นใจ",
  "ไม่เข้าใจตัวเลขทางการเงิน",
  "วัดผลจากสิ่งที่ลงทุนไปไม่ได้",
  "ไม่มีเครื่องมือและระบบที่ทำซ้ำได้ผลลัพธ์ชัดเจน",
  "ไม่มีคู่คิด ไม่มีที่ปรึกษาระยะยาว",
];

const STRENGTHS = [
  {
    title: "ผสาน 3 มุมมองระดับโลก",
    tag: "Strategy Consulting · CFO Viewpoint · VC Insight",
    body: "นำทีมโดยคุณเบนซ์ ผู้บริหารที่ไม่ได้เป็นแค่ที่ปรึกษา แต่ลงมือปั้นและลงทุนในธุรกิจจริงทุกขนาด ตั้งแต่ SME บนเวที Shark Tank Thailand จนถึงระดับองค์กรใหญ่",
  },
  {
    title: "ถ่ายทอดจากประสบการณ์จริง",
    tag: "Speaker · Mentor · Director, House of Talents",
    body: "ประสบการณ์บรรยายและอบรมนับไม่ถ้วน และเป็น Director ของ House of Talents โครงการส่งเสริม Young Entrepreneur, CEO รุ่นใหม่ และ Founder",
  },
  {
    title: "ออกแบบเพื่อ SME & Startup ไทย",
    tag: "World-class team · Thai context",
    body: "ทีมงานผ่านประสบการณ์บริษัทระดับโลก แปลงกรอบคิดระดับสากลให้เป็นกลยุทธ์ที่เรียบง่ายและลงมือทำได้จริงในบริบทธุรกิจไทย",
  },
];

const SERVICES: { name: string; th: string; items: string[]; icon: keyof typeof ICONS }[] = [
  {
    name: "SME Growth Diagnostic",
    th: "ตรวจสุขภาพธุรกิจ",
    items: ["ตรวจสุขภาพธุรกิจแบบ Strategy + CFO", "ออกแบบแผนขยายธุรกิจสำหรับ SME"],
    icon: "pulse",
  },
  {
    name: "Founder Confidence Clinic",
    th: "คลินิกเจ้าของธุรกิจ",
    items: ["1:1 Coaching สำหรับเจ้าของธุรกิจ", "ผ่าทางตันโจทย์จริง ได้ทางเลือกที่ทำต่อได้ทันที"],
    icon: "chat",
  },
  {
    name: "VC-Ready Makeover",
    th: "พร้อมระดมทุน",
    items: ["เตรียมบริษัทให้พร้อมระดมทุน & IPO", "ประเมินมูลค่าและวางโครงสร้างดีล"],
    icon: "rocket",
  },
  {
    name: "KRV Networking & Matching",
    th: "เครือข่ายและจับคู่ธุรกิจ",
    items: ["CEO Decision Bootcamp workshop", "Business Matching & Referral"],
    icon: "network",
  },
  {
    name: "Knowledge Sharing Business",
    th: "บรรยายและอบรม",
    items: ["Onsite – On Demand workshop", "Masterclass Series – Online Course", "Corporate partnership"],
    icon: "book",
  },
];

const TOPICS = [
  "Business Turnaround",
  "Investment",
  "Financial",
  "Business Mindset",
  "Founder Clinic",
  "Mentoring",
];

const STEPS = [
  { title: "คุยโจทย์", body: "รับฟังเป้าหมายและปัญหาที่แท้จริงของธุรกิจ" },
  { title: "วินิจฉัย", body: "เจาะข้อมูล ตัวเลข และตลาด หาต้นเหตุที่สำคัญที่สุด" },
  { title: "วางกลยุทธ์", body: "ออกแบบแผนที่ชัด วัดผลได้ และเหมาะกับทรัพยากรที่มี" },
  { title: "ลงมือและติดตาม", body: "ทำไปด้วยกันจนเห็นผล ไม่ใช่ส่งรายงานแล้วจบ" },
];

const FAQS = [
  {
    q: "ธุรกิจเล็ก ๆ หรือเพิ่งเริ่มต้น ใช้บริการได้ไหม?",
    a: "ได้แน่นอน เราออกแบบมาเพื่อ SME และ Startup ไทยโดยเฉพาะ สำหรับผู้ที่เพิ่งเริ่ม แนะนำให้เริ่มจาก Founder Confidence Clinic หรือ SME Growth Diagnostic",
  },
  {
    q: "ค่าบริการคิดอย่างไร?",
    a: "งานที่ปรึกษาประเมินราคาตามขนาดและขอบเขตโครงการ ส่วนงานบรรยาย/อบรมขึ้นอยู่กับหัวข้อ จำนวนผู้เข้าร่วม และรูปแบบ ทักไลน์มาเล่าโจทย์ได้เลย เราจะเสนอแนวทางและราคาที่เหมาะสมให้",
  },
  {
    q: "จัดอบรมแบบ In-house ให้องค์กร หรือออนไลน์ได้ไหม?",
    a: "ได้ทั้ง Onsite workshop ที่องค์กรของคุณ งานสัมมนา และ Masterclass ออนไลน์ โดยปรับเนื้อหาให้ตรงกับอุตสาหกรรมและโจทย์ของทีม",
  },
  {
    q: "ก่อนเริ่มคุย ต้องเตรียมอะไรบ้าง?",
    a: "เพียงเล่าภาพรวมธุรกิจและสิ่งที่อยากแก้หรืออยากไปให้ถึง หากมีตัวเลขยอดขายหรืองบการเงินคร่าว ๆ จะช่วยให้เราประเมินได้เร็วขึ้น ข้อมูลทั้งหมดเก็บเป็นความลับ",
  },
];

/* ---------- ไอคอน ---------- */
function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11c0 4.2 3.7 7.7 8.8 8.4.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6.1 1.5-1.6 2.3-3.3 2.3-5.3 0-4.7-4.7-8.5-10.5-8.5Zm-4.6 11.3H5.3a.6.6 0 0 1-.6-.6V9a.6.6 0 1 1 1.2 0v3.6h1.5a.6.6 0 1 1 0 1.2Zm2.2-.6a.6.6 0 1 1-1.2 0V9a.6.6 0 1 1 1.2 0v4.2Zm5 0a.6.6 0 0 1-1.1.4l-2.1-2.9v2.5a.6.6 0 1 1-1.2 0V9a.6.6 0 0 1 1.1-.4l2.1 2.9V9a.6.6 0 1 1 1.2 0v4.2Zm3.4-2.7a.6.6 0 1 1 0 1.2h-1.5v.9H18a.6.6 0 1 1 0 1.2h-2.1a.6.6 0 0 1-.6-.6V9c0-.3.3-.6.6-.6H18a.6.6 0 1 1 0 1.2h-1.5v.9H18Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = {
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  chat: <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></>,
  rocket: <><path d="M14 4c3 0 6 3 6 6l-7 7-6-6 7-7Z" /><path d="M7 11l-3 1 2 2M13 17l-1 3-2-2" /><circle cx="15" cy="9" r="1.5" /></>,
  network: <><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="18" r="2.2" /><path d="M11 7l-5 9M13 7l5 9M7.2 18h9.6" /></>,
  book: <><path d="M4 5c3-1 6-1 8 1v14c-2-2-5-2-8-1V5Z" /><path d="M20 5c-3-1-6-1-8 1v14c2-2 5-2 8-1V5Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
  alert: <><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5M12 16.5v.01" /></>,
};

function Icon({ name, className = "h-6 w-6" }: { name: keyof typeof ICONS; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* ---------- ชิ้นส่วนที่ใช้ซ้ำ ---------- */
function LineButton({ size = "md", full = false, tone = "brand" }: { size?: "md" | "lg"; full?: boolean; tone?: "brand" | "gold" }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 ${
        tone === "gold"
          ? "bg-gold-500 text-indigo-950 shadow-black/20 hover:bg-gold-400"
          : "bg-brand-gradient text-white shadow-violet-600/25 hover:shadow-violet-600/40"
      } ${size === "lg" ? "px-8 py-4 text-lead" : "px-5 py-2.5 text-body"} ${full ? "w-full sm:w-auto" : ""}`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function GoldDot({ className = "" }: { className?: string }) {
  return <span className={`inline-block rounded-full bg-gold-500 ${className}`} aria-hidden="true" />;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-eyebrow font-semibold uppercase ${light ? "text-violet-100" : "text-violet-600"}`}>
      <GoldDot className="h-2 w-2" />
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, intro, center = false }: { eyebrow: string; title: ReactNode; intro?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-h2 font-semibold text-indigo-800">{title}</h2>
      {intro && <p className="mt-4 text-lead text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ส่วนหัว (เมนู) */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-3">
            <Image src={logo} alt="KRV" className="h-10 w-auto" priority />
            <span className="leading-tight">
              <span className="block font-display text-sm font-semibold text-indigo-800">ก้าวแรก เวนเจอร์ส</span>
              <span className="block text-[0.7rem] tracking-[0.12em] text-muted">KAORAEK VENTURES</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="เมนูหลัก">
            <a href="#why" className="hover:text-violet-600">จุดเด่น</a>
            <a href="#team" className="hover:text-violet-600">ทีมงาน</a>
            <a href="#services" className="hover:text-violet-600">บริการ</a>
            <a href="#faq" className="hover:text-violet-600">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-violet-600">ติดต่อเรา</a>
          </nav>
          <div className="hidden md:block">
            <LineButton />
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Waves id="wave-hero" className="absolute inset-x-0 bottom-0 h-56 w-full opacity-40 sm:h-72" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-0 pt-12 sm:pt-16 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:pt-20">
            <div className="lg:pb-24">
              <Eyebrow>Strategy · Financial · Growth</Eyebrow>
              <h1 className="mt-6 font-display text-h1 font-semibold text-indigo-800">
                <span className="inline-block">ช่วยธุรกิจไทยเดิน</span>{" "}
                <span className="inline-block text-brand-gradient">“ก้าวแรก”</span>{" "}
                <span className="inline-block">สู่การเติบโต</span>{" "}
                <span className="inline-block">อย่างมีระบบ</span>
              </h1>
              <p className="mt-6 max-w-xl text-lead text-muted">
                บริษัท ก้าวแรก เวนเจอร์ส จำกัด (Kaoraek Ventures) ที่ปรึกษาและผู้สร้างองค์ความรู้ด้าน
                Strategy, Financial &amp; Growth สำหรับ SME และ Startup ไทย
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LineButton size="lg" full />
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-800/20 bg-card/70 px-7 py-4 text-body font-medium text-indigo-800 transition hover:border-violet-500 hover:text-violet-600"
                >
                  ดูบริการของเรา <ArrowIcon />
                </a>
              </div>
            </div>

            {/* ผู้นำทีม */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute inset-x-6 bottom-0 top-10 rounded-t-full bg-brand-gradient sm:inset-x-10" aria-hidden="true" />
              <GoldDot className="absolute right-8 top-6 h-10 w-10 sm:right-12" />
              <Image
                src={leaderPhoto}
                alt="คุณเบนซ์ วรภัทร ผู้นำทีม ก้าวแรก เวนเจอร์ส"
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 440px, 384px"
                className="relative mx-auto h-auto w-[82%]"
              />
              <div className="absolute inset-x-0 bottom-4 mx-4 rounded-xl border border-line bg-card/95 p-4 shadow-xl shadow-indigo-900/10 backdrop-blur sm:mx-6">
                <p className="text-eyebrow font-semibold uppercase text-violet-600">นำทีมโดย</p>
                <p className="font-display text-lg font-semibold text-indigo-800">คุณเบนซ์ วรภัทร (Vorapat)</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  CEO, Singha Ventures Capital · MD, BMB Capital · CSO &amp; CFO, Boonrawd Trading
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* เวทีที่ร่วมงาน */}
        <section className="relative border-y border-line bg-card" aria-label="เวทีและโครงการที่เราร่วมงาน">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <p className="text-center text-eyebrow font-semibold uppercase text-muted">เวทีและโครงการที่เราร่วมงาน</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-center sm:grid-cols-4">
              {STAGES.map((s) => (
                <li key={s} className="font-display text-base font-semibold text-indigo-800 sm:text-lg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ปัญหาที่พบ */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            center
            eyebrow="เพราะ “ก้าวแรก” สำคัญที่สุด"
            title={<><span className="inline-block">คุณพบปัญหาเหล่านี้</span> <span className="inline-block">ใช่หรือไม่?</span></>}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAINS.map((p) => (
              <li key={p} className="flex items-start gap-4 rounded-xl border border-line bg-card p-5 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600">
                  <Icon name="alert" className="h-5 w-5" />
                </span>
                <span className="pt-1.5 font-medium text-indigo-900">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-lead text-muted">
            ให้เราช่วยใน <span className="font-semibold text-violet-600">“ก้าวแรก”</span> ของคุณ
          </p>
        </section>

        {/* จุดเด่น */}
        <section id="why" className="relative overflow-hidden bg-indigo-900 py-20 text-white sm:py-24">
          <Waves id="wave-why" tone="light" variant="peak" className="absolute inset-x-0 top-0 h-64 w-full opacity-15" />
          <div className="relative mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <Eyebrow light>What makes KRV unique?</Eyebrow>
              <h2 className="mt-4 font-display text-h2 font-semibold">ที่ปรึกษาที่เคยนั่งเก้าอี้เดียวกับคุณ</h2>
              <p className="mt-4 text-lead text-white/75">
                เราไม่ได้มองธุรกิจจากรายงาน แต่จากประสบการณ์บริหาร ลงทุน และพลิกฟื้นกิจการจริง
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {STRENGTHS.map((s, i) => (
                <article key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <p className="font-display text-4xl font-semibold text-gold-400">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-h3 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-violet-100/80">{s.tag}</p>
                  <p className="mt-4 text-white/75">{s.body}</p>
                </article>
              ))}
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {LEADER_ROLES.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <GoldDot className="h-1.5 w-1.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ทีมงาน */}
        <section id="team" className="mx-auto max-w-6xl px-5 pt-20 sm:pt-24">
          <SectionHead
            eyebrow="ทีมงานของเรา"
            title="ผู้บริหารตัวจริง จากองค์กรชั้นนำ"
            intro="ทีมที่ปรึกษาที่ผ่านการบริหาร ลงทุน และสร้างธุรกิจใหม่มาแล้วจริง พร้อมเป็นคู่คิดระยะยาวให้ธุรกิจของคุณ"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article key={m.name} className="group overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-600/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-violet-50">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-indigo-950/70 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-violet-600">
                    <GoldDot className="h-1.5 w-1.5" />
                    {m.role}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-h3 font-semibold text-indigo-800">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted">{m.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {m.focus.map((f) => (
                      <li key={f} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-indigo-800">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* บริการ */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            eyebrow="บริการของเรา"
            title={<>ให้เราช่วยใน <span className="text-brand-gradient">“ก้าวแรก”</span> ของคุณ</>}
            intro="ตั้งแต่ตรวจสุขภาพธุรกิจ โค้ชเจ้าของกิจการ เตรียมระดมทุน ไปจนถึงอบรมทีมงานของคุณ"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.name} className="group flex flex-col rounded-xl border border-line bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-600/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 font-display text-h3 font-semibold text-indigo-800">{s.name}</h3>
                <p className="text-sm font-medium text-violet-600">{s.th}</p>
                <ul className="mt-4 space-y-2 text-muted">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {/* ราคา */}
            <article className="flex flex-col justify-between rounded-xl bg-brand-gradient p-7 text-white shadow-lg shadow-violet-600/20">
              <div>
                <p className="text-eyebrow font-semibold uppercase text-gold-400">ค่าบริการ</p>
                <p className="mt-3 font-display text-h3 font-semibold">ออกแบบตามโจทย์ของคุณ</p>
                <p className="mt-3 text-white/80">
                  ที่ปรึกษา: ตามขนาดและขอบเขตโครงการ
                  <br />
                  บรรยาย/อบรม: ตามหัวข้อและรูปแบบ
                </p>
              </div>
              <div className="mt-6">
                <LineButton tone="gold" full />
              </div>
            </article>
          </div>

          <div className="mt-14 rounded-xl border border-line bg-violet-50 p-6 sm:p-8">
            <p className="text-eyebrow font-semibold uppercase text-muted">หัวข้อบรรยาย &amp; ความเชี่ยวชาญ</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {TOPICS.map((t) => (
                <li key={t} className="rounded-full border border-violet-400/40 bg-card px-4 py-1.5 text-sm font-medium text-indigo-800">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* วิธีทำงาน */}
        <section className="border-t border-line bg-card py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead eyebrow="วิธีทำงานของเรา" title="จากโจทย์ สู่ผลลัพธ์ใน 4 ขั้น" />
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative pt-6">
                  <span className="absolute inset-x-0 top-0 h-1 rounded-full bg-brand-gradient" aria-hidden="true" />
                  <p className="text-eyebrow font-semibold text-violet-600">ขั้นที่ {i + 1}</p>
                  <h3 className="mt-2 font-display text-h3 font-semibold text-indigo-800">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="border-t border-line py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.6fr]">
            <SectionHead eyebrow="คำถามที่พบบ่อย" title="สิ่งที่ผู้ประกอบการมักถามเรา" />
            <div className="divide-y divide-line rounded-xl border border-line bg-card">
              {FAQS.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-indigo-800">
                    {f.q}
                    <span className="faq-icon mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="relative overflow-hidden bg-brand-gradient py-20 text-white sm:py-24">
          <Waves id="wave-contact" tone="light" className="absolute inset-x-0 bottom-0 h-64 w-full opacity-20" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow light>ติดต่อเรา</Eyebrow>
              <h2 className="mt-4 font-display text-h2 font-semibold">
                <span className="inline-block">เริ่ม “ก้าวแรก”</span>{" "}
                <span className="inline-block">สู่ธุรกิจที่แข็งแรงกว่าเดิม</span>{" "}
                <span className="inline-block">ด้วยการคุยกันสักครั้ง</span>
              </h2>
              <p className="mt-4 text-lead text-white/80">
                ทักไลน์มาเล่าโจทย์ธุรกิจของคุณ ทีมงานจะติดต่อกลับเพื่อนัดคุยเบื้องต้น
              </p>
              <div className="mt-8">
                <LineButton size="lg" tone="gold" full />
              </div>
            </div>

            <ul className="space-y-3">
              <li>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-violet-600"><LineIcon className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-sm text-white/70">LINE</span>
                    <span className="block font-semibold">{CONTACT.lineId}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-violet-600"><Icon name="mail" /></span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/70">อีเมล</span>
                    <span className="block break-all font-semibold">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-violet-600"><Icon name="clock" /></span>
                <span>
                  <span className="block text-sm text-white/70">เวลาทำการ</span>
                  <span className="block font-semibold">{CONTACT.hours}</span>
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-violet-600"><Icon name="pin" /></span>
                <span>
                  <span className="block text-sm text-white/70">พื้นที่ให้บริการ</span>
                  <span className="block font-semibold">{CONTACT.area}</span>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="bg-indigo-950 pb-24 pt-10 text-sm text-white/60 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-paper p-1.5">
              <Image src={logo} alt="KRV" className="h-9 w-auto" />
            </span>
            <span>
              <span className="block font-semibold text-white">บริษัท ก้าวแรก เวนเจอร์ส จำกัด</span>
              <span className="block text-xs tracking-[0.08em]">Kaoraek Ventures · Strategy, Financial &amp; Growth</span>
            </span>
          </div>
          <p>© 2026 Kaoraek Ventures Co., Ltd.</p>
        </div>
      </footer>

      {/* ปุ่มไลน์ลอย (มือถือ) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <LineButton full />
      </div>
    </>
  );
}
