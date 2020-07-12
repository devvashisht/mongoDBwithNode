## JEST - testging framwork

## MOCHA - testing framework

`npm i jest@1.2.4 '`pakcage.json` :'test' : 'jest --watch'

```javascript
test({'hello workd', ()=> {

}})
```

- `Throw label` : `throw new Error('mesage',varable)` : if test is broken
- **Assert Library** to replace throw label
- expect(result).toBe(expectedValue)

- ## TESTing ASYNCHRONOUS CODE
-

```javascript
test('Asynch test case', (done) => {
    setTimeout(()=> {
        expect(1).toBe(2)
        done()
    }.200)
})
```

- **done** paramter to tell jest wait till done is execueted for test result
- **ASYNC/AWAIT** -

````javascript
test('async await example', async()=>{
    const resultSum = await sum(2,3)
    expect(resultSum).toBe(5)
})
- `test.env` file similar to dev environemnt and production enviroment
- ***PACKAGE>JSON*** : 'test' : 'env-cmd ./config/test.env jest --watch'

***Super Test LIBRARY**
  - request to end point and chain them
  - npm i superTest@1323

```javascript
const request =  require('superTest')
const app = require('app')
test('signup a new user', async() =>{
  await request(app).post('/users').send({
      body
  }).expect(201)
})
````

- **JEST LIFECYCLE METHOD** : setup and test Down
  - `beforeEach` : beforeEach(async()=> {
    await //do stuff before every test
    })
  - `AfteEach`

**_MOCKING LIBRARY_**

- create mock directory
- `sendGrid` : module.export = {setApiKey (){},send(){}}
- `Fixture` : environment for test like attaching image
- `tobe` uses `===` , and `toEqual` check property equality instead of reference we should use it for object or array equality

* **Setup test suite** -
