# Frontend Interview Task

A frontend application built with **Next.js (App Router)**.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand
- TanStack Query
- Axios
- Zod
- shadcn/ui
- Lucide React

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create `.env.local`

```env
NEXT_PUBLIC_API_BASE_URL=https://wholesaler-core-v2.paraf.app/api/
NEXT_PUBLIC_IMAGE_BASE_URL=https://wholesaler-core-develop.web.parafacc.ir/
```

### 3. Start the development server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

## Test Credentials

| Username       | Password   |
| -------------- | ---------- |
| `989027927890` | `p.123456` |

## AI Usage

AI was used only as a development assistant in the following cases:

- Generating the initial Zod schemas from API response models.
- Writing and polishing this `README.md`.

All application architecture, business logic, state management, API integration, and UI implementation were completed manually.

## Notes

- Due to the limited time allocated for the interview task, a few API endpoints have not been implemented.
- A live version of the project has been deployed. However, it is currently not fully functional because the backend API does not allow requests from the deployed domain (CORS restriction).
- A few UI details and minor visual refinements remain and would be completed with additional development time.

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Questions or Feedback

If you have any questions, feedback, or would like clarification about any implementation or architectural decision, I'd be happy to discuss it.

Thank you for taking the time to review my submission.
