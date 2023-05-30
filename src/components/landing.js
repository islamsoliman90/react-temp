import React from "react";
import { useGlobalContext } from "../context";
export default function Landing(props) {
  const { randBackground } = useGlobalContext();

  let [images, setimages] = React.useState({});
  let imgsArray = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
  ];
  // let interval;
  React.useEffect(() => {
    let interval;
    if (randBackground) {
      interval = setInterval(() => {
        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        setimages(
          (img) =>
            (img = {
              backgroundImage: `url("../imgs/${imgsArray[randomNumber]}")`,
            })
        );
      }, 10000);
      return () => clearInterval(interval);
    } else return clearInterval(interval);
  }, [randBackground]);
  //open toggale
  let [open, setOpen] = React.useState(false);

  return (
    <div className="landing-page" style={images}>
      <div class="overlay"></div>
      <div class="container">
        <div class="header-area">
          <div class="logo">Special Design</div>
          <div class="links-container">
            <ul class={open ? "links open" : "links"}>
              <li>
                <a href="#about-us">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
            <button class="toggle-menu" onClick={() => setOpen(() => !open)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div class="introduction-text">
        <h1>
          We Are <span>Creative</span> Agency
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste
        </p>
      </div>
    </div>
  );
}
