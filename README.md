# Time Saver Calculator

An Astro-based single-page site for computing how much to spend on something that saves you time.

A user inputs their annual salary and then we generate a table of how much to spend on time-saving services based on different time horizons. The table is effectively a matrix of:
- How often you do the task: 50/day, 5/day, daily, weekly, monthly, yearly
- How much time you save: 1 second, 5 seconds, 30 seconds, 1 minute, 5 minutes, 30 minutes, 1 hour, 6 hours, 1 day

The formula: `(Annual Salary / 2000 hours) × (Time Saved × Frequency) = Value of time saved per year`

We assume a user's work year is 2,000 hours (8 hours × 250 working days per year).

## Commands

All commands are run from the root of the project:

| Command             | Action                                      |
|:--------------------|:--------------------------------------------|
| `pnpm install`      | Installs dependencies                       |
| `pnpm run dev`      | Starts local dev server at `localhost:4321` |
| `pnpm run build`    | Build your production site to `./dist/`     |
| `pnpm run preview`  | Preview your build locally, before deploying|

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## Deploying to GitHub Pages

1. Create a GitHub repository
2. Push this code to the repository
3. Go to Settings > Pages
4. Set "Source" to "GitHub Actions"
5. The site will deploy automatically on push to main
