/* eslint-disable @typescript-eslint/default-param-last */
import { configureStore } from '@reduxjs/toolkit';

type State = {
  cash: number;
};

export type IncrementAction = {
  type: 'increment';
};

export type DecrementAction = {
  type: 'decrement';
};

type Action = IncrementAction | DecrementAction;

const initialState: State = {
  cash: 0,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        cash: state.cash + 1,
      };

    case 'decrement':
      return {
        ...state,
        cash: state.cash - 1,
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
