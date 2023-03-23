/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// @mui material components
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import { useLocation, NavLink } from "react-router-dom";

function SidenavCollapse({
  color,
  icon,
  name,
  route,
  children,
  childrenState,
  childrenData,
  active,
  noCollapse,
  open,
  ...rest
}) {
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const [openList, setOpenList] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  console.log("collapse active : ", active);

  useEffect(() => {}, [collapseName]);

  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <>
      {childrenState ? (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          <ListItem component="li" onClick={handleClick}>
            <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
              <ListItemIcon
                sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
              >
                {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
              />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </SoftBox>
          </ListItem>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <list component="div" disablePadding sx={{ pl: 4 }}>
              {childrenData.map((get, keys) => {
                return (
                  <>
                    <SoftBox
                      className="sidenav-padding"
                      {...rest}
                      sx={(theme) => collapseItem(theme, { active, transparentSidenav })}
                    >
                      <ListItemIcon
                        sx={(theme) =>
                          collapseIconBox(theme, { active, transparentSidenav, color })
                        }
                      >
                        {typeof icon === "string" ? (
                          <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
                        ) : (
                          icon
                        )}
                      </ListItemIcon>

                      <NavLink className="nav-link" to={get?.route}>
                        <ListItemText
                          key={get?.key}
                          primary={get?.name}
                          sx={(theme) =>
                            collapseText(theme, { miniSidenav, transparentSidenav, active })
                          }
                        />
                      </NavLink>
                    </SoftBox>
                  </>
                );
              })}
            </list>
          </Collapse>
        </List>
      ) : (
        <ListItem component="li" onClick={handleClick}>
          <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
            <ListItemIcon
              sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
            >
              {typeof icon === "string" ? (
                <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
              ) : (
                icon
              )}
            </ListItemIcon>

            <NavLink to={route} className="nav-link">
              <ListItemText
                primary={name}
                sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
              />
            </NavLink>
          </SoftBox>
        </ListItem>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
