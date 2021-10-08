const { Pool, Client } = require('pg')


async function run(){
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '2975',
        port: 5432,
      })
      client.connect()
      let tabledata = await client.query('select id, priority * impact as risk from  project_questions pq where priority notnull AND impact notnull;')
      for (let row of tabledata.rows){
        let tabledata2 = await client.query('update project_questions set risk = $1 where id=$2;', [row.risk, row.id])
        console.log(tabledata2)
      }
      client.end();
}

run();