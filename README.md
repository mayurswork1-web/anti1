# Jesper Landberg — Portfolio Clone

A recreation of [jesperlandberg.com](https://jesperlandberg.com), the portfolio of Swedish design engineer and two-time Awwwards Independent of the Year (2022 & 2024) Jesper Landberg.

---

## ✨ Features Included

1. **Kinetic Inertia Carousel ("Featured" View):**
   - Horizontal drag & scroll with spring momentum physics and boundary bounce.
   - Dynamic skew deformation based on movement velocity (emulating Jesper's signature organic WebGL distortion).
   - Card hover states with real muted video autoplay and smooth elevation.
   - Project titles with awards recognition pills.

2. **Editorial Table ("Full" View):**
   - Switchable project directory showing all projects, clients, release year, and award honors.
   - Floating media preview following cursor with spring damping (`lerp`).

3. **Ambient WebGL Background:**
   - Shaded procedural vignette and subtle film grain rendered in real-time on HTML5 WebGL Canvas.

4. **Interactive Overlays & Modals:**
   - **Profile Modal:** Jesper's bio, awards counter (77 awards), social links, and one-click email copy with toast notification.
   - **Newsletter Modal:** Clean pill input form with feedback validation and success state.
   - **Project Detail Drawer:** High-definition video player, project tags, detailed summary, and live project link.

5. **Signature Micro-Interactions:**
   - 3-bar animated loader entrance.
   - Custom fluid dot cursor tracking with hover scale.
   - Keyboard navigation (`Esc` to dismiss modals).

---

## 🚀 How to Run / View

This is a self-contained, zero-dependency static application. You can view it immediately:

1. **Directly in Browser:**
   - Double-click `index.html` or open `C:\Users\Admin\.gemini\antigravity\scratch\jesper-landberg-portfolio\index.html` in Chrome, Edge, or Firefox.

2. **Via Any Local Web Server:**
   - If you have an extension like Live Server in VS Code, right-click `index.html` and click **"Open with Live Server"**.
