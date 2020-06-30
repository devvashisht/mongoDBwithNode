// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const ObjectID = mongdb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection('users').deleteMany({
        name: "Dev"
    }).then((result) => {
        console.log(result)
    }).catch((error) =>{
console.log(error)
    })
  }
);

//const id  = new ObjectID()

// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)

//console.log(id.getTimestamp())
// db.collection('users').insertOne({
//     name: 'sumi',
//     age: '34'
// }, (error, result) => {
//     if (error) {
//         return console.log("unable to insert one")
//     }
//     console.log(result.ops)
// })

//  db.collection('users').insertMany([
//         {
//             name:"avin",
//             age:1
//         },
//         {
//             name:'surya',
//             age:4
//         }
//     ],(error,result) => {
// if(error){
//     return console.log("unable to insert")
// }
// console.log(result.ops)
//     })

//
// db.collection('tasks').insertMany([
//             {
//                 description:"bring grocery",
//                 completed: true
//             },
//             {
//                 description:'bring honey',
//                 completed: false
//             },
//             {
//                 description:'aata crushing',
//                 completed: false
//             }
//         ],(error,result) => {
//     if(error){
//         return console.log("unable to insert")
//     }
//     console.log(result.ops)
//         })
//Read : find & findOne

// db.collection('users').findOne({name:'Dev'}, (error,user)=> {
//     db.collection('users').findOne({_id: new ObjectID('5efb74de23ede23e20b49438')}, (error,user)=> {
// if(error) {
//     return console.log('Unable to fetch')
// }
// console.log(user)
//     })
//db.collection('users').find({age:'34'}).toArray((error,users) =>{
// db.collection('users').find({age:'34'}).count((error,users) =>{
//     console.log(users)
// })
// db.collection('tasks').findOne({_id: new ObjectID('5efb80ef722518276074d65d')}, (error,task)=> {
//     if(error) {
//         return console.log('Unable to fetch')
//     }
//     console.log('Task by id',task)
//         })
//         db.collection('tasks').find({completed:false}).toArray((error,tasks) =>{
//                 console.log('Task which are not completed',tasks)
//             })
//             db.collection('tasks').find({completed:false}).count((error,count) =>{
//                 console.log('Task count',count)
//             })

// db.collection("users")
// .updateOne(
//   {
//     _id: new ObjectID("5efb74de23ede23e20b49438"),
//   },
//   {
//     $set: {
//       name: "Mike",
//     },
//   }
// )
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });

// db.collection('tasks').updateMany({
//   completed:false
// }, {
//   $set: {
//       completed:true
//   }
// }).then((result) => {
//   console.log(result.modifiedCount)
// }).catch((error) => {
//   console.log(error)
// })
