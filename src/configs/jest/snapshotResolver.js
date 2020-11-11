const path = require("path");

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const testDirectory = path.dirname(testPath);
    const testFilename = path.basename(testPath);

    return `${testDirectory}/${testFilename}${snapshotExtension}`;
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.slice(0, -snapshotExtension.length);
  },
  testPathForConsistencyCheck: "src/components/Component.spec.js",
};
