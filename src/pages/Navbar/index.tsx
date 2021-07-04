import React from 'react';
import { ProSidebar, 
         Menu, 
         MenuItem, 
         SubMenu, 
         SidebarHeader, 
         SidebarFooter, 
         SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


import {Container, Content} from './styles';



const Navbar: React.FC = () => {
    return (
      
      <Container>
          
        <ProSidebar>
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <ProSidebar>
  <SidebarHeader>
    
  </SidebarHeader>
  <SidebarContent>
    {/**
     *  You can add the content of the sidebar ex: menu, profile details, ...
     */}
  </SidebarContent>
  <SidebarFooter>
     
  </SidebarFooter>
</ProSidebar>
    </Container>  
    );
  }  
    
  export default Navbar;