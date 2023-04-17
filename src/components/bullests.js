export default function Bullets(props) {
  let style;
  if (props.showbullet) {
    style = {
      display: "block",
    };
  } else style = { display: "none" };

  return (
    <div class="nav-bullets" style={style}>
      <a href="#about-us">
        <div class="bullet">
          <div class="tooltip ">About Us</div>
        </div>
      </a>
      <a href="#skills">
        <div class="bullet">
          <div class="tooltip ">Our Skills</div>
        </div>
      </a>
      <a href="#gallery">
        <div class="bullet" data-section=".gallery">
          <div class="tooltip">Our Gallery</div>
        </div>
      </a>
      <a href="#timeline">
        <div class="bullet">
          <div class="tooltip">Timeline</div>
        </div>
      </a>
      <a href="#features">
        <div class="bullet">
          <div class="tooltip">Features</div>
        </div>
      </a>
      <a href="#testimonials">
        <div class="bullet">
          <div class="tooltip">Testimonials</div>
        </div>
      </a>
    </div>
  );
}
