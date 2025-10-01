const path = require("path");

const buildEslintCommand = filenames => {
  const nextDirs = ["pages", "app", "components", "lib", "src"];
  const filteredFiles = filenames.filter(filename => {
    const relativePath = path.relative(process.cwd(), filename);
    return nextDirs.some(dir => relativePath.startsWith(dir + "/"));
  });

  if (filteredFiles.length === 0)
    return 'echo "No files in Next.js directories to lint"';

  return `next lint --fix --file ${filteredFiles
    .map(f => path.relative(process.cwd(), f))
    .join(" --file ")}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", buildEslintCommand],
  "*.{json,md,css,scss,yaml,yml}": ["prettier --write"],
};
