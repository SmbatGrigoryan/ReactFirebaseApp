import React, {Component} from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: props.expenses ? props.expenses.description : '',
      notes: props.expenses ? props.expenses.notes : '',
      amount: props.expenses ? props.expenses.amount : '',
      createdAt: props.expenses ? moment(props.expenses.createdAt) : moment(),
      CalendarDayfocused: false,
      error: ''
    }
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => {
      return {description};
    });
  }

  onNoteChange(e) {
    const notes = e.target.value;
    this.setState(() => {
      return {notes};
    })
  }

  onAmountChange(e) {
    const amount = e.target.value;
    this.setState(() => {
      return {amount};
    })
  }

  onDateChange(createdAtMoment) {
    if (createdAtMoment) {
      this.setState(() => {
        return {
          createdAt: createdAtMoment
        };
      })
    }
  }

  onFocusChange({focused}) {
    this.setState(() => {
      return {
        CalendarDayfocused: focused
      }
    })
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit({
      description: this.state.description,
      notes: this.state.notes,
      amount: this.state.amount,
      createdAt: this.state.createdAt.valueOf()
    });
  }

  render() {
    return (
        <form
            className="form"
            onSubmit={this.onSubmit}>

          <input
              className="text-input"

              type="text"
              placeholder="description"
              autoFocus={true}
              value={this.state.description}
              onChange={this.onDescriptionChange}
          />
          <input
              className="text-input"

              type="number"
              placeholder="amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
          />

          <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.CalendarDayfocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => {
                return false
              }}
          />

          <textarea
              className="text-input"

              placeholder="notes"
              value={this.state.note}
              onChange={this.onNoteChange}
          >

            </textarea>
          <button className="button">Add</button>
        </form>

    )
  }
}

export default Form;