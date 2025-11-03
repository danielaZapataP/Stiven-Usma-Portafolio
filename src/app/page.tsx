"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2f2ec]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="border border-[#2a3036]/20 rounded-full px-8 py-4 flex items-center justify-between bg-[#f2f2ec]/80 backdrop-blur-sm">
            <Link href="/" className="font-serif text-xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
              STIVEN USMA
            </Link>
            <div className="flex items-center gap-6">
              <Link href="https://www.instagram.com/stivenusma87/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#cta"
                className="border border-[#2a3036] px-6 py-2 rounded-full text-sm hover:bg-[#2a3036] hover:text-white transition-colors italic"
              >
                book me
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-4">
                <span className="block text-2xl italic mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Hi, my name is</span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="block text-7xl md:text-8xl font-serif leading-none"
                  style={{ fontFamily: '"Charm", serif' }}
                >
                  STIVEN USMA
                </motion.span>
              </h1>

              {/* Stats Table */}
              <div className="mt-12 space-y-3 max-w-md">
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">HEIGHT</div>
                  <div className="text-sm">180 [5&apos; 10&apos;&apos;]</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">CHEST</div>
                  <div className="text-sm">97 [38³/₁₆&apos;&apos;]</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">WAIST</div>
                  <div className="text-sm">80 [31¹/₂&apos;&apos;]</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">HIPS</div>
                  <div className="text-sm">100 [39³/₈&apos;&apos;]</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">SWIMWEAR</div>
                  <div className="text-sm">S-M</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">SHIRT</div>
                  <div className="text-sm">S</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">SHOES</div>
                  <div className="text-sm">41 [10]</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">EYES</div>
                  <div className="text-sm">BROWN</div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 border-b border-[#2a3036]/20 pb-3">
                  <div className="text-sm text-[#2a3036]/60">HAIR</div>
                  <div className="text-sm">BLACK</div>
                </div>
              </div>

              <Link
                href="#cta"
                className="mt-8 inline-block border border-[#2a3036] px-8 py-3 text-sm hover:bg-[#2a3036] hover:text-white transition-colors italic"
              >
                book me
              </Link>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/images/3-NoBG.png"
                  alt="Stiven Usma"
                  width={700}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured By 
      <section className="py-12 px-6 border-t border-b border-[#2a3036]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm italic mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Featured by</p>
          <div className="flex flex-wrap items-center justify-start gap-12">
            <Image src="https://ext.same-assets.com/2894550263/809880501.svg" alt="Brand" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="https://ext.same-assets.com/2894550263/2404910795.svg" alt="Brand" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="https://ext.same-assets.com/2894550263/1401871342.svg" alt="Brand" width={120} height={40} className="h-10 w-auto opacity-70" />
            <Image src="https://ext.same-assets.com/2894550263/4240357035.svg" alt="Brand" width={120} height={40} className="h-8 w-auto opacity-70" />
            <Image src="https://ext.same-assets.com/2894550263/1076206660.svg" alt="Brand" width={120} height={40} className="h-8 w-auto opacity-70" />
          </div>
        </div>
      </section>
      */}

      {/* Portfolio */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl text-center mb-16 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            Portfolio
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Large image left */}
            <div className="md:row-span-2">
              <Image
                src="/images/1.JPEG"
                alt="Portfolio 1"
                width={600}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right image */}
            <div>
              <Image
                src="/images/2.JPEG"
                alt="Portfolio 2"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote box */}
            <div className="bg-[#e8e4dd] p-12 flex flex-col justify-center">
              <blockquote className="text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                &ldquo;Be yourself; everyone else is already taken&rdquo;
              </blockquote>
              <p className="mt-6 text-sm">Oscar Wilde</p>
            </div>

            {/* Bottom row - 2 images */}
            <div>
              <Image
                src="/images/3.JPEG"
                alt="Portfolio 3"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Image
                src="/images/4.JPEG"
                alt="Portfolio 4"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right - 2 small images */}

            <div className="col-span-full grid gap-4">
              {/* Row 1 – three images */}
              <div className="grid md:grid-cols-3 gap-4">
                <Image
                  src="/images/5.JPEG"
                  alt="Portfolio 5"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <Image
                  src="/images/6.JPEG"
                  alt="Portfolio 6"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <Image
                  src="/images/7.jpg"
                  alt="Portfolio 7"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 2 – two images */}
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/8.JPEG"
                  alt="Portfolio 8"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <Image
                  src="/images/9.JPEG"
                  alt="Portfolio 9"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="flex justify-center my-12">
        <iframe
          src="/portafolio.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"
          width="80%"
          height="800"
          className="border border-[#2a3036]/20 rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Book Me Now */}
      <section id="cta" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 italic" style={{ fontFamily: 'Playfair Display, serif', fontWeight:'bolder', color: '#ba8662' }}>
            Book me now
          </h2>
          <p className="text-lg">
            Booking enquiries to{' '}
            <a href="mailto:stivenusma87@gmail.com" className="underline hover:no-underline">
              stivenusma87@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3C53] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl mb-4 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
              STIVEN USMA
            </h3>
            <Link href="https://www.instagram.com/stivenusma87/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>

          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              <p>© 2025 Stiven Usma. All rights reserved.</p>
              <p className="text-white/70">
                Developed by {' '}
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                  Dazapi
                </a>
                .
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:underline">Legal Notice</Link>
              <Link href="#" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
