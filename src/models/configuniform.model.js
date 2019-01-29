import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ConfigUniformSchema = new Schema({
  itemtypes: [{itemtype: {
                name: {type: String, required: true},
                models: [{model: {type: String, required: false}}],
                sizes: [{size: {type: String, required: false}}] 
              }}]
  // itemtypes: [{ itemtype: {type: String, required: true }}]
  // nr: { type: String, required: true },  
  // model: { type: String, required: false },
  // size: { type: String, required: true  },
  // quality: { type: String, required: false },
  // location: {type: String, required: false}
});

export default mongoose.model('ConfigUniform', ConfigUniformSchema);
