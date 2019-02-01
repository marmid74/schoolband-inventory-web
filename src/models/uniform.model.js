import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UniformSchema = new Schema({
  model: { type: String, required: false },
  size: { type: String, required: true  },
  quality: { type: String, required: false },
  
});

export default mongoose.model('Uniform', UniformSchema);