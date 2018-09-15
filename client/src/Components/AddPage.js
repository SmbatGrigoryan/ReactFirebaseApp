import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '.././actions/expenses';
import Form from './Form'

class AddPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    }

  onSubmit(expence) {
      this.props.startAddExpense(expence);
      this.props.history.push('/');
      }

  render() {
    return (
        <div className="header header-content content-container">
          <Form
              onSubmit={this.onSubmit}
          />
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: async (expense) => {
      return await dispatch(startAddExpense(expense));
    }
  }
};

const AddPage_Connect = connect(undefined, mapDispatchToProps)(AddPage);

export default AddPage_Connect;



