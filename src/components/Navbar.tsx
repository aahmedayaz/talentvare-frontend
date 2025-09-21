import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const SearchIcon = ({ className }: { className?: string }) => {
  const [imgOk, setImgOk] = React.useState(true)
  return imgOk ? (
    <img src="/search.png" alt="Search" onError={() => setImgOk(false)} className={[className || '', 'select-none'].join(' ')} />
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={[className || ''].join(' ')} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

type NavItem = {
  label: string
  to: string
  exact?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Find Jobs', to: '/', exact: true },
  { label: 'Top Companies', to: '/top-companies' },
  { label: 'Job Tracker', to: '/job-tracker' },
  { label: 'My Calendar', to: '/calendar' },
  { label: 'Documents', to: '/documents' },
  { label: 'Messages', to: '/messages' },
  { label: 'Notifications', to: '/notifications' },
]

const linkBase =
  'relative cursor-pointer transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm'

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const MenuIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={[className || '', 'h-5 w-5'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )

  const CloseIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={[className || '', 'h-5 w-5'].join(' ')}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

  const Item = ({ item }: { item: NavItem }) => (
    <NavLink
      to={item.to}
      end={item.exact}
      className={({ isActive }) =>
        [
          linkBase,
          // Responsive font sizes: mobile->tablet->laptop->>=1440px, keep items on one line
          'whitespace-nowrap tracking-normal text-[13px] mobile:text-[14px] tablet:text-[14px] laptop-sm:text-[15px] laptop-lg:text-[16px] laptop-lg:leading-[1] font-[var(--font-neue,ui-sans-serif)]',
          isActive ? 'text-[#0154AA] font-semibold' : 'text-[#737A91] hover:text-[#0154AA] font-medium',
        ].join(' ')
      }
      onClick={() => setOpen(false)}
    >
      {item.label}
    </NavLink>
  )

  return (
    <header className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-3 tablet:px-6 tablet-lg:px-[50px]">
        <div className="flex items-center justify-between py-3">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center cursor-pointer"
              aria-label="Talentvare home"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[38.449px] w-[41.085px] shrink-0 object-contain group-hover:scale-105 transition-transform"
              />
            </button>

            {/* Tablet+ nav */}
            <nav className="hidden tablet:flex items-center gap-3 laptop-sm:gap-4 laptop-lg:gap-[25px] ml-2">
              {NAV_ITEMS.map((it) => (
                <Item key={it.label} item={it} />
              ))}
            </nav>
          </div>

          {/* Right: Search, CTA, Avatar (tablet and up) */}
          <div className="hidden tablet:flex items-center gap-2 laptop-sm:gap-3 min-w-0">
            <div className="relative min-w-0 hidden laptop-sm:block">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
              <input
                type="search"
                placeholder="Search"
                className="h-10 shrink w-[clamp(140px,28vw,260px)] rounded-xl bg-[#F5F8FF] pl-10 pr-4 text-sm tracking-normal text-slate-700 placeholder:text-slate-400 shadow-inner ring-1 ring-[#E3ECFF] focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <button
              onClick={() => navigate('/resume-builder')}
              className="hidden laptop-sm:inline-flex items-center justify-center shrink-0 cursor-pointer h-10 rounded-xl bg-[#0154AA] px-4 text-[16px] leading-[1] tracking-normal font-medium font-[var(--font-neue,ui-sans-serif)] text-white shadow-md hover:bg-[#0154AA] active:scale-[.98] transition"
            >
              Resume Builder
            </button>
            <button onClick={() => navigate('/profile')} className="shrink-0 cursor-pointer">
              <img
                src={(() => {
                  try {
                    const { generateAvatarDataUri } = require('../utils/avatar')
                    return generateAvatarDataUri({ seed: 'talentvare-user' })
                  } catch {
                    return 'https://api.dicebear.com/7.x/micah/svg?seed=talentvare-user'
                  }
                })()}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover shadow-sm ring ring-black"
              />
            </button>
          </div>

          {/* Mobile toggles (only on mobile) */}
          <div className="flex tablet:hidden items-center gap-2">
            <button
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-slate-200 bg-white hover:ring-blue-400 transition cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <CloseIcon className="text-slate-700" /> : <MenuIcon className="text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="tablet:hidden animate-slide-down origin-top rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="relative flex-1">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
                <input
                  type="search"
                  placeholder="Search"
                  className="h-10 w-full rounded-xl bg-[#F5F8FF] pl-10 pr-4 text-sm tracking-normal text-slate-700 placeholder:text-slate-400 shadow-inner ring-1 ring-[#E3ECFF] focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <button
                onClick={() => {
                  navigate('/resume-builder')
                  setOpen(false)
                }}
                className="inline-flex items-center justify-center cursor-pointer h-10 rounded-xl bg-[#0154AA] px-4 text-[16px] leading-[1] tracking-normal font-medium font-[var(--font-neue,ui-sans-serif)] text-white shadow-md hover:bg-[#0154AA] active:scale-[.98] transition"
              >
                Resume
              </button>
            </div>
            <nav className="grid gap-2">
              {NAV_ITEMS.map((it) => (
                <Item key={it.label} item={it} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar


