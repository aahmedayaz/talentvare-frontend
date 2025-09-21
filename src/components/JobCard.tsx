import React from 'react'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { generateAvatarDataUri } from '../utils/avatar'
import type { JobData } from '../data/jobs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, markApplied, toggleSaved } from '../store'
import { toast } from 'react-toastify'

const BookmarkOutlineIcon: React.FC<{ className?: string }> = ({ className }) => (
  React.createElement(FaRegBookmark as unknown as React.FC<any>, { className })
)
const BookmarkFilledIcon: React.FC<{ className?: string }> = ({ className }) => (
  React.createElement(FaBookmark as unknown as React.FC<any>, { className })
)

type Props = {
  jobId: string
  onApply: () => void
  job?: JobData
}

const JobCard: React.FC<Props> = ({ jobId, onApply, job }) => {
  const dispatch = useDispatch()
  const isApplied = useSelector((s: RootState) => s.jobs.applied[jobId])
  const isSaved = useSelector((s: RootState) => s.jobs.saved[jobId])
  const computed = job!
  const avatar = React.useMemo(() => generateAvatarDataUri({ seed: computed.seed }), [computed.seed])
  return (
    <div className="rounded-2xl ring-1 ring-slate-300 bg-white p-4">
      <div className="text-[12px] text-slate-500 mb-2">Promoted</div>
      <div className="flex items-center gap-3">
        <img src={avatar} alt="Company" className="h-10 w-10 rounded-lg ring-1 ring-slate-300 object-cover bg-white" />
        <div>
          <button type="button" className="font-semibold text-slate-800 underline decoration-transparent underline-offset-4 hover:decoration-[#0154AA] cursor-pointer">
            {computed.title}
          </button>
          <div className="text-[12px] text-slate-500">Teams</div>
        </div>
      </div>
      <div className="mt-3 space-y-1 text-[12px] text-slate-500">
        <div>{computed.location}</div>
        <div>{computed.postedAt} | <span className="text-[#0154AA]">{computed.applicants} applicants</span></div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => { if (!isApplied) { dispatch(markApplied(jobId)); onApply(); } }}
          disabled={isApplied}
          className={`h-9 rounded-lg px-6 min-w-[140px] text-[14px] font-medium inline-flex items-center justify-center ${isApplied ? 'bg-green-600 text-white cursor-default' : 'bg-[#0154AA] text-white cursor-pointer'}`}
        >
          {isApplied ? 'Applied ✓' : 'Apply Now'}
        </button>
        <button
          onClick={() => {
            dispatch(toggleSaved(jobId))
            const isNowSaved = !isSaved
            if (isNowSaved) {
              toast.success('Saved to bookmarks', { toastId: `save-${jobId}` })
            } else {
              toast.info('Removed from bookmarks', { toastId: `unsave-${jobId}` })
            }
          }}
          className="h-9 w-9 grid place-items-center rounded-lg text-slate-500 cursor-pointer"
          aria-label="Save"
        >
          {isSaved ? <BookmarkFilledIcon className="h-5 w-5" /> : <BookmarkOutlineIcon className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}

export default JobCard


