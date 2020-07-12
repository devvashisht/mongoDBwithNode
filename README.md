# mongoDBwithNode

## Start Mongo db server

    -   go the the path of mogod.exe : mongod.exe --dbpath="pathForMongoData"

`time stamp for mongoose model` : in moongoose schema model, set option for timestamp= true

-

- above will create two field in MDB, createdAt and updatedAt timestamp
  >
- routes to filter data :
  // get / tasks ? completed=true

**Pagination**
//GET / tasks?limit=10&skip=0

**populate** api on moongoose Scheme have option({`limit`=no of doucment}, `match`;{ propety match criteria}) , `skip` = to avoid first records

**Sorting Data**
// GET/tasks?sortBy=creatdA:asc

```javascript
router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    await req.user
      .populate({path: "tasks", match, options: { limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.send(req.user.tasks);
```

> **FILE UPLOAD**

- npm package: multer : `npm i multer@1.4.1
- `form-data` type for file in the postman
  ```javascript
  const multer = require("multer");
  const upload = multer({
    dest: "images",
  });
  app.post("/upload", upload.single("upload"), (req, res) => {
    res.send();
  });
  ```

````
- ##Validation
-  check the type of image using file filtere on route
-  saving image data to user profile in binary form
- parsing `binary image ` to jpeg using

```html
<img src='data:image/jpg:base64,binaryData>

```
-  sending back image :     res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
````

s

- ## Sharp : image manipulation npm package

**Sending Email**

- ## SENDRID :-

**Eniviroment variable**
**MongoDB production using mongoAtlas service**
**Mongo Compass ui tool instead of Robobt**
**Deploy on heroku**
