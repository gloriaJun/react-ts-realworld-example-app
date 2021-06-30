module.exports = {
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write', 'git add'],
  '*.{js,jsx}': ['eslint --fix', 'git add'],
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --fix',
    'git add',
  ],
};
