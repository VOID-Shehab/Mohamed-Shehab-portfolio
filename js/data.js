/* ==========================================================================
   PORTFOLIO DATA MODEL — MOHAMED SHEHAB GAAFAR
   Centralized data module for seamless future updates.
   Supports both file:// protocol and http:// server environments.
   ========================================================================== */

const personalData = {
  name: "Mohamed Shehab Gaafar",
  alias: "0x_Void",
  title: "Vulnerability Assessment & Penetration Tester",
  subtitle: "Cybersecurity Student @ Benha National University",
  quote: "Look where others don't.",
  academicStatus: "Third-Year Computer Science Student",
  university: "Benha National University",
  expectedGraduation: "July 2028",
  location: "Sharqia, Egypt",
  email: "moshga519@gmail.com",
  phone: "01124244678",
  phoneTel: "+201124244678",
  whatsappNumber: "01124244678",
  telegramNumber: "01124244678",
  linkedin: "https://www.linkedin.com/in/mohamed-shehab-32a87529a",
  tryhackme: {
    username: "0xVOID",
    profileUrl: "https://tryhackme.com/p/0xVOID"
  },
  bio: "Cybersecurity enthusiast focused on offensive security, specializing in Web Application Penetration Testing and Network Penetration Testing.",
  positioning: "Vulnerability Assessment & Penetration Tester building practical offensive security capabilities."
};

const consoleScript = [
  { tag: "ok", tagClass: "tag-ok", text: "nmap scan complete" },
  { tag: "msf", tagClass: "tag-tool", text: "loading exploit framework..." },
  { tag: "ok", tagClass: "tag-ok", text: "metasploit ready" },
  { tag: "ad", tagClass: "tag-tool", text: "enumerating active directory" },
  { tag: "warn", tagClass: "tag-warn", text: "weak credentials found: guest account" },
  { tag: "ok", tagClass: "tag-ok", text: "report generated — 7 findings" },
  { tag: "soc", tagClass: "tag-tool", text: "monitoring SIEM dashboard..." },
  { tag: "ok", tagClass: "tag-ok", text: "0 critical alerts — all clear" },
  { tag: "sys", tagClass: "tag-sys", text: "session active" }
];

const skillsData = [
  {
    category: "Penetration Testing",
    icon: "🛡️",
    skills: [
      "Web Application Testing",
      "Network Penetration Testing",
      "OWASP Top 10",
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Security Auditing",
      "Privilege Escalation",
      "Password Cracking"
    ]
  },
  {
    category: "Networking",
    icon: "🌐",
    skills: [
      "CCNA Fundamentals",
      "Network+",
      "Network Services",
      "Network Security"
    ]
  },
  {
    category: "Security Tools",
    icon: "🧰",
    skills: [
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Hydra",
      "Dirb",
      "Gobuster",
      "Kali Linux Tools",
      "Nessus"
    ]
  },
  {
    category: "Programming",
    icon: "💻",
    skills: [
      "Python",
      "JavaScript",
      "C++",
      "SQL"
    ]
  },
  {
    category: "Operating Systems",
    icon: "🐧",
    skills: [
      "Kali Linux",
      "Red Hat Enterprise Linux",
      "Windows"
    ]
  }
];

const certificationsData = [
  {
    id: "gdg-cybersecurity",
    title: "25/26 GDG on Campus Technical Cybersecurity — Certificate of Appreciation",
    organization: "Google Developer Group (GDG) on Campus, Benha National University",
    duration: "Academic Year 25/26",
    completionDate: "2025/2026",
    recipient: "Mohamed Shehab",
    signedBy: "Mazen Eldaly (Chapter Leader)",
    credentialId: "BNU-GDG26-DALY-XKEPHY",
    status: "Completed",
    image: "assets/certificates/gdg_cybersecurity.png"
  },
  {
    id: "nti-redhat",
    title: "Red Hat System Administration",
    organization: "National Telecommunication Institute (NTI)",
    duration: "120 hours",
    completionDate: "August 7, 2025",
    status: "Completed",
    image: "assets/certificates/nti_redhat.png"
  },
  {
    id: "instant-cybersecurity",
    title: "Cyber Security Diploma",
    organization: "Instant Software Solutions",
    duration: "150 hours",
    completionDate: "October 6, 2025",
    status: "Completed",
    image: "assets/certificates/instant_cybersecurity.png"
  }
];

const currentTrainingData = [
  {
    id: "depi-vapt",
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    logo: "assets/logos/depi_logo.png"
  },
  {
    id: "techtrack-node",
    title: "Backend Node.js",
    organization: "TechTrack",
    status: "In Progress",
    logo: "assets/logos/techtrack_logo.png"
  }
];

const bugHuntingData = {
  title: "Independent Bug Hunting & Security Research",
  description: "Exploring web vulnerabilities and improving practical vulnerability discovery skills alongside structured penetration testing practice.",
  findings: 0,
  writeups: 0,
  status: "ACTIVE",
  platforms: [
    "TryHackMe",
    "PortSwigger Web Security Academy",
    "CTF Security Labs"
  ]
};

const experienceData = [
  {
    organization: "Benha National University (Faculty of Computers and Artificial Intelligence)",
    role: "Computer and Information Systems — Third Year",
    period: "Expected Graduation: July 2028",
    icon: "🎓",
    bullets: [
      "Specializing in Computer Science and Information Systems with offensive security focus.",
      "Hands-on practice in system architectures, networking fundamentals, and programming foundations."
    ]
  },
  {
    organization: "BNU Google Developer Group",
    role: "Cybersecurity Team Member",
    period: "2025 – Present",
    bullets: [
      "Collaborated with the technical team to organize cybersecurity-focused events, workshops, and awareness sessions.",
      "Contributed to planning event content and coordinating technical security programs."
    ]
  },
  {
    organization: "Instant Software Solutions",
    role: "Pen-Tester Engineer Trainee",
    period: "March 2026 — 1 Month",
    bullets: [
      "Completed a 1-month penetration testing training program.",
      "Practiced web application attacks, network reconnaissance, and vulnerability reporting."
    ]
  },
  {
    organization: "National Telecommunication Institute (NTI)",
    role: "Linux Red Hat Administration Intern",
    period: "2025 — 90 hours",
    bullets: [
      "Completed intensive Red Hat system administration training.",
      "Practiced Linux system configuration, user administration, file permissions, service management, and security hardening."
    ]
  },
  {
    organization: "TryHackMe & PortSwigger Web Academy",
    role: "Self-Directed Penetration Testing Practice",
    period: "Ongoing",
    bullets: [
      "Hands-on penetration testing practice through structured security labs.",
      "Practice includes web application security, SQL injection, XSS, and authentication bypass techniques."
    ]
  }
];

// Expose on global window object for standard script loading
window.portfolioData = {
  personalData,
  consoleScript,
  skillsData,
  certificationsData,
  currentTrainingData,
  bugHuntingData,
  experienceData
};
