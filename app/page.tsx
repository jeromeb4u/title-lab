"use client";

import { useState } from "react";
import {
  Zap,
  Target,
  Sparkles,
  BarChart3,
  Layers,
  History,
  Check,
  Copy,
  Menu,
  X,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

// ─── Mock title data ─────────────────────────────────────────────────────────
const MOCK_TITLES = [
  { rank: 1, title: "I Tried This For 30 Days — My Results SHOCKED Me", ctr: 94 },
  { rank: 2, title: "The #1 Mistake You're Making With Your Content", ctr: 91 },
  { rank: 3, title: "Why 99% of Creators Fail (And How to Be the 1%)", ctr: 88 },
  { rank: 4, title: "[CASE STUDY] How I Hit 1M Views in 2 Weeks", ctr: 85 },
  { rank: 5, title: "This SIMPLE Change 3x'd My CTR Overnight", ctr: 82 },
  { rank: 6, title: "The Hidden Psychology Behind Viral Titles", ctr: 79 },
  { rank: 7, title: "Stop Making These Title Mistakes (Do This Instead)", ctr: 76 },
  { rank: 8, title: "I Analyzed 1000 Viral Videos — Here's What I Found", ctr: 73 },
  { rank: 9, title: "How to Write Titles That Actually Get Clicked", ctr: 70 },
  { rank: 10, title: "The Ultimate Title Formula (Copy & Paste)", ctr: 67 },
];

const NICHE_OPTIONS = [
  "Gaming",
  "Tech Reviews",
  "Lifestyle",
  "Finance",
  "Education",
  "Fitness",
  "Cooking",
  "Travel",
];

// ─── NavBar ──────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-text">
              Title<span className="text-primary">Lab</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted hover:text-primary transition-colors">
              Pricing
            </a>
            <button className="bg-primary text-background px-5 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Try Free
            </button>
          </div>

          <button className="md:hidden text-text" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#features" className="text-muted hover:text-primary">Features</a>
            <a href="#how-it-works" className="text-muted hover:text-primary">How It Works</a>
            <a href="#pricing" className="text-muted hover:text-primary">Pricing</a>
            <button className="bg-primary text-background px-5 py-2 rounded-lg font-semibold w-fit">
              Try Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">AI-Powered Title Generation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
          Your next viral title.
          <br />
          <span className="text-primary">Generated in seconds.</span>
        </h1>

        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          The wrong title kills great content before it gets a single view. TitleLab AI
          generates 10 high-CTR YouTube title options — ranked, scored, and ready to use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-background px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            Generate Titles Free
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="border border-border text-text px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-primary/50 transition-colors">
            See Examples
          </button>
        </div>

        <p className="text-sm text-muted mt-6">No credit card required. Free starter plan forever.</p>
      </div>
    </section>
  );
}

// ─── Title Preview Demo ──────────────────────────────────────────────────────
function TitlePreview() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [audience, setAudience] = useState("");
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState<typeof MOCK_TITLES>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = () => {
    if (!topic || !niche) return;
    setLoading(true);
    setTitles([]);
    setTimeout(() => {
      setLoading(false);
      setTitles(MOCK_TITLES);
    }, 2000);
  };

  const handleCopy = (title: string, index: number) => {
    navigator.clipboard.writeText(title);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="demo">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-3">Try It Now — Enter Your Topic</h2>
          <p className="text-muted">Watch the AI generate 10 ranked titles in real time</p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm text-muted mb-2">Video Topic</label>
              <input
                type="text"
                placeholder="e.g. How to grow on YouTube"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-muted mb-2">Niche</label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select niche...</option>
                {NICHE_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-muted mb-2">Target Audience</label>
              <input
                type="text"
                placeholder="e.g. New YouTubers"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || !niche || loading}
            className="w-full bg-primary text-background font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-8"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate 10 Titles
              </>
            )}
          </button>

          {/* Results */}
          {loading && (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-background rounded-xl p-4 animate-pulse-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-border rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-border rounded w-3/4" />
                      <div className="h-2 bg-border rounded w-full" />
                    </div>
                    <div className="w-20 h-8 bg-border rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {titles.length > 0 && (
            <div className="space-y-3">
              {titles.map((t, i) => (
                <div
                  key={i}
                  className="bg-background rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 border border-transparent transition-colors"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                    #{t.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-text font-medium truncate">{t.title}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 bg-border rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${t.ctr}%`, animationDelay: `${i * 100}ms` }}
                        />
                      </div>
                      <span className="text-xs text-muted whitespace-nowrap">{t.ctr}% CTR</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(t.title, i)}
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/10 whitespace-nowrap"
                  >
                    {copied === i ? (
                      <>
                        <Check className="w-4 h-4 text-success" />
                        <span className="text-success">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              ))}

              {/* Thumbnail headlines */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  5 Thumbnail Headlines
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "30 DAY CHALLENGE (RESULTS INSIDE)",
                    "I CAN'T BELIEVE THIS HAPPENED",
                    "THE TRUTH ABOUT GROWTH",
                    "YOU'VE BEEN DOING IT WRONG",
                    "WHAT HAPPENED NEXT WILL BLOW YOUR MIND",
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-muted font-medium"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ───────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: Target, title: "10 CTR-Ranked Titles", desc: "AI generates and ranks by predicted click-through rate, so you always know what's best." },
    { icon: Layers, title: "Thumbnail Headline Suggestions", desc: "5 additional thumbnail-ready headlines optimized for visual scroll-stop power." },
    { icon: Zap, title: "Niche-Specific Optimization", desc: "Titles tailored to your category — gaming, tech, finance, lifestyle, and more." },
    { icon: BarChart3, title: "A/B Title Pairs", desc: "Side-by-side comparison pairs so you can pick the winner with confidence." },
    { icon: Sparkles, title: "Emotion & Pattern Library", desc: "Built on proven viral patterns — numbers, brackets, emotion words, pattern interrupts." },
    { icon: History, title: "Title History & Comparison", desc: "Track and compare your past outputs to continuously improve your strategy." },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text mb-3">Everything You Need to Go Viral</h2>
          <p className="text-muted">Powerful features built for serious creators</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: "01", title: "Enter Topic & Niche", desc: "Type your video idea, pick your niche category, and define your target audience." },
    { num: "02", title: "AI Generates Titles", desc: "Our AI analyzes your input and generates 10 ranked titles + 5 thumbnail headlines." },
    { num: "03", title: "Pick & Use", desc: "Copy the winning title, paste it into YouTube, and watch your CTR climb." },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text mb-3">How TitleLab Works</h2>
          <p className="text-muted">Three steps from topic to viral title</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-text mb-2">{s.title}</h3>
              <p className="text-muted text-sm">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] text-border text-2xl">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { icon: Sparkles, value: "500K+", label: "Titles Generated" },
    { icon: TrendingUp, value: "40%", label: "Avg CTR Improvement" },
    { icon: Users, value: "10K+", label: "Creators Trust TitleLab" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-muted text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: "Maya Chen",
      niche: "Gaming",
      quote: "I went from 500 to 50K views in 3 months. The titles are absolutely fire.",
      improvement: "+180% views",
    },
    {
      name: "Jake Thompson",
      niche: "Tech Reviews",
      quote: "Finally a tool that understands CTR. My titles actually rank now.",
      improvement: "2x Click Rate",
    },
    {
      name: "Sarah Rodriguez",
      niche: "Lifestyle",
      quote: "My CTR doubled overnight. I haven't changed anything else — just the titles.",
      improvement: "+95% CTR",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text mb-3">Creators Who Switched to TitleLab</h2>
          <p className="text-muted">Real results from real YouTubers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-text mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-text">{t.name}</p>
                  <p className="text-sm text-muted">{t.niche}</p>
                </div>
                <div className="bg-success/10 border border-success/20 rounded-lg px-3 py-1.5">
                  <span className="text-sm font-bold text-success">{t.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      desc: "Perfect for testing the waters",
      features: ["10 titles per search", "Basic CTR patterns", "Standard generation speed", "Community support"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$12",
      period: "/mo",
      desc: "For creators serious about growth",
      features: ["50 titles per search", "Thumbnail headline suggestions", "Niche-specific optimization", "A/B title pairs", "Priority generation"],
      cta: "Get Growth",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      desc: "Maximum power, unlimited output",
      features: ["Unlimited titles", "Title history & comparison", "Advanced pattern library", "Dedicated support", "Early feature access"],
      cta: "Go Pro",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-text mb-3">Simple, Transparent Pricing</h2>
          <p className="text-muted">Start free, upgrade when you're ready</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border ${
                p.highlighted
                  ? "bg-surface border-primary/50 relative"
                  : "bg-surface border-border"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text mb-1">{p.name}</h3>
                <p className="text-muted text-sm mb-4">{p.desc}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-text">{p.price}</span>
                  <span className="text-muted">{p.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  p.highlighted
                    ? "bg-primary text-background hover:bg-primary/90"
                    : "border border-border text-text hover:border-primary/50"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
          Ready to go viral?
        </h2>
        <p className="text-muted mb-8">
          Join thousands of creators who use TitleLab to generate high-CTR titles that actually get clicked.
        </p>
        <button className="bg-primary text-background px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mx-auto">
          <Zap className="w-5 h-5" />
          Generate Your First Titles — Free
        </button>
        <p className="text-sm text-muted mt-4">No credit card required. Starter plan is free forever.</p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-bold text-text">
              Title<span className="text-primary">Lab</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>

          <p className="text-sm text-muted">© 2025 TitleLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <TitlePreview />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
}