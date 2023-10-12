import AboutMe from "../components/aboutMe";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function LandingPage() {
	return (
		<div className="lading-page">
			<Navbar />
			<Hero />
			<AboutMe />
		</div>
	);
}
