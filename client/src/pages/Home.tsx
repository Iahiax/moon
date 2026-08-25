// Design system: مدار هادئ — Neo-futurist editorial for Moon. Midnight navy, ivory surfaces, volcanic copper #D58B58, orbital lines, calm motion.
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpLeft, ChevronDown, ExternalLink, Menu, Orbit, Play, ShieldCheck, Sparkles, X } from "lucide-react";
import { toast } from "sonner";
import heroImage from "../assets/moon-hero-orbit.png";
import ecosystemImage from "../assets/moon-ecosystem-map.png";
import rainImage from "../assets/rain-device.png";
import markImage from "../assets/moon-mark.png";

const products = [
  { code: "RAIN / 01", title: "مطر", subtitle: "الهاتف الذي يفتح المدار", copy: "جهاز أوليّ يربط الهوية والخدمات والذكاء الاصطناعي في تجربة واحدة، بصناعة تعاقدية واختبارات جودة وأمان قبل التوسع.", image: rainImage },
  { code: "STAR OS / 02", title: "نجم", subtitle: "نظام تشغيل عربيّ الروح", copy: "طبقة موحّدة للأجهزة والبيانات والهوية، تُصمم لتقليل التشتت بين التطبيقات وإتاحة تجربة موثوقة للأفراد والأعمال.", image: ecosystemImage },
  { code: "MOON GRID / 03", title: "مدار", subtitle: "بنية تحتية تعمل مع العالم", copy: "سحابة وواجهات API وأمن سيبراني وحلول حكومية ومالية، تُبنى كمنظومة قابلة للتكامل لا كجزيرة مغلقة.", image: heroImage },
];

const drops = Array.from({ length: 54 }, (_, index) => ({
  left: `${(index * 37) % 101}%`,
  delay: `${(index % 11) * -0.7}s`,
  duration: `${3.6 + (index % 7) * 0.38}s`,
  opacity: 0.18 + (index % 5) * 0.07,
  height: `${18 + (index % 6) * 7}px`,
}));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const rainDrops = useMemo(() => drops, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const notify = (message: string) => toast(message, { description: "سيتم تجهيز الخطوة التالية ضمن مسار الشراكة." });

  return (
    <div className="moon-site">
      <div className="rain-layer" aria-hidden="true">
        {rainDrops.map((drop, index) => <i key={index} style={{ left: drop.left, animationDelay: drop.delay, animationDuration: drop.duration, opacity: drop.opacity, height: drop.height }} />)}
      </div>
      <div className="rain-veil" aria-hidden="true" />
      <header className="site-header">
        <button className="brand" onClick={() => jump("top")} aria-label="العودة إلى بداية الموقع"><span className="brand-mark"><img src={markImage} alt="" /></span><span><b>Moon</b><small>قمر / منظومة تقنية</small></span></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="التنقل الرئيسي">
          <button onClick={() => jump("vision")}>الرؤية</button><button onClick={() => jump("orbit")}>المنظومة</button><button onClick={() => jump("ask")}>طلب الاستثمار</button><button onClick={() => jump("roadmap")}>المسار</button>
        </nav>
        <div className="header-actions"><button className="text-btn" onClick={() => setShowLetter(true)}>خطاب التقديم <ArrowUpLeft size={15} /></button><button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <main id="top">
        <section className="hero" id="vision">
          <div className="hero-content"><p className="eyebrow"><span className="signal" /> ملف شراكة استثمارية · الرياض / جازان</p><h1>نصنع <em>مداراً</em><br />لا منتجاً واحداً.</h1><p className="hero-copy">قمر Moon شركة تقنية سعودية تبني منظومة مترابطة تبدأ من هاتف <strong>Rain</strong> ونظام التشغيل <strong>Star OS</strong>، وتمتد إلى السحابة والذكاء الاصطناعي والأمن والمنصات الحكومية والخدمات العالمية.</p><div className="hero-actions"><button className="primary-btn" onClick={() => jump("ask")}>افتح مسار الاستثمار <ArrowLeft size={18} /></button><button className="play-btn" onClick={() => notify("عرض المشروع المختصر قيد التجهيز") }><span><Play size={15} fill="currentColor" /></span> شاهد الفكرة في دقيقة</button></div><div className="hero-proof"><span>01</span><p>نبدأ بمنصة قابلة للإثبات<br /><b>ثم نوسّع المدار بثقة.</b></p></div></div>
          <div className="hero-visual"><div className="orbit-line orbit-a" /><div className="orbit-line orbit-b" /><div className="moon-disc"><img src={heroImage} alt="تصور بصري لمدار Moon" /></div><div className="visual-note note-top"><span>01</span><b>Saudi-born<br />Global-ready</b></div><div className="visual-note note-bottom"><Orbit size={15} /> طبقة ثقة رقمية</div></div>
        </section>

        <section className="ticker" aria-label="مؤشرات المشروع"><div><span>رؤية 2030</span><b>تحول رقمي متسارع</b></div><div><span>Moon / 2026</span><b>منصة أولى قابلة للتمويل</b></div><div><span>40—120M USD</span><b>نطاق التمويل المستهدف</b></div><div><span>Global by design</span><b>محلي الفهم، عالمي المدى</b></div></section>

        <section className="manifesto section-wrap"><div className="section-index">01 <span>—</span> لماذا الآن؟</div><div className="manifesto-grid"><div className="moon-seal"><img src={markImage} alt="" /><span>MOON<br />SIGNAL / 01</span></div><h2>العالم لا يحتاج<br /><em>تطبيقاً آخر.</em><br />بل يحتاج وضوحاً.</h2><div><p className="lead">تتضاعف الخدمات الرقمية، ويتشتت المستخدم بين الأجهزة والحسابات والمنصات. Moon يعيد رسم العلاقة حول هوية واحدة، وتجربة واحدة، وبنية أمنية تتسع من الفرد إلى المؤسسة والحكومة.</p><div className="quote-mark">“</div><p className="quote">إذا وجدتم علينا بالحلول المالية، سنحوّل الفكرة إلى مشروع ملموس يرفع معيار التقنية.</p><button className="inline-link" onClick={() => jump("ask")}>اقرأ أطروحة الاستثمار <ArrowLeft size={16} /></button></div></div></section>

        <section className="orbit-section section-wrap" id="orbit"><div className="section-index">02 <span>—</span> خريطة المنظومة</div><div className="orbit-layout"><div className="orbit-copy"><h2>كل طبقة<br /><em>تغذّي الأخرى.</em></h2><p>من جهاز Rain إلى الخدمات الحكومية والمالية، لا نبني منتجات منفصلة. نبني بنية تسمح للبيانات والهوية والأمان أن تتحرك بذكاء بين التجارب.</p><div className="orbit-list"><div><span>01</span><b>أجهزة</b><small>Rain · Edge · Servers</small></div><div><span>02</span><b>منصة</b><small>Star OS · Identity · Store</small></div><div><span>03</span><b>خدمات</b><small>AI · Cloud · Civic · Finance</small></div></div></div><div className="ecosystem-art"><img src={ecosystemImage} alt="خريطة منظومة Moon التقنية" /><div className="art-caption">منظومة Moon / نموذج معماري أولي <span>↗</span></div></div></div></section>

        <section className="products section-wrap"><div className="section-index">03 <span>—</span> نقطة الانطلاق</div><div className="product-intro"><h2>ثلاثة أبواب<br /><em>إلى المدار.</em></h2><p>نبدأ بما يمكن بناؤه وقياسه وتمويله. ثم نضيف ما يتطلب شراكات أو تراخيص أو بنية تحتية على مستوى الدول.</p></div><div className="mission-files">{products.map((product, index) => <article className={`mission-file file-${index}`} key={product.code}><div className="mission-number">0{index + 1}<span /></div><div className="mission-image"><img src={product.image} alt={product.title} /></div><div className="mission-body"><div className="product-meta"><span>{product.code}</span><span className="status"><i /> {index === 0 ? "نقطة الانطلاق" : index === 1 ? "طبقة النظام" : "مسار التوسع"}</span></div><h3>{product.title}</h3><h4>{product.subtitle}</h4><p>{product.copy}</p><button onClick={() => notify(`تم اختيار مسار ${product.title}`)}>استكشف ملف المهمة <ArrowLeft size={15} /></button></div></article>)}</div></section>

        <section className="ask-section" id="ask"><div className="ask-orbit" /><div className="ask-inner"><div className="section-index light">04 <span>—</span> إلى الشركاء</div><h2>نبحث عن شريك<br /><em>يرى البنية.</em></h2><p>نطلب استشارة ودعماً وتمويلاً مرحلياً لتحويل رؤية Moon إلى منظومة قابلة للاختبار. يبدأ الطلب بمنصة وهاتف ونظام تشغيل، ويتوسع عبر شراكات تقنية وحكومية وفضائية ومالية مسؤولة.</p><div className="ask-actions"><button className="light-btn" onClick={() => setShowLetter(true)}>افتح خطاب التقديم <ArrowLeft size={18} /></button><button className="outline-light" onClick={() => notify("تم تسجيل اهتمامك بالشراكة")}>سجّل اهتمامك <ExternalLink size={15} /></button></div></div><div className="contact-dock"><div><span className="contact-label">اتصل مباشرة</span><a href="tel:+966530098089">0530098089</a><a href="mailto:i_x@outlook.sa">i_x@outlook.sa</a></div><div className="social-links"><span className="contact-label">قنوات Moon</span><a href="https://www.snapchat.com/add/x.z3l" target="_blank" rel="noreferrer">Snapchat <b>x.z3l</b></a><a href="https://www.tiktok.com/@x.z3l.x" target="_blank" rel="noreferrer">TikTok <b>x.z3l.x</b></a><a href="https://t.me/xz3lx" target="_blank" rel="noreferrer">Telegram <b>xz3lx</b></a><a href="https://x.com/xz3lxx" target="_blank" rel="noreferrer">X / Twitter <b>xz3lxx</b></a></div><div className="social-links"><span className="contact-label">مجتمعنا</span><a href="https://instagram.com/x.z3l" target="_blank" rel="noreferrer">Instagram <b>x.z3l</b></a><a href="https://facebook.com/x.z3l" target="_blank" rel="noreferrer">Facebook <b>x.z3l</b></a><a href="https://wa.me/966530098089" target="_blank" rel="noreferrer">WhatsApp <b>+966530098089</b></a></div></div><div className="ask-foot"><span>Moon / قمر</span><span>Riyadh · Jazan · World</span><span>i_x@outlook.sa <ArrowUpLeft size={14} /></span></div></section>

        <section className="roadmap section-wrap" id="roadmap"><div className="section-index">05 <span>—</span> المسار</div><div className="roadmap-head"><h2>طموح كبير.<br /><em>خطوات محسوبة.</em></h2><p>لا نطلق كل شيء دفعة واحدة. نربط كل مرحلة بدليل طلب، وجاهزية أمنية، وبوابة تمويل واضحة.</p></div><div className="timeline"><div className="timeline-path" /><div className="timeline-item active"><span>01</span><div><b>الأساس</b><small>0—12 شهراً</small><p>الفريق، الهوية، المنصة الأولى، تصميم Rain، وتثبيت الشركاء المرجعيين.</p></div></div><div className="timeline-item"><span>02</span><div><b>التجربة</b><small>12—24 شهراً</small><p>Star OS، السحابة، الذكاء الاصطناعي، الأمن، وعملاء مؤسسيون أوائل.</p></div></div><div className="timeline-item"><span>03</span><div><b>الانتشار</b><small>24—48 شهراً</small><p>أجهزة متخصصة، سوق Moon، منصات حكومية ومالية عبر التراخيص والشراكات.</p></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={markImage} alt="" /><b>Moon / قمر</b></div><p>من جهاز واحد إلى مدار كامل من الخدمات.</p><span>© 2026 Moon Technology · <a href="mailto:i_x@outlook.sa">i_x@outlook.sa</a></span></footer>

      {showLetter && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="خطاب التقديم"><div className="letter-modal"><button className="close-modal" onClick={() => setShowLetter(false)} aria-label="إغلاق"><X /></button><p className="eyebrow">خطاب تقديم مختصر</p><h2>السلام عليكم<br />ورحمة الله وبركاته</h2><p>إلى الجهات المعنية بالابتكار والفضاء والتمويل، نتقدم بطلب استشارة وشراكة ودعم لمشروع Moon، وهو منظومة تقنية سعودية تستهدف بناء حلول آمنة ومتكاملة للأفراد والأعمال والحكومات، تبدأ من Rain وStar OS وتمتد إلى الذكاء الاصطناعي والسحابة والمنصات والخدمات العالمية.</p><p>نبحث عن المسار المناسب لتحويل الفكرة إلى نموذج أولي قابل للقياس، وبناء شراكات مسؤولة في الاتصالات الفضائية والخدمات المالية والحكومة الرقمية.</p><button className="primary-btn" onClick={() => { setShowLetter(false); notify("شكراً لاهتمامك — سيُستكمل الطلب بعد تجهيز بيانات التواصل") }}>أرغب في مناقشة المشروع <ArrowLeft size={18} /></button></div></div>}
    </div>
  );
}
