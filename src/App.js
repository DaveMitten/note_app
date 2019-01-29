import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import MainEditor from './components/MainEditor';
import SidePanelButtons from './components/sidePanel/SidePanelButtons';
import BoldMark from './components/marks/BoldMark'
import './App.css';

const { Header, Content, Footer } = Layout;



class App extends Component {

  constructor(props) {
    super(props);    
  }




  onClickMark = ()  => {
    const { editor } = this.editor;
    editor.toggleMark('bold');
  }


   render() {
    return (
      <div className="App">
        <Layout className="layout" style={{ height: '100vh' }}>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
          </Header>
          <Row>
            <Col span={18}> 
          <Content style={{ padding: '50px 10px 0 50px', height: '100%' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <MainEditor innerRef={editor => this.editor = editor} />
            {/* ABove is the editor ref. The arrow function is replacing he need to delcare the creaTeRef in the state. This arrow function represents what the ref is doing, how it works, how it creates the ref. */}
            
            
            </div>
          </Content>
          </Col>
          <Col span={6}> 



          <Content style={{ padding: '50px 50px 0 10px', height: '100%' }}>
           <SidePanelButtons onClickMark={this.onClickMark} /> 



          </Content>
          </Col> 
          </Row>
          <Footer style={{ textAlign: 'center' }}>DJM ©2019</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
