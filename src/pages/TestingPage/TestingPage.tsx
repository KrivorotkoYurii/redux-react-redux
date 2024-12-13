import { ReduxTry } from '../ReduxTry';
import styles from './TestingPage.module.scss';

export const TestingPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <ReduxTry counterId="first" />
        <ReduxTry counterId="second" />
      </div>
    </div>
  );
};
