const mongoose = require('mongoose')

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    hospitalId: {
      type: String,
      required: true,
    },

    specialty: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor
