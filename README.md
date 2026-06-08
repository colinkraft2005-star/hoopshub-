# HoopsHub Scout — Deployment Guide

## Deploy to Vercel (free, takes 5 minutes)

### Step 1 — Create a GitHub account
Go to github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click the + icon top right → New repository
2. Name it "hoopshub-scout"
3. Set it to Private
4. Click Create repository

### Step 3 — Upload your files
1. Click "uploading an existing file" on the repo page
2. Drag the entire hoopshub_deploy folder contents (index.html, vercel.json, api/ folder) into the upload area
3. Click Commit changes

### Step 4 — Deploy on Vercel
1. Go to vercel.com
2. Click Sign Up → Continue with GitHub
3. Click Add New Project
4. Select your hoopshub-scout repository
5. Click Deploy — no settings to change

### Step 5 — Done
Vercel gives you a URL like hoopshub-scout.vercel.app
The Torvik auto-fetch will work automatically from that URL.

### Optional — Custom domain
If you want hoopshub.com or similar:
1. Buy a domain at namecheap.com (~$12/year)
2. In Vercel project settings → Domains → Add your domain
3. Follow the DNS setup instructions (Vercel walks you through it)

## Notes
- The site is private by default — only people with the URL can access it
- Your API key is entered in the sidebar and never stored on the server
- Player evaluations are saved to localStorage (browser only) until a database is added
- To update the site, just upload a new index.html to GitHub and Vercel redeploys automatically
