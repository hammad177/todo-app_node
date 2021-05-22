/** @format */

const fs = require('fs');

const addTask = (title, description) => {
  const data = loadData();

  const isDuplicate = ckhDuplicate(title, data);
  if (!isDuplicate) {
    console.log('Task already in database');
  } else {
    const newTask = {
      title,
      description
    };
    const tmpData = [...data, newTask];
    saveToDatabase(tmpData, title);
  }
};

const ckhDuplicate = (title, data) => {
  const dataFound = data.filter((d) => d.title === title);
  return dataFound.length === 0;
};

const saveToDatabase = (dataToAdd, title) => {
  const jsonData = JSON.stringify(dataToAdd);
  fs.writeFileSync('data.txt', jsonData);
  console.log(`Todo task with title "${title}" is added into the database`);
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
  addTask
};
