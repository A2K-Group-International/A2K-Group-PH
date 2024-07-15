import Header from "./Components/Header";
import Section1 from "./Components/Section1";

function App() {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-8 font-primaryFont font-normal text-darkGray sm:px-6 md:px-8">
      <Header />
      <main>
        <Section1 />
      </main>
    </div>
  );
}

export default App;
