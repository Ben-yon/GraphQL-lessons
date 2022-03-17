import mongoose from "mongoose";


// Mongo connectiono
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
  useMongoClient: true
});

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  
})