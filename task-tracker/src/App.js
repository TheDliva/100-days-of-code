import Header from "./components/Header";
import TweetBox from "./components/TweetBox";

function App() {
  return (
    <div className="container">
      <Header text="Tweet Poster" />
      <TweetBox />
    </div>
  );
}

export default App;
