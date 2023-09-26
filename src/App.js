
import "./style/root.css";
import Contact from "./components/contact_form/ContactForm";
import Footer from "./components/footer/Footer";
import PurpleComponent from "./components/purple/PurpleComponent";

function App() {
  return (
    <div className="main-container">
      <PurpleComponent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
