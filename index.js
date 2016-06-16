import React, { PropTypes } from 'react';
import './styles.less';

/**
 * 组件属性申明
 */
const propTypes = {
  	Array:  PropTypes.array,
	Bool:   PropTypes.bool,
	Func:   PropTypes.func,
	Number: PropTypes.number,
	Object: PropTypes.object,
	String: PropTypes.string
}

/**
 * 完整组件
 */
export default class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
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