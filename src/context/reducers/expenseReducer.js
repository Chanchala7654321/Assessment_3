export const expenseInitialState = {
    expenses: []
};

export const expenseReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_NEW_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };

        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    item => item.id !== action.payload
                )
            };

        default:
            return state;
    }
};


