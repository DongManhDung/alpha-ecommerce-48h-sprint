import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import StickyAddToCartBar from "./components/sticky/StickyAddToCartBar";

function App() {
  return (
    <div className="pb-20 md:pb-16">
      <Header />
      <Body />
      <Footer />
      <StickyAddToCartBar />
    </div>
  );
}

export default App;
