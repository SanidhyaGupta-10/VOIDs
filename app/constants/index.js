// ================================
// Navigation
// ================================
const NAV_LINKS = [
  { label: "Chat", href: "/chat" },
  { label: "VOID Hub", href: "/hub" },
];

// ================================
// Footer
// ================================
const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Chat", href: "/chat" },
      { label: "VOID Hub", href: "/hub" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/links/about" },
      { label: "Contact", href: "/links/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/links/privacy" },
      { label: "Terms of Service", href: "/links/terms" },
    ],
  },
];


// ================================
// VOID Hub Cards (v1)
// ================================
 const HUB_CARDS = [
  {
    id: "chat",
    title: "VOID Chat",
    description: "Think clearly. Ask deeply. Understand better. VOID Chat helps you brainstorm ideas, clarify doubts, and explore complex topics with concise explanations and insightful suggestions.",
    href: "/chat",
    badge: "Core",
    access: "lite", 
  },
  {
    id: "image",
    title: "Image Generator",
    description: "Turn ideas into visuals using AI. Generate stunning images, illustrations, and graphics instantly. Perfect for presentations, projects, and creative inspiration.",
    href: "/hub",
    badge: "Beta",
    access: "lite",
  },
  {
    id: 1,
    title: "MathsBuddy",
    badge: "NEW",
    description: "An interactive platform to strengthen your math concepts with exercises, tutorials, and problem-solving tips for all levels. MathsBuddy helps you master algebra, calculus, geometry, and more with step-by-step explanations and practice problems tailored to your pace.",
    href: "https://maths-buddy-six.vercel.app/",
    // href: "syntaxprime"
  },
  {
    id: 2,
    title: "Syntax Prime",
    badge: "FEATURED",
    description: "Learn programming syntax, coding best practices, and hands-on examples for multiple languages in an intuitive way. Syntax Prime guides you through Python, JavaScript, C++, and more, with real-world projects, debugging tips, and interactive exercises to make learning practical and efficient.",
    href: "https://syntax-prime.vercel.app/",
    // href: "mathsbuddy"
  },
];


// ================================
// Pricing Plans
// ================================
const PLANSs = {
  lite: {
    id: "lite",
    name: "Lite",
    price: "Free",
    description: "For individuals getting started with AI",
    features: [
      "Daily message limits",
      "Basic AI models",
      "Limited VOID Hub access",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: "Coming Soon",
    description: "For power users who want more control",
    features: [
      "Higher usage limits",
      "Advanced AI models",
      "Full VOID Hub access",
      "Priority performance",
    ],
  },
};


// ================================
// Export all constants at once
// ================================
export {
  NAV_LINKS,
  FOOTER_LINKS,
  HUB_CARDS,
  PLANS,
  PLANSs,
};
export const PLANS = {
  FREE: {
    id: "free",
    name: "Free",
    price: "₹0",
    description: "Get started with core features.",
    tagline: "Best for individuals & learners",
    features: [
      "Basic access",
      "Community support",
      "Limited usage",
    ],
  },
  PRO: {
    id: "pro",
    name: "Pro",
    price: "₹199 / month",
    description: "Full access for serious builders.",
    tagline: "Ideal for startups & professionals",
    features: [
      "Unlimited usage",
      "Priority support",
      "Advanced tools",
    ],
  },
};
