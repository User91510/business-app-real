import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

type Anchor = 'left'

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Create order'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                <li></li>
              </ListItemIcon>
              <Link to="/CreateOrder" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Info'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InfoIcon color="primary"/> : <InfoIcon color="primary"/>}
              </ListItemIcon>
              <Link to="/Info" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text} ></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Reports'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                <li></li>
              </ListItemIcon>
              <Link to="/Reports" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Menu'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                <li></li>
              </ListItemIcon>
              <Link to="/Menu" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                <li></li>
              </ListItemIcon>
              <Link to="/Settings" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {['Catalogs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color="primary"/> : <MailIcon color="primary"/>}
                <li></li>
              </ListItemIcon>
              <Link to="/Catalogs" style={{ textDecoration: 'none',color:'inherit' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon 
            color={'action'}
            />
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
