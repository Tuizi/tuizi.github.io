import "./app.less"

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {startTask} from '../../actions'

import TaskNew from '../../components/TaskNew'
import TaskList from '../../components/TaskList'

class App extends Component {
	render() {
		const { dispatch, tasks } = this.props
		
		return (
			<div className="app">
				<main>
					<TaskList tasks={tasks} />
					<TaskNew onStartClick={(name, time) => dispatch(startTask(name, time))} />
				</main>
			</div>
		)
	}
}

function select(state) {
	return {
		tasks: state.tasks
	}
}

export default connect(select)(App)