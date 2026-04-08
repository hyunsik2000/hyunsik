import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  MonitorSmartphone,
  CheckCircle2,
  Users,
  MessageCircle,
  MousePointer2,
} from "lucide-react";

export const NextJsVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center p-8 overflow-hidden">
    <div className="absolute inset-0 bg-blue-500/20 blur-[60px]" />
    <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
      <div className="absolute inset-0 flex items-end justify-center pb-12 opacity-10">
        <div className="w-full max-w-[200px] space-y-2">
          {[0, 40, 80, 100].map((val, idx) => (
            <motion.div
              key={val}
              initial={{ width: 0 }}
              animate={{ width: `${val}%` }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
              className="h-1 bg-white/30 backdrop-blur-xl rounded-full"
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-1/2 -translate-y-1/2 md:left-8"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-2xl">
          <Server className="w-6 h-6 text-white mb-1" />
          <p className="text-white text-[10px] font-medium">Server</p>
        </div>
      </motion.div>

      <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 md:right-8"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-2xl">
          <MonitorSmartphone className="w-6 h-6 text-white mb-1" />
          <p className="text-white text-[10px] font-medium">Client</p>
        </div>
      </motion.div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <motion.line
          x1="30%" y1="50%" x2="40%" y2="50%"
          stroke="white" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.line
          x1="70%" y1="50%" x2="60%" y2="50%"
          stroke="white" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </svg>
    </div>
  </div>
);

export const InfraVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center p-8 overflow-hidden">
    <div className="absolute inset-0 bg-teal-500/20 blur-[60px]" />
    <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <div className="bg-emerald-400/20 backdrop-blur-md border border-emerald-300/40 rounded-full px-4 py-1 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
          <span className="text-white text-[10px] font-medium">Status: Success</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-2xl">
          <Server className="w-7 h-7 text-white" />
        </div>
        <svg width="60" height="2" className="opacity-60">
          <line x1="0" y1="1" x2="60" y2="1" stroke="white" strokeWidth="2" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
          </line>
        </svg>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 shadow-2xl">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.2 }}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"
          >
            <div className="w-4 h-4 bg-emerald-300 rounded-sm opacity-60" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const CollabVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center p-8 overflow-hidden">
    <div className="absolute inset-0 bg-amber-500/20 blur-[60px]" />
    <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
      <div className="relative flex items-center justify-center mb-10">
        <div className="absolute -left-12 w-14 h-14 bg-amber-200/30 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="absolute w-14 h-14 bg-orange-200/30 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl z-20">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -right-12 w-14 h-14 bg-amber-300/30 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl">
          <MousePointer2 className="w-6 h-6 text-white" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-2 shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-bold">Approve</span>
        </div>
      </motion.div>
    </div>
  </div>
);
