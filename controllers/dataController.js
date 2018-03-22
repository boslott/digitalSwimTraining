const mongoose = require('mongoose');

const Course = mongoose.model('Course');

exports.getCourses = (req, res) => {
  Course.find({})
    // .populate('lessons')
    .exec((err, docs) => {
      if (!err) {
        res.json(docs);
      } else { throw err; }
    });
};

exports.getCourse = (req, res) => {
  Course.findOne({ slug: req.params.courseSlug })
    .populate('lessons')
    .exec((err, doc) => {
      if (!err) {
        res.json(doc);
      } else { throw err; }
    });
};
