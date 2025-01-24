import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sumit Kumar",
  initials: "SK",
  location: "New Delhi, India, IST",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Detail-oriented Blockchain/Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Blockchain-focused Full Stack Engineer specializing in high-performance
      decentralized applications, scalable Node.js services, and real-time
      collaboration systems. Experienced in technical architecture design and
      remote team leadership.
    </>
  ),
  avatarUrl:
    "https://avatars.githubusercontent.com/u/37952008?s=400&u=57ec05a5649bea7fb66ad74aa9768d8b4e09885e&v=4",
  personalWebsiteUrl: "https://imsk17.org",
  contact: {
    email: "imsumitkr17@gmail.com",
    tel: "+918126378925",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/imsk17",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imsk17/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/imsk_17",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Gautam Buddha University",
      degree: "Bachelor's Degree in Information Technology",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "XP Network",
      link: "https://xp.network",
      badges: ["Remote", "Blockchain", "Ethereum", "Solidity", "Rust"],
      title: "Senior Software Engineer",
      logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description: (
        <>
          Leading technical architecture of a blockchain-based multi-chain NFT
          Bridge.
          <ul className="list-inside list-disc">
            <li>
              Developed Smart contracts for chains like Near, Casper, ICP,
              MultiversX, Secret, CosmWasm, and Solana using Rust, Tezos using
              Ligo, Aptos using Move
            </li>
            <li>
              Wrote a generalized client SDK in typescript which can interact
              with each chain’s bridge contracts.
            </li>
            <li>
              Implemented Decentralized Bridge Validators from scratch which are
              responsible for validating bridge transactions.
            </li>
            <li>
              Deployed various blockchain nodes, handled CI/CD development of
              various programs and took up various system administration
              responsibilities.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance",
      link: "https://upwork.com",
      badges: [
        "Remote",
        "Freelancing",
        "TypeScript",
        "Golang",
        "Rust",
        "Python",
      ],
      title: "Freelancer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Worked as a freelancer for various organization on various projects.
          <ul className="list-inside list-disc">
            <li>
              Blockchain Development which involved smart contracts for various
              clients in Ethereum and other chains.
            </li>
            <li>
              Web Development which involved designing frontend and backend
              servers as per client’s demand across various languages including
              Go, Typescript, Rust, Python etc.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "FOSS",
      link: "https://github.com",
      badges: ["Remote", "Android", "Rust", "Golang"],
      title: "Open Source Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Development of AOSP Forks (Pixel Experience/Cosmic OS), Maintained
              Device Tree for a Xiaomi Device.
            </li>
            <li>Multiple FOSS Apps and Libraries on GitHub.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Rust",
    "Golang",
    "TypeScript",
    "Kotlin",
    "Dart",
    "Python",
    "Solidity",
    "Motoko",
    "Git",
    "Docker",
    "Docker Compose",
    "Linux",
    "GitHub Actions",
    "CI/CD Pipelines",
    "PostgreSQL",
    "SQLite",
    "MySQL",
    "MongoDB",
    "Ethereum",
    "TON",
    "Cosmwasm",
    "Near",
    "MultiversX",
    "Solana",
    "Casper",
    "Substrate",
    "Dfinity",
    "Axum Web",
    "Gin-Go",
    "Bun",
    "Node",
    "Elysia",
    "MikroORM",
    "FastAPI",
    "Express",
    "Diesel",
    "SolidJS",
    "React/Next",
    "Tailwind CSS",
    "shadcn/ui",
    "ROM Development",
    "Flutter",
    "Jetpack Compose",
    "Elixir",
    "Gleam",
    "Parsers/Compilers",
    "RabbitMQ",
    "SDL",
    "TG Bot API",
    "Discord Bot API",
  ],
  projects: [
    {
      title: "Formula",
      techStack: ["Rust", "Diesel", "ethers-rs", "PostgreSQL"],
      description:
        "Built a tool to listen for Ethereum NFT events on multiple chains concurrently to record NFT movements and list NFTs of user. Written in Rust, it perfectly utilizes the great concurrency provided via Tokio.",
      logo: MonitoLogo,
      link: {
        label: "formula",
        href: "https://github.com/imsk17/formula",
      },
    },
    {
      title: "Posiedon",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Built a toy blockchain in Rust to learn how a blockchain works. It uses RocksDB as database. Based on PoW Model, and UTXO Style Transaction.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/imsk17/posiedon",
      },
    },
    {
      title: "Oak-log",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source logger for the oak web server on deno. Plug and play logging for Oak.",
      logo: MonitoLogo,
      link: {
        label: "Deno Land",
        href: "https://deno.land/x/oak_log@v0.3.0",
      },
    },
    {
      title: "Quicssh-rs",
      techStack: ["Rust", "QUIC", "HTTP3"],
      description:
        "A QUIC/HTTP3 Proxy for SSH Connections that can be used without patching the server using Rust.",
      logo: MonitoLogo,
      link: {
        label: "Github",
        href: "https://github.com/imsk17/quicssh-rs",
      },
    },
  ],
} as const;
