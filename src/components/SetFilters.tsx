import React, { useState } from "react";
import {
    Box,
    Chip,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
} from "@mui/material";

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
    etcFilterRecoilAtom,
} from "../recoils/filter";
import { authTokenAtom } from "../recoils/auth";
import { emailInfoAtom, emailListAtom } from "../recoils/emails";

import { useRecoilState, useRecoilValue } from "recoil";
import { getUserMails, UserMailsQuery } from "../apis/getUserMails";

interface SetFiltersProps {
    handleNext: () => void;
}

const SetFilters: React.FC<SetFiltersProps> = ({ handleNext }) => {
    const emailInfo = useRecoilValue(emailInfoAtom);
    const authToken = useRecoilValue(authTokenAtom);
    const [emailList, setEmailList] = useRecoilState(emailListAtom);
    const [periodFilter, setPeriodFilter] = useRecoilState(
        periodFilterRecoilAtom
    );
    const [senderFilter, setSenderFilter] = useRecoilState(
        senderFilterRecoilAtom
    );
    const [keywordFilter, setKeywordFilter] = useRecoilState(
        keywordFilterRecoilAtom
    );
    const [etcFilter, setEtcFilter] = useRecoilState(etcFilterRecoilAtom);

    const [senderInput, setSenderInput] = useState("");
    const [senderInputError, setSenderInputError] = useState(false);

    const [keywordInput, setKeywordInput] = useState("");
    const [keywordInputError, setKeywordInputError] = useState(false);

    const [loading, setLoading] = useState(false);

    const validateEmail = (email: string) => {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const handleFilter = () => {
        setLoading(true);
        const userMailsQuery: UserMailsQuery = {
            from: periodFilter.start,
            to: periodFilter.end,
            senders: senderFilter,
            keywords: keywordFilter,
            isUnread: etcFilter.unread,
            hasAttachment: etcFilter.attachment,
        };

        getUserMails(userMailsQuery, emailInfo, authToken).then((res) => {
            setEmailList(res);
            setLoading(false);
            handleNext();
        });

        // setTimeout(() => {
        //     setLoading(false);
        //     handleNext();
        // }, 300);
    };

    return (
        <>
            <Box sx={{ height: "55vh", p: 1, m: -1, overflow: "auto" }}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600, p: 1 }}>
                            By Period
                        </Typography>
                        <Typography sx={{ p: 1 }}>{`${
                            periodFilter.start || ""
                        } ${
                            periodFilter.start || periodFilter.end ? "~" : ""
                        } ${periodFilter.end || ""}`}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 1, mb: 3 }}>
                        <FormControlLabel
                            label="start date"
                            control={
                                <Checkbox
                                    checked={periodFilter.start ? true : false}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setPeriodFilter({
                                            ...periodFilter,
                                            start: e.target.checked
                                                ? "2022-04-23"
                                                : undefined,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        {periodFilter.start && (
                            <>
                                <TextField
                                    id="date"
                                    label="From"
                                    type="date"
                                    value={periodFilter.start}
                                    sx={{ width: 220, mt: 2, mb: 3 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) =>
                                        setPeriodFilter({
                                            ...periodFilter,
                                            start: e.target.value,
                                        })
                                    }
                                />
                                <br />
                            </>
                        )}

                        <FormControlLabel
                            label="end date"
                            control={
                                <Checkbox
                                    checked={periodFilter.end ? true : false}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setPeriodFilter({
                                            ...periodFilter,
                                            end: e.target.checked
                                                ? "2022-04-23"
                                                : undefined,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        {periodFilter.end && (
                            <TextField
                                id="date"
                                label="To"
                                type="date"
                                value={periodFilter.end}
                                sx={{ width: 220, mt: 2 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) =>
                                    setPeriodFilter({
                                        ...periodFilter,
                                        end: e.target.value,
                                    })
                                }
                            />
                        )}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600, p: 1 }}>
                            By Sender
                        </Typography>

                        <Chip
                            sx={{ mt: 0.5 }}
                            color={
                                senderFilter.length > 0 ? "primary" : "default"
                            }
                            label={`${senderFilter.length} items`}
                        />
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 1, mb: 3 }}>
                        {senderFilter.map((sender: string, idx: number) => (
                            <Box key={`sender-${idx}`}>
                                <Chip
                                    label={sender}
                                    variant="outlined"
                                    sx={{ mr: 1, mb: 1 }}
                                    onDelete={() =>
                                        setSenderFilter((prev) =>
                                            prev.filter(
                                                (_sender, i) => i !== idx
                                            )
                                        )
                                    }
                                />
                            </Box>
                        ))}

                        {senderFilter.length > 0 && <br />}
                        <TextField
                            label={"email"}
                            sx={{ mt: senderFilter.length > 0 ? 2 : 0 }}
                            variant="standard"
                            value={senderInput}
                            onChange={(e) => {
                                setSenderInputError(false);
                                setSenderInput(e.target.value);
                            }}
                            error={senderInputError}
                            helperText={
                                senderInputError ? "Invalid email address" : ""
                            }
                        />
                        <Button
                            variant="outlined"
                            sx={{ mt: senderFilter.length > 0 ? 3 : 1, ml: 2 }}
                            onClick={() => {
                                if (validateEmail(senderInput)) {
                                    setSenderFilter((prev) => [
                                        ...prev,
                                        senderInput,
                                    ]);
                                    setSenderInput("");
                                } else {
                                    setSenderInputError(true);
                                }
                            }}
                        >
                            add+
                        </Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600, p: 1 }}>
                            By Keyword
                        </Typography>
                        <Chip
                            sx={{ mt: 0.5 }}
                            color={
                                keywordFilter.length > 0 ? "primary" : "default"
                            }
                            label={`${keywordFilter.length} items`}
                        />
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 1, mb: 3 }}>
                        {keywordFilter.map((keyword: string, idx: number) => (
                            <>
                                <Chip
                                    label={keyword}
                                    variant="outlined"
                                    sx={{ mr: 1, mb: 1 }}
                                    onDelete={() =>
                                        setKeywordFilter((prev) =>
                                            prev.filter(
                                                (_keyword, i) => i !== idx
                                            )
                                        )
                                    }
                                />
                            </>
                        ))}

                        {keywordFilter.length > 0 && <br />}
                        <TextField
                            label={"keyword"}
                            sx={{ mt: keywordFilter.length > 0 ? 2 : 0 }}
                            variant="standard"
                            value={keywordInput}
                            onChange={(e) => {
                                setKeywordInputError(false);
                                setKeywordInput(e.target.value);
                            }}
                            error={keywordInputError}
                            helperText={keywordInputError ? "Empty value" : ""}
                        />
                        <Button
                            variant="outlined"
                            sx={{ mt: keywordFilter.length > 0 ? 3 : 1, ml: 2 }}
                            onClick={() => {
                                if (keywordInput.length > 0) {
                                    setKeywordFilter((prev) => [
                                        ...prev,
                                        keywordInput,
                                    ]);
                                    setKeywordInput("");
                                } else {
                                    setKeywordInputError(true);
                                }
                            }}
                        >
                            add+
                        </Button>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography sx={{ fontWeight: 600, p: 1 }}>
                            ETC.
                        </Typography>
                        <Chip
                            sx={{ mt: 0.5, mr: 1 }}
                            color={etcFilter.unread ? "primary" : "default"}
                            label={"unread"}
                        />
                        <Chip
                            sx={{ mt: 0.5, mr: 1 }}
                            color={etcFilter.attachment ? "primary" : "default"}
                            label={"attachment"}
                        />
                        <Chip
                            sx={{ mt: 0.5, mr: 1 }}
                            color={etcFilter.permanent ? "primary" : "default"}
                            label={"permanent"}
                        />
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 1, mb: 3 }}>
                        <FormControlLabel
                            label="delete unread emails"
                            control={
                                <Checkbox
                                    checked={etcFilter.unread}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setEtcFilter({
                                            ...etcFilter,
                                            unread: e.target.checked,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        <FormControlLabel
                            label="delete emails with attachment"
                            control={
                                <Checkbox
                                    checked={etcFilter.attachment}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setEtcFilter({
                                            ...etcFilter,
                                            attachment: e.target.checked,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        <FormControlLabel
                            label="delete permanently"
                            control={
                                <Checkbox
                                    checked={etcFilter.permanent}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setEtcFilter({
                                            ...etcFilter,
                                            permanent: e.target.checked,
                                        });
                                    }}
                                />
                            }
                        />
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <LoadingButton
                    onClick={handleFilter}
                    loading={loading}
                    variant="contained"
                >
                    Next
                </LoadingButton>
            </Box>
        </>
    );
};

export default SetFilters;
