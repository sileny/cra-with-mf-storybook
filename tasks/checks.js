export function isValidNodeVersion() {
  const version = process.versions.node;
  if (!version) return false;
  const nodeNumber = Number(version.split(".").splice(0, 2).join("."));
  return nodeNumber >= 18.0 && nodeNumber < 21.6;
}
