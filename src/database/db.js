const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database.db");

module.exports = db;

// 1 CRIAR UMA TABELA
// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places(
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `);
//   //2 INSERIR DADOS DA TABELA
//   const query = `
//     INSERT INTO places(
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items

//        ) VALUES ( ?,?,?,?,?,?,?);
//      `;

//   const values = [
//     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
//     "Colectoria",
//     "Guilherme Gemballa, Jardin Ámerica",
//     "numero 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Residuos eletronicos,lampadas",
//   ];

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadastrado com sucesso");
//     console.log(this);
//   }

//   db.run(query, values, afterInsertData);

//3 CONSULTAR DADOS DA TABELA.
// db.all(` SELECT * FROM places`, function (err, rows) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("aqui estão seus dados");
//   console.log(rows);
// });

//4 DELETAR UM DADO DA TABELA
// db.run(`DELETE FROM places WHERE id = ?`, [12], function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("registro deletado com sucesso");
// });
//});
