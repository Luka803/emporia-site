import "../../style/footer/footers.css"
import "../../style/root.css";
import emporia from "../../images/EMPORIA.png"

export default function Footer() {

    return (

        <div className="footer-container container-fluid">
            <div className="overlay">
                <div className="emporia">
                    <img src={emporia} />
                </div>
                <div className="services">
                    <a>Home</a>
                    <a>Work</a>
                    <a>Services</a>
                    <a>Contact us</a>
                </div>
            </div>
        </div>

    );

}