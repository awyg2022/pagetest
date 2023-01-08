import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import UserProfileComponent from './userProfile';

export  default class ButtonAppBar extends React.Component<Props,State> {
  constructor(props:Props){
    super(props);
    this.state={isLogin:false};
  }
  
  handleloginClick=()=>{
    this.setState({isLogin:true});
  }
  handlelogoutClick=()=>{
    this.setState({isLogin:false});
  }
  render(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="text" component="div" sx={{ flexGrow: 1,marginLeft:'250px',color:'white',fontSize:'20px' }}>
            简介
          </Button>
          <Button variant="text" component="div" sx={{ flexGrow: 1,marginLeft:'12px' ,color:'white',fontSize:'20px'}}>
            任务
          </Button>
          <Button variant="text" component="div" sx={{ flexGrow: 1,marginLeft:'12px',color:'white',fontSize:'20px',marginRight:'20px' }}>
            员工
          </Button>
          {
            this.state.isLogin?
            <UserProfileComponent isLogin={this.state.isLogin} handlelogoutClick={this.handlelogoutClick}/>:
            <Button color="inherit" onClick={this.handleloginClick}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );}
}

export interface Props{
  
}
export interface State{
  isLogin:boolean
}

