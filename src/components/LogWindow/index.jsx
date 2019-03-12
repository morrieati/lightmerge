import React from 'react';
import { observer } from 'mobx-react';
import store from '../../stores/RootStore';
import styles from './LogWindow.module.scss';
import { Socket } from '../../utils/network';

Socket.on('deploy', (value) => {
  const { log } = store;
  value
    .split('\n')
    .filter(line => line.length !== 0)
    .forEach((line) => {
      log.addLog(line);
    });
});

Socket.on('deployDone', (value) => {
  const { repo } = store;
  console.log(value);
  repo.resetDeploy();
});

@observer
class LogWindow extends React.Component {
  render() {
    return (
      <div className={styles.LogWindow}>
        {store.log.logs.map(log => (
          <>
            {log}
            <br />
          </>
        ))}
      </div>
    );
  }
}

export default LogWindow;
