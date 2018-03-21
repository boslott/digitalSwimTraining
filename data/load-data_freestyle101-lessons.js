require('dotenv').config({ path: `${__dirname}/../variables.env` });
const fs = require('fs');

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
const Lesson = require('../models/Lesson');
// const User = require('../models/User');


const lessons = JSON.parse(fs.readFileSync(`${__dirname}/lessons_freestyle101.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(__dirname + '/reviews.json', 'utf-8'));

async function deleteData() {
  console.log('😢😢 Goodbye Data...');
  await Lesson.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await Lesson.insertMany(lessons);
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch (e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}