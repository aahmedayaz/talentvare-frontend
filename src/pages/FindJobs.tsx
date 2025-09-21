import React from 'react'
import { generateAvatarDataUri } from '../utils/avatar'

const FindJobs: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 tablet:px-6 tablet-lg:px-[50px]">
      <div className="py-10">
        <h1 className="text-2xl tablet:text-3xl font-semibold text-slate-800">
          Find Jobs
        </h1>
        <p className="mt-2 text-slate-600 max-w-prose">
          Explore thousands of opportunities across top companies. Use filters and search to find the best match for your skills.
        </p>
        <div className="mt-6 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={generateAvatarDataUri({ seed: `company-${i}` })}
                  className="h-12 w-12 rounded-xl object-cover"
                  alt="Company"
                />
                <div>
                  <div className="font-semibold text-slate-800">Frontend Engineer</div>
                  <div className="text-sm text-slate-500">Acme Inc · Remote</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React','TypeScript','Tailwind','Node'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-500">$90k - $130k · Full-time</div>
              <div className="mt-3 text-blue-700 opacity-0 group-hover:opacity-100 transition">View details →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindJobs


