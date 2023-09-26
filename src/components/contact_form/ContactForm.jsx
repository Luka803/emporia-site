import "../../style/root.css";
import "../../style/contact_styles/contact.css";
import bajker from "../../images/bajker 1.png"
import InputField from "./InputField";


export default function Contact() {
    return (
        <div className="pre--footer">
            <div className="contact">
                <form className="flex-form">
                    <div id="form-header">
                        <h1 id="h1--contact-form--1">Got a question?</h1>
                        <h1 id="h1--contact-form--2">Contact us</h1>
                    </div>
                    <div className="contact--grid">
                        <InputField for="firstName" name="First Name*" type="text" id="firstName" />
                        <InputField for="lastName" name="Last Name*" type="text" id="lastName" />
                        <InputField for="email" name="Email adress" type="email" id="email" />
                        <InputField for="number" name="Your Number" type="text" id="number" />
                        {/* <InputField for="message" name="Message" type="textarea" id="message" span2="form-group span-2" /> */}
                        <div class="form-group span-2">
                            <label for="message">Message</label>
                            <textarea class="form-control span-2" id="message" rows="2"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <img src={bajker} />
        </div>
    );
}