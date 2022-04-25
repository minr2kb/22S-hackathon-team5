import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import {
    periodFilterRecoilAtom,
    senderFilterRecoilAtom,
    keywordFilterRecoilAtom,
} from "../recoils/filter";
import { emailListAtom, selectionModelAtom } from "../recoils/emails";
import { useRecoilState } from "recoil";

import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";

import { getUserMails } from "../apis/getUserMails";

const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 60 },
    {
        field: "subject",
        headerName: "Title",
        width: 200,
    },
    {
        field: "from",
        headerName: "Sender",
        width: 180,
    },
    {
        field: "date",
        headerName: "Date",
        width: 100,
    },

    {
        field: "sizeEstimate",
        headerName: "Size",
        width: 110,
    },
    {
        field: "unread",
        headerName: "Unread",
        width: 80,
    },
];

interface Email {
    id: number;
    from: string;
    subject: string;
    date: string;
    sizeEstimate: number;
    labelIds: string[];
}

interface CheckEmailsProps {
    handleNext: () => void;
    handleBack: () => void;
}

const CheckEmails: React.FC<CheckEmailsProps> = ({
    handleNext,
    handleBack,
}) => {
    const [emailList, setEmailList] = useRecoilState(emailListAtom);
    const [selectionModel, setSelectionModel] =
        useRecoilState(selectionModelAtom);

    useEffect(() => {
        setSelectionModel(emailList.map((email: Email) => email.id));
    }, []);

    return (
        <>
            <Box sx={{ width: "100%", height: "55vh" }}>
                <DataGrid
                    rows={emailList.map((email: Email) => {
                        return {
                            ...email,
                            date: new Date(email.date).toLocaleDateString(
                                "en-US"
                            ),
                            sizeEstimate: `${email.sizeEstimate} bytes`,
                            unread: email.labelIds.includes("UNREAD"),
                        };
                    })}
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
