# Platzi-verse DB
# DATABASE


```js
 const setupDtabase = require('platziverse-db')

 setupDatabase(config).then( db => {
   const { Agent, Metric } = db
 } ).catch( err => console.error )

```