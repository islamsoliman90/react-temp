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
import "./css/index.css";

function App() {
  let [mainColors, setMainColors] = React.useState("#FF9800");
  let [showbullets, setShowbullets] = React.useState(true);
  let [randomBackground, setRandomBackground] = React.useState(true);
  let setting = {
    color: mainColors,
    showbull: showbullets,
    random: randomBackground,
  };
  React.useEffect(() => {
    if (localStorage.getItem("option")) {
      setting = JSON.parse(localStorage.getItem("option"));
      setMainColors(setting.color);
      setShowbullets(setting.showbull);
      setRandomBackground(setting.random);
    }
    localStorage.setItem("option", JSON.stringify(setting));
    return () => localStorage.removeItem("option");
  }, [setting]);

  let styles = {
    "--main-color": mainColors,
  };
  return (
    <div className="App" style={styles}>
      <Sittings
        setmaincolor={setMainColors}
        maincolor={mainColors}
        setShowbullets={setShowbullets}
        showbullets={showbullets}
        setRandomBackground={setRandomBackground}
        randomBackground={randomBackground}
        settng={setting}
      />
      <Bullets setShowbullets={setShowbullets} showbullet={showbullets} />
      <Landing randomBackground={randomBackground} />
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
