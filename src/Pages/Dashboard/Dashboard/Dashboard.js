import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ManageAllProoducts from "../ManageAllProducts/ManageAllProoducts";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Manageproducts from "../Manageproducts/Manageproducts";
import Makeadmin from "../Makeadmin/Makeadmin";
import Addaproduct from "../Addaproduct/Addaproduct";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logoutUser } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to={`${url}`} style={{ textDecoration: "none", color: "gray" }}>
            <ListItem button>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>Manage All orders</ListItemText>
            </ListItem>
          </Link>
          <Link
            to={`${url}/addaproduct`}
            style={{ textDecoration: "none", color: "gray" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AddBusinessIcon />
              </ListItemIcon>
              <ListItemText>Add a product</ListItemText>
            </ListItem>
          </Link>
          <Link
            to={`${url}/makeadmin`}
            style={{ textDecoration: "none", color: "gray" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText>Make admin</ListItemText>
            </ListItem>
          </Link>
          <Link
            to={`${url}/manageproducts`}
            style={{ textDecoration: "none", color: "gray" }}
          >
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText>Manage products</ListItemText>
            </ListItem>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Switch>
          <AdminRoute exact path={path}>
            <ManageAllProoducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllProoducts />
          </AdminRoute>
          <AdminRoute path={`${path}/addaproduct`}>
            <Addaproduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <Makeadmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <Manageproducts />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}
