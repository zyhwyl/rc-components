import React, { PropTypes } from 'react';

/**
 * 组件属性申明
 */
const propTypes = {
  	Array:  React.PropTypes.array,
	Bool:   React.PropTypes.bool,
	Func:   React.PropTypes.func,
	Number: React.PropTypes.number,
	Object: React.PropTypes.object,
	String: React.PropTypes.string
}

/**
 * 完整组件
 */
export default class Tab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
	}

	getDefaultProps () {
	    return {
	      value: 'default value'
	    }
	}

	getInitialState () {
		return {
			value: ''
		}
	}
	
	componentWillMount (){}
	componentDidMount (){}
	componentWillReceiveProps (){}
	shouldComponentUpdate (){}
	componentWillUpdate (){}
	componentDidUpdate (){}
	componentWillUnmount (){}

	render() {
		return  (
		    <MyComponent className="long body" foo="bar">
		      <MyChild 
		      	{...props}
		      />
		    </MyComponent>
		)
	}
}

/**
 * 无状态组件 只负责UI渲染
 * @param {[type]} props [组件属性]
 */
function Stateless(props) {
  return <div>Hello {props.name}</div>;
}