import ContactPageClient from "./_components/ContactPageClient";
import { getSettings } from "@/lib/cms";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function getContactSettings() {
  try {
    const res = await fetch(`${API_URL}/public/settings/contact`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.data || {};
  } catch {
    return {};
  }
}

export const metadata = {
  title: "Contact | Adam Cohen",
  description: "Get in touch with Adam Cohen to discuss ventures, consulting, or strategic partnerships.",
};

export default async function Contact() {
  const contact = await getContactSettings();
  return <ContactPageClient contact={contact} />;
}
