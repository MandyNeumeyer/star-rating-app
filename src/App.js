import StarRating from "./component/StarRating.js";
import Header from './component/Header.js'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <StarRating />
    </div>
  );
};

export default App;
