import "../css/navbar.css";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className={`navbar ${scrolling ? "scrolling" : ""}`}>
			<div className="logo">LOGO</div>
			<MenuOutlined className="drawer-button" onClick={showDrawer} />

			<Drawer
				title="Basic Drawer"
				placement="top"
				onClose={onClose}
				open={open}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
}
