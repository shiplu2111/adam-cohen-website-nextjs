import InsightDetailPageClient from "./_components/InsightDetailPageClient";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: `${post.title} | Insights | Adam Cohen`,
    description: post.excerpt,
  };
}

export default function InsightDetail({ params }: Props) {
  const { id } = use(params);
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }

  return <InsightDetailPageClient post={post} />;
}
