import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./ReviewCard";

const Catalogs: React.FC = (props) => {
    return(
        <div>
      <Box 
        display="flex" 
        width={1000} height={800} 
        bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center">
            <RecipeReviewCard type={""}></RecipeReviewCard>
            <RecipeReviewCard type={""}></RecipeReviewCard>
            <RecipeReviewCard type={""}></RecipeReviewCard>
            </Box>

            
       
        </div>
    )
};

export default Catalogs