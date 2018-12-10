import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, required: false },
  model: { type: String, required: false },
  size: { type: String, required: false  },
  quality: { type: String, required: false },
  location: {type: String, required: false}
});

export default mongoose.model('Item', ItemSchema);