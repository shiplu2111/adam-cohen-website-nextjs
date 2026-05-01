"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Play, Calendar, MonitorPlay, Share2, ThumbsUp, Plus, Loader2, Copy, Check } from "lucide-react";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface CohenTvVideo {
  id: number;
  cohen_tv_id: number;
  title: string;
  host: string | null;
  duration: string | null;
  date: string | null;
  link: string;
  type?: string;
  order: number;
  is_published: boolean;
  thumbnail: string | null;
  channel?: {
    platform_name: string;
    name: string;
    subscribers: string;
    logo: string | null;
    url?: string;
  };
}

interface CohenTvClientProps {
  initialVideos: CohenTvVideo[];
}

export default function CohenTvClient({ initialVideos }: CohenTvClientProps) {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<CohenTvVideo | null>(initialVideos[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    if (!activeVideo) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: activeVideo.title,
          text: `Watch ${activeVideo.title} on Cohen TV`,
          url: window.location.href,
        });
      } else {
        handleCopy();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const otherEpisodes = initialVideos.filter((ep) => ep.id !== activeVideo?.id);
  const upNextEpisodes = otherEpisodes.slice(0, 4);
  const moreEpisodes = otherEpisodes.slice(4);

  if (!mounted) return null;

  if (initialVideos.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
        <MonitorPlay className="h-16 w-16 text-muted-foreground mb-4 opacity-20" />
        <h2 className="text-2xl font-bold mb-2">Cohen TV is Offline</h2>
        <p className="text-muted-foreground max-w-md">We're currently preparing some exclusive new content. Please check back later!</p>
      </div>
    );
  }

  if (!activeVideo) return null;

  return (
    <PageTransition>
      <section className="pt-24 pb-20 px-4 md:px-6 min-h-screen bg-background">
        <div className="max-w-[1600px] mx-auto mt-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* LEFT COLUMN: Main Video & Details */}
            <div className="flex-1 lg:max-w-[60%] xl:max-w-[63%]">
              <div className="flex flex-col">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black mb-4 shadow-xl border border-white/5 flex flex-col justify-end">
                  <MediaController className="w-full h-full absolute inset-0">
                    <ReactPlayer
                      key={activeVideo.link}
                      src={activeVideo.link}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={isPlaying}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      slot="media"
                    />
                    <MediaControlBar slot="control-bar" className="w-full">
                      <MediaPlayButton />
                      <MediaSeekBackwardButton seekOffset={10} />
                      <MediaSeekForwardButton seekOffset={10} />
                      <MediaTimeRange />
                      <MediaTimeDisplay showDuration />
                      <MediaMuteButton />
                      <MediaVolumeRange />
                      <MediaPlaybackRateButton />
                      <MediaFullscreenButton />
                    </MediaControlBar>
                  </MediaController>
                </div>

                <h1 className="text-xl md:text-2xl font-bold mb-3 text-foreground line-clamp-2">
                  {activeVideo.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
                      {activeVideo.channel?.logo ? (
                        <img src={activeVideo.channel.logo || undefined} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <div className="font-bold text-lg">{activeVideo.host?.charAt(0) || "A"}</div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-[15px] leading-snug">
                        {activeVideo.channel?.name || activeVideo.host}
                      </p>
                      <p className="text-xs text-muted-foreground">{activeVideo.channel?.subscribers || "1.2M subscribers"}</p>
                    </div>
                    <a
                      href={activeVideo.channel?.url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-4 bg-foreground text-background font-medium py-1.5 px-4 rounded-full text-sm hover:bg-foreground/80 transition-colors inline-block"
                    >
                      Subscribe
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary/80 text-foreground text-sm font-medium py-2 px-4 rounded-full transition-colors"
                    >
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button 
                      onClick={handleCopy}
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full transition-all duration-300",
                        copied 
                          ? "bg-green-500/20 text-green-500 border border-green-500/30" 
                          : "bg-secondary/50 hover:bg-secondary/80 text-foreground"
                      )}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copy Link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Up Next */}
            <div className="flex-1 lg:max-w-[30%] xl:max-w-[27%] flex flex-col gap-3">
              <div className="hidden lg:flex items-center gap-2 mb-2 px-2">
                <span className="bg-foreground text-background text-sm font-medium py-1 px-3 rounded-lg">Up Next</span>
              </div>

              {upNextEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  onClick={() => {
                    setActiveVideo(ep);
                    setIsPlaying(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex gap-2.5 cursor-pointer group rounded-lg transition-colors p-1 hover:bg-secondary/20"
                >
                  <div className="relative w-[160px] min-w-[160px] aspect-video rounded-lg overflow-hidden bg-secondary/30 border border-white/5 flex-shrink-0 flex items-center justify-center">
                    {ep.thumbnail ? (
                      <img src={ep.thumbnail || undefined} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-black/40 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                      <Play className="w-8 h-8 text-white fill-current drop-shadow-md shadow-black" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                      {ep.duration}
                    </div>
                  </div>

                  <div className="flex flex-col py-0.5 pr-2">
                    <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors mb-1">
                      {ep.title}
                    </h4>
                    <p className="text-[12px] text-muted-foreground line-clamp-1">
                      {ep.host}
                    </p>
                    <div className="flex items-center gap-1 text-[12px] text-muted-foreground mt-0.5">
                      <span>{ep.date ? String(ep.date).split('T')[0] : ""}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Videos Grid */}
          {moreEpisodes.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-foreground mb-6">More From {activeVideo.channel?.name || activeVideo.host}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
                {moreEpisodes.map((ep) => (
                  <div
                    key={`more-${ep.id}`}
                    onClick={() => {
                      setActiveVideo(ep);
                      setIsPlaying(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex flex-col gap-2.5 cursor-pointer group rounded-lg"
                  >
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-secondary/30 border border-white/5 flex items-center justify-center">
                      {ep.thumbnail ? (
                        <img src={ep.thumbnail || undefined} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-black/40 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                        <Play className="w-10 h-10 text-white fill-current drop-shadow-md shadow-black" />
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 bg-black/80 px-2 py-0.5 rounded text-xs text-white font-medium">
                        {ep.duration}
                      </div>
                    </div>
                    <div className="flex flex-col pr-2">
                      <h4 className="text-[15px] font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors mb-1">
                        {ep.title}
                      </h4>
                      <p className="text-[13px] text-muted-foreground line-clamp-1">
                        {ep.host}
                      </p>
                      <div className="flex items-center gap-1 text-[13px] text-muted-foreground mt-0.5">
                        <span>{ep.date ? String(ep.date).split('T')[0] : ""}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
