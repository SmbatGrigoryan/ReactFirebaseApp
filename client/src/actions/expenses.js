import { firebase, db } from '.././firebase/firebase'

const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
};

const startAddExpense =  (expenseData = {}) => {
  return  async (dispatch, getState) => {
    const uid =  getState().auth.uid;
    const {description = '', notes = '', amount = 0, createdAt = 0} = expenseData;
    const expense = { description, notes, amount, createdAt };
    await db.ref(`users/${uid}/expenses`).push(expense)
        .then((ref) => {
          dispatch(addExpense({
            id: ref.key,
            ...expense
          }))
        })
        .catch((error) => {
          console.log(error)
        })
  }
};

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const startRemovingExpense = ({id}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
          dispatch(removeExpense({id}));
        })
  }
};


const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const startEditingExpense = (id, updates) => {
  return async (dispatch, getState) => {
    const uid = await getState().auth.uid;
    await dispatch(editExpense(id, updates));

     return await db.ref(`users/${uid}/expenses/${id}`).update(updates)

  }
};

const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }

};

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};

export { removeExpense, startEditingExpense, startAddExpense, startSetExpenses, startRemovingExpense }