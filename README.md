# Hash & Cipher Lab

A beginner-friendly, 60–90 minute classroom CTF that clearly teaches the difference between encryption and hashing through 24 short challenges.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then click **Save**.

GitHub will show the public URL after deployment. No build command, server, account, or dependency is required.

## Classroom plan

- 10 minutes: read the briefing and compare encryption with hashing.
- 15 minutes: Mission A (identify which process fits).
- 20 minutes: Mission B (simple classical ciphers).
- 15 minutes: Mission C (hash concepts).
- 15 minutes: Mission D (scenario-based final case).
- 5 minutes: review and certificate.

Students can work alone or in pairs. Their flags and timer are saved in the browser using `localStorage`; no information is sent anywhere.

## Important teacher note

This is a client-side educational game. Answers exist in `script.js` and are not secret from a technically curious student. That is normal for a static GitHub Pages activity. Ask students to solve in good faith.

To change a question, edit its object near the top of `script.js`. Each object includes:

- `id`: question number
- `m`: mission group
- `title`, `desc`, `q`: student-facing text
- `a`: accepted answers (lower/upper case does not matter)
- `h`: hint

## Local preview

Double-click `index.html`, or serve the folder with any static web server. The site works without internet access once downloaded.
