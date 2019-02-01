import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  nr: { type: String, required: true },
  itemtype: { type: String, required: true },
  location: {type: String, required: false},  
  uniform: {type: Uniform, reqired: false}
});

export default mongoose.model('Item', ItemSchema);