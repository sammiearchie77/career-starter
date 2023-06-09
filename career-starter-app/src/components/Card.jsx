import React from 'react'

export default function Card({ children, cardTitle }) {
  return (
    <div>
        <div class=" basis-1/4 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl m-5">
            <h2 className="font-bold text-indigo-600 py-5 text-3xl">{ cardTitle }</h2>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-md leading-relaxed">
                { children }
            </p>
        </div>
    </div>
  )
}
