/** @format */

const fs = require('fs');

const removeTask = (title) => {
  const data = loadData();

  const ckhDataPresentArray = ckhArrayData(data, title);
  if (!ckhDataPresentArray) {
    console.log('Data not found in the database');
  } else {
    saveToDatabase(ckhDataPresentArray, title);
  }
};

const saveToDatabase = (data, title) => {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync('data.txt', jsonData);
  console.log(`The Title ${title} is remove into the Database`);
};

const ckhArrayData = (data, title) => {
  const dataFound = data.filter((d) => d.title === title);

  if (dataFound.length !== 0) {
    const findIndex = data.findIndex((x) => x.title === title);
    data.splice(findIndex, 1);
    return data;
  }
  return false;
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
  removeTask
};
