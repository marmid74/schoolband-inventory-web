import ConfigUniform from '../models/configuniform.model';
// POST
export async function create (req,res) {
  console.log("ConfigUniform - endpointAPI: create");
  let countItems = 0;
  let prefix = '';

  console.log('body:', req.body);

  try {
      let newUniformItem = new ConfigUniform(req.body);
      
      console.log('new obj to be saved', newUniformItem);

      let result = await newUniformItem.save();
      res.send({
          message: 'Item saved successfully:',
          body: result
      });
  } catch (err) {
      console.log('Error in Create new item: ', err);
      return res.status(500).send(err);
  }
}

export function find(req,res) {   
  console.log("ConfigUniform: find");
  if (req.body){
    ConfigUniform.find(req.body, (err, configuniforms) => {
          if(err) return res.status(500).send(err);         
          return res.status(200).send(configuniforms);
      });
  } else {
    ConfigUniform.find((err, configuniforms) => {
          if(err) return res.status(500).send(err);
          
          return res.status(200).send(configuniforms);
      });
  }
}
