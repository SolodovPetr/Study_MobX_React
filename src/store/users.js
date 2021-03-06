import { types, flow } from 'mobx-state-tree';
import serverApi from '../api';

// Describe User model
const User = types.model('User', {
  id: types.identifier, // or identifierNumber for nums
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

export const UserMe = User.named('UserMe');

// Describe store
const UsersStore = types.model('UsersStore', {
    // Maybe due to load from api, so can be undefined
    users: types.maybe(types.array(User)),
    me: types.maybe(UserMe)
  })    
  // Actions for this store
  .actions((self) => {
    // object with actions
    return {
      // generator, can't use Promise with mobx-state-tree
      load: flow(function* () {
        self.users = yield serverApi.get('users');
        self.me = yield serverApi.get('me');
      }),
      // hook
      afterCreate() {
        self.load();
      },
    };
  });

export default UsersStore;
