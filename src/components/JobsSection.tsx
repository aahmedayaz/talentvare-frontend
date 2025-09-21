import React from 'react'
import JobCard from '../components/JobCard'
import { FEATURED_JOBS, RECOMMENDED_JOBS, LATEST_JOBS } from '../data/jobs'

function getOrderedJobs(sectionKey: string) {
  if (sectionKey === 'featured') return FEATURED_JOBS
  if (sectionKey === 'recommended') return RECOMMENDED_JOBS
  if (sectionKey === 'latest') return LATEST_JOBS
  return FEATURED_JOBS
}

type Props = {
  title: string
  onApply: () => void
  savedIds: Set<string>
  toggleSave: (id: string) => void
  items?: number
  sectionKey: string
}

const JobsSection: React.FC<Props> = ({ title, onApply, savedIds, toggleSave, items = 8, sectionKey }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <h2 className="text-[18px] font-semibold text-slate-800">{title}</h2>
        <button className="text-[#0154AA] text-[14px] underline decoration-[#0154AA] cursor-pointer">See {title}</button>
      </div>
      <div className="mt-3 grid grid-cols-1 tablet:grid-cols-2 laptop-sm:grid-cols-3 laptop-lg:grid-cols-4 gap-4">
        {getOrderedJobs(sectionKey).slice(0, items).map((job, i) => {
          const id = `${sectionKey}-${job.id}`
          return (
            <JobCard key={id} jobId={id} job={job} onApply={onApply} />
          )
        })}
      </div>
    </div>
  )
}

export default JobsSection


