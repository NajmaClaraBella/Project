import * as React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Styles } from "./style";
import { useState } from 'react';
import { RenderInputText, RenderSelect } from './common';
import BasicTimeDatePicker from './DateTime';

const useStyles = makeStyles(Styles);

export default function BodyComponent() {
    const classes = useStyles();
    const [data, setData] = useState({
        NamePerson: "",
        Nim: "",
        Agenda: "",
        DateTime: ""
    });
    const [error, setError] = useState({});

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;

        //setting up errors
        value.length < 3
            ? (error[name] = setError({
                ...error,
                [name]: 'At least have 3 character',
            }))
            : (error[name] = setError({ ...error, [name]: "" }))
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data-", data);
    };

    return (
        <Grid container className={classes.formContainer}>
            <Grid item xs={12} sm={9}>
                {/* form container */}
                <form onSubmit={handleSubmit}>
                    <Paper component={Box} mb={1} p={2}>
                        <Box mb={2} mt={1}>
                            <Typography variant="h6" color="primary" align="center">
                                Let's Book for Your Event ! {" "}
                            </Typography>
                        </Box>
                        {/* //row */}
                        <Grid container>
                            <Grid item xs={12} sm={7}>
                                <Card>
                                    <CardContent>
                                        <Box mb={1}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={6} sm={6}>
                                                    <RenderInputText
                                                        label="Name"
                                                        name="NamePerson"
                                                        data={data}
                                                        error={error}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={6} sm={6}>
                                                    <RenderInputText
                                                        label="NIM"
                                                        name="Nim"
                                                        data={data}
                                                        error={error}
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box mb={1}>
                                            <RenderSelect
                                            label='Agenda'
                                            name='Agenda'
                                            data={data}
                                            error={error}
                                            options={[
                                                {key: "Seminar Proposal", value: "Sempro"},
                                                {key: "Sidang Skripsi", value: "Sidang"},
                                                {key: "Ujian PKL", value: "UjianPkl"}
                                            ]}
                                            onChange={handleChange}
                                            />
                                        </Box>
                                        <Box mb={1}>
                                            <BasicTimeDatePicker 
                                            label='Date and Time'
                                            name='DateTime'
                                            data={data}
                                            />
                                        </Box>
                                    </CardContent>
                                    <Box mt={1} mb={1} p={2}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            size='small'
                                            color='primary'
                                            fullWidth={true}>
                                            Submit
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={5}> </Grid>
                        </Grid>
                    </Paper>
                </form>
                {/* upload data display */}
            </Grid>
        </Grid>
    );
}