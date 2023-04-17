export default function Contact ()
{
    return (
        <div class="contact">
            <div class="overlay"></div>
            <div class="container">
                <h2>Contact Us</h2>
                <form >
                    <div class="left">
                        <input type="text" placeholder="Your Name" name="username" />
                        <input type="text" placeholder="Your Phone" name="phone" />
                        <input type="email" placeholder="Your Email" name="email" />
                        <input type="text" placeholder="Subject" name="subject" />
                    </div>
                    <div class="right">
                        <textarea name="message" placeholder="Your Message"></textarea>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
}