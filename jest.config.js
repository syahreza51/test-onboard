module.exports = {
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    axios: () => {},
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(.+\\.jsx?|.+\\.tsx?|.+\\.css|.+\\.scss)$)",
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  // coverageThreshold: {
  //   global: {
  //     statements: 70,
  //     branches: 70,
  //   },
  // },
  // collectCoverageFrom: ["./src/**"],
  modulePathIgnorePatterns: ["actions", "./src/actions/index.ts"],
  // coveragePathIgnorePatterns: [
  //   "<rootDir>/src/components/Pagination/index.js",
  //   "<rootDir>/src/components/Pagination/page.js",
  //   "<rootDir>/src/components/Search/index.js",
  //   "<rootDir>/src/components/Pagination/__tests__/__snapshots__",
  // ],
};
