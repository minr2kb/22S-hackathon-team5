import React, { useState } from "react";
import {
	Box,
	Grid,
	Button,
	Card,
	Divider,
	Fade,
	Stepper,
	Step,
	StepLabel,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VideoLayout from "../layout/VideoLayout";
import CommonLayout from "../layout/CommonLayout";

const steps = ["Set Filters", "Check Emails", "Delete Emails"];

const Filter = () => {
	const [activeStep, setActiveStep] = useState<number>(0);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	return (
		<CommonLayout>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "end",
					alignItems: "center",
				}}
			>
				<Box sx={{ width: "100%", maxWidth: "960px" }}>
					<Fade
						in={true}
						style={{
							transitionDelay: "300ms",
							transitionDuration: "500ms",
						}}
					>
						<Box sx={{ width: "100%", mt: 10 }}>
							<Stepper activeStep={activeStep} alternativeLabel>
								{steps.map(label => (
									<Step key={label}>
										<StepLabel>{label}</StepLabel>
									</Step>
								))}
							</Stepper>
						</Box>
					</Fade>
					<Fade
						in={true}
						style={{
							transitionDelay: "500ms",
							transitionDuration: "500ms",
						}}
					>
						<Box
							sx={{
								// backgroundColor: "rgba(0,0,0,0.7)",
								width: "100%",
								mt: 5,
							}}
						>
							<Box
								sx={{
									// color: "white",
									fontWeight: 700,
									fontSize: "2rem",
									mb: 1,
								}}
							>
								Set Filters
							</Box>
							<Divider />

							<Box
								sx={{
									mt: 3,
									// fontWeight: 700,
									// fontSize: "2rem",
								}}
							>
								기간, 누가 보냈는지, 키워드
							</Box>
						</Box>
					</Fade>
					{/* <Fade
					in={true}
					style={{
						transitionDelay: "1000ms",
						transitionDuration: "700ms",
					}}
				>
					<Button
						variant="outlined"
						size="large"
						sx={{
							textTransform: "none",
							fontSize: "1.3rem",
							borderWidth: "2px",
							borderRadius: 2,
							background: "rgba(255, 255, 255, 10%)",
							mt: 7,
							"&:hover": {
								borderWidth: "2px",
								borderRadius: 2,
								background: "rgba(255, 255, 255, 20%)",
								mt: 7,
							},
						}}
						onClick={() => navigate("/filter")}
					>
						Start →
					</Button>
				</Fade> */}
				</Box>
			</Box>
		</CommonLayout>
	);
};

export default Filter;
