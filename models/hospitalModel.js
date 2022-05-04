const mongoose = require('mongoose')

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

const Hospital = mongoose.model('Hospital', hospitalSchema)

module.exports = Hospital
