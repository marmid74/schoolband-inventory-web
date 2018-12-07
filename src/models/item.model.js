import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  item_type: { type: String, required: false },
  item_id: { type: Number, required: false },
  item_model: { type: String, required: false },
  item_size: { type: String, required: false  },
  item_quality: { type: String, required: false },
  item_location: {type: String, required: false}
});

export default mongoose.model('Item', ItemSchema);