import React from "react";
import { Box } from "@mui/material";

interface CommonLayoutProps {
	children: JSX.Element;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
	return (
		<>
			<Box
				style={{
					position: "fixed",
					bottom: "15px",
					overflow: "hidden",
					width: "100vw",
					textAlign: "center",
					// color: "rgba(255,255,255,0.8)",
				}}
			>
				2022 Spring SKCS Hackathon - team 5
			</Box>
			{children}
		</>
	);
};

export default CommonLayout;
