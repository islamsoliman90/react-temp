import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Sittings(props) {
  let [open, setopen] = React.useState(false);
  function setcolor(color) {
    props.setmaincolor(() => color);
  }
  function activecolor(dataSetColor) {
    return dataSetColor === props.maincolor ? "active" : "";
  }
  function resetOption() {
    props.setShowbullets(true);
    props.setRandomBackground(true);
    setcolor("#FF9800");
  }
  return (
    <div
      class="settings-box"
      className={open ? "settings-box open" : "settings-box"}
    >
      <div class="toggle-settings" onClick={() => setopen(!open)}>
        <FontAwesomeIcon icon={faGear} className={open ? "animation" : ""} />
      </div>
      <div class="settings-container">
        <div class="option-box">
          <h4>Colors</h4>
          <ul class="colors-list">
            <li
              className={activecolor("#FF9800")}
              data-color="#FF9800"
              onClick={(e) => {
                setcolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#E91E63")}
              data-color="#E91E63"
              onClick={(e) => {
                setcolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#009688")}
              data-color="#009688"
              onClick={(e) => {
                setcolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#03A9F4")}
              data-color="#03A9F4"
              onClick={(e) => {
                setcolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#4CAF50")}
              data-color="#4CAF50"
              onClick={(e) => {
                setcolor(e.target.dataset.color);
              }}
            ></li>
          </ul>
        </div>
        <div class="option-box">
          <h4>Random Backgrounds</h4>
          <div class="random-backgrounds">
            <span
              className={props.randomBackground ? "yes active" : "yes"}
              data-background="yes"
              onClick={() => props.setRandomBackground(!props.randomBackground)}
            >
              Yes
            </span>
            <span
              className={props.randomBackground ? "no " : "no active"}
              data-background="no"
              onClick={() => props.setRandomBackground(!props.randomBackground)}
            >
              No
            </span>
          </div>
        </div>
        <div class="option-box">
          <h4>Show Bullets</h4>
          <div class="bullets-option">
            <span
              className={props.showbullets ? "yes active" : "yes"}
              data-display="show"
              onClick={() => props.setShowbullets(!props.showbullets)}
            >
              Yes
            </span>
            <span
              className={props.showbullets ? "no " : "no active"}
              data-display="hide"
              onClick={() => props.setShowbullets(!props.showbullets)}
            >
              No
            </span>
          </div>
        </div>
        <button class="reset-options" onClick={resetOption}>
          Reset Options
        </button>
      </div>
    </div>
  );
}
