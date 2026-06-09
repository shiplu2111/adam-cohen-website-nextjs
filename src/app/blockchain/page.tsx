import BlockchainPageClient from "./_components/BlockchainPageClient";
import { Layers, Share2, ShieldCheck, Globe } from "lucide-react";

const pillars = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Tokenization",
    description: "Converting physical real estate assets into digital security tokens, allowing for fractional ownership and seamless transfers.",
    impact: "Democratized Access",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Fractionalization",
    description: "Enabling investors to own shares of high-value properties with lower capital requirements, increasing portfolio diversification.",
    impact: "Lower Entry Barrier",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Liquidity",
    description: "Creating 24/7 secondary markets for traditionally illiquid assets, allowing investors to exit positions more efficiently.",
    impact: "Exit Velocity",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Smart Compliance",
    description: "Automating regulatory requirements, KYC/AML, and distributions through secure, immutable smart contracts.",
    impact: "Zero Friction",
  },
];

const included = [
  "End-to-end STO structuring and legal framework",
  "Smart contract development and security audits",
  "Investor onboarding and KYC/AML integration",
  "Digital asset custody and management solutions",
  "Secondary market listing and liquidity support",
  "Automated dividend and distribution management",
  "Real-time transparent reporting on-chain",
  "Global regulatory compliance advisory",
];

const results = [
  { val: "$100M+", label: "Liquidity Target", sub: "projected secondary volume" },
  { val: "24/7", label: "Market Access", sub: "continuous trading" },
  { val: "Global", label: "Investor Base", sub: "borderless capital" },
  { val: "100%", label: "Transparency", sub: "immutable ledger" },
];

const steps = [
  {
    step: "01",
    title: "Asset Selection",
    desc: "We perform deep due diligence on real estate assets to ensure they meet the criteria for a successful tokenization.",
  },
  {
    step: "02",
    title: "Legal Structuring",
    desc: "Establishing the SPV and legal framework to ensure the security tokens are fully compliant with securities laws.",
  },
  {
    step: "03",
    title: "Token Deployment",
    desc: "Developing and deploying the smart contracts that represent ownership and handle automated governance.",
  },
  {
    step: "04",
    title: "STO Launch",
    desc: "Launching the Security Token Offering to a global pool of qualified investors and managing the capital raise.",
  },
];

export const metadata = {
  title: "Blockchain & Real Estate Tokenization | Adam Cohen",
  description: "The future of finance is here. Explore Real Estate backed Security Tokens, fractional ownership, and global liquidity powered by blockchain technology.",
};

export default function BlockchainPage() {
  return (
    <BlockchainPageClient
      title="Blockchain & Tokenization"
      subtitle="Integrating cutting-edge technology with traditional investment vehicles to unlock the future of real estate finance."
      pillars={pillars}
      included={included}
      results={results}
      steps={steps}
    />
  );
}
