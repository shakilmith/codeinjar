import * as React from "react"
import { useState } from "react";
import Button from "@mui/material/Button"
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import Stack from '@mui/material/Stack';
import {topFixedNav, navContent} from "../layout.module.css"
import { Link } from "gatsby";


const SideBar=()=>{
    return(
        <div className={topFixedNav}>
          <div className={navContent}>
            <Menu />
          </div>
        </div>
    )
}

//Drawer Menu
const Menu=()=>{

    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    return(
      <div>
      <Stack>
        <MenuIcon 
        onClick={toggleDrawer(true)}
        style={{
            cursor: "pointer"
        }}
        />
      </Stack>
      {/*Drawer component*/}
      <Drawer 
      open={open} 
      onClose={toggleDrawer(false)}>
      <Button onClick={toggleDrawer(false)}>Close</Button>

      {/*Menu Items*/}
      <MenuItems />
      </Drawer>
    </div>
    )
  
  }


//menu items
const MenuItems = () => {
    const container = {
      marginTop: "18px",
      fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    };

    
    const linkStyle = {
      textDecoration: "none",
      fontSize: "24px",
      fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    };
    const topLink={
        color: 'black',
        fontSize: "32px",
        textDecoration: "none",
    }

    return (
      <div style={container}>
        <Stack 
        direction="row" 
        spacing={1}
        sx={{
            padding: '12px'
        }}
        >
            <Link to="/" style={topLink}>Home</Link>    
        </Stack>

        <hr />
        <ul>
          <h1>Tutorials</h1>
          <li>
            <Link to="/java" style={linkStyle}>
              Java
            </Link>
          </li>
          <li>
            <Link to="/jpa" style={linkStyle}>
              JPA
            </Link>
          </li>
          <li>
            <Link to="/spring-boot" style={linkStyle}>
              Spring Boot
            </Link>
          </li>
          <li>
            <Link to="/quarkus" style={linkStyle}>
              Quarkus
            </Link>
          </li>
          <li>
            <Link to="/javafx" style={linkStyle}>
              JavaFX
            </Link>
          </li>
          <li>
            <Link to="/spring-data-jpa" style={linkStyle}>
              Spring Data JPA
            </Link>
          </li>
          <li>
            <Link to="/thymeleaf" style={linkStyle}>
              Thymeleaf Tutorial
            </Link>
          </li>
          <li>
            <Link to="/freemarker" style={linkStyle}>
              Freemarker Tutorial
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  

export default SideBar;