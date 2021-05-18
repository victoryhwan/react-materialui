import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Button from '@material-ui/core/Button';
// import { NavigateBeforeRounded } from '@material-ui/icons';
// import { Link, Route, Switch } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  listItemText:{
    fontSize:'0.85rem',
  }
}));

function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    let sideMenuList = [{ name:'Home',
                          subMenuList: [{ name:'Home', 
                                          link:'/'
                                        }, 
                                        { name:'Detail', 
                                          link:'/detail'
                                        }, 
                                        { name:'ButtonSample', 
                                          link:'/button'}, 
                                        { name:'MarkDown', 
                                          link:'/markdown'}]
                        }, 
                        { name:'Detail',
                          subMenuList: []
                        }, 
                        { name:'ButtonSample',
                          subMenuList: [{ name:'Home', 
                                          link:'/'
                                        }, 
                                        { name:'Detail', 
                                          link:'/detail'
                                        }, 
                                        { name:'ButtonSample', 
                                          link:'/button'}]}]

    const [sideMenuOpenList, setSideMenuOpenList] = React.useState([false, false, false]);                          

    //사이드메뉴 오픈
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    //사이드메뉴 클로즈
    const handleDrawerClose = () => {
      setOpen(false);
    };

    //하위메뉴 펼치기/접기 제어
    const sideMenuListClick = (idx) => {
      let tempList = {...sideMenuOpenList};
      tempList[idx] = !tempList[idx]
      setSideMenuOpenList(tempList);
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap onClick={()=>{window.location.assign('/');}}>
              Victoryhwan Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {sideMenuList.map((item, index) => (
              <div key={index}>
                <ListItem button key={index} onClick={()=>{sideMenuListClick(index)}} >
                  <ListItemText primary={item.name} />
                  {sideMenuOpenList[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                {/* 서브메뉴 */}
                <Collapse in={sideMenuOpenList[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  {item.subMenuList.map((subItem, idx) => (
                    <ListItem button key={idx} className={classes.nested} onClick={()=>{ window.location.assign(subItem.link); }}>
                      <ListItemText classes={{primary:classes.listItemText}} primary={subItem.name}/>
                    </ListItem>
                  ))}
                    </List>
                </Collapse>
              </div>
            ))}
          </List>
          {/* <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
      </div>
    );
}

export default NavBar