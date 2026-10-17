# Miyagi — Speaker & Events (React + Vite, frontend demo)

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## Admin
Open `/#/admin` — demo login `admin@miyagi.demo` / `miyagi123`.
Frontend-only demo session, NOT secure authentication.

## Structure
- `src/data/seed.js` sample events and posts · `store.js` localStorage + `useData` hook · `programs.js` program data
- `src/components/` Scene (illustrated artwork), Bokeh (canvas particles), Footer, shared UI and forms
- `src/pages/` Home, PublicPages (About, Team, Programs, Events, Blog, Contact...), Admin
- `src/layouts/PublicLayout.jsx` public header/footer shell
- `src/App.jsx` hash router · `src/styles/main.css` all styles

## Notes
- Routing uses a small hash router (`#/events/e1`), so it works on any static host.
- Data lives in localStorage; clear site data to reset the sample content.
- Payments are simulated; no real money is charged. All people, testimonials and events are fictional.
- Images are illustrated SVG scenes. To use photos, paste URLs into the poster/image fields in admin or edit `src/data/seed.js`.

## Brand & assets (client-supplied)
- Colours: amber `#FBB03B`, black `#000`, white `#FFF` (plus the approved forest green / burnt orange accents). Fonts: Poppins (headings), Roboto (body).
- Files live in `public/assets/` (stable paths, safe for saved localStorage data):
  `miyagi-logo.png` (navbar, footer, admin), `miyagi-mark.png` (About / intro), `speaker-hero.jpg` (hero, youth event, Confidence Building),
  `miyagi-music.mp3` (byte-identical to the supplied "Miyagi Music File").
- Music: optional control (bottom-left). Never autoplays; play/pause + mute appear after you press play. One audio element, public site only.
- Not supplied yet: `Miyagi Logo Vector.svg` — drop it in `public/assets/` and swap the `src` in `src/components/Brand.jsx` for a sharper logo.

## Image mapping (client-generated posters in `public/assets/`)
Defined in one place: `src/data/media.js` (exact, case-sensitive filenames). Applied to seed data and migrated into
already-saved localStorage data only where an image is empty (admin-set image URLs are never overwritten).
- Blog: p1 → why_confidence_built_not_born · p2 → listening_is_leadership_skills · p3 → structured_talk · p4 → career_readiness_start_in_college
- Events: e1 The_quit_conference_submit · e3 leadder_who_listen · e4 masterclass · e5 rise_together_anual_talk · e6 campus_voice_tour_pune · e7 rise_and_lead__2_ · e8 corporate_leader_seminar · e9 personal_growth_weekend · e10 voice_and_persence · e11 youth_leadership_submit · e12 speak_with_confidence · e13 corporate_communication_seminar · e14 campus_ignite_jaipur (e2 keeps the supplied student photo)
- Programs: public_speaking · debate · leadership · communication_skill · Personality_Development · career_readiness · goal_setting (Confidence Building keeps the student photo)
- Unused: `quit_conference_submit.jpeg` ("Quiet Conference Summit", no matching event) and `listening_is_the_first_step.jpeg` (duplicate topic of the Listening article).
