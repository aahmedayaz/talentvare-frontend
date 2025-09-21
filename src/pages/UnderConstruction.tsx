import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { generateAvatarDataUri } from '../utils/avatar'

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const seed = pathname === '/profile' ? 'talentvare-user' : `page-${pathname}`

  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 tablet:px-6 tablet-lg:px-[50px]">
      <div className="grid place-items-center py-16">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-lg">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-2xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-100 blur-2xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <img
                src={generateAvatarDataUri({ seed })}
                alt="Avatar"
                className="h-14 w-14 rounded-2xl ring-2 ring-white shadow-md"
              />
              <div>
                <h1 className="text-2xl font-semibold text-slate-800">Under Construction</h1>
                <p className="text-slate-600">We're crafting this experience. Check back soon.</p>
              </div>
            </div>

            <div className="mt-6 text-slate-600">
              The page <span className="font-mono text-slate-800">{pathname}</span> isn't ready yet. Meanwhile, explore jobs on the main page.
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="cursor-pointer rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-600 active:scale-[.98]"
              >
                Go to Find Jobs
              </button>
              <button
                onClick={() => navigate(-1)}
                className="cursor-pointer rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:ring-blue-400 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction


