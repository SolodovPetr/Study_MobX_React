import { types } from 'mobx-state-tree';

import UsersStore from './users';
import BoardStore from './board';

console.log(UsersStore)

const RootStore = types.model('RootStore', {
  users: types.optional(UsersStore, {}),
  boards: types.optional(BoardStore, {}),
});

export default RootStore;
