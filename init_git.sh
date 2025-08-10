#!/usr/bin/env bash
set -e
# Usage: ./init_git.sh YOUR-GITHUB-URL
if [ -z "$1" ]; then
  echo "Usage: ./init_git.sh https://github.com/YOUR-USERNAME/vita-bella-pwa.git"
  exit 1
fi
git init
git add .
git commit -m "Initial commit: Vita Bella PWA"
git branch -M main
git remote add origin "$1"
git push -u origin main
echo "Done. Your repo is now on GitHub."
