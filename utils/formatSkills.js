export function formatSkills(input) {
  return input
    .split(",")
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);
}
