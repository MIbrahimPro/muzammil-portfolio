import { useState, useEffect, useRef } from "react";

const DATA = {
  credibilityItems: [
    "Shopify Development",
    "Webflow Design",
    "Squarespace Sites",
    "Custom Themes",
    "E-Commerce Stores",
    "Store Optimization",
    "Responsive Design",
    "Landing Pages",
    "CMS Builds",
  ],
  featuredResults: [
    {
      title: "Stores Launched",
      metric: "18+",
      description: "Live store & custom builds",
    },
    {
      title: "Platforms Mastered",
      metric: "3+",
      description: "Shopify, Squarespace & Webflow",
    },
    {
      title: "Countries Served",
      metric: "5+",
      description: "PK, US, UK, India & beyond",
    },
    {
      title: "Client Satisfaction",
      metric: "5.0",
      description: "Average rating",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Hijab Eaze",
      category: "Shopify",
      description:
        "Shopify storefront for a modest fashion label selling hijabs and abayas, with collection pages tuned for fast browsing and checkout.",
      tags: ["Shopify", "Fashion", "Custom Theme"],
      metric: "Shopify Store",
      color: "#51D2D6",
      siteUrl: "https://hijabeaze.com/",
    },
    {
      id: 2,
      title: "Shurooq",
      category: "Shopify",
      description:
        "Custom Shopify build for a Lahore pret & lawn label, with collection filtering tailored to seasonal and bridal drops.",
      tags: ["Shopify", "Fashion", "Pakistan"],
      metric: "Shopify Store",
      color: "#35C9CE",
      siteUrl: "https://www.shurooq.pk/",
    },
    {
      id: 3,
      title: "Araish",
      category: "Shopify",
      description:
        "Shopify rebuild for a premium home decor and bedding brand backed by a six-decade textile legacy, with a clean gallery-style catalog.",
      tags: ["Shopify", "Home Decor", "E-Commerce"],
      metric: "Shopify Store",
      color: "#A1DEE0",
      siteUrl: "https://www.araish.com/",
    },
    {
      id: 6,
      title: "Meem Design",
      category: "Shopify",
      description:
        "Custom Shopify storefront for a women's fashion label offering pret, unstitched suits and shararas, with a catalog built for fast seasonal updates.",
      tags: ["Shopify", "Fashion", "E-Commerce"],
      metric: "Shopify Store",
      color: "#35C9CE",
      siteUrl: "https://www.meemdesign.pk/",
    },
    {
      id: 8,
      title: "Machina",
      category: "Shopify",
      description:
        "Brand site and store for a wearable-tech and streetwear label, pairing product storytelling with a clean Shopify checkout flow.",
      tags: ["Shopify", "Streetwear", "Tech"],
      metric: "Shopify Store",
      color: "#75C669",
      siteUrl: "https://www.machina.cc",
    },
    {
      id: 9,
      title: "Ultras",
      category: "Squarespace",
      description:
        "Squarespace build for a US sportswear brand selling custom team apparel, with size and team customization built into product pages.",
      tags: ["Squarespace", "Sportswear", "Custom Products"],
      metric: "Squarespace Site",
      color: "#51D2D6",
      siteUrl: "https://www.ultras.com",
    },
    {
      id: 10,
      title: "Netose",
      category: "Squarespace",
      description:
        "Squarespace storefront for an Indian women's ethnic wear brand, with a co-ord and kurta-set catalog structured for fast collection launches.",
      tags: ["Squarespace", "Fashion", "India"],
      metric: "Squarespace Site",
      color: "#35C9CE",
      siteUrl: "https://netose.in/",
    },
    {
      id: 11,
      title: "Sacred Space with Arushi",
      category: "Squarespace",
      description:
        "A calm, content-first Squarespace website for a personal coaching and wellness practice, built to make booking a session simple.",
      tags: ["Squarespace", "Coaching", "Wellness"],
      metric: "Squarespace Site",
      color: "#A1DEE0",
      siteUrl: "https://sacredspacewitharushi.com/sacred-space-with-arushi/",
    },
    {
      id: 12,
      title: "BHRC Dominion",
      category: "Squarespace",
      description:
        "Custom Squarespace website build and content structure for an independent publishing site.",
      tags: ["Squarespace", "Content Site"],
      metric: "Squarespace Site",
      color: "#75C669",
      siteUrl: "https://bhrcdominion.com/",
    },
    {
      id: 13,
      title: "Zen Supply Chain",
      category: "Squarespace",
      description:
        "Squarespace business website for a UK supply chain and logistics consultancy, built to present services clearly to B2B clients.",
      tags: ["Squarespace", "B2B", "UK"],
      metric: "Squarespace Site",
      color: "#51D2D6",
      siteUrl: "https://zensupplychain.co.uk/",
    },
    {
      id: 14,
      title: "Elegance Universe",
      category: "Webflow",
      description:
        "Webflow storefront for a US lifestyle store covering beauty, home and fashion accessories, built for quick product turnover.",
      tags: ["Webflow", "Lifestyle", "E-Commerce"],
      metric: "Webflow Site",
      color: "#35C9CE",
      siteUrl: "https://eleganceuniverse.com/",
    },
    {
      id: 15,
      title: "Anna Janelle Jewelry",
      category: "Webflow",
      description:
        "Webflow site and booking flow for a Santa Barbara jewelry studio, pairing online shopping with in-store permanent-jewelry appointments.",
      tags: ["Webflow", "Jewelry", "Bookings"],
      metric: "Webflow Site",
      color: "#A1DEE0",
      siteUrl: "https://annajanellejewelry.com/",
    },
    {
      id: 16,
      title: "VizBeds",
      category: "Webflow",
      description:
        "Webflow storefront for a UK bed and mattress manufacturer, with a product configurator for sizes, fabrics and headboard options.",
      tags: ["Webflow", "Furniture", "UK"],
      metric: "Webflow Site",
      color: "#75C669",
      siteUrl: "https://vizbeds.co.uk/",
    },
    {
      id: 17,
      title: "PureMSX",
      category: "Webflow",
      description:
        "Webflow build for a cruelty-free outerwear brand, with seasonal lookbooks and a streamlined parka and jacket catalog.",
      tags: ["Webflow", "Apparel", "E-Commerce"],
      metric: "Webflow Site",
      color: "#51D2D6",
      siteUrl: "https://puremsx.com/",
    },
    {
      id: 18,
      title: "Renome",
      category: "Webflow",
      description:
        "Webflow store for an Islamabad furniture brand, covering sofas, beds and office furniture across a large filterable catalog.",
      tags: ["Webflow", "Furniture", "E-Commerce"],
      metric: "Webflow Site",
      color: "#35C9CE",
      siteUrl: "https://renome.pk/",
    },
  ],
  technologies: [
    "Shopify",
    "Shopify Liquid",
    "Webflow",
    "Squarespace",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Figma",
    "GSAP",
    "Klaviyo",
  ],
  testimonials: [
    {
      name: "Ayesha Khan",
      role: "Founder, Hijab Eaze",
      quote: "It was great working with Muzammil. I highly recommend it",
      hasVideo: false,
    },
    {
      name: "Omar Farooq",
      role: "CEO, Machina",
      quote:
        "If you want someone who understands your problem quickly and solves it without drama, Muzammil is the best guy!",
      hasVideo: false,
    },
    {
      name: "Sarah Chen",
      role: "Founder, Lumen & Co.",
      quote:
        "Muzammil just gets it. Handed him a rough idea and got back a fully working store that looked incredible.",
      hasVideo: true,
    },
    {
      name: "Marcus Johnson",
      role: "Operations Lead, Northfield",
      quote:
        "No fluff, no delays. He built exactly what we needed and the site hasn't glitched once since launch.",
      hasVideo: true,
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, Marlow Studio",
      quote:
        "Super easy to work with. Fast turnaround, clean design, and he actually listens to what you want.",
      hasVideo: false,
    },
    {
      name: "David Park",
      role: "Founder, Aldercroft",
      quote:
        "Our old site was a mess. Muzammil cleaned it up, made it fast, and now our customers actually enjoy browsing.",
      hasVideo: false,
    },
  ],
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function RevealWrapper({ children, delay = 0, style: extraStyle = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

// ─── Shared Buttons ───────────────────────────────────────────────────────────

function PrimaryBtn({ children, onClick, href, type }) {
  const [hov, setHov] = useState(false);
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#51D2D6",
    color: "#292928",
    fontWeight: 600,
    padding: "13px 26px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
    transform: hov ? "translateY(-2px)" : "translateY(0)",
    boxShadow: hov ? "0 10px 32px rgba(81,210,214,0.38)" : "none",
    textDecoration: "none",
    justifyContent: "center",
  };
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={s}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </a>
    );
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      style={s}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
}

function SecondaryBtn({ children, onClick, href }) {
  const [hov, setHov] = useState(false);
  const s = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: hov ? "rgba(81,210,214,0.06)" : "transparent",
    color: "#292928",
    fontWeight: 500,
    padding: "13px 26px",
    borderRadius: 10,
    border: hov ? "1.5px solid #51D2D6" : "1.5px solid #E5E5E5",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
    textDecoration: "none",
  };
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={s}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </a>
    );
  return (
    <button
      onClick={onClick}
      style={s}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) =>
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "fit-content",
        background: scrolled
          ? "rgba(243,245,244,0.45)"
          : "rgba(243,245,244,0.22)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "14px",
        transition: "background 0.3s, border 0.3s",
        whiteSpace: "nowrap",
        boxShadow:
          "0 4px 24px rgba(81,210,214,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <div
        style={{
          padding: "12px 36px",
          display: "flex",
          alignItems: "center",
          gap: 48,
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 19,
            backgroundImage:
              "linear-gradient(135deg, #35C9CE, #51D2D6, #A1DEE0)",
            backgroundSize: "200% 200%",
            animation: "gradientFlow 7s ease infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            flexShrink: 0,
          }}
        >
          Muzammil
        </button>

        <div
          className="nav-links"
          style={{ display: "flex", gap: 36, alignItems: "center" }}
        >
          {[
            ["#projects", "Projects"],
            ["#process", "Process"],
            ["#tech", "Tech"],
            ["#testimonials", "Testimonials"],
          ].map(([href, label]) => (
            <button
              key={href}
              onClick={() => go(href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                color: "#5B5D5C",
                fontSize: 14,
                padding: "6px 0",
              }}
              className="nav-link-btn"
            >
              {label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexShrink: 0,
          }}
        >
          <span
            className="avail-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(117,198,105,0.12)",
              color: "#75C669",
              padding: "6px 13px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                background: "#75C669",
                borderRadius: "50%",
                animation: "pulseDot 2s ease-in-out infinite",
                display: "inline-block",
              }}
            />
            Available
          </span>
          <button
            onClick={() => go("#contact")}
            style={{
              background: "#51D2D6",
              color: "#292928",
              fontWeight: 600,
              padding: "9px 22px",
              borderRadius: 9,
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(81,210,214,0.38)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book Call
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="hero-orbit-section"
      style={{
        position: "relative",
        minHeight: "max(820px, 100svh)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "110px 24px 80px",
        textAlign: "center",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <ProjectShowcase />

        <div className="hero-copy-layer" style={{ width: "100%", maxWidth: 820, margin: "0 auto" }}>
        <RevealWrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <div style={{ position: "relative", width: 106, height: 106 }}>
              <img
                src="/pfp.jpg"
                alt="Muzammil"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  animation: "floatEl 6s ease-in-out infinite",
                  boxShadow: "0 8px 24px rgba(81,210,214,0.2)",
                  border: "3px solid rgba(81,210,214,0.2)",
                }}
              />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={90}>
          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              color: "#292928",
              lineHeight: 1.13,
              marginBottom: 22,
            }}
          >
            Building Online Stores
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #35C9CE, #51D2D6, #A1DEE0)",
                backgroundSize: "200% 200%",
                animation: "gradientFlow 6s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              That Convert & Scale
            </span>
          </h1>
        </RevealWrapper>

        <RevealWrapper delay={180}>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#5B5D5C",
              maxWidth: 560,
              margin: "0 auto 36px",
              lineHeight: 1.72,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            I design and build custom Shopify, Squarespace, and Webflow sites,
            from product pages that sell to full storefront launches that scale.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={260}>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <PrimaryBtn
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </PrimaryBtn>
            <SecondaryBtn
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Consultation
            </SecondaryBtn>
          </div>
        </RevealWrapper>
        </div>

      </div>
    </section>
  );
}

// ─── Cred Strip ───────────────────────────────────────────────────────────────

function CredStrip() {
  const loopItems = [...DATA.credibilityItems, ...DATA.credibilityItems];
  return (
    <section style={{ padding: "12px 0 28px", overflow: "hidden" }}>
      <div
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="marquee-track"
          style={{ display: "flex", gap: 10, width: "max-content" }}
        >
          {loopItems.map((item, i) => (
            <span
              key={i}
              style={{
                background: "rgba(243,245,244,0.8)",
                border: "1px solid rgba(81,210,214,0.2)",
                padding: "9px 18px",
                borderRadius: 100,
                fontWeight: 500,
                fontSize: 13,
                color: "#5B5D5C",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Results ─────────────────────────────────────────────────────────

function FeaturedResults() {
  return (
    <section style={{ padding: "72px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <RevealWrapper>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#35C9CE",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Featured Results
            </p>
          </RevealWrapper>
          <RevealWrapper delay={90}>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#292928",
              }}
            >
              Measurable Impact
            </h2>
          </RevealWrapper>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 18,
          }}
        >
          {DATA.featuredResults.map((item, i) => (
            <RevealWrapper key={i} delay={i * 70}>
              <MetricCard item={item} index={i} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ item, index = 0 }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(243,245,244,0.75)",
        backdropFilter: "blur(16px)",
        border: hov
          ? "1px solid rgba(81,210,214,0.5)"
          : "1px solid rgba(81,210,214,0.18)",
        borderRadius: 18,
        padding: "26px 22px",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hov
          ? "0 14px 44px rgba(41,41,40,0.07), 0 0 28px rgba(81,210,214,0.1)"
          : "none",
        transition: "all 0.38s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "#5B5D5C",
          marginBottom: 8,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#292928",
          lineHeight: 1,
          marginBottom: 6,
          display: "inline-block",
          animation: "numberGlow 3.2s ease-in-out infinite",
          animationDelay: `${index * 0.3}s`,
        }}
      >
        {item.metric}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "#35C9CE",
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {item.description}
      </p>
    </div>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export function DiscreteProjectShowcase() {
  const [activeTab, setActiveTab] = useState("all");
  const [frontIndex, setFrontIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [pinned, setPinned] = useState(false);
  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "Shopify", label: "Shopify" },
    { id: "Squarespace", label: "Squarespace" },
    { id: "Webflow", label: "Webflow" },
  ];
  const filtered =
    activeTab === "all"
      ? DATA.projects
      : DATA.projects.filter((p) => p.category === activeTab);
  const selectedProject = selectedIndex === null ? null : filtered[selectedIndex];

  useEffect(() => {
    if (
      selectedIndex !== null ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setFrontIndex((current) => (current + 1) % filtered.length);
    }, 1900);
    return () => window.clearInterval(interval);
  }, [filtered.length, selectedIndex]);

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setFrontIndex(0);
    setSelectedIndex(null);
    setPinned(false);
  };

  const rotate = (direction) => {
    setFrontIndex((current) =>
      (current + direction + filtered.length) % filtered.length,
    );
    setSelectedIndex(null);
    setPinned(false);
  };

  const openProject = (project, index) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      setPinned(true);
      return;
    }
    window.open(project.siteUrl, "_blank", "noopener,noreferrer");
  };

  const getCardPosition = (index) => {
    if (index === selectedIndex) {
      return {
        left: "50%",
        top: "38%",
        zIndex: 40,
        opacity: 1,
        filter: "none",
        transform: "translate(-50%, -50%) scale(2.5)",
      };
    }

    const relative = (index - frontIndex + filtered.length) % filtered.length;
    const angle = (relative / filtered.length) * Math.PI * 2 + Math.PI / 2;
    const depth = (Math.sin(angle) + 1) / 2;
    const scale = 0.7 + depth * 0.38;

    return {
      left: `${50 + Math.cos(angle) * 43}%`,
      top: `${48 + Math.sin(angle) * 34}%`,
      zIndex: 5 + Math.round(depth * 18),
      opacity: 0.38 + depth * 0.58,
      filter: `saturate(${0.72 + depth * 0.28})`,
      transform: `translate(-50%, -50%) scale(${scale})`,
    };
  };

  return (
    <section id="projects" style={{ padding: "28px 0 0" }}>
      <style>{`
        .project-circle-stage {
          position: relative;
          width: 100%;
          height: clamp(540px, 54vw, 650px);
          margin-top: 4px;
          overflow: hidden;
          outline: none;
        }
        .project-circle-stage:focus-visible {
          outline: 2px solid #51D2D6;
          outline-offset: 6px;
          border-radius: 22px;
        }
        .project-orbit-track {
          position: absolute;
          z-index: 1;
          top: 14%;
          right: 6%;
          bottom: 18%;
          left: 6%;
          border: 1px solid rgba(81, 210, 214, 0.22);
          border-radius: 50%;
          box-shadow: inset 0 0 80px rgba(81, 210, 214, 0.035);
          pointer-events: none;
        }
        .project-orbit-track::after {
          content: '';
          position: absolute;
          inset: 14% 7%;
          border: 1px dashed rgba(81, 210, 214, 0.1);
          border-radius: inherit;
        }
        .circle-project-card {
          position: absolute;
          width: clamp(74px, 10.8vw, 132px);
          aspect-ratio: 16 / 9;
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(81, 210, 214, 0.38);
          border-radius: 6px;
          background: #E8EDED;
          box-shadow: 0 8px 22px rgba(41, 41, 40, 0.08);
          cursor: pointer;
          transition:
            left 620ms cubic-bezier(0.77, 0, 0.175, 1),
            top 620ms cubic-bezier(0.77, 0, 0.175, 1),
            transform 620ms cubic-bezier(0.77, 0, 0.175, 1),
            opacity 260ms ease,
            filter 260ms ease,
            border-color 180ms ease,
            box-shadow 260ms ease;
          will-change: left, top, transform;
        }
        .circle-project-card.is-active {
          border-color: rgba(81, 210, 214, 0.88);
          box-shadow:
            0 16px 46px rgba(41, 41, 40, 0.15),
            0 0 0 2px rgba(81, 210, 214, 0.12);
          cursor: pointer;
        }
        .circle-project-card:active {
          transition-duration: 140ms;
        }
        .circle-project-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .circle-project-card span {
          position: absolute;
          right: 5px;
          bottom: 5px;
          display: grid;
          width: 14px;
          height: 14px;
          place-items: center;
          border-radius: 50%;
          color: #292928;
          background: rgba(255,255,255,0.9);
          font: 700 5px/1 'DM Sans', sans-serif;
          opacity: 0;
          transition: opacity 180ms ease;
        }
        .circle-project-card.is-active span {
          opacity: 1;
        }
        .circle-project-detail {
          position: absolute;
          top: 61%;
          left: 50%;
          z-index: 42;
          width: min(400px, calc(100% - 150px));
          padding: 18px 20px;
          border: 1px solid rgba(81, 210, 214, 0.3);
          border-radius: 14px;
          background: rgba(243, 245, 244, 0.92);
          box-shadow: 0 14px 44px rgba(41, 41, 40, 0.08);
          backdrop-filter: blur(16px);
          transform: translateX(-50%);
          animation: circleDetailIn 220ms cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes circleDetailIn {
          from { opacity: 0; transform: translate(-50%, 7px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .circle-detail-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
          color: #35C9CE;
          font: 700 10px/1.2 'DM Sans', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .circle-project-detail h3 {
          margin: 0 0 7px;
          color: #292928;
          font: 700 clamp(1rem, 2vw, 1.35rem)/1.2 'Sora', sans-serif;
        }
        .circle-project-detail p {
          display: -webkit-box;
          margin: 0 0 12px;
          overflow: hidden;
          color: #5B5D5C;
          font: 400 12px/1.55 'DM Sans', sans-serif;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .circle-detail-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .circle-detail-tags {
          display: flex;
          gap: 5px;
          overflow: hidden;
        }
        .circle-detail-tags span {
          padding: 4px 8px;
          border-radius: 100px;
          color: #5B5D5C;
          background: #E8EDED;
          font: 500 9px/1 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .circle-project-detail a {
          flex: 0 0 auto;
          color: #292928;
          font: 700 10px/1 'DM Sans', sans-serif;
          text-decoration: none;
          text-transform: uppercase;
        }
        .circle-arrow {
          position: absolute;
          top: 48%;
          z-index: 60;
          display: grid;
          width: 44px;
          height: 44px;
          padding: 0;
          place-items: center;
          border: 1px solid rgba(81, 210, 214, 0.45);
          border-radius: 50%;
          color: #292928;
          background: rgba(243,245,244,0.9);
          box-shadow: 0 8px 24px rgba(41,41,40,0.06);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transform: translateY(-50%);
          transition:
            transform 140ms cubic-bezier(0.23, 1, 0.32, 1),
            border-color 180ms ease,
            background-color 180ms ease;
        }
        .circle-arrow.prev { left: 1.5%; }
        .circle-arrow.next { right: 1.5%; }
        .circle-arrow:active { transform: translateY(-50%) scale(0.96); }
        .circle-project-count {
          position: absolute;
          right: 0;
          bottom: 5%;
          left: 0;
          z-index: 42;
          color: #5B5D5C;
          font: 600 10px/1 'DM Sans', sans-serif;
          letter-spacing: 0.12em;
          text-align: center;
        }
        .circle-project-hint {
          position: absolute;
          top: 47%;
          left: 50%;
          z-index: 2;
          color: rgba(91, 93, 92, 0.72);
          font: 600 10px/1.4 'DM Sans', sans-serif;
          letter-spacing: 0.1em;
          text-align: center;
          text-transform: uppercase;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        @media (hover: hover) and (pointer: fine) {
          .circle-arrow:hover {
            border-color: #51D2D6;
            background: #fff;
          }
          .circle-project-detail a:hover { color: #35C9CE; }
        }
        @media (max-width: 700px) {
          .project-circle-stage { height: 520px; }
          .project-orbit-track { inset: 11% 7% 17%; }
          .circle-project-card.is-active {
            transform: translate(-50%, -50%) scale(2.55) !important;
          }
          .circle-project-detail {
            top: 57%;
            width: calc(100% - 72px);
            padding: 14px 15px;
          }
          .circle-project-detail p { font-size: 11px; }
          .circle-detail-tags span:nth-child(n + 3) { display: none; }
          .circle-arrow {
            top: 47%;
            width: 38px;
            height: 38px;
          }
          .circle-arrow.prev { left: 0; }
          .circle-arrow.next { right: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .circle-project-card,
          .circle-project-detail,
          .circle-arrow {
            animation: none;
            transition-duration: 1ms;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <RevealWrapper delay={80}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => selectTab(tab.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 8,
                    border: "none",
                    background:
                      activeTab === tab.id ? "#51D2D6" : "transparent",
                    color: activeTab === tab.id ? "#292928" : "#5B5D5C",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.22s",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </RevealWrapper>
        </div>

        <RevealWrapper>
          <div
            className="project-circle-stage"
            tabIndex={0}
            role="region"
            aria-label="Project gallery. Use the previous and next buttons or arrow keys to rotate projects."
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") rotate(-1);
              if (event.key === "ArrowRight") rotate(1);
              if (event.key === "Enter" && selectedProject) {
                openProject(selectedProject, selectedIndex);
              }
            }}
            onMouseLeave={() => {
              if (!pinned) setSelectedIndex(null);
            }}
          >
            <div className="project-orbit-track" aria-hidden="true" />
            {!selectedProject && (
              <div className="circle-project-hint">Hover or tap<br />a project</div>
            )}

            {filtered.map((project, index) => {
              const imageIndex = DATA.projects.indexOf(project) + 1;
              const isSelected = index === selectedIndex;
              const isFront = index === frontIndex;
              return (
                <button
                  key={project.id}
                  className={`circle-project-card ${isSelected ? "is-active" : ""} ${isFront ? "is-front" : ""}`}
                  style={getCardPosition(index)}
                  onMouseEnter={() => {
                    setSelectedIndex(index);
                    setPinned(false);
                  }}
                  onFocus={() => {
                    setSelectedIndex(index);
                    setPinned(true);
                  }}
                  onClick={() => openProject(project, index)}
                  aria-label={isSelected ? `Open ${project.title}` : `Show ${project.title} details`}
                >
                  <img src={`/${imageIndex}.png`} alt="" />
                  <span aria-hidden="true">↗</span>
                </button>
              );
            })}

            {selectedProject && (
              <div key={selectedProject.id} className="circle-project-detail">
                <div className="circle-detail-meta">
                  <span>{selectedProject.metric}</span>
                  <span>{String(selectedIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span>
                </div>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="circle-detail-bottom">
                  <div className="circle-detail-tags">
                    {selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={selectedProject.siteUrl} target="_blank" rel="noreferrer">View project ↗</a>
                </div>
              </div>
            )}

            <button className="circle-arrow prev" onClick={() => rotate(-1)} aria-label="Previous project">←</button>
            <button className="circle-arrow next" onClick={() => rotate(1)} aria-label="Next project">→</button>
            <div className="circle-project-count" aria-hidden="true">
              {String((selectedIndex ?? frontIndex) + 1).padStart(2, "0")} — {String(filtered.length).padStart(2, "0")}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function ContinuousOrbitCard({
  project,
  imageIndex,
  index,
  layer,
  cardRef,
  pausedRef,
  hoveredIndexRef,
  returnTimerRef,
  inspectingCardRef,
}) {
  const faceScreen = (event) => {
    window.clearTimeout(returnTimerRef.current);
    if (
      inspectingCardRef.current &&
      inspectingCardRef.current !== event.currentTarget
    ) {
      inspectingCardRef.current.classList.remove("is-inspecting");
    }

    pausedRef.current = true;
    hoveredIndexRef.current = index;
    inspectingCardRef.current = event.currentTarget;
    event.currentTarget.classList.add("is-inspecting");
  };

  const resumeOrbit = (event) => {
    if (hoveredIndexRef.current === index) hoveredIndexRef.current = -1;
    window.clearTimeout(returnTimerRef.current);
    const card = event.currentTarget;
    returnTimerRef.current = window.setTimeout(() => {
      card.classList.remove("is-inspecting");
      if (inspectingCardRef.current === card) inspectingCardRef.current = null;
      if (hoveredIndexRef.current === -1) pausedRef.current = false;
    }, 220);
  };

  const cardContents = (
    <div className="continuous-card-surface">
      <div className="continuous-card-face continuous-card-front">
        <img src={`/projects/${imageIndex}.webp`} alt="" />
        <div className="continuous-card-caption">
          <span>{project.category}</span>
          <strong>{project.title}</strong>
          <small>View project ↗</small>
        </div>
      </div>
      <div className="continuous-card-face continuous-card-back">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>MDSR</strong>
        <small>{project.category}</small>
      </div>
    </div>
  );

  if (layer === "back") {
    return (
      <div ref={cardRef} className="continuous-orbit-card" aria-hidden="true">
        {cardContents}
      </div>
    );
  }

  return (
    <a
      ref={cardRef}
      className="continuous-orbit-card"
      href={project.siteUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      onMouseEnter={faceScreen}
      onMouseLeave={resumeOrbit}
      onFocus={faceScreen}
      onBlur={resumeOrbit}
    >
      {cardContents}
    </a>
  );
}

function ProjectShowcase() {
  const backCardsRef = useRef([]);
  const frontCardsRef = useRef([]);
  const rotationRef = useRef(0);
  const pausedRef = useRef(false);
  const frameRef = useRef();
  const orbitLayerRef = useRef();
  const orbitBoundsRef = useRef({ width: 1200, height: 820 });
  const hoveredIndexRef = useRef(-1);
  const returnTimerRef = useRef();
  const inspectingCardRef = useRef(null);

  useEffect(() => {
    let previousTime = 0;
    const frontInteractionState = [];
    const frontLayerState = [];
    const backLayerState = [];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const resizeObserver = new ResizeObserver(([entry]) => {
      orbitBoundsRef.current = {
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      };
    });
    if (orbitLayerRef.current) resizeObserver.observe(orbitLayerRef.current);

    const renderFrame = (time) => {
      const delta = previousTime ? Math.min(time - previousTime, 32) : 16;
      previousTime = time;

      if (!reducedMotion && !pausedRef.current && !document.hidden) {
        rotationRef.current += delta * 0.00013;
      }

      DATA.projects.forEach((_, index) => {
        const angle =
          (index / DATA.projects.length) * Math.PI * 2 +
          rotationRef.current;
        const x = Math.cos(angle) * orbitBoundsRef.current.width * 0.33;
        const depth = Math.sin(angle);
        const y = depth * orbitBoundsRef.current.height * 0.23;
        const scale = 0.72 + (depth + 1) * 0.18;
        const rawRotationY = 90 - (angle * 180) / Math.PI;
        const rotationY = ((rawRotationY + 180) % 360 + 360) % 360 - 180;
        const isInspecting = hoveredIndexRef.current === index;
        const transform =
          `translate3d(${x}px, ${y}px, ${depth * 170}px) ` +
          "translate(-50%, -50%) " +
          `rotateY(${isInspecting ? 0 : rotationY}deg) ` +
          `scale(${isInspecting ? scale * 1.48 : scale})`;
        const frontVisibility = Math.max(0, Math.min(1, (depth + 0.08) * 7));
        const backVisibility = Math.max(0, Math.min(0.68, (-depth + 0.08) * 4));
        const frontCard = frontCardsRef.current[index];
        const backCard = backCardsRef.current[index];

        if (frontCard) {
          frontCard.style.opacity = String(frontVisibility);
          frontCard.style.transform = transform;
          const layer = isInspecting ? 100 : 20 + Math.round(depth * 10);
          if (frontLayerState[index] !== layer) {
            frontCard.style.zIndex = String(layer);
            frontLayerState[index] = layer;
          }
          const isInteractive = depth > 0.03;
          if (frontInteractionState[index] !== isInteractive) {
            frontCard.style.pointerEvents = isInteractive ? "auto" : "none";
            frontCard.tabIndex = isInteractive ? 0 : -1;
            frontInteractionState[index] = isInteractive;
          }
        }

        if (backCard) {
          backCard.style.opacity = String(backVisibility);
          backCard.style.transform = transform;
          const layer = 10 + Math.round(depth * 8);
          if (backLayerState[index] !== layer) {
            backCard.style.zIndex = String(layer);
            backLayerState[index] = layer;
          }
        }
      });

      frameRef.current = window.requestAnimationFrame(renderFrame);
    };

    frameRef.current = window.requestAnimationFrame(renderFrame);
    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-copy-layer {
          position: relative;
          z-index: 15;
        }
        .hero-orbit-layer {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          perspective: 1100px;
          pointer-events: none;
        }
        .hero-orbit-back { z-index: 5; }
        .hero-orbit-front { z-index: 25; }
        .hero-orbit-track {
          position: absolute;
          top: 33%;
          right: 16.5%;
          bottom: 21%;
          left: 16.5%;
          border: 1px solid rgba(81, 210, 214, 0.17);
          border-radius: 50%;
          box-shadow: inset 0 0 90px rgba(81, 210, 214, 0.025);
        }
        .hero-orbit-track::after {
          content: '';
          position: absolute;
          inset: 12% 5%;
          border: 1px dashed rgba(81, 210, 214, 0.07);
          border-radius: inherit;
        }
        .continuous-orbit-card {
          position: absolute;
          top: 56%;
          left: 50%;
          width: clamp(88px, 9.4vw, 140px);
          aspect-ratio: 16 / 9;
          color: inherit;
          text-decoration: none;
          transform-style: preserve-3d;
          will-change: transform, opacity;
        }
        .hero-orbit-front .continuous-orbit-card {
          pointer-events: auto;
        }
        .hero-orbit-front .continuous-orbit-card.is-inspecting {
          transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .continuous-card-surface {
          position: absolute;
          inset: 0;
          border-radius: 7px;
          transform-style: preserve-3d;
          transform-origin: center;
          transition: filter 180ms ease;
        }
        .continuous-card-face {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 1px solid rgba(81, 210, 214, 0.34);
          border-radius: 7px;
          background: #E8EDED;
          box-shadow: 0 9px 25px rgba(41, 41, 40, 0.1);
          backface-visibility: hidden;
        }
        .continuous-card-front img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 260ms cubic-bezier(0.23, 1, 0.32, 1), filter 220ms ease;
        }
        .continuous-card-back {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          color: #292928;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.75), transparent 45%),
            linear-gradient(135deg, #A1DEE0, #51D2D6);
          transform: rotateY(180deg);
        }
        .continuous-card-back span,
        .continuous-card-back small {
          font: 600 7px/1 'DM Sans', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .continuous-card-back strong {
          font: 800 14px/1 'Sora', sans-serif;
          letter-spacing: -0.05em;
        }
        .continuous-card-caption {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 9px 10px;
          color: #fff;
          background: linear-gradient(to top, rgba(20, 24, 24, 0.94), rgba(20,24,24,0.18) 58%, transparent);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 180ms ease, transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .continuous-card-caption span {
          margin-bottom: 2px;
          color: #A1DEE0;
          font: 700 5px/1 'DM Sans', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .continuous-card-caption strong {
          font: 700 9px/1.15 'Sora', sans-serif;
        }
        .continuous-card-caption small {
          margin-top: 4px;
          font: 600 5px/1 'DM Sans', sans-serif;
          text-transform: uppercase;
        }
        .hero-orbit-note {
          position: absolute;
          bottom: 3.5%;
          left: 50%;
          z-index: 70;
          color: rgba(91,93,92,0.76);
          font: 600 9px/1 'DM Sans', sans-serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transform: translateX(-50%);
          pointer-events: none;
        }
        @media (hover: hover) and (pointer: fine) {
          .hero-orbit-front .continuous-orbit-card:hover .continuous-card-surface,
          .hero-orbit-front .continuous-orbit-card:focus-visible .continuous-card-surface {
            z-index: 100;
            filter: drop-shadow(0 18px 24px rgba(41,41,40,0.18));
          }
          .hero-orbit-front .continuous-orbit-card:hover .continuous-card-front img,
          .hero-orbit-front .continuous-orbit-card:focus-visible .continuous-card-front img {
            transform: scale(1.04);
            filter: saturate(0.72) brightness(0.72);
          }
          .hero-orbit-front .continuous-orbit-card:hover .continuous-card-caption,
          .hero-orbit-front .continuous-orbit-card:focus-visible .continuous-card-caption {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 700px) {
          .hero-orbit-section { min-height: 840px !important; }
          .continuous-orbit-card { width: clamp(70px, 22vw, 90px); }
          .hero-orbit-track { top: 36%; right: 16.5%; bottom: 16%; left: 16.5%; }
          .hero-orbit-note { bottom: 2.5%; font-size: 8px; white-space: nowrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .continuous-card-surface,
          .continuous-card-caption,
          .continuous-card-front img {
            transition-duration: 1ms;
          }
        }
      `}</style>

      <div id="projects" className="hero-orbit-layer hero-orbit-back" aria-hidden="true">
        <div className="hero-orbit-track" />
        {DATA.projects.map((project, index) => (
          <ContinuousOrbitCard
            key={`back-${project.id}`}
            project={project}
            imageIndex={index + 1}
            index={index}
            layer="back"
            pausedRef={pausedRef}
            hoveredIndexRef={hoveredIndexRef}
            returnTimerRef={returnTimerRef}
            inspectingCardRef={inspectingCardRef}
            cardRef={(node) => { backCardsRef.current[index] = node; }}
          />
        ))}
      </div>

      <div ref={orbitLayerRef} className="hero-orbit-layer hero-orbit-front">
        {DATA.projects.map((project, index) => (
          <ContinuousOrbitCard
            key={`front-${project.id}`}
            project={project}
            imageIndex={index + 1}
            index={index}
            layer="front"
            pausedRef={pausedRef}
            hoveredIndexRef={hoveredIndexRef}
            returnTimerRef={returnTimerRef}
            inspectingCardRef={inspectingCardRef}
            cardRef={(node) => { frontCardsRef.current[index] = node; }}
          />
        ))}
        <div className="hero-orbit-note">Hover to inspect · Click to visit · {DATA.projects.length} projects</div>
      </div>
    </>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  const steps = [
    {
      label: "Idea",
      sub: "Strategy & Discovery",
      accent: true,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
    {
      label: "Design",
      sub: "UX & Visual Design",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      label: "Build",
      sub: "Theme & Store Build",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      label: "Launch",
      sub: "QA & Go-Live",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      ),
    },
    {
      label: "Scale",
      sub: "Speed & Conversion",
      mint: true,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
          <path d="M17 6h6v6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(81,210,214,0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <RevealWrapper>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#35C9CE",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Process
            </p>
          </RevealWrapper>
          <RevealWrapper delay={80}>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#292928",
              }}
            >
              From Idea to Scale
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={160}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 8,
            }}
          >
            {steps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, total }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 110,
        }}
      >
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
            background: step.accent ? "#51D2D6" : "white",
            border: step.accent
              ? "none"
              : `2px solid ${step.mint ? "#75C669" : "#51D2D6"}`,
            color: step.accent ? "#292928" : step.mint ? "#75C669" : "#35C9CE",
            transition: "all 0.3s",
            transform: hov ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hov ? "0 10px 26px rgba(81,210,214,0.22)" : undefined,
            animation:
              step.accent && !hov
                ? "softPulse 3s ease-in-out infinite"
                : "none",
          }}
        >
          {step.icon}
        </div>
        <p
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: "#292928",
            marginBottom: 3,
          }}
        >
          {step.label}
        </p>
        <p
          style={{
            fontSize: 11,
            color: "#5B5D5C",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {step.sub}
        </p>
      </div>
      {index < total - 1 && (
        <div
          style={{
            width: 28,
            height: 2,
            background:
              "linear-gradient(90deg, #51D2D6, rgba(81,210,214,0.15))",
            flexShrink: 0,
            marginBottom: 28,
          }}
        />
      )}
    </div>
  );
}

// ─── Tech ─────────────────────────────────────────────────────────────────────

function Tech() {
  return (
    <section id="tech" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <RevealWrapper>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#35C9CE",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Tech Stack
            </p>
          </RevealWrapper>
          <RevealWrapper delay={80}>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#292928",
              }}
            >
              Technologies I Use
            </h2>
          </RevealWrapper>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {DATA.technologies.map((tech, i) => (
            <RevealWrapper key={tech} delay={i * 35}>
              <TechPill tech={tech} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechPill({ tech }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "10px 20px",
        borderRadius: 11,
        fontSize: 13,
        fontWeight: 600,
        color: hov ? "#292928" : "#5B5D5C",
        background: hov ? "rgba(81,210,214,0.07)" : "white",
        border: hov ? "1px solid #51D2D6" : "1px solid #E5E5E5",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 22px rgba(81,210,214,0.16)" : "none",
        transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
        fontFamily: "'DM Sans', sans-serif",
        cursor: "default",
      }}
    >
      {tech}
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "80px 24px",
        background:
          "linear-gradient(180deg, transparent, rgba(81,210,214,0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <RevealWrapper>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#35C9CE",
                marginBottom: 10,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Testimonials
            </p>
          </RevealWrapper>
          <RevealWrapper delay={80}>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                fontWeight: 700,
                color: "#292928",
              }}
            >
              What Clients Say
            </h2>
          </RevealWrapper>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {DATA.testimonials.map((t, i) => (
            <RevealWrapper key={i} delay={i * 55}>
              <TestimonialCard t={t} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  const [hov, setHov] = useState(false);
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(243,245,244,0.75)",
        backdropFilter: "blur(16px)",
        border: hov
          ? "1px solid rgba(81,210,214,0.42)"
          : "1px solid rgba(81,210,214,0.18)",
        borderRadius: 18,
        padding: "22px",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 12px 40px rgba(41,41,40,0.07)" : "none",
        transition: "all 0.34s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {t.hasVideo && (
        <div style={{ marginBottom: 12 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 6,
              background: "rgba(81,210,214,0.1)",
              color: "#35C9CE",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            VIDEO REVIEW
          </span>
        </div>
      )}
      <p
        style={{
          fontSize: 14,
          color: "#5B5D5C",
          lineHeight: 1.72,
          marginBottom: 18,
          fontFamily: "'DM Sans', sans-serif",
          fontStyle: "italic",
        }}
      >
        "{t.quote}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#A1DEE0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: "#292928",
            fontFamily: "'Sora', sans-serif",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <p
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#292928",
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontSize: 11,
              color: "#5B5D5C",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── CTA / Contact ────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section id="contact" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <RevealWrapper>
          <div
            style={{
              background: "rgba(243,245,244,0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(81,210,214,0.2)",
              borderRadius: 24,
              padding: "clamp(36px, 7vw, 72px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(81,210,214,0.18), transparent 70%)",
                pointerEvents: "none",
                animation: "driftBlob1 11s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -70,
                left: -70,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(117,198,105,0.1), transparent 70%)",
                pointerEvents: "none",
                animation: "driftBlob2 13s ease-in-out infinite",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#292928",
                  marginBottom: 18,
                }}
              >
                Need an{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #35C9CE, #51D2D6, #A1DEE0)",
                    backgroundSize: "200% 200%",
                    animation: "gradientFlow 6s ease infinite",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Online Store
                </span>
                ?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#5B5D5C",
                  maxWidth: 500,
                  margin: "0 auto 32px",
                  lineHeight: 1.72,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                I help brands launch fast and convert better with custom
                Shopify, Squarespace, and Webflow builds that look amazing and
                perform flawlessly.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 36,
                }}
              >
                {[
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    label: "Replies within 24 hours",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Remote Worldwide",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(81,210,214,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#35C9CE",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 13.5,
                        color: "#5B5D5C",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <PrimaryBtn href="mailto:hello@muzammil.dev">
                Start a Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </PrimaryBtn>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

// ─── Background Orbs ─────────────────────────────────────────────────────────

function BackgroundOrbs() {
  const orbs = [
    {
      width: 700,
      height: 700,
      top: "-10%",
      left: "55%",
      background:
        "radial-gradient(circle, rgba(81,210,214,0.55) 0%, rgba(81,210,214,0.3) 25%, rgba(81,210,214,0.1) 55%, transparent 75%)",
      animation: "driftBlob1 18s ease-in-out infinite",
      blur: 40,
    },
    {
      width: 600,
      height: 600,
      top: "10%",
      left: "-10%",
      background:
        "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.28) 25%, rgba(139,92,246,0.08) 55%, transparent 75%)",
      animation: "driftBlob2 22s ease-in-out infinite",
      blur: 40,
    },
    {
      width: 550,
      height: 550,
      top: "34%",
      left: "70%",
      background:
        "radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(99,102,241,0.24) 25%, rgba(99,102,241,0.06) 55%, transparent 75%)",
      animation: "driftBlob3 26s ease-in-out infinite",
      blur: 38,
    },
    {
      width: 480,
      height: 480,
      top: "50%",
      left: "12%",
      background:
        "radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.22) 25%, rgba(168,85,247,0.06) 55%, transparent 75%)",
      animation: "driftBlob4 20s ease-in-out infinite",
      blur: 38,
    },
    {
      width: 580,
      height: 580,
      top: "66%",
      left: "52%",
      background:
        "radial-gradient(circle, rgba(30,64,175,0.42) 0%, rgba(30,64,175,0.22) 25%, rgba(30,64,175,0.06) 55%, transparent 75%)",
      animation: "driftBlob1 24s ease-in-out infinite reverse",
      blur: 45,
    },
    {
      width: 400,
      height: 400,
      top: "78%",
      left: "-5%",
      background:
        "radial-gradient(circle, rgba(81,210,214,0.5) 0%, rgba(81,210,214,0.26) 25%, rgba(81,210,214,0.06) 55%, transparent 75%)",
      animation: "driftBlob2 17s ease-in-out infinite reverse",
      blur: 35,
    },
    {
      width: 450,
      height: 450,
      top: "22%",
      left: "36%",
      background:
        "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.18) 25%, rgba(124,58,237,0.04) 55%, transparent 75%)",
      animation: "driftBlob3 30s ease-in-out infinite",
      blur: 42,
    },
    {
      width: 350,
      height: 350,
      top: "88%",
      left: "74%",
      background:
        "radial-gradient(circle, rgba(161,222,224,0.55) 0%, rgba(161,222,224,0.28) 25%, rgba(161,222,224,0.08) 55%, transparent 75%)",
      animation: "driftBlob4 21s ease-in-out infinite reverse",
      blur: 32,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: orb.width,
            height: orb.height,
            top: orb.top,
            left: orb.left,
            borderRadius: "50%",
            background: orb.background,
            filter: `blur(${orb.blur}px)`,
            animation: orb.animation,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: #F0F4F5; color: #5B5D5C; overflow-x: hidden; }
        #root { width: 100%; }

        @keyframes rotateRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatEl { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.55; transform: scale(1.25); } }
        @keyframes shimmerSweep {
          0% { transform: translateX(-160%) rotate(15deg); opacity: 0; }
          12% { opacity: 1; } 50% { opacity: 1; } 88% { opacity: 0; }
          100% { transform: translateX(260%) rotate(15deg); opacity: 0; }
        }
        @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marqueeScroll 32s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes numberGlow { 0%, 100% { text-shadow: 0 0 0 rgba(81,210,214,0); } 50% { text-shadow: 0 0 18px rgba(81,210,214,0.35); } }
        @keyframes softPulse { 0%, 100% { box-shadow: 0 0 16px rgba(81,210,214,0.22); } 50% { box-shadow: 0 0 30px rgba(81,210,214,0.42); } }
        @keyframes driftBlob1 { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(22px, -18px) scale(1.04); } 66% { transform: translate(-12px, 14px) scale(0.97); } }
        @keyframes driftBlob2 { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(-26px, 20px) scale(1.06); } 66% { transform: translate(16px, -10px) scale(0.96); } }
        @keyframes driftBlob3 { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(14px, 22px) scale(1.03); } 66% { transform: translate(-20px, -16px) scale(1.05); } }
        @keyframes driftBlob4 { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(-18px, -22px) scale(0.97); } 66% { transform: translate(24px, 12px) scale(1.04); } }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F0F4F5; }
        ::-webkit-scrollbar-thumb { background: #A1DEE0; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #51D2D6; }
        .nav-link-btn:hover { color: #292928 !important; }
        .nav-links { display: flex; }

        @media (max-width: 700px) {
          .nav-links { display: none !important; }
          .avail-badge { display: none !important; }
        }
        @media (max-width: 500px) {
          nav { margin: 10px 12px 0 !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      <Nav />
      <main style={{ width: "100%", position: "relative" }}>
        <BackgroundOrbs />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <CredStrip />
          <FeaturedResults />
          <Process />
          <Tech />
          <Testimonials />
          <CTASection />
        </div>
      </main>
    </>
  );
}
