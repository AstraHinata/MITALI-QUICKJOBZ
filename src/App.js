import CategoriesSection from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Courses from "./components/Popular/Courses";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CategoriesSection />
      <Courses />
      <Testimonials/>
<Footer/>
    </div>
  );
}
