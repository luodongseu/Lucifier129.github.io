define(function (require, exports, module) {
var React = require('react')
var Todos = require('./todos')
var Main = React.createClass({
	handleChange: function(e) {
		var checked = e.target.checked
		this.props.toggleAll(checked)
	},

	render: function() {
		return (
			<div>
				<input id="toggle-all" type="checkbox" onChange={this.handleChange} checked={this.props.isAllCompleted} />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<Todos todos={this.props.todos}
					updateTodo={this.props.updateTodo}
					removeTodo={this.props.removeTodo} />
			</div>
			)
	}
})

module.exports = Main
});