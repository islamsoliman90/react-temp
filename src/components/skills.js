import React from "react";

export default function Skills() {
  let [show, setShow] = React.useState(false);
  // let scrollY = React.useRef(0);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      let skills = document.getElementById("skills");
      if (window.scrollY > skills.offsetTop - 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show]);

  return (
    <div class="skills" id="skills">
      <div class="container">
        <h2>Our Skills</h2>
        <div class="skill-box">
          <div class="skill-name">HTML</div>
          <div class="skill-progress">
            <span style={show ? { width: "80%" } : {}}></span>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-name">CSS</div>
          <div class="skill-progress">
            <span style={show ? { width: "70%" } : {}}></span>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-name">JavaScript</div>
          <div class="skill-progress">
            <span style={show ? { width: "90%" } : {}}></span>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-name">react</div>
          <div class="skill-progress">
            <span style={show ? { width: "80%" } : {}}></span>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-name">Sass</div>
          <div class="skill-progress">
            <span
              data-progress="90%"
              style={show ? { width: "90%" } : {}}
            ></span>
          </div>
        </div>
        <div class="skill-box">
          <div class="skill-name">Jest</div>
          <div class="skill-progress">
            <span style={show ? { width: "70%" } : {}}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
