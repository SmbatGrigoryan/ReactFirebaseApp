import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '.././actions/filters';


class ListFilters extends Component {
  constructor(props) {
    super(props);

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);

    this.state = {
      calendarFocused: null
    }
  }

  onDatesChange({startDate, endDate}) {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(startDate));
  }

  onFocusChange(calendarFocused) {
    this.setState(() => {
      return {
        calendarFocused: calendarFocused
      }
    })
  }

  render() {
    return (
        <div className="content-container input">
          <div className="input input__item">
            <input
                className="text-input"
                placeholder="Filter By Description"
                value={this.props.filters.text}
                onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value));
                  console.log(e.target.value)
                }}
            />
          </div>

          <div className="input__item">
            <select
                className="select"
                onChange={(e) => {
                  e.target.value === 'date' ? this.props.dispatch(sortByAmount()) : this.props.dispatch(sortByDate())
                }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input__item">
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => {
                  return false
                }}
            />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

const Connected_ListFilters = connect(mapStateToProps)(ListFilters);

export default Connected_ListFilters;