import { observer } from 'mobx-react-lite';
 import useStore from './hooks/useStore';

function App() {
  const { users, boards } = useStore();
  console.log('Users', users.toJSON());
  console.log('Boards', boards.toJSON());

  return <div>Hello!</div>;
}

export default observer(App);
