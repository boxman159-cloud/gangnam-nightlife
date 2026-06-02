'use client'

import { useState } from 'react'
import type { FAQ } from '@/types'

interface AccordionProps {
  items: FAQ[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`glass-card rounded-xl overflow-hidden border transition-all duration-200 ${
            openIndex === i ? 'border-neon-pink/30' : 'border-white/5 hover:border-white/10'
          }`}
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className={`font-semibold text-sm md:text-base ${openIndex === i ? 'text-neon-pink' : 'text-white'}`}>
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                openIndex === i
                  ? 'border-neon-pink bg-neon-pink/10 rotate-45'
                  : 'border-white/20 rotate-0'
              }`}
            >
              <svg
                className={`w-3 h-3 ${openIndex === i ? 'text-neon-pink' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
