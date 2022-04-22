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
    filteredEmailsRecoilAtom,
} from "../recoils/filter";
import { useRecoilState } from "recoil";

interface SetFiltersProps {
    handleNext: () => void;
}

const SetFilters: React.FC<SetFiltersProps> = ({ handleNext }) => {
    const [periodFilter, setPeriodFilter] = useRecoilState(
        periodFilterRecoilAtom
    );
    const [senderFilter, setSenderFilter] = useRecoilState(
        senderFilterRecoilAtom
    );
    const [keywordFilter, setKeywordFilter] = useRecoilState(
        keywordFilterRecoilAtom
    );
    const [filteredEmails, setFilteredEmails] = useRecoilState(
        filteredEmailsRecoilAtom
    );

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
        setTimeout(() => {
            setLoading(false);
            handleNext();
        }, 1000);
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
                                    checked={
                                        periodFilter.start !== null
                                            ? true
                                            : false
                                    }
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setPeriodFilter({
                                            ...periodFilter,
                                            start: e.target.checked
                                                ? "2022-04-23"
                                                : null,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        {periodFilter.start !== null && (
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
                                    checked={
                                        periodFilter.end !== null ? true : false
                                    }
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setPeriodFilter({
                                            ...periodFilter,
                                            end: e.target.checked
                                                ? "2022-04-23"
                                                : null,
                                        });
                                    }}
                                />
                            }
                        />
                        <br />
                        {periodFilter.end !== null && (
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
                        <Typography sx={{ p: 1 }}>
                            {senderFilter.length} items
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 1, mb: 3 }}>
                        {senderFilter.map((sender: string, idx: number) => (
                            <>
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
                            </>
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
                        <Typography sx={{ p: 1 }}>
                            {keywordFilter.length} items
                        </Typography>
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
