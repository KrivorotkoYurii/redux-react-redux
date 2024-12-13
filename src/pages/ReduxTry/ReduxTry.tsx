import React, { useEffect, useReducer } from 'react';
import styles from './ReduxTry.module.scss';
import { DecrementAction, IncrementAction, store } from '../../store/store';

interface Props {
  counterId: string;
}

export const ReduxTry: React.FC<Props> = ({ counterId }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const addCash = () => {
    store.dispatch({
      type: 'increment',
      payload: {
        counterId,
      },
    } satisfies IncrementAction);
  };

  const getCash = () => {
    store.dispatch({
      type: 'decrement',
      payload: {
        counterId,
      },
    } satisfies DecrementAction);
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });

    return unsubscribe;
  }, []);

  return (
    <div className={styles.content}>
      <p className={styles.content__info}>What do you want to do?</p>
      <div className={styles.content__buttons}>
        <button className={styles.content__button} onClick={addCash}>
          Add money
        </button>
        <button className={styles.content__button} onClick={getCash}>
          Take money
        </button>
      </div>
      <p className={styles.content__infos}>
        {store.getState().counters[counterId]?.cash}
      </p>
    </div>
  );
};
