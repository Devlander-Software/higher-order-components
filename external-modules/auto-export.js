const autoExporter = require("@devlander/collect-exports-for-bundle").default

const main = () => {
  autoExporter({
    directory: "./src",
    outputFileName: "index",
    outputFilenameExtension: ".tsx",
    includeExtensions: [".ts", ".tsx", ".tsx", ".hoc.tsx"],

    rootDir: "./src",
    allowedExtensions: [".ts", ".tsx", ".tsx", ".hoc.tsx"],
    exportMode: "both",
    outputFileName: "index",
    outputFilenameExtension: ".tsx",
    ignoredExtensions: [".d.ts", ".config.js"],

    excludedFolders: [
      "__tests__",
      "__mocks__",
      "__snapshots__",
      "__fixtures__",
    ],
  })
}

main()
