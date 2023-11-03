import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '300px'
  }));

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  
const Info: React.FC = (props) => {
    return(
        <Container>
            <Box>
                <Grid 
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}>
                    {Array.from(Array(3)).map((_, index) => (
                    <Grid item xs={3} sm={4} md={5} key={index} m={3}>
                        <Item>
                        {text}
                        </Item>
                    </Grid>
                    ))}
                </Grid>
            </Box>     
        </Container>    
            
    )
};

export default Info