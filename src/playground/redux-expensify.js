import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';









store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 200, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Two', amount: 400, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());