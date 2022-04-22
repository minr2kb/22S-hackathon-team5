import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

interface VideoLayoutProps {
	children: JSX.Element;
}

const VideoLayout: React.FC<VideoLayoutProps> = ({ children }) => {
	return (
		<>
			<Box
				style={{
					position: "fixed",
					bottom: "15px",
					overflow: "hidden",
					width: "100vw",
					textAlign: "center",
					color: "rgba(255,255,255,0.8)",
				}}
			>
				2022 Spring Hackathon - team 5
			</Box>
			{children}
			<Box
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
			></Box>
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

export default VideoLayout;
