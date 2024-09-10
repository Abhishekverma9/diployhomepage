import "./App.css";
import Header from "./components/common/header/Header";
import Herosection from "./components/Herosection";
import Banner from "./components/Banner";
import Whychoose from "./components/Whychoose";
import Acceleratebusiness from "./components/Acceleratebusiness";
import Gelatoconnect from "./components/Gelatoconnect";
import Meet from "./components/Meet";
import Footer from "./components/Footer";
import Offerbanner from "./components/common/Offerbanner";

function App() {
  return (
    <section className="wrapper">
      <Offerbanner />
      <Header />
      <Herosection />
      <Banner />
      <Whychoose />
      <Acceleratebusiness />
      <Gelatoconnect />
      <Meet />
      <Footer/>
    </section>
  );
}

export default App;
