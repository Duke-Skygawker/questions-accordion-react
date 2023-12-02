import { useState } from "react";

const Question = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, info } = data;
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "-" : "+"}
        </button>
      </header>
      <p className={isExpanded ? "" : "hidden"}>{info}</p>
    </div>
  );
};
export default Question;
