import { Box } from "@mui/material";
import React from "react";
import RecipeReviewCard from "./ReviewCard";

const Settings: React.FC = (props) => {
    return(
        <div>
            <Box 
                display="flex" 
                width={1} height={1500} 
                bgcolor="primary.main"
                alignItems="center"
                justifyContent="center"
                flexWrap={"wrap"}
                flexDirection={"column"}
                >
                <Box width={1}
                display="flex" 
                justifyContent="center"
                >
                    <RecipeReviewCard></RecipeReviewCard>
                    <RecipeReviewCard></RecipeReviewCard>
                </Box>
                <Box width={1}
                display="flex" 
                justifyContent="center"
                >
                    <RecipeReviewCard></RecipeReviewCard>
                    <RecipeReviewCard></RecipeReviewCard>
                </Box>
                <Box width={1}
                display="flex" 
                justifyContent="center"
                >
                    <RecipeReviewCard></RecipeReviewCard>
                    <RecipeReviewCard></RecipeReviewCard>
                </Box>

            </Box>

            
       
        </div>
    )
};

export default Settings