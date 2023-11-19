import { Button, Stack } from "@mui/material";
import React from "react";
import { useGetReportsDataQuery } from "../../api/ReportsApi";

const Reports: React.FC = (props) => {
    // const {data /*, isLoading, isSuccess, isError, error*/} = useGetReportsDataQuery();
    // console.log(data)

    const orderSubmit = () => {
    }

    return(
        <div className="">
            <Stack direction="column" spacing={2} justifyContent="center"
            alignItems="center">
                <h2>Reports</h2>
            <form action="">
            <Stack direction="row" spacing={2} m={2} justifyContent="center">
            <Button size="large" variant="contained" type="submit" onSubmit={orderSubmit}>Get Report Data</Button>
            </Stack>
            </form>
            </Stack>
        </div>
    )
};

export default Reports