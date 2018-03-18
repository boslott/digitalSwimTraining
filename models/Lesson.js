const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please supply a lesson title',
  },
  runtime: {
    type: String,
    trim: true,
    required: 'Please supply a runtime',
  },
  description: {
    type: String,
    trim: true,
    required: 'Please supply a lesson description',
  },
  publishedOn: {
    type: Date,
    required: 'Please supply a publish date',
  },
  episodeNum: {
    type: Number,
    required: 'Please supply an episdode number',
  },
  videoURL: {
    type: String,
    required: 'Please supply a video url',
  },
  associatedCourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  associatedCourseSlug: {
    type: String,
    trim: true,
    required: 'Please supply the title of the associated course for this lesson',
  },
});

lessonSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Lesson', lessonSchema);
