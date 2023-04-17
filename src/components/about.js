
import about from "../imgs/about-us.jpg";
export default function About ()
{

    return (
        <div>
            <div className="container">
                <div class="about-us" id="about-us">
                    <div class="info-box">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum, tenetur dolores esse magni
                            ratione distinctio! Quod iusto neque fuga, maxime quos nostrum quibusdam dicta deserunt blanditiis non
                            voluptate id?</p>
                    </div>
                    <div className="image-box">
                        <img src={ about } alt="about" />
                    </div>
                </div>
            </div>
        </div>
    );
}

