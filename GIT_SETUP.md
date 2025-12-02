# Git Repository Setup

Your Next.js portfolio has been initialized with Git and all files have been committed.

## Next Steps to Push to GitHub

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it (e.g., `portfolio-nextjs` or `portfolio`)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Add Remote and Push

After creating the repository on GitHub, run these commands in the `portfolio-nextjs` directory:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Or if you prefer SSH:
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Example:
If your GitHub username is `nimako` and repository name is `portfolio-nextjs`:

```bash
git remote add origin https://github.com/nimako/portfolio-nextjs.git
git push -u origin main
```

### 3. Verify

After pushing, visit your repository on GitHub to verify all files are uploaded.

## Current Git Status

✅ Repository initialized
✅ All files committed
✅ Branch renamed to `main`
⏳ Waiting for remote repository setup

## Future Updates

After the initial push, you can update your code and push changes with:

```bash
git add .
git commit -m "Your commit message"
git push
```



