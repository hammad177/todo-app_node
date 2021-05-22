/** @format */

const fs = require('fs');

const taskList = () => {
  const data = loadData();

  if (data.length === 0) {
    console.log('No.. Empty Task List');
  } else {
    data.map((task) => {
      console.log(`Task Title Name: '${task.title}'`);
      console.log(`Task to do: '${task.description}'\n`);
    });
  }
};

const loadData = () => {
  try {
    const rawData = fs.readFileSync('data.txt');
    const parsedData = JSON.parse(rawData);
    return parsedData;
  } catch (e) {
    return [];
  }
};

module.exports = {
  taskList
};
