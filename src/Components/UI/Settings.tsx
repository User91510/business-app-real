import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./ReviewCard";

const Settings: React.FC = (props) => {
    return(
        <div>
            <Box 
                display="flex" 
                width={1} height={1300} 
                bgcolor="primary.main"
                justifyContent="center"
                flexWrap={"wrap"}
                flexDirection={"row"}
                >

                    <RecipeReviewCard type={"dropdown setting"}></RecipeReviewCard>
                    <RecipeReviewCard type={"values"}></RecipeReviewCard>
            </Box>

            
       
        </div>
    )
};

export default Settings