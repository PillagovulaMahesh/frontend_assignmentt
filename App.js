// TaskCreationForm.js
import React, { Component } from 'react';

class TaskCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskDescription: '',
      dueDate: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, taskDescription, dueDate } = this.state;
    if (!taskName || !taskDescription || !dueDate) {
      this.setState({ error: 'All fields are required.' });
    } else {
      // Handle task submission
      console.log('Task submitted:', { taskName, taskDescription, dueDate });
      // Clear form and errors
      this.setState({
        taskName: '',
        taskDescription: '',
        dueDate: '',
        error: ''
      });
    }
  }

  render() {
    const { taskName, taskDescription, dueDate, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Task Name"
          value={taskName}
          onChange={this.handleChange}
        />
        <textarea
          name="taskDescription"
          placeholder="Task Description"
          value={taskDescription}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={this.handleChange}
        />
        <button type="submit">Add Task</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
}

export default TaskCreationForm;
