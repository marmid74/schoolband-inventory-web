import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  nr: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: false },
  size: { type: String, required: true  },
  quality: { type: String, required: false },
  location: {type: String, required: false}
});

export default mongoose.model('Item', ItemSchema);