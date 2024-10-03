module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!variables/.*)"
    ],
    testEnvironment: "node",
    moduleFileExtensions: ["js"]
  };