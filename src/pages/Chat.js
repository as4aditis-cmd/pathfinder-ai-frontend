import { useState, useEffect } from "react";

const GITHUB_RESOURCES = {
  "Frontend Developer": [
    { name: "freeCodeCamp", url: "https://github.com/freeCodeCamp/freeCodeCamp" },
    { name: "React", url: "https://github.com/facebook/react" },
    { name: "JavaScript", url: "https://github.com/getify/You-Dont-Know-JS" },
  ],
  "Data Analyst": [
    { name: "Pandas", url: "https://github.com/pandas-dev/pandas" },
    { name: "NumPy", url: "https://github.com/numpy/numpy" },
    { name: "Data Analysis Roadmap", url: "https://github.com/datastacktv/data-engineer-roadmap" },
  ],
};

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);

  /* Load posts */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setPosts(saved);
  }, []);

  /* Save posts */
  const savePosts = (data) => {
    localStorage.setItem("communityPosts", JSON.stringify(data));
    setPosts(data);
  };

  /* Post Question */
  const postQuestion = () => {
    if (!question.trim()) return;

    const newPost = {
      id: Date.now(),
      text: question,
      upvotes: 0,
      replies: [],
    };

    const updated = [newPost, ...posts];
    savePosts(updated);
    setQuestion("");
  };

  /* Upvote */
  const upvote = (id) => {
    const updated = posts.map((p) =>
      p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p
    );
    savePosts(updated);
  };

  /* Reply */
  const reply = (id, text) => {
    if (!text.trim()) return;

    const updated = posts.map((p) =>
      p.id === id
        ? { ...p, replies: [...p.replies, text] }
        : p
    );
    savePosts(updated);
  };

  return (
    <div className="community-page">

      {/* TITLE */}
      <section className="section">
        <h2 className="section-title">Community Discussion</h2>
        <p className="goal-text">
          One place to ask, help, and grow together 🚀
        </p>
      </section>

      {/* ASK QUESTION */}
      <section className="section">
        <h3>Ask a Question</h3>

        <textarea
          className="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything related to careers or skills..."
        />

        <button className="post-btn" onClick={postQuestion}>
          Post Question
        </button>
      </section>

      {/* POSTS */}
      <section className="section">
        <h3>Community Questions</h3>

        {posts.length === 0 && <p>No questions yet. Be the first!</p>}

        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <p>{post.text}</p>

            <div className="post-actions">
              <button onClick={() => upvote(post.id)}>
                ⬆ Upvote ({post.upvotes})
              </button>
            </div>

            {/* Replies */}
            <div className="replies">
              {post.replies.map((r, i) => (
                <p key={i} className="reply">💬 {r}</p>
              ))}

              <ReplyBox onReply={(text) => reply(post.id, text)} />
            </div>
          </div>
        ))}
      </section>

      {/* GITHUB RESOURCES */}
      <section className="section">
        <h3>GitHub Repositories by Skill</h3>

        {Object.keys(GITHUB_RESOURCES).map((career) => (
          <div key={career} className="resource-card">
            <h4>{career}</h4>
            <ul>
              {GITHUB_RESOURCES[career].map((repo, i) => (
                <li key={i}>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

    </div>
  );
};

/* Reply Component */
const ReplyBox = ({ onReply }) => {
  const [text, setText] = useState("");

  return (
    <div className="reply-box">
      <input
        type="text"
        placeholder="Write a reply..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onReply(text);
          setText("");
        }}
      >
        Reply
      </button>
    </div>
  );
};

export default Chat;
