import CategoriesSection from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Trends from "./components/Popular/Trends";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
// import { Route, Routes } from "react-router-dom";
// import AboutPage from "./components/Pages/AboutPage/AboutPage";
// import GetStarted from "./components/Pages/GetStartedPage/GetStarted";

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CategoriesSection />
      <Trends />
      <Testimonials />
      <Footer />
    </div>
  );
}
