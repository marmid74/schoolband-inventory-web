import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ConfigUniformSchema = new Schema({
  itemtypes: [{itemtype: 
                {
                 name: {type: String, required: true},
                 models: [{model:
                    {
                       "name": {type: String, required: false},
                       "sizes": [{size: {type: String, required: false}}]
                    }}]}}]
  });

export default mongoose.model('ConfigUniform', ConfigUniformSchema);
