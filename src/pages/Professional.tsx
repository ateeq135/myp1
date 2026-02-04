import React from 'react'
import { profile } from '../data/profile'
import { Section } from '../components/Section'

export default function Professional() {
  const p = profile.professional_full
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <Section title="Professional Development">
        <h3 className="font-semibold text-slate-900">Memberships & Associations</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {p.memberships.map(m => <li key={m}>{m}</li>)}
        </ul>

        <h3 className="mt-6 font-semibold text-slate-900">Training & Seminars Conducted</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {p.training_conducted.map(t => <li key={t}>{t}</li>)}
        </ul>

        <h3 className="mt-6 font-semibold text-slate-900">Trainings Attended</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {p.training_attended.map(t => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section title="Leadership & Administration">
        <h3 className="font-semibold text-slate-900">Managerial Positions</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {p.leadership.positions.map(l => <li key={l}>{l}</li>)}
        </ul>

        <h3 className="mt-6 font-semibold text-slate-900">Scientific Events Organisation</h3>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
          {p.leadership.events.map(e => <li key={e}>{e}</li>)}
        </ul>
      </Section>
    </div>
  )
}
