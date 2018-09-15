import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startEditingExpense, startRemovingExpense } from '.././actions/expenses'
import Form from './Form'



class EditPage extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (expense) => {
    this.props.startEditingExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  render() {
    return (
        <div className="header header-content content-container ">

          <Form
              className="form"
              {...this.props}
              expense={this.props.expense}
              onSubmit={this.onSubmit}
          />

          <div className="header header-content content-container ">
            <button
                className="button_remove"

                onClick={ () => {
                  this.props.startRemovingExpense({id: this.props.computedMatch.params.id});
                  this.props.history.push('/');
                }}>
              Remove
            </button>
          </div>


        </div>
    )
  }


}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((exp) => {
      return exp.id === props.computedMatch.params.id
    })
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditingExpense: (id, expense) => {
    return dispatch(startEditingExpense(id, expense))
  },
  startRemovingExpense: (data) => {
    return dispatch(startRemovingExpense(data))
  }
});



const Connected_EditPage = connect(mapStateToProps, mapDispatchToProps)(EditPage);

export default Connected_EditPage