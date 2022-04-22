import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
	return (
		<>
			<div
				style={{
					marginTop: "20vh",
					color: "white",
					fontWeight: 700,
					fontSize: "5rem",
					textAlign: "center",
				}}
			>
				More emails, bigger footprint.
			</div>
			<div
				style={{
					color: "white",
					fontWeight: 700,
					fontSize: "5rem",
					textAlign: "center",
					marginLeft: "25rem",
				}}
			>
				Let's Change that.
			</div>
			<div
				style={{
					color: "white",
					fontWeight: 700,
					fontSize: "2rem",
					textAlign: "center",
					marginLeft: "25rem",
				}}
			>
				Start →
			</div>
			<div
				style={{
					position: "fixed",
					left: "-150vw",
					top: 0,
					zIndex: -1,
					overflow: "hidden",
					height: "120vh",
					backgroundColor: "rgba(0,0,0, 20%)",
					width: "400vw",
				}}
				className="video"
			></div>

			<ReactPlayer
				loop
				style={{
					position: "fixed",
					left: "-175vw",
					top: "-10vh",
					zIndex: -2,
					overflow: "hidden",
					height: "100vh",
					filter: "blur(7px)",
				}}
				muted
				playing
				width="450vw"
				height="120vh"
				url={`/server-room.MOV`}
			></ReactPlayer>
		</>
	);
};

export default Home;
