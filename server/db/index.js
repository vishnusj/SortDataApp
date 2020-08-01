const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('C:\\Users\\Vishnusj92\\Desktop\\db\\sortdata.db', (err) => {

    if (err) {
        console.log(err.message);

    }
    console.log('connected to db');

});

let dbfunctions = {};

dbfunctions.alldata = () => {

    return new Promise((resolve, reject) => {

        let sql = 'SELECT * FROM SORTINGDATA';

        db.all(sql, [], (err, rows) => {
            if (err) {
                return reject(err);

            }
            return resolve(rows);
        });

    });


}

dbfunctions.maxid = () => {

    return new Promise((resolve, reject) => {

        let sql = 'SELECT MAX(SORTID) FROM SORTINGDATA';

        db.all(sql, [], (err, rows) => {
            if (err) {
                return reject(err);

            }
            return resolve(rows);
        });

    });


}

dbfunctions.onedata = (id) => {

    return new Promise((resolve, reject) => {

        let sql = 'SELECT * FROM SORTINGDATA WHERE SORTID = ?';

        db.all(sql, [id], (err, rows) => {
            if (err) {
                return reject(err);

            }
            return resolve(rows[0]);
        });

    });


}


dbfunctions.insertstring = (data) => {

    return new Promise((resolve, reject) => {

        let sql = 'INSERT INTO SORTINGDATA (INPUTSTRING) VALUES ( ? );';
        db.all(sql, [data], (err, rows) => {
            if (err) {
                return reject(err);

            }
            return resolve(null);
        });

    });


}

dbfunctions.insertsteps = (data) => {

    return new Promise((resolve, reject) => {

        let sql = 'UPDATE SORTINGDATA SET SORTSTEPS = ? WHERE SORTID = (SELECT MAX(SORTID) FROM SORTINGDATA)';
        db.all(sql, [data], (err, rows) => {
            if (err) {
                return reject(err);

            }
            return resolve(null);
        });

    });


}




module.exports = dbfunctions;