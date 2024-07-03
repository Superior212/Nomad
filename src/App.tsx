import Counties from "./components/Counties";
import { Faqs } from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import NomadAbility from "./components/NomadAbility";
import MemoLeftPattern from "./icons/LeftPattern";
import MemoRightPattern from "./icons/RightPattern";
import MemoTopPattern from "./icons/TopPattern";

const App = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0F2027] via-[#090909] to-[#090909]  overflow-x-hidden">
      <NavBar />
      <div className="absolute top-0 ">
        <MemoTopPattern className=" " />
      </div>
      <div className="absolute left-0 top-0 ">
        <MemoLeftPattern className=" " />
      </div>
      <MemoRightPattern className="absolute right-0" />
      <div className="sm:pt-28">
        <Hero />
        <NomadAbility />
        <Counties />
        <div className="absolute left-0 top-0 ">
          <MemoLeftPattern className=" " />
        </div>
        <Faqs />
        <div className="absolute bottom-0 ">
          <MemoTopPattern className=" " />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
