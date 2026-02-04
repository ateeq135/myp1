import React from "react"
import { profile } from "../data/profile"

export default function Professional() {
  const p = profile.professional_full

  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Professional Profile
            </h1>

            <a
              href="#"
              className="text-sm font-medium text-brand-700 hover:underline"
              title="Back to main profile"
            >
              ← Back
            </a>
          </div>

          <div className="mt-8 space-y-10">
            {/* Professional Development */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                Professional Development
              </h2>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Memberships & Associations
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                {p.memberships.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-slate-900">
                Professional Training / Seminars Conducted
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                {p.training_conducted.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-slate-900">
                Professional Trainings Attended
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                {p.training_attended.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>

            {/* Leadership */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                Leadership, Management & Administration
              </h2>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Managerial Positions
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                {p.leadership.positions.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-slate-900">
                Scientific Events Organisation
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700">
                {p.leadership.events.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
