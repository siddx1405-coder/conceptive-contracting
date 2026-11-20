import { FormEvent, useState } from "react";
import logo from "./assets/conceptive-logo.png";
import headerLogo from "./assets/conceptive-wordmark.png";
import heroImage from "./assets/hero-excavator.png";
import teamImage from "./assets/site-team.png";
import backhoeImage from "./assets/backhoe.png";
import foundationImage from "./assets/foundation.png";
import cranesImage from "./assets/cranes.png";
import workersImage from "./assets/site-workers.png";
import equipmentImage from "./assets/heavy-equipment.png";
import stagesImage from "./assets/construction-stages.png";
import loadersImage from "./assets/loaders.png";
import readyMixImage from "./assets/ready-mix.png";

const EMAIL = "info@conceptivecontractingwll.com";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Conceptive+Contracting+WLL+Doha+Qatar";

type IconName =
  | "arrow"
  | "building"
  | "check"
  | "chevron"
  | "clock"
  | "email"
  | "external"
  | "hardhat"
  | "map"
  | "menu"
  | "phone"
  | "shield"
  | "star"
  | "tools"
  | "truck"
  | "whatsapp"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V3h10v18M14 9h6v12M8 7h2M8 11h2M8 15h2M7 21h10" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    hardhat: (
      <>
        <path d="M4 15v-2a8 8 0 0 1 16 0v2M2 15h20M9 5v6M15 5v6" />
        <path d="M5 15v2h14v-2" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    star: <path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.5-5.9-3.1-5.9 3.1 1.1-6.5L2.5 9 9 8l3-6Z" />,
    tools: (
      <>
        <path d="m14.7 6.3 3-3a4.2 4.2 0 0 1-5.6 5.6L5 16l-3 1 1-3 7.1-7.1a4.2 4.2 0 0 1 5.6-5.6l-3 3 2 2Z" />
        <path d="m15 13 6 6-2 2-6-6" />
      </>
    ),
    truck: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.7 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.8 3 2 4.2 5 5" />
      </>
    ),
    x: (
      <>
        <path d="M5 5l14 14M19 5 5 19" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    icon: "building" as IconName,
    number: "01",
    title: "Building Construction",
    text: "Villas, commercial buildings, warehouses and complete structures—from foundation through finishing.",
  },
  {
    icon: "tools" as IconName,
    number: "02",
    title: "Civil Works",
    text: "Concrete, blockwork, excavation, drainage, roadworks and infrastructure delivered to exact standards.",
  },
  {
    icon: "hardhat" as IconName,
    number: "03",
    title: "Renovation & Fit-Out",
    text: "Complete office, villa and retail transformations, including painting, tiling, gypsum and finishing.",
  },
  {
    icon: "shield" as IconName,
    number: "04",
    title: "MEP Works",
    text: "Coordinated electrical, plumbing and HVAC support through qualified, experienced technical teams.",
  },
  {
    icon: "truck" as IconName,
    number: "05",
    title: "Plant & Equipment",
    text: "Excavators, loaders, transport and specialized machinery supporting projects of every scale.",
  },
  {
    icon: "clock" as IconName,
    number: "06",
    title: "Maintenance",
    text: "Responsive repair services and annual maintenance contracts for dependable long-term performance.",
  },
];

const projects = [
  {
    src: backhoeImage,
    title: "Earthworks & Excavation",
    tag: "Civil Works",
    className: "project-wide",
  },
  { src: foundationImage, title: "Foundation Works", tag: "Structural", className: "" },
  { src: cranesImage, title: "Large-Scale Construction", tag: "Contracting", className: "" },
  {
    src: workersImage,
    title: "Formwork & Site Operations",
    tag: "Execution",
    className: "project-tall",
  },
  { src: equipmentImage, title: "Heavy Equipment Operations", tag: "Plant Hire", className: "" },
  { src: stagesImage, title: "End-to-End Construction", tag: "Turnkey", className: "project-wide" },
  { src: loadersImage, title: "Material Handling", tag: "Logistics", className: "" },
  { src: readyMixImage, title: "Ready-Mix Concrete", tag: "Concrete Works", className: "" },
];

const navItems = ["About", "Services", "Projects", "Why us", "Contact"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nService: ${form.get("service")}\n\nProject details:\n${form.get("message")}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="cr-number">C.R. NO. 136240</span>
          <div className="topbar-links">
            <a href={`mailto:${EMAIL}`}>
              <Icon name="email" size={15} /> {EMAIL}
            </a>
            <span className="topbar-divider" />
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              <Icon name="map" size={15} /> Doha, Qatar
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Conceptive Contracting home">
            <img src={headerLogo} alt="Conceptive Contracting" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </a>
            ))}
          </nav>
          <a className="button button-small desktop-cta" href="#contact">
            Request a quote <Icon name="arrow" size={17} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={25} />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="button" onClick={() => setMenuOpen(false)}>
              Request a quote
            </a>
          </nav>
        )}
      </header>

      <section className="hero" id="home">
        <img
          className="hero-image"
          src={heroImage}
          alt="Excavator operating on a construction site at sunset"
        />
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <div className="eyebrow light">
            <span /> Qatar's trusted contracting partner
          </div>
          <h1>
            We build today.
            <br />
            <em>For a better tomorrow.</em>
          </h1>
          <p>
            Reliable construction, civil works and project delivery—built on safety, precision and
            an uncompromising commitment to quality.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Start your project <Icon name="arrow" />
            </a>
            <a className="text-link light-link" href="#projects">
              Explore our work <Icon name="chevron" size={17} />
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <span className="hero-aside-label">Our promise</span>
          <strong>Quality without compromise.</strong>
        </div>
        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <i />
        </a>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <strong>
              3,000<sup>+</sup>
            </strong>
            <span>Client reviews</span>
          </div>
          <div>
            <strong>
              100<sup>%</sup>
            </strong>
            <span>Quality focused</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Core services</span>
          </div>
          <div>
            <strong>Qatar</strong>
            <span>Nationwide coverage</span>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-media reveal">
            <img src={teamImage} alt="Construction professionals reviewing project plans on site" />
            <div className="experience-card">
              <Icon name="hardhat" size={30} />
              <div>
                <strong>Built by experts</strong>
                <span>Managed with precision</span>
              </div>
            </div>
            <span className="image-index">01 / 10</span>
          </div>
          <div className="about-copy">
            <div className="eyebrow">
              <span /> About Conceptive
            </div>
            <h2>
              Building with purpose.
              <br />
              <em>Delivering with pride.</em>
            </h2>
            <p className="lead">
              Conceptive Contracting is a Doha-based general contracting company serving government,
              private, commercial and residential clients across Qatar.
            </p>
            <p>
              Our engineers, supervisors, skilled workforce and office teams manage the complete
              project journey—from estimation and procurement to site execution, quality control and
              handover.
            </p>
            <div className="check-grid">
              {[
                "Transparent pricing",
                "Safety-led delivery",
                "Skilled workforce",
                "On-time execution",
              ].map((item) => (
                <div key={item}>
                  <span>
                    <Icon name="check" size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <a className="text-link" href="#services">
              Discover our capabilities <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading split">
            <div>
              <div className="eyebrow light">
                <span /> What we do
              </div>
              <h2>
                One team. Every stage.
                <br />
                <em>Built to perform.</em>
              </h2>
            </div>
            <p>
              From groundwork to final handover, our integrated teams deliver reliable solutions for
              projects of every size and complexity.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="service-icon">
                    <Icon name={service.icon} size={27} />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                  Enquire <Icon name="arrow" size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="container">
          <div className="section-heading split dark-text">
            <div>
              <div className="eyebrow">
                <span /> Selected capabilities
              </div>
              <h2>
                Work that speaks
                <br />
                <em>for itself.</em>
              </h2>
            </div>
            <p>
              A closer look at the people, equipment and execution behind our construction
              capability across Qatar.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <img src={project.src} alt={project.title} loading="lazy" />
                <div className="project-shade" />
                <span className="project-count">{String(index + 3).padStart(2, "0")} / 10</span>
                <div className="project-info">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="why-us">
        <div className="container why-grid">
          <div className="why-copy">
            <div className="eyebrow light">
              <span /> Why Conceptive
            </div>
            <h2>
              The right partner
              <br />
              <em>from day one.</em>
            </h2>
            <p>
              Construction is complex. Working with us isn't. We combine disciplined planning, site
              expertise and open communication to keep every project moving forward.
            </p>
            <a className="button button-outline" href="#contact">
              Discuss your project <Icon name="arrow" />
            </a>
          </div>
          <div className="value-list">
            {[
              [
                "01",
                "Quality first",
                "Approved materials, skilled teams and rigorous checks at every stage.",
              ],
              ["02", "Safety always", "HSE-led operations, proper PPE and daily site discipline."],
              [
                "03",
                "Clear communication",
                "Transparent quotations, progress updates and responsive coordination.",
              ],
              [
                "04",
                "On-time delivery",
                "Practical planning, smart procurement and accountable management.",
              ],
            ].map(([num, title, text]) => (
              <div className="value-item" key={num}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container reviews-inner">
          <div className="rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Icon key={n} name="star" size={20} />
              ))}
            </div>
            <strong>Trusted by 3,000+ clients & partners</strong>
            <p>
              Built on dependable service, clear communication and work that stands the test of
              time.
            </p>
          </div>
          <div className="review-values">
            <div>
              <Icon name="shield" size={27} />
              <span>
                <strong>Safety</strong> at every stage
              </span>
            </div>
            <div>
              <Icon name="clock" size={27} />
              <span>
                <strong>Delivery</strong> you can rely on
              </span>
            </div>
            <div>
              <Icon name="check" size={27} />
              <span>
                <strong>Quality</strong> in every detail
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">
              <span /> Let's build together
            </div>
            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>
            <p>
              Tell us what you need. Our team will review your requirements and get back to you with
              the right way forward.
            </p>
            <div className="contact-cards">
              <a href={`mailto:${EMAIL}`}>
                <span>
                  <Icon name="email" />
                </span>
                <div>
                  <small>Company email</small>
                  <strong>{EMAIL}</strong>
                </div>
              </a>
              <a href={MAP_URL} target="_blank" rel="noreferrer">
                <span>
                  <Icon name="map" />
                </span>
                <div>
                  <small>Office address</small>
                  <strong>Doha, State of Qatar</strong>
                </div>
                <Icon name="external" size={17} />
              </a>
              <div className="contact-channel">
                <span>
                  <Icon name="phone" />
                </span>
                <div>
                  <small>Telephone · Mobile · WhatsApp</small>
                  <strong>Available through our enquiry desk</strong>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>Project enquiry</span>
              <small>Fields marked * are required</small>
            </div>
            <label>
              Full name *<input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Phone / WhatsApp *<input name="phone" type="tel" placeholder="+974" required />
            </label>
            <label>
              Service required *
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label>
              Tell us about your project *
              <textarea
                name="message"
                placeholder="Location, scope, timeline..."
                rows={4}
                required
              />
            </label>
            <button className="button form-button" type="submit">
              Send enquiry <Icon name="arrow" />
            </button>
            {submitted && (
              <p className="form-note">
                Your email app is opening with your enquiry ready to send.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Conceptive Contracting" />
            <p>Professional contracting and civil works delivered across the State of Qatar.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            {["About", "Services", "Projects", "Why us"].map((item) => (
              <a href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            {services.slice(0, 4).map((item) => (
              <a href="#services" key={item.title}>
                {item.title}
              </a>
            ))}
          </div>
          <div className="footer-column footer-contact">
            <h4>Get in touch</h4>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              Doha, State of Qatar
            </a>
            <strong>C.R. No. 136240</strong>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Conceptive Contracting. All rights reserved.</span>
          <span>
            Made by{" "}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              @Xenosys Qatar <Icon name="external" size={13} />
            </a>{" "}
            · <a href="tel:+97470643918">+974 70643918</a>
          </span>
        </div>
      </footer>

      <a className="floating-contact" href="#contact" aria-label="Contact Conceptive Contracting">
        <Icon name="whatsapp" size={25} />
        <span>Enquire now</span>
      </a>
    </main>
  );
}
