import React from 'react'
import { generateAvatarDataUri } from '../utils/avatar'

type Props = {
  name: string
}

const ProfileCard: React.FC<Props> = ({ name }) => {
  return (
    <aside className="w-full laptop-sm:w-[346px]">
      <div className="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm laptop-sm:h-[461px]">
        <img src="/banner.png" alt="Profile banner" className="h-28 w-full object-cover" />
        <div className="-mt-12 flex justify-center">
          <img
            src={generateAvatarDataUri({ seed: 'talentvare-user' })}
            alt={name}
            className="h-24 w-24 rounded-full ring-2 ring-[#454545] shadow-md bg-white "
          />
        </div>
        <div className="px-5 pt-2">
          <div className="text-[18px] leading-[1] font-semibold text-slate-800 text-center font-[var(--font-neue,ui-sans-serif)]">{name}</div>
          <div className="mt-1 text-[14px] leading-[1] font-medium text-slate-700 max-w-[260px] mx-auto text-center font-[var(--font-neue,ui-sans-serif)]">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </div>
          <div className="mt-1 text-[12px] leading-[1] font-medium text-slate-600 text-center font-[var(--font-neue,ui-sans-serif)]">Clinton, Maryland</div>
        </div>
        <div className="mt-4 px-5">
          <div className="rounded-xl bg-white ring-1 ring-slate-300">
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="text-[14px] leading-[1] font-medium text-slate-600">Profile Visitors</div>
              <div className="text-[18px] leading-[1] font-semibold text-[#0154AA]">140</div>
            </div>
            <div className="h-px bg-slate-300" />
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="text-[14px] leading-[1] font-medium text-slate-600">Resume Viewers</div>
              <div className="text-[18px] leading-[1] font-semibold text-[#0154AA]">20</div>
            </div>
            <div className="h-px bg-slate-300" />
            <div className="px-5 py-3 flex items-center justify-between">
              <div className="text-[14px] leading-[1] font-medium text-slate-600">My Jobs</div>
              <div className="text-[18px] leading-[1] font-semibold text-[#0154AA]">88</div>
            </div>
          </div>
        </div>
        <div className="mt-4 px-5 pb-5">
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-300 flex items-center justify-between">
            <div className="">
              <div className="text-[14px] leading-[1] font-medium text-slate-800">My calendar</div>
              <div className="mt-1 text-[12px] leading-[1] text-slate-500">Upcoming Interviews</div>
            </div>
            <span className="text-slate-400">▾</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default ProfileCard


