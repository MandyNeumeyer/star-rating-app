import StarRating from "./component/StarRating.jsx";
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
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
