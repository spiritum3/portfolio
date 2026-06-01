#!/bin/bash
PORTFOLIO=~/Desktop/portfolio

echo "👁  Watching portfolio for changes... (Ctrl+C to stop)"

fswatch -o --exclude="\.git" --exclude="watch\.sh" "$PORTFOLIO" | while read count; do
  sleep 1  # μικρή αναμονή για να ολοκληρωθεί η αποθήκευση
  cd "$PORTFOLIO"
  if ! git diff --quiet || git ls-files --others --exclude-standard | grep -q .; then
    git add .
    git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M')"
    git push
    echo "✓ Pushed at $(date '+%H:%M:%S')"
  fi
done
