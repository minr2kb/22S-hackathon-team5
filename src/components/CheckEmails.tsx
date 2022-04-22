import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import { Send } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    periodFilterRecoilAtom,
    senderFilterRecoilAtom,
    keywordFilterRecoilAtom,
    filteredEmailsRecoilAtom,
} from "../recoils/filter";
import { useRecoilState } from "recoil";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "title",
        headerName: "Title",
        width: 280,
        // editable: true,
    },
    {
        field: "sender",
        headerName: "Sender",
        width: 200,
        // editable: true,
    },
    {
        field: "date",
        headerName: "Date",
        // type: "number",
        width: 120,
        // editable: true,
    },
    // {
    //     field: "fullName",
    //     headerName: "Full name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: GridValueGetterParams) =>
    //         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
];

const rows = [
    {
        id: 1,
        sender: "kbmin1129@gmail.com",
        title: "Regarding the Quiz1",
        date: "2022-04-20",
    },
    {
        id: 2,
        sender: "kbmin1129@gmail.com",
        title: "Regarding the Qui2",
        date: "2022-04-20",
    },
    {
        id: 3,
        sender: "kbmin1129@gmail.com",
        title: "Regarding the Quiz3",
        date: "2022-04-20",
    },
];

interface CheckEmailsProps {
    handleNext: () => void;
    handleBack: () => void;
}

const CheckEmails: React.FC<CheckEmailsProps> = ({
    handleNext,
    handleBack,
}) => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Box sx={{ width: "100%", height: "55vh" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    // pageSize={25}
                    rowsPerPageOptions={[100]}
                    checkboxSelection
                    // disableSelectionOnClick
                />
            </Box>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
                <LoadingButton
                    onClick={handleNext}
                    loading={loading}
                    variant="contained"
                >
                    Next
                </LoadingButton>
            </Box>
        </>
    );
};

export default CheckEmails;
