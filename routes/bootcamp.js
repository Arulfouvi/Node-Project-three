const mongoose = require('mongoose');

// Assuming BootcampSchema is defined somewhere
const BootcampSchema = new mongoose.Schema({
  // Your existing schema fields here
  address: {
    type: String,
    required: true,
  },
  // ... other fields
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
  },
});

// Add the pre-save hook
BootcampSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address);

  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street:loc[0].streetName,
    city:loc[0].city,
    state:loc[0].statecpde,
    zipcode:loc[0].zipcode,
    country:loc[0].countrycode,
  };
   
  this.address = undefined;
  next();
});

// Assuming you have a model named Bootcamp using BootcampSchema
const Bootcamp = mongoose.model('Bootcamp', BootcampSchema);

module.exports = Bootcamp;
