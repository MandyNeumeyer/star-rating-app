import StarRating from "./component/StarRating.js";
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import "./index.css";

const App = () => {
  return (
      <div className="App">
        <Header />
        <StarRating />
        <Footer />
      </div>
  );
};

export default App;
