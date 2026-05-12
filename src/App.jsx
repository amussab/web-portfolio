import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  GraduationCap,
  Award,
  Briefcase,
  Cpu,
  Cloud,
  Brain,
  Users,
  ChevronRight,
  BookOpen,
  Trophy,
  Github,
  FileText,
} from "lucide-react";

const GITHUB_URL = "https://github.com/amussab";
const CV_URL = "/Abdulrazaq_CV.pdf";

const Card = ({ children, className = "" }) => (
  <div className={`border rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 text-sm border rounded-full ${className}`}>
    {children}
  </span>
);

const Button = ({
  children,
  className = "",
  href,
  variant = "solid",
  target,
  rel,
  download = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium transition";

  const variantClasses =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      : "border border-slate-900 bg-slate-900 text-white hover:bg-slate-800";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  "Full-Stack Web Development",
  "Artificial Intelligence",
  "Cloud App Development",
  "Penetration Testing",
  "Ethical Hacking",
  "Cryptography",
  "Data Structures & Algorithms",
  "Databases",
  "Data Science",
  "Information Security",
];

const highlights = [
  {
    icon: Brain,
    title: "AI & Research",
    text: "Research experience in transformer-based systems with a published paper on underwater image enhancement.",
  },
  {
    icon: Cpu,
    title: "Systems & Software",
    text: "Built technical projects spanning real-time monitoring, anomaly detection, and collaborative web platforms.",
  },
  {
    icon: Cloud,
    title: "Growth Mindset",
    text: "Focused on gaining hands-on experience in AI, software development, and cloud computing in professional environments.",
  },
];

const projects = [
  {
    title: "Real-Time Digital Twin for Mechanical System Health Monitoring and Fault Prediction",
    subtitle: "Senior Project",
    points: [
      "Developing a real-time digital twin for mechanical systems to support predictive fault detection and performance monitoring.",
      "Working on data pipelines and machine learning-based anomaly detection for early failure prediction and predictive maintenance.",
      "Integrating sensors, embedded systems, and software dashboards for synchronized analytics and real-time monitoring.",
    ],
  },
  {
    title: "Enjazi",
    subtitle: "Web Engineering and Design",
    points: [
      "Built a collaborative website with a team to improve productivity for students and employees through a more engaging task-management experience.",
      "Included rooms with text and voice channels to support communication and coordination.",
      "Strengthened the ability to handle computing resources effectively and efficiently while minimizing waste.",
    ],
  },
];

const awards = [
  "Second Place at the Computing Projects Expo 2025",
  "Second Honor Student",
  "KAUST Academy AI Program",
];

const timeline = [
  {
    title: "Bachelor of Science in Computer Science",
    org: "King Fahd University of Petroleum and Minerals",
    meta: "2022 – 2026",
    body: "GPA: 3.61/4. Relevant coursework includes Web Engineering and Design, Artificial Intelligence, Data Structures and Algorithms, Databases, Data Science, Information Security, and Research Work.",
    icon: GraduationCap,
  },
  {
    title: "Undergraduate Research Assistant",
    org: "Joint Research Center of Artificial Intelligence (SDAIA & KFUPM)",
    meta: "2025",
    body: "Collaborated with a research team studying transformers and contributed to a published research paper on Underwater Image Enhancement Using Transformers.",
    icon: BookOpen,
  },
  {
    title: "Human Resources Manager",
    org: "KFUPM Volunteering Work Unit",
    meta: "Leadership Experience",
    body: "Led the HR committee and managed a team of 10 members while helping streamline applications to university volunteer events.",
    icon: Users,
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <Card className="h-full rounded-2xl border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
          <Icon className="h-6 w-6 text-slate-700" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}

export default function AbdulrazaqPortfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Portfolio</p>
            <h1 className="text-lg font-bold text-slate-900">Abdulrazaq AlSayed Ahmad</h1>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#experience" className="transition hover:text-slate-900">Experience</a>
            <a href="#projects" className="transition hover:text-slate-900">Projects</a>
            <a href="#achievements" className="transition hover:text-slate-900">Achievements</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <Badge className="rounded-full bg-slate-900 px-4 py-1 text-xs font-medium text-white">
                Computer Science Student • AI • Software Development • Cloud Computing
              </Badge>
              <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl">
                Building reliable, intelligent, and impactful digital solutions.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                I am a Computer Science student at KFUPM with interests in artificial intelligence, software development, and cloud computing. I enjoy turning technical ideas into practical solutions and contributing to projects that combine strong engineering with meaningful impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact">Get in Touch</Button>
                <Button href="#projects" variant="outline">View Projects</Button>
                <Button href={GITHUB_URL} variant="outline" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button href={CV_URL} variant="outline" download>
                  <FileText className="h-4 w-4" />
                  Download CV
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <GraduationCap className="h-5 w-5" />
                    <span>King Fahd University of Petroleum and Minerals</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900">B.S. in Computer Science • GPA 3.61/4</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Trophy className="h-5 w-5" />
                    <span>Research & Awards</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900">Published research contributor and Computing Projects Expo 2025 awardee</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-stretch"
            >
              <Card className="w-full rounded-[28px] border-slate-200 bg-slate-950 text-white shadow-2xl">
                <CardContent className="flex h-full flex-col justify-between p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Professional Snapshot</p>
                    <h3 className="mt-4 text-2xl font-semibold">Employment-Focused Profile</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Motivated to gain hands-on industry experience, contribute to innovative solutions, and grow in environments that value excellence, technical depth, and continuous learning.
                    </p>
                  </div>

                  <div className="mt-10 space-y-4 text-sm text-slate-200">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <Mail className="h-5 w-5" />
                      <a href="mailto:abdulrazaqm@hotmail.com" className="hover:underline">
                        abdulrazaqm@hotmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <Phone className="h-5 w-5" />
                      <a href="tel:0538647899" className="hover:underline">
                        0538647899
                      </a>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Availability Goal</p>
                      <p className="mt-2 font-medium text-white">Open to training opportunities and professional experience aligned with AI, software, and cloud-focused roles.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeader
            eyebrow="About"
            title="A strong technical foundation with a growth-oriented mindset"
            description="My background combines academic rigor, practical software development, research exposure, and leadership experience. I am especially interested in opportunities where I can contribute to engineering teams while continuing to deepen my expertise."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45 }}>
                <InfoCard {...item} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              eyebrow="Education & Experience"
              title="Academic, research, and leadership experience"
              description="A combination of formal education, applied research, and team leadership has helped shape both my technical and professional capabilities."
            />

            <div className="mt-12 grid gap-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="rounded-3xl border-slate-200 shadow-sm">
                      <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex gap-4">
                            <div className="mt-1 rounded-2xl bg-slate-100 p-3">
                              <Icon className="h-6 w-6 text-slate-700" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                              <p className="mt-1 font-medium text-slate-700">{item.org}</p>
                            </div>
                          </div>
                          <Badge className="w-fit rounded-full border-slate-300 px-3 py-1 text-slate-700">
                            {item.meta}
                          </Badge>
                        </div>
                        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600">{item.body}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="Projects that reflect my interests across software engineering, machine learning, systems integration, and collaborative product development."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{project.subtitle}</p>
                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-900">{project.title}</h3>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-3">
                        <Briefcase className="h-5 w-5 text-slate-700" />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {project.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                          <p className="text-sm leading-7 text-slate-600">{point}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Expertise</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technical interests and focus areas</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                My experience and coursework have strengthened a broad foundation across software engineering and computing disciplines, with particular interest in building intelligent and secure systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-white/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeader
            eyebrow="Achievements"
            title="Recognition and distinctions"
            description="A few highlights that reflect academic performance, project quality, and commitment to continued development."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                      <Award className="h-6 w-6 text-slate-700" />
                    </div>
                    <p className="text-base font-semibold leading-7 text-slate-900">{award}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s connect</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
                I am interested in professional opportunities where I can contribute, learn, and grow through meaningful work in software, AI, and cloud-related environments.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-center justify-center gap-3 p-6 text-slate-700">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:abdulrazaqm@hotmail.com" className="font-medium hover:underline">
                      abdulrazaqm@hotmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-center justify-center gap-3 p-6 text-slate-700">
                    <Phone className="h-5 w-5" />
                    <a href="tel:0538647899" className="font-medium hover:underline">
                      0538647899
                    </a>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-center justify-center gap-3 p-6 text-slate-700">
                    <Github className="h-5 w-5" />
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                      github.com/amussab
                    </a>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-center justify-center gap-3 p-6 text-slate-700">
                    <FileText className="h-5 w-5" />
                    <a href={CV_URL} download className="font-medium hover:underline">
                      Download CV
                    </a>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Abdulrazaq AlSayed Ahmad</p>
          <p>Designed for a professional employment portfolio</p>
        </div>
      </footer>
    </div>
  );
}
