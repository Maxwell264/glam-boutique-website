import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiquidMetalButton } from "./components/ui/liquid-metal-button";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Truck,
  Shirt,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = ["Collections", "New Arrivals", "About", "Contact"];

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function XIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CoupleMark({ className = "" }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* female silhouette */}
      <path
        d="M40 8c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z M40 28c-9 0-16 6-17 14l-4 34c-1 6 3 11 9 11h4l2 46h12l2-46h4l2 46h12l2-46c6 0 10-5 9-11l-4-34c-1-8-8-14-17-14h-16z"
        fill="#111111"
      />
      {/* male silhouette */}
      <path
        d="M82 6c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z M82 26c-8 0-15 5-17 13l-5 30h6l3 65h11l1-38h2l1 38h11l3-65h6l-5-30c-2-8-9-13-17-13z"
        fill="#111111"
      />
      {/* sparkles */}
      <path d="M100 30c0 4-4 8-4 8s4 4 4 8c0-4 4-8 4-8s-4-4-4-8z" fill="#C41220" />
      <path d="M108 44c0 2.5-2.5 5-2.5 5s2.5 2.5 2.5 5c0-2.5 2.5-5 2.5-5s-2.5-2.5-2.5-5z" fill="#C41220" />
    </svg>
  );
}

function Sparkle4pt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C12 6.6 6.6 12 0 12C6.6 12 12 17.4 12 24C12 17.4 17.4 12 24 12C17.4 12 12 6.6 12 0Z"
        fill="#C41220"
      />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl rounded-full transition-all duration-300 ${
          scrolled ? "nav-glass shadow-lg border border-slate-light" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 font-script text-3xl tracking-wide text-onyx">
            <CoupleMark className="w-6 h-7" />
            Glam <span className="text-glamred">Boutique</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-onyx hover:text-glamred transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:block hover:text-glamred transition-colors">
              <Search size={19} />
            </button>
            <button aria-label="Cart" className="hover:text-glamred transition-colors relative">
              <ShoppingBag size={19} />
              <span className="absolute -top-2 -right-2 bg-glamred text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="font-script text-3xl">Glam Boutique</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={26} />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-onyx"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });
      gsap.to(".hero-sparkle", {
        y: -14,
        rotation: 8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center pt-28 pb-16 grid-bg overflow-hidden"
    >
      <div className="hero-sparkle absolute top-24 right-[8%] w-6 h-6">
        <Sparkle4pt />
      </div>
      <div className="hero-sparkle absolute top-52 right-[18%] w-4 h-4">
        <Sparkle4pt />
      </div>
      <div className="hero-sparkle absolute top-40 right-[4%] w-3 h-3">
        <Sparkle4pt />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="hero-stagger flex items-center gap-2 text-sm font-medium tracking-wide text-slate mb-5">
            <Sparkle4pt className="w-4 h-4" /> UNISEX FASHION, REDEFINED
          </p>
          <h1 className="hero-stagger font-display text-5xl md:text-6xl leading-[1.05] text-onyx mb-6">
            Modern Elegance,
            <br />
            <span className="text-glamred italic">Made for Everyone</span>
          </h1>
          <p className="hero-stagger text-slate text-lg max-w-md mb-8 leading-relaxed">
            Glam Boutique crafts high-end personal style without boundaries.
            Clean lines. Studio quality. Designed for anyone who wears their
            confidence well.
          </p>
          <div className="hero-stagger flex flex-wrap items-center gap-4">
            <a href="#collections" className="btn-primary">
              Shop Collections
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
            <LiquidMetalButton
              label="Shop Now"
              onClick={() =>
                document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
              alt="Studio fashion editorial shot"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-onyx text-cream px-6 py-4 rounded-sm shadow-xl hidden sm:block">
            <p className="font-display italic text-xl">New Season</p>
            <p className="text-xs text-slate-light mt-1">Studio Collection 01</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureSparkleDrift() {
  const wrapRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".drift-sparkle").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: -180,
            opacity: 1,
            duration: 3 + i,
            repeat: -1,
            delay: i * 0.6,
            ease: "power1.inOut",
            onRepeat: () => gsap.set(el, { y: 60, opacity: 0 }),
          }
        );
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative h-40 overflow-hidden">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="drift-sparkle absolute w-3 h-3"
          style={{ left: `${15 + i * 22}%`, bottom: 0 }}
        >
          <Sparkle4pt />
        </div>
      ))}
    </div>
  );
}

function Features() {
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const looks = [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80",
  ];

  useEffect(() => {
    const id = setInterval(() => setShuffleIndex((i) => (i + 1) % looks.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-wide text-glamred mb-3 flex items-center justify-center gap-2">
          <Sparkle4pt className="w-3.5 h-3.5" /> WHY GLAM BOUTIQUE
        </p>
        <h2 className="font-display text-4xl text-onyx">
          Built Around <span className="font-script text-glamred">You</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card-hover bg-white border border-slate-light rounded-sm p-6 relative h-[340px] overflow-hidden">
          <h3 className="font-display text-xl mb-1">Curated Looks</h3>
          <p className="text-sm text-slate mb-6">Fresh styling, every visit</p>
          <div className="relative h-[190px]">
            {looks.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Curated look"
                className="absolute inset-0 w-full h-full object-cover rounded-sm transition-all duration-700"
                style={{
                  opacity: i === shuffleIndex ? 1 : 0,
                  transform: `scale(${i === shuffleIndex ? 1 : 0.96}) rotate(${
                    i === shuffleIndex ? 0 : -2
                  }deg)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="card-hover bg-onyx text-cream rounded-sm p-6 h-[340px] relative overflow-hidden flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl mb-1">Studio Craft</h3>
            <p className="text-sm text-slate-light">Every piece, considered</p>
          </div>
          <SignatureSparkleDrift />
        </div>

        <div className="card-hover bg-white border border-slate-light rounded-sm p-6 h-[340px] flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl mb-1">Effortless Checkout</h3>
            <p className="text-sm text-slate mb-6">From cart to doorstep, fast</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-cream border border-slate-light rounded-sm p-3">
              <Truck size={18} className="text-glamred" />
              <span className="text-sm">Free shipping over $150</span>
            </div>
            <div className="flex items-center gap-3 bg-cream border border-slate-light rounded-sm p-3">
              <Shirt size={18} className="text-glamred" />
              <span className="text-sm">Easy 30-day returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = null;
          const duration = 1400;
          const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setVal(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="font-display text-5xl text-glamred">
      {val}
      {suffix}
    </span>
  );
}

function Pillars() {
  return (
    <section className="py-20 bg-onyx text-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <CountUp end={100} suffix="%" />
          <p className="text-slate-light text-sm mt-2 tracking-wide">
            UNISEX, NO EXCEPTIONS
          </p>
        </div>
        <div>
          <CountUp end={30} suffix=" DAYS" />
          <p className="text-slate-light text-sm mt-2 tracking-wide">
            EASY RETURNS
          </p>
        </div>
        <div>
          <CountUp end={1} suffix="-OF-1" />
          <p className="text-slate-light text-sm mt-2 tracking-wide">
            STUDIO-CRAFTED PIECES
          </p>
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  const sectionRef = useRef(null);

  const steps = [
    {
      n: "01",
      title: "Discover",
      desc: "Browse studio-shot collections designed to move with you, not around a gender line.",
    },
    {
      n: "02",
      title: "Style",
      desc: "Every piece is considered for fit, fabric, and versatility. Nothing filler, nothing fast.",
    },
    {
      n: "03",
      title: "Wear",
      desc: "Delivered fast, returned easy. Confidence that shows up the moment you put it on.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".protocol-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.94, filter: "blur(4px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-wide text-glamred mb-3">
          THE PROCESS
        </p>
        <h2 className="font-display text-4xl text-onyx">
          From Rack to <span className="font-script text-glamred">You</span>
        </h2>
      </div>
      <div className="space-y-8">
        {steps.map((s) => (
          <div
            key={s.n}
            className="protocol-card bg-white border border-slate-light rounded-sm p-8 flex gap-6 items-start"
          >
            <span className="font-display text-4xl text-glamred/40">{s.n}</span>
            <div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-slate leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesGrid() {
  const items = [
    {
      title: "New Arrivals",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80",
    },
    {
      title: "Studio Basics",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80",
    },
    {
      title: "Outerwear",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    },
    {
      title: "Accessories",
      img: "https://images.unsplash.com/photo-1512201411029-1a0aca6be71f?w=500&q=80",
    },
    {
      title: "Footwear",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
    },
    {
      title: "Limited Drops",
      img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80",
    },
  ];

  return (
    <section id="collections" className="py-24 bg-onyx">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium tracking-wide text-glamred mb-3">
          COLLECTIONS
        </p>
        <h2 className="font-display text-4xl text-cream">
          Shop the <span className="font-script text-glamred">Studio</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate/30 max-w-6xl mx-auto">
        {items.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group relative bg-onyx overflow-hidden aspect-[3/4]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 flex items-center gap-2">
              <span className="font-display text-lg text-cream">{item.title}</span>
              <ArrowRight
                size={16}
                className="text-glamred opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function TrustSignals() {
  const items = [
    { icon: Shirt, label: "Studio-Crafted Quality" },
    { icon: Sparkles, label: "Considered Materials" },
    { icon: Truck, label: "Fast, Reliable Delivery" },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="rounded-sm overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?w=900&q=80"
            alt="Craftsmanship detail shot"
            className="w-full h-[440px] object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium tracking-wide text-glamred mb-3">
            OUR STORY
          </p>
          <h2 className="font-display text-4xl text-onyx mb-6">
            Style Without <span className="font-script text-glamred">Boundaries</span>
          </h2>
          <p className="text-slate leading-relaxed mb-8">
            Glam Boutique started with a simple idea: fashion shouldn't be
            divided by gender lines. Every piece is designed to move, fit,
            and feel considered, for anyone who wears it.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {items.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-3 border border-slate-light rounded-sm p-4"
              >
                <Icon size={22} className="text-glamred" />
                <span className="text-xs font-medium text-onyx leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [state, setState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1400);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-wide text-glamred mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-display text-4xl text-onyx">
            Let's <span className="font-script text-glamred">Talk Style</span>
          </h2>
        </div>

        {state === "sent" ? (
          <div className="border border-slate-light rounded-sm p-10 text-center bg-white">
            <Sparkle4pt className="w-6 h-6 mx-auto mb-4" />
            <p className="font-display text-2xl mb-2">Message received</p>
            <p className="text-slate">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-light rounded-sm p-8 grid md:grid-cols-2 gap-5"
          >
            <input
              required
              placeholder="Full Name"
              className="border border-slate-light rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-glamred bg-cream"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border border-slate-light rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-glamred bg-cream"
            />
            <input
              placeholder="Phone"
              className="border border-slate-light rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-glamred bg-cream"
            />
            <input
              placeholder="Zip Code"
              className="border border-slate-light rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-glamred bg-cream"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="md:col-span-2 border border-slate-light rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-glamred bg-cream"
            />
            <div className="md:col-span-2 border-2 border-dashed border-slate-light rounded-sm p-6 text-center text-sm text-slate">
              Drag & drop a file, or click to upload (optional)
            </div>
            <button
              type="submit"
              disabled={state === "sending"}
              className="md:col-span-2 btn-primary text-center disabled:opacity-60"
            >
              {state === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-onyx text-cream pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-script text-4xl mb-1 flex items-center gap-2">
            <CoupleMark className="w-6 h-7" />
            <span className="text-glamred">Glam Boutique</span>
          </p>
          <p className="text-slate-light text-xs tracking-wide mb-3">ELDOSYA VENTURES</p>
          <p className="text-slate-light text-sm leading-relaxed">
            Sophisticated, modern, unisex.
          </p>
          <div className="flex gap-4 mt-5">
            <InstagramIcon size={18} className="hover:text-glamred cursor-pointer transition-colors" />
            <FacebookIcon size={18} className="hover:text-glamred cursor-pointer transition-colors" />
            <XIcon size={18} className="hover:text-glamred cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <p className="font-medium mb-4 text-sm tracking-wide">SHOP</p>
          <ul className="space-y-2 text-sm text-slate-light">
            <li><a href="#collections" className="hover:text-glamred">Collections</a></li>
            <li><a href="#" className="hover:text-glamred">New Arrivals</a></li>
            <li><a href="#" className="hover:text-glamred">Limited Drops</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-4 text-sm tracking-wide">COMPANY</p>
          <ul className="space-y-2 text-sm text-slate-light">
            <li><a href="#about" className="hover:text-glamred">About</a></li>
            <li><a href="/privacy" className="hover:text-glamred">Privacy</a></li>
            <li><a href="/terms" className="hover:text-glamred">Terms</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-4 text-sm tracking-wide">CONTACT</p>
          <ul className="space-y-3 text-sm text-slate-light">
            <li className="flex items-center gap-2"><Phone size={14} /> 024 420 1686</li>
            <li className="flex items-center gap-2"><Phone size={14} /> 026 982 6868</li>
            <li className="flex items-center gap-2"><InstagramIcon size={14} /> @glambghome</li>
            <li className="flex items-center gap-2"><InstagramIcon size={14} /> @glamboutique_gh</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-slate/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-slate-light">
          © {new Date().getFullYear()} Eldosya Ventures. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-light">
          <span className="w-2 h-2 rounded-full bg-glamred animate-pulse" />
          Now shipping worldwide
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pillars />
      <Protocol />
      <ServicesGrid />
      <TrustSignals />
      <ContactForm />
      <Footer />
    </div>
  );
}
