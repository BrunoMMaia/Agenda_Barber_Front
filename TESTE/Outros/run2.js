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

      let tabledata2 = await client.query('update project_questions set status = $1;', ['Pendente'])
      console.log(tabledata2)
      client.end();
}

run();