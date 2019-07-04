import React from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap'
import { Row,Col,Menu, Button,Icon } from 'antd';
import 'antd/dist/antd.css';
import Caro from './Caro'

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
        collapsed: false,
      };
  }
 
  handleClick = (e) => {
    console.log('click ', e);
  };
  
  toggleCollapsed = () => {
      console.log("HEllo")
    this.setState({
        collapsed: !this.state.collapsed,
      });
      return (
          
    <Menu
    onClick={this.handleClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['1']}
    mode="inline"
  >    
  <Menu.Item key="1">Home</Menu.Item>
  <Menu.Item key="2">Search Trains</Menu.Item>
  <Menu.Item key="3">PNR</Menu.Item>
  <Menu.Item key="4">Live Status</Menu.Item>
  </Menu>
    );
  };

  render()
  {
    return(
              <div>
                <Row>
                  <Row span={10}>
                  <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
                      {' React Bootstrap'}
                    </Navbar.Brand>
                  </Navbar>
                  </Row>
                  <Row span={14}>
                    
                    <Col>
                      <Caro></Caro>
                    </Col>
                  </Row>
                </Row>
              </div>
    );
  }
}




export default App;
