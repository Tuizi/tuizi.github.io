import React, {Component, PropTypes} from 'react';

export default class TaskList extends Component {
	render() {
		return (
			<ul>
			 {this.props.tasks.map((task, index) =>
			 	<li key={index}>
				 	{task.name} {task.time}
				</li> 
			 )}
			</ul>
		)
	}
}

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired).isRequired
}