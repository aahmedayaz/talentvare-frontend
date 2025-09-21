import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

const ApplyModal: React.FC<Props> = ({ open, onClose }) => {
  const [seconds, setSeconds] = React.useState(5)
  const [isClosing, setIsClosing] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    setSeconds(5)
    setIsClosing(false)
    const interval = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(interval)
  }, [open])

  React.useEffect(() => {
    if (!open) return
    if (seconds === 0) {
      handleClose()
    }
  }, [open, seconds])

  const handleClose = () => {
    if (isClosing) return
    setIsClosing(true)
    setTimeout(() => onClose(), 250)
  }

  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-[2px] cursor-pointer"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative ${isClosing ? 'animate-pop-out' : 'animate-pop'} w-[min(92vw,520px)] rounded-3xl bg-white/95 p-8 shadow-2xl ring-1 ring-slate-200 cursor-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-600 ring-1 ring-slate-300 hover:text-slate-800 hover:bg-slate-50 hover:ring-slate-400 transition cursor-pointer"
        >
          ×
        </button>
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-50 text-green-600 animate-check-in shadow-[0_0_0_6px_rgba(34,197,94,0.15)]">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" className="animate-stroke" style={{ strokeDasharray: 48, strokeDashoffset: 48 } as any} />
          </svg>
        </div>
        <h3 className="mt-5 text-center text-[22px] font-semibold text-slate-800">Application Received</h3>
        <p className="mt-2 text-center text-slate-600">We will contact you via email for the next steps of the job application process.</p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={handleClose}
            className="h-11 min-w-[200px] rounded-xl bg-[#0154AA] px-6 text-white shadow-md transition hover:bg-[#014a97] hover:shadow-lg active:scale-[.98] cursor-pointer"
          >
            OK ({seconds})
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplyModal


