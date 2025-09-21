import React from 'react'
import { SearchIcon } from '../components/Navbar'

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchBar: React.FC = () => {
  const [query, setQuery] = React.useState('')
  const [locationOpen, setLocationOpen] = React.useState(false)
  const [typeOpen, setTypeOpen] = React.useState(false)
  const [location, setLocation] = React.useState<string>('Select Location')
  const [jobType, setJobType] = React.useState<string>('Job Type')

  const locationRef = React.useRef<HTMLDivElement | null>(null)
  const typeRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (locationRef.current && !locationRef.current.contains(t)) setLocationOpen(false)
      if (typeRef.current && !typeRef.current.contains(t)) setTypeOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const LOCATIONS = ['Seattle, USA', 'Berlin, Germany', 'Toronto, Canada', 'Austin, USA', 'London, UK', 'San Francisco, USA', 'Sydney, Australia', 'Dublin, Ireland', 'New York, USA', 'Paris, France', 'Warsaw, Poland', 'Tokyo, Japan']
  const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote', 'Hybrid', 'On-site']

  return (
    <div className="mt-4 rounded-2xl ring-1 ring-slate-300 bg-white p-2">
      <div className="flex items-stretch gap-4">
        {/* Search input - slightly less wide */}
        <div className="flex-[1.1] min-w-[180px] rounded-xl bg-slate-50 px-4 py-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Job Title, Company, or Keywords"
            className="w-full bg-transparent outline-none text-slate-700 text-[14px]"
          />
        </div>

        {/* Filters */}
        <div className="hidden tablet:flex items-center gap-6 px-2 laptop:px-4">
          <div className="h-8 w-px bg-slate-300" />
          <div className="relative" ref={locationRef}>
            <button onClick={() => { setLocationOpen((v) => !v); setTypeOpen(false) }} className="text-slate-600 text-[14px] flex items-center gap-2 cursor-pointer select-none">
              <span className="whitespace-nowrap">{location}</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${locationOpen ? 'rotate-180' : ''} text-slate-500`} />
            </button>
            {locationOpen && (
              <div className="absolute top-full right-0 mt-2 w-[220px] rounded-xl bg-white shadow-xl ring-1 ring-slate-300 p-2 z-20 animate-pop">
                <div className="max-h-64 overflow-auto">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => { setLocation(loc); setLocationOpen(false) }}
                      className="w-full text-left px-3 py-2 rounded-lg text-[14px] text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="h-8 w-px bg-slate-300" />
          <div className="relative" ref={typeRef}>
            <button onClick={() => { setTypeOpen((v) => !v); setLocationOpen(false) }} className="text-slate-600 text-[14px] flex items-center gap-2 cursor-pointer select-none">
              <span className="whitespace-nowrap">{jobType}</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${typeOpen ? 'rotate-180' : ''} text-slate-500`} />
            </button>
            {typeOpen && (
              <div className="absolute top-full right-0 mt-2 w-[200px] rounded-xl bg-white shadow-xl ring-1 ring-slate-300 p-2 z-20 animate-pop">
                <div className="max-h-56 overflow-auto">
                  {JOB_TYPES.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setJobType(t); setTypeOpen(false) }}
                      className="w-full text-left px-3 py-2 rounded-lg text-[14px] text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Wider Search button */}
        <button className="inline-flex items-center justify-center h-12 rounded-xl bg-[#0154AA] px-7 laptop:px-8 text-white font-medium shrink-0 min-w-[160px] laptop:min-w-[200px] cursor-pointer">
          <span className="relative mr-2 h-4 w-4"><SearchIcon /></span>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar


