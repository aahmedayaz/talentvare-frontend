export type JobData = {
  id: string
  title: 'UI/UX Designer' | 'Web Developer' | 'QA Tester' | 'DevOps Engineer'
  location: string
  applicants: number
  postedAt: string
  seed: string
}

export const JOBS: JobData[] = [
  { id: 'job-1', title: 'UI/UX Designer', location: 'Seattle, USA (Remote)', applicants: 12, postedAt: '6 hours ago', seed: 'uix-sea-1' },
  { id: 'job-2', title: 'Web Developer', location: 'Berlin, Germany (On-site)', applicants: 96, postedAt: '5 days ago', seed: 'web-ber-2' },
  { id: 'job-3', title: 'QA Tester', location: 'Toronto, Canada (Remote)', applicants: 44, postedAt: '16 hours ago', seed: 'qa-tor-3' },
  { id: 'job-4', title: 'DevOps Engineer', location: 'Austin, USA (Hybrid)', applicants: 118, postedAt: '4 days ago', seed: 'ops-aus-4' },
  { id: 'job-5', title: 'UI/UX Designer', location: 'London, UK (Hybrid)', applicants: 73, postedAt: '1 day ago', seed: 'uix-lon-5' },
  { id: 'job-6', title: 'Web Developer', location: 'San Francisco, USA (Remote)', applicants: 27, postedAt: '3 days ago', seed: 'web-sf-6' },
  { id: 'job-7', title: 'QA Tester', location: 'Sydney, Australia (On-site)', applicants: 54, postedAt: '16 hours ago', seed: 'qa-syd-7' },
  { id: 'job-8', title: 'DevOps Engineer', location: 'Dublin, Ireland (Hybrid)', applicants: 67, postedAt: '23 hours ago', seed: 'ops-dub-8' },
  { id: 'job-9', title: 'UI/UX Designer', location: 'New York, USA (Remote)', applicants: 33, postedAt: '8 hours ago', seed: 'uix-ny-9' },
  { id: 'job-10', title: 'Web Developer', location: 'Paris, France (Hybrid)', applicants: 81, postedAt: '2 days ago', seed: 'web-par-10' },
  { id: 'job-11', title: 'QA Tester', location: 'Warsaw, Poland (Remote)', applicants: 29, postedAt: '11 hours ago', seed: 'qa-war-11' },
  { id: 'job-12', title: 'DevOps Engineer', location: 'Tokyo, Japan (On-site)', applicants: 102, postedAt: '7 days ago', seed: 'ops-tok-12' },
]

// Three deterministic arrays (no randomness) with different orders per section
export const FEATURED_JOBS: JobData[] = [...JOBS]
export const RECOMMENDED_JOBS: JobData[] = [...JOBS.slice(4), ...JOBS.slice(0, 4)]
export const LATEST_JOBS: JobData[] = [...JOBS.slice(8), ...JOBS.slice(0, 8)]


