import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface RecipeReviewCardProps {
 type: string,
 /*
types: 1. dropdown setting 2. values 
 */
} 

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props: RecipeReviewCardProps) {
  const { type } = props;
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    type === "values" ?
    <Card sx={{ maxWidth: 795,minWidth: 795, height: 600, my: 2, mx: 2}}>
     <CardHeader></CardHeader>
      <CardContent>
        <Box display={'flex'} justifyContent={'space-evenly'}>
          <Typography variant="h5" color="text.primary">
          Profile</Typography>
          <Button variant="outlined">Display</Button>
        </Box>
        <Box display={'flex'} justifyContent={'flex-start'}>
        <CardActions disableSpacing>
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        </Box>
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="text.secondary">Username</Typography>
          <Typography paragraph color="text.secondary">
          Password
          </Typography>
          <Typography paragraph color="text.secondary">
          Shared data
          </Typography>
          <Typography paragraph color="text.secondary">
          Profile created
          </Typography>
          <Typography color="text.secondary">
          More
          </Typography>
        </CardContent>
      </Collapse>
     
     
     
      {/* <CardHeader></CardHeader>
      <CardContent>
      <Typography variant="h5" color="text.primary">
        Profile:
        </Typography>  
          <Typography paragraph color="text.secondary">Username:</Typography>
          <Typography paragraph color="text.secondary">Password</Typography>
          <Typography paragraph color="text.secondary">Shared data</Typography>
          <Typography paragraph color="text.secondary">Profile created</Typography>
          <Typography paragraph color="text.secondary">More</Typography>
        </CardContent> */}
     
    </Card>
    : 
    <Card sx={{ maxWidth: 795,minWidth: 795, height: 600,  my: 2, mx: 2}}>
      <CardHeader></CardHeader>
      <CardContent>
        <Box display={'flex'} justifyContent={'space-evenly'}>
          <Typography variant="h5" color="text.primary">
          Personal privacy confirmation</Typography>
          <Button variant="outlined">Confirm</Button>
        </Box>
        <Box display={'flex'} justifyContent={'flex-start'}>
        <CardActions disableSpacing>
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        </Box>
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="text.secondary">Privacy confirmation:</Typography>
          <Typography paragraph color="text.secondary">
            Here you confirm basic privacy confirmations.
          </Typography>
          <Typography paragraph color="text.secondary">
            Text
          </Typography>
          <Typography paragraph color="text.secondary">
            More Text
          </Typography>
          <Typography color="text.secondary">
            End text
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}