import HardMoneyPageClient from "./_components/HardMoneyPageClient";
import { 
  Building2, TrendingUp, Zap, Shield, FileText, CheckCircle2, DollarSign 
} from "lucide-react";

const loanTypes = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Fix & Flip Loans",
    description: "Short-term capital to acquire and renovate residential properties. Close fast, flip faster.",
    terms: "6–18 months",
    ltv: "Up to 80% of ARV",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Bridge Loans",
    description: "Bridge the gap between buying your next property and selling or refinancing your current one.",
    terms: "3–12 months",
    ltv: "Up to 75% LTV",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Ground-Up Construction",
    description: "Finance new construction projects from the ground up with draw-based funding tied to build milestones.",
    terms: "12–24 months",
    ltv: "Up to 70% LTC",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cash-Out Refinance",
    description: "Unlock equity in your existing investment properties to fund new acquisitions or improvements.",
    terms: "12–36 months",
    ltv: "Up to 70% LTV",
  },
];

const qualifications = [
  "Minimum property value of $75K",
  "Investment properties only (non-owner occupied)",
  "Credit score 600+ preferred (not required)",
  "Experience considered — first-timers welcome",
  "Clear exit strategy required",
  "US-based properties only",
];

const process = [
  {
    step: "01",
    icon: <FileText className="w-6 h-6" />,
    title: "Apply in Minutes",
    desc: "Complete our simple online application. No lengthy paperwork — just the basics about your deal.",
  },
  {
    step: "02",
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Same-Day Term Sheet",
    desc: "Our underwriting team reviews your deal and issues a term sheet within 24 hours — often same day.",
  },
  {
    step: "03",
    icon: <Building2 className="w-6 h-6" />,
    title: "Property Appraisal",
    desc: "We order a fast BPO or appraisal to confirm value. We use our own network to keep this moving.",
  },
  {
    step: "04",
    icon: <DollarSign className="w-6 h-6" />,
    title: "Closing & Funding",
    desc: "Close in as few as 5 business days. Funds wired directly to the closing table — no delays.",
  },
];

const faqs = [
  {
    q: "What is a hard money loan?",
    a: "A hard money loan is a short-term, asset-backed loan secured by real estate. Unlike bank loans, approval is based primarily on the property value — not your income or credit score.",
  },
  {
    q: "How quickly can I get funded?",
    a: "Typically 5–10 business days from application to closing. In some cases, we can close in as few as 3 days for straightforward deals with clean title.",
  },
  {
    q: "What are your rates?",
    a: "Rates range from 9%–13% depending on the deal, loan amount, LTV, borrower experience, and market. Points typically range from 1–3%. We provide a full term sheet upfront — no surprises.",
  },
  {
    q: "Do I need good credit?",
    a: "We're primarily asset-based lenders. While we do a soft credit check, a 600+ score is preferred but not a hard requirement. The deal and exit strategy matter most.",
  },
];

export const metadata = {
  title: "Hard Money Lending | Fast Real Estate Capital | Adam Cohen",
  description: "Fast, asset-backed capital for real estate investors. Close in 5-10 days with up to 80% LTV. No income verification required.",
};

export default function HardMoney() {
  return (
    <HardMoneyPageClient 
      loanTypes={loanTypes} 
      qualifications={qualifications} 
      process={process} 
      faqs={faqs} 
    />
  );
}
