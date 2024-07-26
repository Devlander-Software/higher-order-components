const autoExporter = require("@devlander/collect-exports-for-bundle").default

const main = () => {
  autoExporter({
    directory: "./src",
    outputFileName: "index",
    outputFilenameExtension: ".tsx",
    includeExtensions: [
      ".ts",
      ".tsx",
      ".tsx",
      ".hoc.tsx",
      ".component.tsx",
      ".styles.tsx",
      ".util.tsx",
      ".types.tsx",
      ".type.ts",
      ".types.ts",
    ],

    rootDir: "./src",
    allowedExtensions: [
      ".ts",
      ".type.ts",
      ".util.ts",
      ".util.tsx",
      ".tsx",
      ".tsx",
      ".hoc.tsx",
      ".styles.tsx",
      ".component.tsx",
    ],
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
