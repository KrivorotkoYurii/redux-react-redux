/* eslint-disable @typescript-eslint/default-param-last */
import { configureStore } from '@reduxjs/toolkit';

type CounterState = {
  cash: number;
};

export type CounterId = string;

type State = {
  counters: Record<CounterId, CounterState | undefined>;
};

export type IncrementAction = {
  type: 'increment';
  payload: {
    counterId: CounterId;
  };
};

export type DecrementAction = {
  type: 'decrement';
  payload: {
    counterId: CounterId;
  };
};

type Action = IncrementAction | DecrementAction;

const initialCounterState: CounterState = { cash: 0 };

const initialState: State = {
  counters: {},
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'increment': {
      const { counterId } = action.payload;
      const currentCounter = state.counters[counterId] ?? initialCounterState;

      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            cash: currentCounter.cash + 1,
          },
        },
      };
    }

    case 'decrement': {
      const { counterId } = action.payload;
      const currentCounter = state.counters[counterId] ?? initialCounterState;

      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            cash: currentCounter.cash - 1,
          },
        },
      };
    }

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});
