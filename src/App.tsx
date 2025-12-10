import { motion } from "framer-motion";
import { Instagram, MessageCircle, Globe, Zap } from "lucide-react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LinkButton } from "./components/LinkButton";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 selection:bg-red-500/30">
      <AnimatedBackground />

      <main className="relative z-10 w-full max-w-lg flex flex-col items-center gap-8 py-12">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-24 h-24 bg-black border-2 border-zinc-800 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.3)]">
             {/* Placeholder Logo - Replace with actual img tag if available */}
             <Zap className="w-10 h-10 text-red-600 fill-current" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">
            OFFICIAL
          </div>
        </motion.div>

        {/* Header Text */}
        <div className="text-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-white"
          >
            1000Vibes
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative inline-block"
          >
            <p className="text-xl font-medium text-zinc-300">
              Step into the Vibe 🔥
            </p>
            {/* Animated Underline */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
              className="h-0.5 bg-red-600 mt-1 mx-auto rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]"
            />
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-4 mt-4">
          <LinkButton
            icon={MessageCircle}
            label="Chat With Us"
            subLabel="Connect on WhatsApp"
            href="https://wa.me/your-number"
            delay={0.6}
          />
          <LinkButton
            icon={Instagram}
            label="Follow Us"
            subLabel="@1000Vibes on Instagram"
            href="https://instagram.com"
            delay={0.7}
          />
          <LinkButton
            icon={Globe}
            label="Visit Website"
            subLabel="Explore our latest collection"
            href="https://yourdomain.com"
            delay={0.8}
          />
        </div>

      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 mt-auto py-6 text-center"
      >
        <p className="text-xs text-zinc-500 uppercase tracking-widest">
          © {currentYear} 1000Vibes
        </p>
        <div className="w-8 h-0.5 bg-red-900/50 mx-auto mt-2 rounded-full" />
      </motion.footer>
    </div>
  );
}

export default App;
