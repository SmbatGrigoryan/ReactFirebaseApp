import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import selectAndFilterExpenses from '.././selectors/expenses';

const List = (props) => {
  const desplayListItems = () => {
    return props.expenses.map((expence) => {
      return <ListItem {...expence}/>;
    })
  };

  return (
      <div >
        {desplayListItems()}
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectAndFilterExpenses(state.expenses, state.filters)
  }
};

const Connected_List = connect(mapStateToProps)(List);

export default Connected_List;