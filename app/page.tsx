import type { ReactNode } from "react";
import Image from "next/image";
import leaderPhoto from "@/public/benz-vorapat.webp";

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

const STRENGTHS = [
  {
    title: "ไม่ใช่แค่ที่ปรึกษา แต่ลงมือทำจริง",
    body: "ทีมนำโดยคุณเบนซ์ ผู้บริหารที่ผ่านการปั้นและลงทุนในธุรกิจจริงมาแล้วทุกขนาด ตั้งแต่ SME บนเวที Shark Tank Thailand จนถึงระดับองค์กรใหญ่ คำแนะนำทุกข้อจึงมาจากสนามจริง ไม่ใช่ทฤษฎี",
  },
  {
    title: "วิทยากรและผู้ปั้นผู้ประกอบการรุ่นใหม่",
    body: "ประสบการณ์บรรยายและอบรมนับไม่ถ้วน และเป็น Director ของ House of Talents โครงการส่งเสริม Young Entrepreneur, CEO รุ่นใหม่ และ Founder ทั่วประเทศ",
  },
  {
    title: "ทีมงานมาตรฐานบริษัทระดับโลก",
    body: "ทีมที่ปรึกษาผ่านประสบการณ์จากบริษัทชั้นนำระดับโลก นำกรอบคิดและเครื่องมือระดับสากลมาปรับให้ใช้ได้จริงกับบริบทธุรกิจไทย",
  },
];

const LEADER_ROLES = [
  "CEO, Singha Ventures Capital",
  "Managing Director, BMB Capital",
  "CSO & CFO, Boonrawd Trading",
];

const TOPICS = [
  {
    name: "Business Turnaround",
    th: "พลิกฟื้นธุรกิจ",
    desc: "วินิจฉัยต้นเหตุ ตัดสิ่งที่ฉุดรั้ง และวางแผนกู้กำไรกับกระแสเงินสดให้กลับมา",
  },
  {
    name: "Investment",
    th: "การลงทุนและระดมทุน",
    desc: "เตรียมความพร้อมรับนักลงทุน ประเมินมูลค่า และวางโครงสร้างดีลให้ได้เปรียบ",
  },
  {
    name: "Financial",
    th: "การเงินเพื่อการตัดสินใจ",
    desc: "อ่านงบให้เป็น วางระบบตัวเลขที่ผู้บริหารใช้ตัดสินใจได้ทันที",
  },
  {
    name: "Business Mindset",
    th: "กรอบคิดผู้นำธุรกิจ",
    desc: "ยกระดับวิธีคิดเชิงกลยุทธ์ของเจ้าของและทีมบริหาร ให้มองเกมยาวได้ชัดขึ้น",
  },
  {
    name: "Founder Clinic",
    th: "คลินิกผู้ก่อตั้ง",
    desc: "นำโจทย์จริงของธุรกิจมาผ่าทางตันแบบตัวต่อตัว ได้ทางเลือกที่ทำต่อได้ทันที",
  },
  {
    name: "Mentoring",
    th: "พี่เลี้ยงธุรกิจระยะยาว",
    desc: "ติดตามและให้คำปรึกษาต่อเนื่อง เหมือนมีที่ปรึกษาอาวุโสอยู่ข้างตัว",
  },
];

const STEPS = [
  { title: "คุยโจทย์", body: "รับฟังเป้าหมายและปัญหาที่แท้จริงของธุรกิจ" },
  { title: "วิเคราะห์", body: "เจาะข้อมูล ตัวเลข และตลาด หาต้นเหตุที่สำคัญที่สุด" },
  { title: "วางกลยุทธ์", body: "ออกแบบแผนที่ชัด วัดผลได้ และเหมาะกับทรัพยากรที่มี" },
  { title: "ลงมือและติดตาม", body: "ทำไปด้วยกันจนเห็นผล ไม่ใช่ส่งรายงานแล้วจบ" },
];

const FAQS = [
  {
    q: "ธุรกิจเล็ก ๆ หรือเพิ่งเริ่มต้น ใช้บริการได้ไหม?",
    a: "ได้แน่นอน เราออกแบบมาเพื่อ SME ขนาดเล็กถึงกลางโดยเฉพาะ สำหรับผู้ที่เพิ่งเริ่ม แนะนำให้เริ่มจาก Founder Clinic หรือ Mentoring ซึ่งยืดหยุ่นและคุ้มค่า",
  },
  {
    q: "ค่าบริการคิดอย่างไร?",
    a: "งานที่ปรึกษาประเมินราคาตามขนาดและขอบเขตโครงการ ส่วนงานบรรยาย/อบรมขึ้นอยู่กับหัวข้อ จำนวนผู้เข้าร่วม และรูปแบบ ทักไลน์มาเล่าโจทย์ได้เลย เราจะเสนอแนวทางและราคาที่เหมาะสมให้",
  },
  {
    q: "จัดอบรมแบบ In-house ให้องค์กร หรือออนไลน์ได้ไหม?",
    a: "ได้ทั้งแบบ In-house ที่องค์กรของคุณ งานสัมมนา และออนไลน์ โดยปรับเนื้อหาให้ตรงกับอุตสาหกรรมและโจทย์ของทีม",
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

function Icon({ path }: { path: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  );
}

const ICONS = {
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></>,
  podium: <><path d="M12 3v4M8 11h8l-1 10H9L8 11ZM6 11h12" /><circle cx="12" cy="8" r="0" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
};

/* ---------- ชิ้นส่วนที่ใช้ซ้ำ ---------- */
function LineButton({ size = "md", full = false }: { size?: "md" | "lg"; full?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 font-semibold text-plum-950 shadow-lg shadow-black/10 transition hover:bg-gold-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300 ${
        size === "lg" ? "px-8 py-4 text-lead" : "px-5 py-2.5 text-body"
      } ${full ? "w-full sm:w-auto" : ""}`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-eyebrow font-semibold uppercase ${light ? "text-gold-300" : "text-gold-500"}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-serif text-h2 font-semibold text-plum-900">{title}</h2>
      {intro && <p className="mt-4 text-lead text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ส่วนหัว (เมนู) */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-plum-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-sm border border-gold-500 font-serif text-sm font-bold text-gold-400">
              KRV
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">ก้าวแรก เวนเจอร์ส</span>
              <span className="block text-[0.7rem] tracking-[0.12em] text-gold-300">STRATEGY · FINANCE</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex" aria-label="เมนูหลัก">
            <a href="#why" className="hover:text-gold-300">จุดเด่น</a>
            <a href="#services" className="hover:text-gold-300">บริการ</a>
            <a href="#faq" className="hover:text-gold-300">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-gold-300">ติดต่อเรา</a>
          </nav>
          <div className="hidden md:block">
            <LineButton />
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-plum-900 text-white">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="#e8d3a0" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-plum-700 opacity-60 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:py-28">
            <div>
              <Eyebrow light>Business Strategy &amp; Finance Advisory</Eyebrow>
              <h1 className="mt-6 font-serif text-h1 font-semibold">
                <span className="inline-block">เปลี่ยนกลยุทธ์</span>{" "}
                <span className="inline-block">บนกระดาษ</span>
                <br />
                <span className="inline-block text-gold-400">ให้เป็นผลลัพธ์จริง</span>{" "}
                <span className="inline-block">ของ SME ไทย</span>
              </h1>
              <p className="mt-6 max-w-xl text-lead text-white/80">
                บริษัท ก้าวแรก เวนเจอร์ส จำกัด ที่ปรึกษาธุรกิจและวิทยากรด้านกลยุทธ์และการเงิน
                สำหรับ SME ขนาดเล็กถึงกลาง — มาตรฐานที่ปรึกษาระดับโลก ในแบบที่เข้าใจธุรกิจไทย
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LineButton size="lg" full />
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-body font-medium text-white transition hover:border-gold-400 hover:text-gold-300"
                >
                  ดูบริการของเรา <ArrowIcon />
                </a>
              </div>
            </div>

            {/* การ์ดผู้นำทีม */}
            <aside className="overflow-hidden rounded-lg border border-gold-500/40 bg-plum-950">
              <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-[5/6]">
                <Image
                  src={leaderPhoto}
                  alt="คุณเบนซ์ Vorapat ผู้นำทีม ก้าวแรก เวนเจอร์ส"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-plum-950 via-plum-950/70 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:px-8">
                  <p className="text-eyebrow font-semibold uppercase text-gold-300">นำทีมโดย</p>
                  <p className="mt-2 font-serif text-h3 font-semibold">คุณเบนซ์ Vorapat</p>
                </div>
              </div>
              <ul className="space-y-3 border-t border-gold-500/30 px-7 py-6 sm:px-8">
                {LEADER_ROLES.map((role) => (
                  <li key={role} className="flex gap-3 text-sm text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" aria-hidden="true" />
                    {role}
                  </li>
                ))}
                <li className="flex gap-3 text-sm text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" aria-hidden="true" />
                  Director, House of Talents
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* เวทีที่ร่วมงาน */}
        <section className="border-b border-line bg-plum-50" aria-label="เวทีและโครงการที่เราร่วมงาน">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <p className="text-center text-eyebrow font-semibold uppercase text-muted">เวทีและโครงการที่เราร่วมงาน</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-center sm:grid-cols-4">
              {STAGES.map((s) => (
                <li key={s} className="font-serif text-base font-semibold text-plum-800 sm:text-lg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* จุดเด่น */}
        <section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            eyebrow="ทำไมต้องก้าวแรก เวนเจอร์ส"
            title="ที่ปรึกษาที่เคยนั่งเก้าอี้เดียวกับคุณ"
            intro="เราไม่ได้มองธุรกิจจากรายงาน แต่จากประสบการณ์บริหาร ลงทุน และพลิกฟื้นกิจการจริง"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {STRENGTHS.map((s, i) => (
              <article key={s.title} className="bg-paper p-7 sm:p-9">
                <p className="font-serif text-4xl font-semibold text-gold-500">0{i + 1}</p>
                <h3 className="mt-5 text-h3 font-semibold text-plum-900">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* บริการ */}
        <section id="services" className="bg-plum-50 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead
              eyebrow="บริการของเรา"
              title="สองทางที่จะพาธุรกิจคุณไปข้างหน้า"
              intro="เลือกได้ทั้งให้เราเข้าไปทำงานร่วมกับทีมของคุณ หรือติดอาวุธความรู้ให้ทีมผ่านการอบรม"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg bg-plum-900 p-7 text-white sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                  <Icon path={ICONS.briefcase} />
                </span>
                <h3 className="mt-5 font-serif text-h3 font-semibold">ที่ปรึกษาธุรกิจ (Consulting)</h3>
                <p className="mt-3 text-white/80">
                  โครงการที่ปรึกษาด้านกลยุทธ์ การเงิน และการลงทุน ตั้งแต่วินิจฉัยปัญหา วางแผน จนถึงลงมือทำและวัดผลร่วมกับทีมของคุณ
                </p>
                <p className="mt-6 border-t border-white/15 pt-4 text-sm text-gold-300">
                  ค่าบริการ: ประเมินตามขนาดและขอบเขตโครงการ
                </p>
              </article>
              <article className="rounded-lg border border-line bg-paper p-7 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-plum-100 text-plum-700">
                  <Icon path={ICONS.podium} />
                </span>
                <h3 className="mt-5 font-serif text-h3 font-semibold text-plum-900">บรรยายและอบรม (Training)</h3>
                <p className="mt-3 text-muted">
                  หลักสูตร Corporate Training, In-house และงานสัมมนา ด้าน Business Strategy &amp; Finance ปรับเนื้อหาให้ตรงกับโจทย์ขององค์กร
                </p>
                <p className="mt-6 border-t border-line pt-4 text-sm text-gold-500">
                  ค่าบริการ: ขึ้นอยู่กับหัวข้อและรูปแบบการอบรม
                </p>
              </article>
            </div>

            <h3 className="mt-16 text-eyebrow font-semibold uppercase text-muted">หัวข้อความเชี่ยวชาญ</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((t) => (
                <article key={t.name} className="group rounded-lg border border-line bg-paper p-6 transition hover:border-gold-400 hover:shadow-md">
                  <div className="h-0.5 w-10 bg-gold-500 transition-all group-hover:w-16" aria-hidden="true" />
                  <h4 className="mt-4 text-lg font-semibold text-plum-900">{t.name}</h4>
                  <p className="text-sm font-medium text-plum-700">{t.th}</p>
                  <p className="mt-3 text-sm text-muted">{t.desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-gold-300 bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <p className="text-plum-900">
                <span className="font-semibold">อยากรู้ราคาสำหรับโจทย์ของคุณ?</span>{" "}
                <span className="text-muted">เล่าให้เราฟังทางไลน์ เราจะเสนอแนวทางและใบเสนอราคาให้</span>
              </p>
              <LineButton full />
            </div>
          </div>
        </section>

        {/* วิธีทำงาน */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead eyebrow="วิธีทำงานของเรา" title="จากโจทย์ สู่ผลลัพธ์ใน 4 ขั้น" />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-plum-800 pt-5">
                <p className="text-eyebrow font-semibold text-gold-500">ขั้นที่ {i + 1}</p>
                <h3 className="mt-2 text-h3 font-semibold text-plum-900">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="border-t border-line bg-plum-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.6fr]">
            <SectionHead eyebrow="คำถามที่พบบ่อย" title="สิ่งที่ผู้ประกอบการมักถามเรา" />
            <div className="divide-y divide-line rounded-lg border border-line bg-paper">
              {FAQS.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-plum-900">
                    {f.q}
                    <span className="faq-icon mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold-500 text-gold-500 transition-transform" aria-hidden="true">
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
        <section id="contact" className="bg-plum-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow light>ติดต่อเรา</Eyebrow>
              <h2 className="mt-4 font-serif text-h2 font-semibold">
                <span className="inline-block">ก้าวแรกสู่ธุรกิจ</span>{" "}
                <span className="inline-block">ที่แข็งแรงกว่าเดิม</span>{" "}
                <span className="inline-block">เริ่มจากคุยกันสักครั้ง</span>
              </h2>
              <p className="mt-4 text-lead text-white/75">
                ทักไลน์มาเล่าโจทย์ธุรกิจของคุณ ทีมงานจะติดต่อกลับเพื่อนัดคุยเบื้องต้น
              </p>
              <div className="mt-8">
                <LineButton size="lg" full />
              </div>
            </div>

            <ul className="space-y-4">
              <li>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-white/10 p-5 transition hover:border-gold-400">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400"><LineIcon className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-sm text-white/60">LINE</span>
                    <span className="block font-semibold">{CONTACT.lineId}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 rounded-lg border border-white/10 p-5 transition hover:border-gold-400">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400"><Icon path={ICONS.mail} /></span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/60">อีเมล</span>
                    <span className="block break-all font-semibold">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-lg border border-white/10 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400"><Icon path={ICONS.clock} /></span>
                <span>
                  <span className="block text-sm text-white/60">เวลาทำการ</span>
                  <span className="block font-semibold">{CONTACT.hours}</span>
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-lg border border-white/10 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400"><Icon path={ICONS.pin} /></span>
                <span>
                  <span className="block text-sm text-white/60">พื้นที่ให้บริการ</span>
                  <span className="block font-semibold">{CONTACT.area}</span>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t border-white/10 bg-plum-950 pb-24 pt-8 text-sm text-white/55 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:justify-between">
          <p>© 2026 บริษัท ก้าวแรก เวนเจอร์ส จำกัด</p>
          <p className="tracking-[0.08em]">Kaow Raek Ventures · Strategy &amp; Finance Advisory</p>
        </div>
      </footer>

      {/* ปุ่มไลน์ลอย (มือถือ) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-plum-950/95 p-3 backdrop-blur md:hidden">
        <LineButton full />
      </div>
    </>
  );
}
