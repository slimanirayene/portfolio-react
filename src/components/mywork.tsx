import "../css/mywork.css";
import Typewriter from "./typeWriter";
import { Fade, Slide } from "react-awesome-reveal";

export default function Mywork() {
	return (
		<div className="mywork">
			<div className="mywork-content">
				<div className="work electronics">
					<Typewriter text="Hello World !" delay={200} />
				</div>
				<div className="work web">
					<Fade cascade direction="up">
						<span>I am an animated text</span>
						<span>I am an animated text</span>
						<span>I am an animated text</span>
						<span>I am an animated text</span>
					</Fade>
				</div>
				<div className="work Entrep"></div>
			</div>
		</div>
	);
}
