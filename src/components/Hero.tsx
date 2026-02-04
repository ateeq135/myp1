import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-start">
        {/* LEFT: Name + About (intro + interests) */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm text-brand-700 font-medium">Academic Profile</p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {profile.name}
          </h1>

          {/* ✅ Combined About block */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              {profile.about}
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-900">Research interests</p>
              <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                {profile.research_interests.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Photo + contact info + links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Profile Image */}
          <div className="w-53 h-53 rounded-full border-2 border-slate-200 ring-2 ring-brand-200 overflow-hidden bg-slate-100 flex items-center justify-center shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = 'none'
                ;(el.parentElement as HTMLDivElement).innerHTML =
                  '<div style="text-align:center;color:#64748b;font-size:14px;line-height:1.4;padding:16px;">Add your photo<br/>public/assets/profile.jpg</div>'
              }}
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-1 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-500" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-slate-500" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-slate-500" />
              <a href={`tel:${profile.phone}`} className="hover:underline">
                {profile.phone}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-100 text-brand-800 px-3 py-1.5 text-sm hover:bg-brand-200 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
