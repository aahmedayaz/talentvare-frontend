import React from 'react'
import ProfileCard from '../components/ProfileCard'
import SearchBar from '../components/SearchBar'
import JobsSection from '../components/JobsSection'
import ApplyModal from '../components/ApplyModal'
import { toast } from 'react-toastify'

// Icons are handled inside JobCard component

const FindJobs: React.FC = () => {
  const [show, setShow] = React.useState(false)
  // Bookmarks are persisted via Redux; keep toast feedback when Users toggle
  const toggleSave = (id: string) => {
    // feedback only; state handled in slice via dispatch in JobCard
    toast.dismiss(`save-${id}`)
    toast.dismiss(`unsave-${id}`)
    // will show correct toast based on subsequent state; leave minimal noise
  }
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 tablet:px-6 tablet-lg:px-[50px]">
      <div className="py-8 laptop-sm:py-10">
        <div className="flex flex-col laptop-sm:flex-row gap-6">
          {/* Left profile (fixed size on laptops) */}
          <ProfileCard name="Albert Flores" />

          {/* Right content */}
          <section className="flex-1 min-w-0">
            <h1 className="text-[28px] laptop-sm:text-[32px] leading-[1.1] font-semibold text-slate-800">
              Find your Dream Job, <span className="text-[#0154AA] underline decoration-transparent hover:decoration-[#0154AA] cursor-pointer">Albert!</span>
            </h1>
            <p className="mt-2 text-slate-600 max-w-[800px]">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>

            <SearchBar />

            {/* Similar chips */}
            <div className="mt-3 flex flex-wrap items-center gap-2 tablet:gap-3 text-slate-600 text-[14px]">
              <span className="text-slate-500 mr-2">Similar:</span>
              <div className="flex flex-wrap items-center gap-2 tablet:gap-3">
                {['Frontend','Backend','Graphic Designer'].map((chip) => (
                  <button
                    key={chip}
                    className="cursor-pointer whitespace-nowrap rounded-md px-4 py-1.5 ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <JobsSection sectionKey="featured" title="Featured Jobs" onApply={() => setShow(true)} savedIds={new Set()} toggleSave={toggleSave} items={4} />
            <JobsSection sectionKey="recommended" title="Recommended Jobs" onApply={() => setShow(true)} savedIds={new Set()} toggleSave={toggleSave} items={8} />
            <JobsSection sectionKey="latest" title="Latest Jobs" onApply={() => setShow(true)} savedIds={new Set()} toggleSave={toggleSave} items={8} />
          </section>
        </div>
      </div>
      <ApplyModal open={show} onClose={() => setShow(false)} />
    </div>
  )
}

export default FindJobs


