/** @format */
const yargs = require('yargs');
const { addTask } = require('./addTodo');
const { removeTask } = require('./removeTask');
const { taskList } = require('./taskList');

yargs.command({
  command: 'add',
  describe: 'Add Todo Task to file',
  builder: {
    title: {
      describe: 'Title for todo task',
      alias: 't',
      demandOption: true,
      type: 'string'
    },
    description: {
      describe: 'Description for the task',
      alias: 'd',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({ title, description }) => {
    addTask(title, description);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove Todo Task to file',
  builder: {
    remove: {
      describe: 'Remove task from Todo Tasks',
      alias: 'r',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({ remove }) => {
    removeTask(remove);
  }
});

yargs.command({
  command: 'show',
  describe: 'All Todos Tasks',
  handler: () => {
    taskList();
  }
});

yargs.parse();
