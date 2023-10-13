import AboutMe from "../components/aboutMe";
import Hero from "../components/hero";
import Mywork from "../components/mywork";
import Navbar from "../components/navbar";
import Story from "../components/story";

export default function LandingPage() {
	return (
		<div className="lading-page">
			<Navbar />
			<Hero />
			<AboutMe />
			<Story />
			<Mywork />
		</div>
	);
}
