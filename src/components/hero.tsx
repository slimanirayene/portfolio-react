import "../css/hero.css";
import myPortrait from "../assets/portrait2.jpg";
export default function Hero() {
	return (
		<div className="hero">
			<div className="hero-separation left">
				<div className="hero-content top">
					<h1 style={{ fontSize: "3.5rem", margin: 0 }}>SLIMANI </h1>
					<h1 style={{ fontSize: "4rem", color: "#D35400", margin: 0 }}>
						RAYENE{" "}
					</h1>
					<span style={{ lineHeight: "140%", marginTop: 10 }}>
						Creating Seamless Web Experiences, Infused with Hardware Magic
					</span>
				</div>
				<div className="hero-content bottom">
					<div className="content-box">
						Highly skilled at progressive enhancement, design systems & UI
						Engineering.
					</div>
					<div className="content-box">
						Proven experience building successful products for clients across
						several countries.
					</div>
				</div>
			</div>
			<div className="hero-separation right">
				<div className="portrait">
					<img src={myPortrait} style={{ width: "100%" }} />
				</div>
			</div>
		</div>
	);
}
