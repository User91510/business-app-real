import { Button, Stack } from "@mui/material";
import React from "react";
import ColorTextFields from "./ColorTextFields";

const CreateOrder: React.FC = (props) => {
    return(
        <div className="">
            <Stack direction="column" spacing={2} justifyContent="center"
  alignItems="center">
                <h2>Create Order</h2>
            <form action="">
            <ColorTextFields />
            <Stack direction="row" spacing={2} m={2} justifyContent="center">
            <Button size="large" variant="contained" type="submit" >Order</Button>
            </Stack>
            </form>
            </Stack>
        </div>
    )
};

export default CreateOrder