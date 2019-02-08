import Asset from '../models/asset.model';


/* export function dummy(req,res){
    return res.status(200).send({message: 'Yep, api alive'});
}
*/


// Generic endpoints for asses objects

export function findOne(req,res) {   
    console.log("EndpointAPI findOne: ", req.body);
    let filterObj =  req.body;
    Asset.find(filterObj, (err, asset) => {
        if(err) return res.status(500).send(err);         
        return res.status(200).send(asset);
    }); 
}

// PUT
export function findByIdAndUpdate(req, res){
    console.log("EndpointAPI: findByIdAndUpdate: ", req.body);
    Asset.findByIdAndUpdate(req.params.itemId, req.body, {new:true}, (err, asset) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send({'message': 'Successfully updated asset',
                                     'inputdata': req.body,
                                     'body': asset
                                    });
    })
}

// get - no body filter by spilling url for uniform/instrument/note
export function getAll(req,res) {   
    console.log("EndpointAPI getAll: ", req.body);
    let filterObj = {
        "assettype": req.url.split('/')[3]
    }
    
    Asset.find(filterObj, (err, asset) => {
        if(err) return res.status(500).send(err);         
        return res.status(200).send(asset);
    }); 
}


export function findById(req,res){
    console.log("EndpointAPI: findById");
    Asset.findById(req.params.itemId, (err, item) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(item);
    });
}



export function findByIdAndDelete(req, res){
    console.log("EndpointAPI: findByIdAndDelete");
    Asset.findByIdAndDelete(req.params.itemId, (err, items) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Item successfully deleted",
            id: items._id
        };
        return res.status(200).send(response);
    });
}

// POST  CREATE UNIFORM
export async function createUniform (req,res) {
    console.log("EndpointAPI: createUniform ", req.body.itemtype );
    let countItems = 0;

    console.log('body:', req.body);
    
    let filterObj = {           
        "assettype":  req.body.assettype        
    };
    console.log('Searchobj: ', filterObj);
    
    try {
        let newAssetObj = new Asset(req.body);
        let dbLookUp =  await Asset.find(filterObj)
        console.log('dbLookUp result:', dbLookUp);

        countItems = (Object.keys(dbLookUp).length).toString();
        console.log('Value of count: ', countItems);
        let nextId = parseInt(countItems) + 1;
        newAssetObj.nr = nextId.toString();

        let result = await newAssetObj.save();
        res.send({
            message: 'Asset object saved successfully:',
            body: result
        });
        console.log('new obj to be saved', newAssetObj);
    } catch (err) {
        console.log('Error in Create new asset type uniform: ', err);
        return res.status(500).send(err);
    }
}


// POST  CREATE INSTRUMENT
export async function createInstrument (req,res) {
    console.log("EndpointAPI: createInstrument ", req.body.itemtype );
}