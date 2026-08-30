/**
 * Single source of truth for every word and link on this site.
 * Components read from here; none of them hardcode copy.
 */

export const profile = {
  name: "Guntuboina Pavan Kalyan",
  shortName: "pavan kalyan",
  role: "Lead Software Engineer",
  company: "Prezent",
  location: "Srikakulam, Andhra Pradesh, India",
  availableNote: "Open to conversations",
  headline: {
    lead: "I build the parts of the product you never see, and ",
    accent: "feel",
    tail: " when they're wrong.",
  },
  intro:
    "Four years across Python, Node.js, React and Vue, on top of Kubernetes and AWS. Lead engineer on Prezent Vivo, an AI-native platform for life sciences communications, where I own template accuracy — the difference between a deck a biopharma team can send and one they can't. ACM ICPC Regionalist in 2020 and 2021, which is a long way of saying I reach for a better algorithm before I reach for another server.",
  email: "pavan.g2001@gmail.com",
  phone: "+91 99891 41258",
  resumeUrl: "/pavan-kalyan-resume.pdf",
  resumeNote: "PDF · 1 page",
  portrait: "/portrait.jpg",
  portraitHero: "/portrait-hero.jpg",
};

/* ------------------------------------------------------------------ *
 * The System — the interactive diagram in the hero.
 * Coordinates live in the SVG viewBox below; edges join box edges.
 * ------------------------------------------------------------------ */

export const systemViewBox = { width: 1000, height: 540 };

export const systemTiers = [
  { label: "edge", x: 98 },
  { label: "ingress", x: 336 },
  { label: "services", x: 595 },
  { label: "state", x: 876 },
];

export type SystemNode = {
  id: string;
  label: string;
  meta: string;
  detail: string;
  /** Amber badge — reserved for measured results. */
  metric?: string;
  /** Mint badge — status, never a measurement. */
  flag?: string;
  href: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export const systemNodes: SystemNode[] = [
  {
    id: "client",
    label: "client",
    meta: "React · Vue · Next",
    detail:
      "The surface people actually touch. I build it, but I treat it as the thinnest layer in the system — state belongs behind the gateway.",
    href: "#work",
    x: 24,
    y: 240,
    w: 164,
    h: 84,
  },
  {
    id: "gateway",
    label: "api-gateway",
    meta: "Python · Node.js",
    detail:
      "Four years of routing, auth, rate limiting and contract design — from Spring Boot APIs at ValueLabs to leading backend platform work at Prezent.",
    href: "#experience",
    x: 252,
    y: 240,
    w: 168,
    h: 84,
  },
  {
    id: "vivo",
    label: "vivo",
    meta: "lightning project",
    flag: "lead eng",
    detail:
      "Prezent Vivo, internally the Lightning project — an AI-native platform for life sciences communications, where AI drafts and domain experts validate. The template work moved here as the product grew, and I moved with it as lead engineer.",
    href: "#now",
    x: 500,
    y: 44,
    w: 190,
    h: 84,
  },
  {
    id: "template",
    label: "template-engine",
    meta: "brand accuracy",
    flag: "accuracy owner",
    detail:
      "Template conversion turns any deck into the customer's own brand template. I started on this at Prezent and own the accuracy of the output — every slide landing brand-aligned, because brand compliance is a promise the product makes to enterprise customers.",
    href: "#now",
    x: 500,
    y: 142,
    w: 190,
    h: 84,
  },
  {
    id: "reliability",
    label: "prod-reliability",
    meta: "triage · hardening",
    metric: "~0% failures",
    detail:
      "Took ownership of production bugs at Prezent and drove the failure rate down to effectively zero. Unglamorous, and the thing customers actually notice.",
    href: "#impact",
    x: 500,
    y: 240,
    w: 190,
    h: 84,
  },
  {
    id: "algo",
    label: "algo-service",
    meta: "network routing",
    metric: "+95% faster",
    detail:
      "Rewrote a complicated network algorithm end to end at EagleView. Better asymptotics beat more instances — the competitive programming habit paying rent.",
    href: "#impact",
    x: 500,
    y: 338,
    w: 190,
    h: 84,
  },
  {
    id: "demo",
    label: "demo-ui",
    meta: "ReactJS",
    metric: "+20% sales",
    detail:
      "A fully functional, demoable interface the sales team could sell from. Engineering work with a number attached to it.",
    href: "#impact",
    x: 500,
    y: 436,
    w: 190,
    h: 84,
  },
  {
    id: "store",
    label: "datastore",
    meta: "DynamoDB · S3 · Mongo",
    detail:
      "Access patterns first, schema second. Single-table DynamoDB design, and S3 for the things that should never live in a database.",
    href: "#experience",
    x: 776,
    y: 150,
    w: 200,
    h: 84,
  },
  {
    id: "platform",
    label: "platform",
    meta: "Kubernetes · AWS",
    detail:
      "Containers, deploys, and the observability you need to know which of the other boxes is lying to you.",
    href: "#experience",
    x: 776,
    y: 306,
    w: 200,
    h: 84,
  },
];

export type SystemEdge = { id: string; from: string; to: string; d: string };

export const systemEdges: SystemEdge[] = [
  { id: "e1", from: "client", to: "gateway", d: "M188,282 H252" },
  {
    id: "e2",
    from: "gateway",
    to: "vivo",
    d: "M420,282 C462,282 458,86 500,86",
  },
  {
    id: "e3",
    from: "gateway",
    to: "template",
    d: "M420,282 C462,282 458,184 500,184",
  },
  { id: "e4", from: "gateway", to: "reliability", d: "M420,282 H500" },
  {
    id: "e5",
    from: "gateway",
    to: "algo",
    d: "M420,282 C462,282 458,380 500,380",
  },
  {
    id: "e6",
    from: "gateway",
    to: "demo",
    d: "M420,282 C462,282 458,478 500,478",
  },
  { id: "e7", from: "vivo", to: "store", d: "M690,86 C738,86 728,192 776,192" },
  {
    id: "e8",
    from: "template",
    to: "store",
    d: "M690,184 C738,184 728,192 776,192",
  },
  {
    id: "e9",
    from: "reliability",
    to: "platform",
    d: "M690,282 C738,282 728,348 776,348",
  },
  {
    id: "e10",
    from: "algo",
    to: "platform",
    d: "M690,380 C738,380 728,348 776,348",
  },
  {
    id: "e11",
    from: "demo",
    to: "platform",
    d: "M690,478 C738,478 728,348 776,348",
  },
];

export const systemDefaultReadout = {
  id: "the whole thing",
  meta: "9 nodes · 4 years · 3 measured wins",
  body: "Every box is something I've actually owned in production. Hover one to read what I did there — or scroll, and the sections arrive in the same order the requests do.",
};

/* ------------------------------------------------------------------ */

export const buildingNow = [
  {
    id: "template-engine",
    flag: "Where I started",
    title: "Template conversion",
    body: "Convert any deck into the customer's own brand template. I own the accuracy of what comes out the other side — every slide landing brand-aligned, because “brand-compliant from the first draft” is a promise the product makes to enterprise customers, not a nice-to-have. Getting it wrong is worse than not converting at all.",
  },
  {
    id: "vivo",
    flag: "Lead engineer",
    title: "Prezent Vivo",
    body: "Internally, the Lightning project — an AI-native platform for life sciences communications, where an AI layer drafts and domain experts validate. The template work moved here as the product grew, and I moved with it as lead engineer, carrying the same accuracy bar into a much larger surface.",
  },
];

export const impact = [
  {
    node: "prod-reliability",
    value: "~0%",
    label: "production failure rate",
    detail:
      "Took ownership of production bugs and drove failures down to effectively zero. Unglamorous, and the thing customers actually notice.",
    where: "Prezent",
  },
  {
    node: "algo-service",
    value: "+95%",
    label: "network algorithm speedup",
    detail:
      "A complicated routing path, rewritten end to end. Better asymptotics beat more instances.",
    where: "EagleView",
  },
  {
    node: "demo-ui",
    value: "+20%",
    label: "sales",
    detail:
      "A fully demoable ReactJS interface the team could actually sell from.",
    where: "EagleView",
  },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Prezent",
    role: "Lead Software Engineer",
    start: "Jan 2026",
    end: "Present",
    period: "8 mo",
    location: "India",
    highlights: [
      "Lead engineer on Prezent Vivo (the Lightning project), an AI-native platform for life sciences communications.",
      "Own the accuracy of template conversion — started on the feature in prezent.ai and carried it into the Lightning project, keeping converted decks brand-aligned for customers.",
      "Owned production bug triage and hardening, bringing the failure rate down to almost zero.",
      "Set technical direction for backend platform work and mentor newer engineers through design review.",
    ],
  },
  {
    company: "Prezent",
    role: "Senior Software Engineer",
    start: "Jan 2025",
    end: "Jan 2026",
    period: "1 yr 1 mo",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Built and shipped scalable microservices, design through production.",
    ],
  },
  {
    company: "EagleView",
    role: "Software Engineer II",
    start: "Apr 2024",
    end: "Jan 2025",
    period: "10 mo",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Optimised a complicated network algorithm for over 95% improvement.",
      "Shipped a demoable ReactJS interface that lifted sales 20%.",
      "Built scalable NestJS backend systems with caching, improving application performance 30%.",
    ],
  },
  {
    company: "EagleView",
    role: "Software Engineer I",
    start: "Jul 2022",
    end: "Apr 2024",
    period: "1 yr 10 mo",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Full stack delivery across ReactJS and NodeJS, with DynamoDB and S3 behind them.",
    ],
  },
  {
    company: "ValueLabs",
    role: "Software Engineer Intern",
    start: "Feb 2022",
    end: "May 2022",
    period: "4 mo",
    highlights: ["REST APIs in Spring Boot, using advanced Java 8 features."],
  },
  {
    company: "The Entrepreneurship Network",
    role: "Data Structures Intern",
    start: "Sep 2021",
    end: "Feb 2022",
    period: "6 mo",
    highlights: [
      "Authored data structures and algorithms material, including two published articles.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  repoName?: string;
  tagline: string;
  year: string;
  role: string;
  image: string;
  stack: string[];
  live?: string;
  repo?: string;
  problem: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "tomato",
    title: "Tomato",
    repoName: "Food-Delivery",
    tagline:
      "Food delivery, ordering through to payment. The order is an explicit state machine, and Stripe webhooks — not the browser — are what advance it.",
    year: "2024",
    role: "solo · full stack",
    image: "/tomato.jpg",
    stack: ["React", "Node", "Express", "MongoDB", "Stripe"],
    live: "https://tomato-virid.vercel.app/",
    repo: "https://github.com/pavankalyan-5/Food-Delivery",
    problem:
      "Food delivery looks simple from the outside and is mostly state management on the inside. A cart has to survive a refresh, an order has to be atomic against payment, and an admin needs to move an order through its lifecycle without the customer's view going stale.",
    approach: [
      "Modelled the order as an explicit state machine — placed, paid, preparing, out for delivery, delivered — so every transition had one owner and no screen had to infer status from a combination of flags.",
      "Kept the cart client-side until checkout, then reconciled it server-side against live prices, so a stale tab could never buy at yesterday's price.",
      "Wired Stripe Checkout with the order created before redirect and confirmed on webhook, making payment success the single event that advances the order rather than a client callback that might never fire.",
      "Split the surface into a customer app and an admin panel over one Express API, sharing the model layer but not the routes.",
    ],
    outcome:
      "A deployed, end-to-end ordering flow: browse, cart, pay and track, with an admin view that drives orders forward. The webhook-first payment path means a dropped browser session never leaves an order in limbo.",
  },
  {
    slug: "natours",
    title: "Natours",
    tagline:
      "A tour booking API where filtering, sorting and pagination were solved once and inherited everywhere, with aggregation pipelines doing the statistics in the database.",
    year: "2023",
    role: "solo · backend",
    image: "/natours.jpg",
    stack: ["Node", "Express", "MongoDB", "TypeScript", "Stripe"],
    repo: "https://github.com/pavankalyan-5/Natours",
    problem:
      "A booking product is an API problem before it is a UI problem. Tours need filtering, sorting, pagination and geospatial search; users need real authentication with password resets that cannot be replayed; and none of it should be re-implemented per endpoint.",
    approach: [
      "Built a reusable query layer handling filtering, sorting, field limiting and pagination once, so every collection endpoint inherited the same semantics instead of hand-rolling its own.",
      "Used MongoDB aggregation pipelines for tour statistics and geospatial queries for 'tours near me', keeping the computation in the database rather than dragging documents into application memory.",
      "Implemented JWT authentication with hashed reset tokens, role-based route protection, rate limiting, and sanitisation against NoSQL injection and XSS.",
      "Centralised error handling so operational and programming errors were distinguishable, and the client never saw a stack trace.",
    ],
    outcome:
      "A complete REST API with server-rendered views and Stripe checkout on top — the kind of codebase where adding a new resource means writing a model and a controller, not rebuilding the plumbing.",
  },
];

export type Blog = {
  slug: string;
  title: string;
  where: string;
  tags: string[];
  url: string;
  summary: string;
  statement: string;
  examples: { input: string; output: string; why: string }[];
  approach: string[];
  steps: string[];
  time: string;
  space: string;
  naive?: string;
};

export const blogs: Blog[] = [
  {
    slug: "minimize-range-of-the-array",
    title: "Minimize Range of the Array",
    where: "GeeksforGeeks · DSA",
    tags: ["Heaps", "Number theory", "Greedy"],
    url: "https://www.geeksforgeeks.org/dsa/minimize-range-of-the-array/",
    summary:
    "Lead Software Engineer with four years building backend systems that carry production traffic. Lead engineer on Prezent Vivo, an AI-native platform for life sciences communications, where I own the accuracy of template conversion. Took production reliability at Prezent to effectively zero failures. ACM ICPC Regionalist and LeetCode Knight — I fix the algorithm before adding infrastructure.",
    statement:
      "Given an array A of size N. In one operation, you can select any number from the array and reduce it to a divisor greater than 1. You need to find the minimum range of the array by doing any number of operations on the array.",
    examples: [
      {
        input: "N = 3, A = [2, 4, 8]",
        output: "0",
        why: "Convert the array to [2, 2, 2], so the difference between the maximum and minimum element is zero.",
      },
      {
        input: "N = 3, A = [3, 8, 9]",
        output: "1",
        why: "Convert the array to [3, 2, 3], so the difference between the maximum and minimum element is one.",
      },
    ],
    approach: [
      "Range is max minus min, so there are only two levers: push the minimum up, or pull the maximum down. Every operation replaces a value with one of its divisors, which only ever moves a number downward — so the maximum can be reduced, and the minimum can only be raised by choosing a larger divisor than the one you settled on.",
      "Duplicates change nothing, so they can be dropped up front. What remains is a search over which divisor each distinct value should become. A min-heap over the current choice for each element lets you always see the smallest value in play, and advancing only that element to its next larger divisor is the single move that can improve the range.",
    ],
    steps: [
      "Sieve out every divisor in the range [2, 10⁴] so each element's divisor list is available in constant time.",
      "Drop duplicate elements with a set — they cannot affect the answer.",
      "Track the maximum element separately, and keep a per-element index into its divisor list.",
      "Push each element's smallest divisor into a min-heap, recording the largest of them.",
      "Take the current range as the recorded maximum minus the heap's top.",
      "Pop the minimum; if that element has a larger divisor left, push it and update the maximum.",
      "Update the best answer after each change, and stop when the heap empties or no element has a divisor left.",
    ],
    time: "O(N log N)",
    space: "O(N√N)",
  },
  {
    slug: "maximum-value-triplet-expression",
    title:
      "Maximum value of expression (arr[i] + arr[j] × arr[k]) formed from a valid Triplet",
    where: "GeeksforGeeks · DSA",
    tags: ["Arrays", "Prefix/suffix", "Ordered set"],
    url: "https://www.geeksforgeeks.org/dsa/maximum-value-of-expression-arri-arrj-arrk-formed-from-a-valid-triplet/",
    summary:
      "Maximise an expression over every increasing triplet — without ever enumerating the triplets.",
    statement:
      "Given an array arr[] of N integers. The task is to find the maximum value of (arr[i] + arr[j] * arr[k]) among every triplet (i, j, k) such that arr[i] < arr[j] < arr[k] and i < j < k.",
    examples: [
      {
        input: "arr[] = {7, 9, 3, 8, 11, 10}",
        output: "106",
        why: "The triplet (7, 9, 11) gives 7 + 9 × 11 = 106; (7, 9, 10) gives 97. The maximum is 106.",
      },
      {
        input: "arr[] = {1, 2, 3}",
        output: "7",
        why: "The only valid triplet gives 1 + 2 × 3 = 7.",
      },
    ],
    approach: [
      "The naive reading is three nested loops over every (i, j, k), checking both the index order and the value order — O(N³), and far more work than the problem needs.",
      "The move is to stop thinking about triplets and fix the middle element instead. Once j is fixed, the two halves are independent: arr[i] wants to be the largest value to the left that is strictly smaller than arr[j], and arr[k] wants to be the largest value to the right at all. Neither depends on the other, so both can be precomputed in one pass each.",
      "The right-hand side is a suffix maximum. The left-hand side needs the greatest element strictly less than the current one among everything seen so far, which is exactly a predecessor query — an ordered set handles it as you sweep. Every index then contributes one candidate answer in constant time.",
    ],
    steps: [
      "Build a suffix array holding the maximum element to the right of each position.",
      "Sweep left to right maintaining an ordered set of the values already seen.",
      "At each position j, query the set for the greatest value strictly less than arr[j] — that is the best arr[i].",
      "Read the best arr[k] straight out of the suffix array.",
      "If both exist, take arr[i] + arr[j] × arr[k] as a candidate and keep the running maximum.",
      "Insert arr[j] into the set and continue.",
    ],
    time: "O(N)",
    space: "O(N)",
    naive: "O(N³) time, O(1) space",
  },
];

export type CodingProfile = {
  platform: string;
  handle: string;
  title: string;
  detail: string;
  url?: string;
  stats?: { value: string; key: string }[];
  /** LeetCode solve mix, ordered easy → hard. */
  split?: { label: string; count: number }[];
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    handle: "Pavan_Kalyan_05",
    title: "Knight",
    detail:
      "Contest rating 1987 across 38 rated contests — top 2.81% of participants.",
    url: "https://leetcode.com/u/Pavan_Kalyan_05/",
    stats: [
      { value: "1,077", key: "solved" },
      { value: "1987", key: "rating" },
      { value: "2.81%", key: "top" },
    ],
    split: [
      { label: "easy", count: 334 },
      { label: "medium", count: 603 },
      { label: "hard", count: 140 },
    ],
  },
  {
    platform: "Codeforces",
    handle: "pavan_kalyan_01",
    title: "Specialist",
    detail: "Peak rating 1407, reached as Specialist in Div. 2 contests.",
    url: "https://codeforces.com/profile/pavan_kalyan_01",
    stats: [
      { value: "1407", key: "peak rating" },
      { value: "2020", key: "competing since" },
    ],
  },
  {
    platform: "GeeksforGeeks",
    handle: "pavang2001",
    title: "Author",
    detail:
      "Two published DSA articles, both below — plus the practice archive behind them.",
    url: "https://www.geeksforgeeks.org/user/pavang2001/",
  },
  {
    platform: "ACM ICPC",
    handle: "2020 · 2021",
    title: "Regionalist",
    detail: "Qualified for the regional round in two consecutive years.",
  },
];

export const certifications = [
  "Problem Solving (Intermediate)",
  "Problem Solving (Basic)",
  "Data Structures & Algorithms",
  "Greedy and Heap Algorithms",
  "Python (Basic)",
];

export const awards = {
  lead: {
    when: "2025 · annual",
    title: "Champion of Excellence",
    citation:
      "In recognition of outstanding dedication, exceptional performance, and unwavering commitment throughout the year 2025.",
    badges: ["All in for customer outcomes"],
    signature: "Prezent · company-wide annual award",
    image: "/award-champion-of-excellence.jpeg",
    alt: "Glass Champion of Excellence trophy from Prezent, presented to Guntuboina Pavan Kalyan for 2025.",
  },
  certificates: [
    {
      when: "Mar 2026",
      title: "Value Champion",
      badges: ["Learn with growth mindset", "Extreme ownership"],
      signature: "Signed — Rajat Mishra, Founder & CEO",
      image: "/award-value-champion-2026.jpeg",
      alt: "Prezent certificate of achievement: March 2026 Value Champion Award presented to Pavan Kalyan.",
    },
    {
      when: "Jul 2025",
      title: "Value Champion",
      badges: ["First of two"],
      signature: "Signed — Rajat Mishra, Founder & CEO",
      image: "/award-value-champion-2025.jpeg",
      alt: "Prezent certificate of achievement: July 2025 Value Champion Award presented to Guntuboina Pavan.",
    },
  ],
};

/* ------------------------------------------------------------------ *
 * Résumé. Rendered at /resume and printed to public/pavan-kalyan-resume.pdf.
 * Experience, education, certifications and profiles are reused from above,
 * so the résumé can never drift from the site.
 * ------------------------------------------------------------------ */

export const resume = {
  summary:
    "Lead Software Engineer with four years building backend systems that carry production traffic. Currently lead engineer on Prezent Vivo, an AI-native platform for life sciences communications, where I own the accuracy of template conversion — keeping every converted deck brand-aligned for enterprise customers. Took ownership of production reliability at Prezent and drove the failure rate to effectively zero. ACM ICPC Regionalist (2020, 2021) and LeetCode Knight, which shows up as a habit of fixing the algorithm before adding infrastructure.",
  skills: [
    {
      group: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Go", "Java"],
    },
    {
      group: "Backend",
      items: [
        "Node.js",
        "NestJS",
        "Express",
        "Spring Boot",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      group: "Frontend",
      items: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
    },
    {
      group: "Data",
      items: ["MongoDB", "DynamoDB", "PostgreSQL", "Redis", "S3"],
    },
    {
      group: "Platform",
      items: ["Kubernetes", "Docker", "AWS", "CI/CD", "Observability"],
    },
  ],
  links: [
    { mark: "GH", label: "GitHub", text: "pavankalyan-5", url: "https://github.com/pavankalyan-5" },
    { mark: "in", label: "LinkedIn", text: "pavankalyan05", url: "https://www.linkedin.com/in/pavankalyan05/" },
    { mark: "LC", label: "LeetCode", text: "Pavan_Kalyan_05", url: "https://leetcode.com/u/Pavan_Kalyan_05/" },
    { mark: "CF", label: "Codeforces", text: "pavan_kalyan_01", url: "https://codeforces.com/profile/pavan_kalyan_01" },
    { mark: "GfG", label: "GeeksforGeeks", text: "pavang2001", url: "https://www.geeksforgeeks.org/user/pavang2001/" },
  ],
  awardLines: [
    "Champion of Excellence — Prezent company-wide annual award, 2025.",
    "Value Champion — Prezent, Mar 2026 and Jul 2025, signed by the Founder & CEO.",
  ],
  competitive: [
    "LeetCode Knight — rating 1987, top 2.81%, 1,077 solved.",
    "Codeforces — peak 1407, reached as Specialist.",
    "ACM ICPC Regionalist — 2020 and 2021.",
  ],
};

export const education = {
  school: "Anil Neerukonda Institute of Technology & Sciences",
  degree: "B.Tech, Computer Science",
  years: "2018 — 2022",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/pavankalyan-5" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pavankalyan05/" },
];

/** Inline top-bar links. Deliberately short — the diagram and index carry the rest. */
export const navItems = [
  { name: "work", href: "/#work" },
  { name: "experience", href: "/#experience" },
  { name: "profiles", href: "/#profiles" },
  { name: "blogs", href: "/#blogs" },
];

/** Full section list, shown in the Index panel. */
export const indexItems = [
  { name: "Building now", node: "vivo · template-engine", href: "/#now" },
  {
    name: "Measured impact",
    node: "reliability · algo · demo-ui",
    href: "/#impact",
  },
  { name: "Selected work", node: "client", href: "/#work" },
  { name: "Experience", node: "api-gateway", href: "/#experience" },
  { name: "Coding profiles", node: "algo-service", href: "/#profiles" },
  { name: "Blogs", node: "algo-service", href: "/#blogs" },
  { name: "Recognition", node: "health-check", href: "/#recognition" },
  { name: "Contact", node: "client → gateway", href: "/#contact" },
];
