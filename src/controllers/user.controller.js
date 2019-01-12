import User from '../models/user.model';


//syncron
export function create (req,res) {
    console.log("EndpointAPI: create");
    const newUserObj = new User(req.body);
    newUserObj.save(err => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(newUserObj);
    });
}


export function findByIdAndUpdate(req, res){
    console.log("EndpointAPI: findByIdAndUpdate");
    User.findByIdAndUpdate(req.params.userId, req.body, {new:true}, (err, users) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(users);
    })
}


export function findById(req,res){
    console.log("EndpointAPI: findById");
    User.findById(req.params.userId, (err, User) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(User);
    });
}

export function find(req,res) {   
    console.log("EndpointAPI: find");
    if (req.body){
        User.find(req.body, (err, users) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(users);
        });
    } else {
        User.find((err, users) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(users);
        });
    }
}

//not in use --- below find in user.routes.js
export function listAll(req, res){
    //List all users of a specific type from Db
    console.log("EndpointAPI: listAll");
    User.find()
        .then(users => {
            console.log(users);
            res.send(users);
        })
        .catch((err) => {
            console.log("Error in fetching users");
            handleError(res,err, "There was an error retrieving users");
        });
}

export function findByIdAndDelete(req, res){
    console.log("EndpointAPI: findByIdAndDelete");
    User.findByIdAndDelete(req.params.userId, (err, users) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "User successfully deleted",
            id: users._id
        };
        return res.status(200).send(response);
    });
}

export function loginUser(req, res){
  console.log("EndpointApi: loginUser");
  console.log("From client: ", req.params.userEmail);
  console.log("From client: ", req.body.password);
  //if (req.body.password) {
  //  User.find()
  //}
  
  User.findOne({'email': req.params.userEmail}, (err, user) => {
    console.log("returns from mongo: ", user);
    if (err) return res.status(500).send(err);
    if (user) {
      console.log(user);
      if(user.password === req.body.password){
        return res.status(200).send('User successfully autenticated');
      } else {
        return res.status(403).send('Authentication failed, wrong password');  
      }
    } else {
      return res.status(403).send('Authentication failed, user do not exist');
    }
  });
}