import React from "react";
import About from "./components/about";
import Bullets from "./components/bullests";
import Contact from "./components/contact";
import Features from "./components/features";
import Gallery from "./components/gallery";
import Landing from "./components/landing";
import Sittings from "./components/sittings";
import Skills from "./components/skills";
import Testimoials from "./components/teastimoials";
import Timeline from "./components/timeline";
import { useGlobalContext } from "./context";
import "./css/index.css";

function App() {
  let { maincolor } = useGlobalContext();
  let styles = {
    "--main-color": maincolor,
  };
  return (
    <div className="App" style={styles}>
      <Sittings />
      <Bullets />
      <Landing />
      <About />
      <Skills />
      <Gallery />
      <Timeline />
      <Features />
      <Testimoials />
      <Contact />
      <div class="footer">Created With Love By Islam Ahmed</div>
    </div>
  );
}

export default App;
