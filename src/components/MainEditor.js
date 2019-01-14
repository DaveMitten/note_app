import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';


// Create our initial value...
const initialValue = Value.fromJSON({
	document: {
	  nodes: [
		{
		  object: 'block',
		  type: 'paragraph',
		  nodes: [
			{
			  object: 'text',
			  leaves: [
				{
				  text: 'A line of text in a paragraph.',
				},
			  ],
			},
		  ],
		},
	  ],
	},
	})

	// function MarkHotkey(options) {
	// 	const { type, key } = options}
	
	// Initialize a plugin for each mark...
// const plugins = [
//   MarkHotkey({ key: 'b', type: 'bold' })
// ]




 class MainEditor extends Component {

	 // function to toggle the mark associated with the button
	 onMarkClick = (e, type) => {
    // prevents any default browser behaviour like page refresh etc
  e.preventDefault();
  // this is the same as writing const value = this.state.value
// its simply a lot neater
  const { value } = this.state;
  const change = value.change().toggleMark(type);
  // calling the onchange method we wrote above, 
  // so when the onChange happens we call back to the above constant.
  this.onChange(change);
  }

	state = {
		value: initialValue,
	  }

	  	// On change, update the app's React state with the new editor value.
	onChange = ({ value }) => {
		this.setState({ value })
		}
		

		onClickMark(event, type) {
			const { editor } = this.props;
			event.preventDefault();
			editor.toggleMark(type);
		}


  render() {
	   // Set the initial value when the app is first constructed.
	return (
	  <div>
		<Editor 
		value={this.state.value} 
		onChange={this.onChange}
		renderMark={this.renderMark}
		 />
	  </div>
	)
	}
	

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      default:
        return next()
    }
	}
}


export default MainEditor;



