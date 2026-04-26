"use client";

import { motion } from "framer-motion";

const socialStats = [
  {
    platform: "Instagram",
    value: "3,048,949",
    label: "FOLLOWERS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="url(#insta-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="url(#insta-grad)" strokeWidth="2" />
        <path d="M17.5 6.51L17.51 6.49889" stroke="url(#insta-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="insta-grad" x1="2.16" y1="2.16" x2="22.2" y2="22.2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#405DE6" /><stop offset="0.25" stopColor="#833AB4" /><stop offset="0.5" stopColor="#C13584" /><stop offset="0.75" stopColor="#E1306C" /><stop offset="1" stopColor="#FD1D1D" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    platform: "Facebook",
    value: "6,372,341",
    label: "FOLLOWERS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    )
  },
  {
    platform: "X",
    value: "652,382",
    label: "FOLLOWERS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
      </svg>
    )
  },
  {
    platform: "TikTok",
    value: "1,100,000",
    label: "FOLLOWERS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.91 1.64-1.15 3.7-1.46 5.66-1.07v4.4c-1.3-.4-2.8-.2-3.83.6-.9.7-.85 1.95-.5 2.92.23.47.57.85 1.01 1.1.53.3 1.14.38 1.74.28 1.05-.12 1.93-1.06 1.94-2.12.04-4.44.01-8.89.02-13.33z" />
      </svg>
    )
  },
];

const StatsSection = ({ stats }: { stats?: any[] }) => {
  const displayStats = stats && stats.length > 0 ? stats.map(s => ({
    ...s,
    icon: socialStats.find(os => os.platform.toLowerCase() === s.platform.toLowerCase())?.icon || socialStats[0].icon
  })) : socialStats;

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-12 md:gap-x-24">
          {displayStats.map((stat, i) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5"
            >
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-3xl md:text-3xl font-black text-[#1a2b4b] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-[#718096] tracking-[0.15em] uppercase leading-none">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;



