"use client";

import * as Lucide from "lucide-react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const isEmoji = (str: string) => {
  const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/;
  return emojiRegex.test(str);
};

export const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  if (!name) return null;
  
  if (isEmoji(name)) {
    return <span className={className}>{name}</span>;
  }

  const IconComponent = (Lucide as any)[name];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  return <AlertCircle className={cn(className, "text-destructive/50")} />;
};
