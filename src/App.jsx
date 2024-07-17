import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-8 font-primaryFont font-normal text-darkGray sm:px-6 md:px-8">
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
