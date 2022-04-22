import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import {
    periodFilterRecoilAtom,
    senderFilterRecoilAtom,
    keywordFilterRecoilAtom,
    filteredEmailsRecoilAtom,
} from "../recoils/filter";
import { useRecoilState } from "recoil";

import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 60 },
    {
        field: "title",
        headerName: "Title",
        width: 200,
    },
    {
        field: "sender",
        headerName: "Sender",
        width: 180,
    },
    {
        field: "date",
        headerName: "Date",
        width: 100,
    },

    {
        field: "attachment",
        headerName: "Attachment",
        width: 110,
    },
    {
        field: "read",
        headerName: "Read",
        width: 80,
    },
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
    const [selectionModel, setSelectionModel] = useState<GridSelectionModel>(
        Array.from(Array(4).keys())
    );

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
                    onSelectionModelChange={(model) => setSelectionModel(model)}
                    selectionModel={selectionModel}
                />
            </Box>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
                <Button onClick={handleNext} variant="contained">
                    Next
                </Button>
            </Box>
        </>
    );
};

export default CheckEmails;
