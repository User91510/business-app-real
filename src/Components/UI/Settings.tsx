import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./ReviewCard";

const Settings: React.FC = (props) => {
    return(
        <div>
      <Box 
        display="flex" 
        width={1000} height={800} 
        bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center">
            <RecipeReviewCard></RecipeReviewCard>
            <RecipeReviewCard></RecipeReviewCard>
            <RecipeReviewCard></RecipeReviewCard>
        </Box>

            
       
        </div>
    )
};

export default Settings