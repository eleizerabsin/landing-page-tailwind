import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="font-sans mx-auto w-full text-gray-200">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
