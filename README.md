# Portfolio Website - Setup Guide

## Add Your Images 📸

1. **Profile Photo:**
   - Save as `assets/images/profile.jpg` (200x200px recommended)
   - Edit `index.html` line ~35: change `profile-placeholder.jpg` → `profile.jpg`

2. **Project Screenshots:**
   - Screenshot 1: `assets/images/project1.jpg` (400x220px)
   - Screenshot 2: `assets/images/project2.jpg` (400x220px)
   - Edit `script.js` line ~5-15: update `image` paths

## Edit Content ✏️

**Bio/About:** `index.html` ~line 60-65
**Skills:** Add `.skill` divs in HTML, set `data-width`
**Projects:** `script.js` `portfolioData.projects` array
**Contact:** `index.html` ~line 140-160

## Colors/Themes 🎨
Edit CSS `:root` variables (line 5-25)

## Preview
```
start index.html
```

## Deploy 🚀
1. Push to GitHub repo
2. Enable GitHub Pages in Settings
3. Live at `username.github.io/repo`

Perfect! Run `start index.html` to test.
