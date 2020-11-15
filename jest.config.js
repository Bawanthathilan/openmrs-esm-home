module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "@openmrs/esm-api": "<rootDir>/__mocks__/openmrs-esm-api.mock.tsx",
    "@openmrs/esm-error-handling":
      "<rootDir>/__mocks__/openmrs-esm-error-handling.mock.tsx",
    "@openmrs/esm-config": "<rootDir>/__mocks__/openmrs-esm-config.mock.tsx",
    "@openmrs/esm-context": "<rootDir>/__mocks__/openmrs-esm-context.mock.tsx",
    "react-i18next": "<rootDir>/__mocks__/react-i18next.mock.js",
    "@openmrs/esm-extensions":
      "<rootDir>/__mocks__/openmrs-esm-extension-manager.mock.tsx"
  }
};
