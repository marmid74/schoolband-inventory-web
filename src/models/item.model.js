import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  type: { type: String, required: true },
  id: { type: Number, required: true },
  model: { type: String, required: false },
  size: { type: String, required: false  },
  quality: { type: String, required: false },
  location: {type: String, required: false}
});

export default mongoose.model('Item', ItemSchema);