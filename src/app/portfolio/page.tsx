"use client";

import Link from "next/link";

export default function PortfolioPDF() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2ec] p-8 relative">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 border border-[#2a3036] px-5 py-2 rounded-full text-sm hover:bg-[#2a3036] hover:text-white transition-colors italic"
      >
        ← Back
      </Link>

      {/* PDF Viewer */}
      <iframe
        src="/portafolio.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="90%"
        height="900"
        className="border border-[#2a3036]/20 rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}
