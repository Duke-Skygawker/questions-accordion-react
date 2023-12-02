import FAQ from "./data";
import Question from "./Question";

const App = () => {
  return (
    <main>
      <div className="container">
        <h1 className="title">Questions</h1>
        {FAQ.map((question) => {
          return <Question data={question} key={question.id} />;
        })}
      </div>
    </main>
  );
};
export default App;
