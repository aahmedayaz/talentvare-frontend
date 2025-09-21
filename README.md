## TalentVare Frontend

Modern, highly-responsive job search UI built with React + Tailwind CSS, featuring an animated navbar, rich search with dropdown filters, fixed job datasets per section, Redux Toolkit state persistence, animated apply modal, and toast interactions. Designed for production and Vercel-ready.

### Responsive Laptop Preview

<img width="2880" height="3178" alt="talentvare-frontend vercel app_" src="https://github.com/user-attachments/assets/c76b2974-1bbe-4588-8b30-e2878b493429" />

<img width="916" height="353" alt="image" src="https://github.com/user-attachments/assets/150e04ec-76c9-4d36-a4ce-8f77efa04f04" />


( **Note**: You can see the mobile, tablet and desktop version UI in the end of the README.md file )

### Live Demo

( TalentVare Frontend Vercel Live Link ) :  [https://talentvare-frontend.vercel.app](https://talentvare-frontend.vercel.app)

## Tech Stack

- **React**: 19.x (CRA 5 runtime)
- **TypeScript**: 4.9
- **Router**: `react-router-dom` 7.x
- **State**: `@reduxjs/toolkit` + `react-redux` with localStorage persistence
- **UI**: Tailwind CSS v4 (CLI) + custom tokens, utilities, and animations
- **Toasts**: `react-toastify`
- **Icons**: Inline SVGs for navbar/search; `react-icons` for bookmark states
- **Avatars**: DiceBear (`@dicebear/core`, `@dicebear/collection`)
- **Build Tools**: CRA scripts, Tailwind CLI, PostCSS, Autoprefixer, `concurrently`

Third‑party services/libraries used in UX:

- **DiceBear Micah** style for deterministic SVG avatars
- **React Toastify** for non-blocking notifications
- **Tailwind animations** defined in `src/tailwind.css` (e.g., `animate-pop`, stroke/tick)

## Features (Technical)

- **Responsive Navbar**
  - Custom breakpoints and typography
  - Logo only on the far left, animated mobile menu, active route styling
  - PNG-based search icon with inline SVG fallback
- **Find Jobs Page**
  - Two-column layout with fixed 50px padding ≥ 1024px
  - Left `ProfileCard` with banner image and DiceBear avatar
  - Right content: search bar, chips, and three jobs sections
- **Search Bar with Modern Dropdowns**

  
  - <img width="615" height="298" alt="image" src="https://github.com/user-attachments/assets/f81cd969-933a-4960-b00f-76b66a93cd49" />
  - Select Location and Job Type menus with smooth open/close, outside-click dismissal
  - Right-edge aligned menus with visible rings; hover interactions; scrollable lists
  - Narrower input + wider Search button for emphasis
- **Jobs Data Model**
  - Fixed, non-random dataset in `src/data/jobs.ts`
  - Three explicit arrays: `FEATURED_JOBS`, `RECOMMENDED_JOBS`, `LATEST_JOBS` (different orders, no randomness)
  - Unique Redux keys per section: `sectionKey-jobId` ensures isolation across sections
- **Job Cards**


  - <img width="615" height="161" alt="image" src="https://github.com/user-attachments/assets/b6f32109-5868-4020-9842-8c792f52cea9" />
  - Deterministic avatars via DiceBear seed per job
  - Bookmark toggle with `react-icons` bookmark states and toast notifications
  - Apply flow: modal with animated check; button becomes “Applied ✓” and disables
- **State & Persistence**
  - Redux slice for `saved` and `applied`
  - LocalStorage subscription for persistence across sessions
- **Animations**


  - <img width="903" height="409" alt="image" src="https://github.com/user-attachments/assets/4c41f3fb-321e-44a6-bee3-7ed9eedba28f" />
  - Modal open/close pop, stroke-draw tick, subtle glows
  - Mobile sheet slide, hover/active transitions

## Project Structure

```text
src/
  components/
    ApplyModal.tsx
    JobCard.tsx
    JobsSection.tsx
    Navbar.tsx
    ProfileCard.tsx
    SearchBar.tsx
  data/
    jobs.ts          # JOBS + FEATURED_JOBS/RECOMMENDED_JOBS/LATEST_JOBS
  pages/
    FindJobs.tsx
    UnderConstruction.tsx
  utils/
    avatar.ts        # DiceBear avatar data URI helper
  App.tsx
  index.tsx
  index.css
  tailwind.css       # Tailwind v4 input, tokens, keyframes
  _generated.css     # Tailwind output (gitignored typically)
```

## Setup & Usage

### Prerequisites

- Node.js ≥ 18 LTS
- npm ≥ 9

### Install

```bash
npm install
```

### Development

Starts CRA dev server and Tailwind in watch mode via `concurrently`.

```bash
npm start
```

Open `http://localhost:3000`.

### Production Build

Generates Tailwind CSS and a production CRA build in `build/`.

```bash
npm run build
```

### Scripts

- `npm run dev:tw`: Tailwind CLI in watch mode
- `npm run build:tw`: Tailwind CLI build (minified)
- `npm start`: Tailwind watch + CRA dev server
- `npm run build`: Tailwind build + CRA production build
- `npm test`: CRA test runner

## Configuration Notes

- Tailwind CSS v4 is driven via `src/tailwind.css` and CLI. Ensure `_generated.css` is imported in `src/index.tsx` before `index.css`.
- Redux store is configured in `src/store.ts` and provided in `src/index.tsx`.
- Animations are defined in `src/tailwind.css` (`animate-pop`, `animate-check-in`, `animate-stroke`, `animate-slide-down`).

## Deployment (Vercel)

- **Framework Preset**: Create React App
- **Root Directory**: repository root
- **Install Command**: `npm ci` (or `npm install`)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18 LTS+ (set in Vercel Project Settings → Environment or add an `.nvmrc` with `18`)
- **Environment Variables**: none required

Optional optimizations:

- Enable caching for `node_modules` on Vercel
- Set a custom domain and preview deployments for PRs

## Contributing

- Follow existing code style: meaningful names, early returns, concise comments
- Keep components focused and reusable; prefer prop-driven configuration
- Avoid introducing randomness into fixed datasets

## Acknowledgments

- DiceBear for avatars
- React Toastify for slick toasts
- Tailwind CSS for fast, utility-first styling

## Other Screens ( Mobile, Tablet ) :

### Tablet Screen :
<img alt="localhost_3000_" src="https://github.com/user-attachments/assets/2b5fd674-e3ad-49c1-acc3-71609b77514e" />


### Mobile Screen :
<img alt="localhost_3000_ (1)" src="https://github.com/user-attachments/assets/f44301e3-d661-43a1-b25d-04b4e22ddadf" />

