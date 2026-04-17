import React from "react";

// ⬇️ VIEWS
import Navbar from "./views/Navbar";
import Hero from "./views/Hero";
import Services from "./views/Services";
import Banner from "./views/Banner";
import Blogs from "./views/Blogs";
import Footer from "./views/Footer";

// ⬇️ GLOBAL STYLES (Tailwind already enabled)
import "./index.css";

const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* SERVICES SECTION */}
      <Services />

      {/* BANNER SECTION */}
      <Banner />

      {/* BLOGS SECTION */}
      <Blogs />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
