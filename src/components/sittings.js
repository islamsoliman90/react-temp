import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useGlobalContext } from "../context";
export default function Sittings(props) {
  let {
    showbullet,
    randBackground,
    activeBullets,
    offBullets,
    activeBackground,
    offBackground,
    setmaincolor,
    maincolor,
  } = useGlobalContext();
  let [open, setopen] = React.useState(false);
  function setcolor(color) {
    maincolor(() => color);
  }
  function activecolor(dataSetColor) {
    return dataSetColor === maincolor ? "active" : "";
  }
  function resetOption() {
    activeBullets();
    activeBackground();
    setmaincolor("#FF9800");
  }
  let setting = {
    color: maincolor,
    showbull: showbullet,
    random: randBackground,
  };
  React.useEffect(() => {
    if (localStorage.getItem("option")) {
      setting = JSON.parse(localStorage.getItem("option"));
      setmaincolor(setting.color);
      setting.showbull ? activeBullets() : offBullets();
      setting.random ? activeBackground() : offBackground();
    }
    localStorage.setItem("option", JSON.stringify(setting));
    return () => localStorage.removeItem("option");
  }, [setting]);
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
                setmaincolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#E91E63")}
              data-color="#E91E63"
              onClick={(e) => {
                setmaincolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#009688")}
              data-color="#009688"
              onClick={(e) => {
                setmaincolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#03A9F4")}
              data-color="#03A9F4"
              onClick={(e) => {
                setmaincolor(e.target.dataset.color);
              }}
            ></li>
            <li
              className={activecolor("#4CAF50")}
              data-color="#4CAF50"
              onClick={(e) => {
                setmaincolor(e.target.dataset.color);
              }}
            ></li>
          </ul>
        </div>
        <div class="option-box">
          <h4>Random Backgrounds</h4>
          <div class="random-backgrounds">
            <span
              className={randBackground ? "yes active" : "yes"}
              data-background="yes"
              onClick={() => activeBackground()}
            >
              Yes
            </span>
            <span
              className={randBackground ? "no " : "no active"}
              data-background="no"
              onClick={() => offBackground()}
            >
              No
            </span>
          </div>
        </div>
        <div class="option-box">
          <h4>Show Bullets</h4>
          <div class="bullets-option">
            <span
              className={showbullet ? "yes active" : "yes"}
              data-display="show"
              onClick={() => activeBullets()}
            >
              Yes
            </span>
            <span
              className={showbullet ? "no " : "no active"}
              data-display="hide"
              onClick={() => offBullets()}
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
