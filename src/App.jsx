import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import StickyAddToCartBar from "./components/sticky/StickyAddToCartBar";
import StickyPromoBanner from "./components/sticky/StickyPromoBanner";

function App() {
  const [selectedFormat, setSelectedFormat] = useState("jar");

  return (
    <div className="pb-20 md:pb-16">
      <StickyPromoBanner />
      <Header />
      <Body 
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
      />
      <Footer />
      <StickyAddToCartBar selectedFormat={selectedFormat} />
    </div>
  );
}

export default App;
