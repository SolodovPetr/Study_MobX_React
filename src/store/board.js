import { types, flow } from 'mobx-state-tree';
import serverApi from '../api';

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  assignee: types.string,
});

const BoardSection = types.model('BoardSection', {
  id: types.identifier,
  title: types.string,
  tasks: types.array(Task),
});

const Board = types.model('Board', {
  id: types.identifier,
  title: types.string,
  sections: types.array(BoardSection),
});

const BoardStore = types
  .model('BoardStore', {
    boards: types.maybe(types.array(Board)),
  })
  .actions((self) => {
    return {
      load: flow(function* () {
        self.boards = yield serverApi.get('boards');
      }),
      afterCreate() {
        self.load();
      },
    };
  });

export default BoardStore;
