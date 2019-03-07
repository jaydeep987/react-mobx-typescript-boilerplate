module.exports = {
  "roots": ["<rootDir>/src"],
  "setupFiles": [
    "<rootDir>/test-shim.js"
  ],
  "moduleDirectories": [
    "<rootDir>/node_modules",
    "<rootDir>/src"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  "moduleNameMapper": {
    "~components/(.*)": "<rootDir>/src/components/$1",
    "~common/(.*)": "<rootDir>/src/common/$1",
    "~stores/(.*)": "<rootDir>/src/stores/$1",
  },
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.js"],
}