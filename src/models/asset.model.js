import mongoose from 'mongoose';
// import Uniform from './uniform.model';
//import Instrument from './instrument.model';

let Schema = mongoose.Schema;

let AssetSchema = new Schema({
  nr: { type: String, required: true },
  assettype: { type: String, required: true },
  location: {type: String, required: false},  
  uniform: {
    itemtype: { type: String, required: false},
    model: { type: String, required: false },
    size: { type: String, required: false  },
    quality: { type: String, required: false }
  },
  instrument: {
    itemtype: { type: String, required: false},
    model: { type: String, required: false },
    quality: { type: String, required: false }
  }
  //instrument: [{type: Schema.Types.ObjectId, ref: 'Instrument',required: false}]
});

export default mongoose.model('Asset', AssetSchema);