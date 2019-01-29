import React, { Component } from 'react';
import { Button } from 'antd';
// import BoldMark from './marks/BoldMark.js'



class SidePanelButtons extends Component {
  // constructor(props) {
  //   super(props)

  //   // Create the ref
  //   // this.boldButton = React.createRef()
  // }

/* ref={this.boldButton} */

  render() {

   
  
	return (
	  <div>
	  <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Button style={{ margin: '5px' }} type="primary" 
              onClick={() => this.props.onClickMark()}
              
              >
                B
              </Button>
            </div>
	  </div>
	)
  }
}


export default SidePanelButtons;


           {/* <Button style={{ margin: '5px' }} type="primary">
                I
              </Button>
              <Button style={{ margin: '5px' }} type="primary">
                U
              </Button>
              <Button style={{ margin: '5px' }} type="primary">
                S
              </Button>
              <div>
              <Button type="primary">Bullet List</Button>
            </div> */}