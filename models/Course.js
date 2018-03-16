const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please supply a course title',
  },
  description: {
    type: String,
    trim: true,
    required: 'Please supply a description',
  },
  category: {
    type: String,
    trim: true,
    required: 'Please supply a category',
  },
  thumbnail: {
    type: String,
    required: 'Please supply an img URL',
  },
  slug: {
    type: String,
    trim: true,
    required: 'Please supply a course slug',
  },
  totalLessons: {
    type: Number,
    required: 'Please supply the total number of lessons',
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
  }],
  publishedOn: {
    type: Date,
    required: 'Please supply a published-on date',
  },
});

courseSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Course', courseSchema);
