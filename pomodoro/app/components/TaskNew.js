import React, {Component, PropTypes} from 'react';

export default class TaskNew extends Component {
	render() {
		return (
			<form className="form-inline" onSubmit={(e)=>this.handleSubmit(e)}>
				<div>
					<label htmlFor="TaskName">Name</label>
					<input 
						type="text"
						id="TaskName" 
						required 
						ref="name"
						placeholder="Create a documentation, refactorize..."/>
				</div>
				<div>
					<label htmlFor="TaskTime">Time</label>
					<input 
						type="number"
						id="TaskTime" 
						ref="time"
						defaultValue="25"/>
				</div>
				<button type="submit">Start</button>
			</form>
		)
	}
	
	handleSubmit(e) {
		e.preventDefault();
		const taskName = this.refs.name.value.trim();
		const taskTime = Number(this.refs.time.value);
		this.props.onStartClick(taskName, taskTime);
	}
}

TaskNew.propTypes = {
  onStartClick: PropTypes.func.isRequired
}