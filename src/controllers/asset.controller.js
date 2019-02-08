import Asset from '../models/asset.model';


// POST
export async function createUniform (req,res) {
    console.log("EndpointAPI: createUniform ", req.body.itemtype );
    let countItems = 0;

    console.log('body:', req.body);
    
    let filterObj = {           
        // "uniform.itemtype": req.body.uniform.itemtype,
        // "uniform.size": req.body.uniform.size
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

export async function createInstrument (req,res) {
    console.log("EndpointAPI: createInstrument ", req.body.itemtype );
    console.log('body:', req.body);
    
    let filterObj = {           
        "assettype":  req.body.assettype        
    };
    console.log('Searchobj: ', filterObj);
    
    try {
        let newAssetObj = new Asset(req.body);

        let result = await newAssetObj.save();
        res.send({
            message: 'Instrument object saved successfully:',
            body: result
        });
        console.log('new obj to be saved', newAssetObj);
    } catch (err) {
        console.log('Error in Create new asset type instrument: ', err);
        return res.status(500).send(err);
    }
}

export function getAll(req, res) {
    console.log("EndpointAPI: getAll: ", req.body);
    let filterObj = {
        "assettype": req.url.split('/')[3]
    }
    console.log(filterObj)

    Asset.find(filterObj, (err, asset) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(asset);
    });
}
// PUT
export function findByIdAndUpdate(req, res){
    console.log("EndpointAPI: findByIdAndUpdate: ", req.body);
    Asset.findByIdAndUpdate(req.params.itemId, req.body, {new:true}, (err, items) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send({'message': 'Successfully updated asset',
                                     'inputdata': req.body,
                                     'body': items
                                    });
    })
}


export function findById(req,res){
    console.log("EndpointAPI: findById");
    Asset.findById(req.params.itemId, (err, item) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(item);
    });
}

export function find(req,res) {   
    console.log("EndpointAPI : find");
    if (req.body){
        Asset.find(req.body, (err, items) => {
            if(err) return res.status(500).send(err);         
            return res.status(200).send(items);
        });
    } else {
        Asset.find((err, items) => {
            if(err) return res.status(500).send(err);
            
            return res.status(200).send(items);
        });
    }
}

//not in use --- below find in item.routes.js
export function listAll(req, res){
    //List all items of a specific type from Db
    console.log("EndpointAPI: listAll");
    Asset.find()
        .then(items => {
            console.log(items);
            res.send(items);
        })
        .catch((err) => {
            console.log("Error in fetching items");
            handleError(res,err, "There was an error retrieving items");
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
