import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface LinkButtonProps {
  icon: LucideIcon;
  label: string;
  subLabel?: string;
  href: string;
  delay?: number;
}

export const LinkButton = ({ icon: Icon, label, subLabel, href, delay = 0 }: LinkButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full max-w-md mx-auto block"
    >
      {/* Glow Effect Container */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500 group-hover:duration-200" />
      
      {/* Button Content */}
      <div className={cn(
        "relative flex items-center p-4 rounded-xl bg-black border border-zinc-800",
        "group-hover:border-red-500/50 transition-colors duration-300"
      )}>
        <div className="flex-shrink-0 mr-4">
          <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-red-600/10 text-white group-hover:text-red-500 transition-colors duration-300">
            <Icon size={24} />
          </div>
        </div>
        <div className="flex-grow text-left">
          <h3 className="text-lg font-bold text-white group-hover:text-red-50 transition-colors">{label}</h3>
          {subLabel && <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{subLabel}</p>}
        </div>
        
        {/* Arrow Icon that appears on hover */}
        <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-red-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};
