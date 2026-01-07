export async function analyzeSkillGap(career, skills) {
  const response = await fetch("https://skill-gap-analyser-ves3.onrender.com/api/skill-gap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      career: career,
      skills: skills,
    }),
  });

  return response.json();
}
