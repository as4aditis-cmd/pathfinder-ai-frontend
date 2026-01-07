function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Analysis Result</h3>

      <p>
        <strong>Career:</strong> {result.career}
      </p>

      <p>
        <strong>Level:</strong> {result.level}
      </p>

      <p>
        <strong>Missing Skills:</strong>
      </p>

      <ul>
        {result.missing_skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
