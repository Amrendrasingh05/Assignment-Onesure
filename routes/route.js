const express = require("express")
const mysql = require('mysql')

const loginrouter = express.Router()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "students"
});




loginrouter.post('/user', (req, res) => {

    let name = req.body.name;
    let classes = req.body.classes;
    let id = req.body.id;


    db.getConnection(async (err, connection) => {

        if (err) {
            console.log(err);
        }
        else {
            const insrt_query = "INSERT INTO STUDENT(name,classes,id) VALUES(?,?,?)"
            const insrt = mysql.format(insrt_query, [name, classes, id])

            await connection.query(insrt, (err, result) => {

                if (err) throw (err)

                res.json({
                    message: "Quesry Executed"
                })
                connection.release()
            })
        }
    })

})





loginrouter.get('/show', (req, res) => {

    db.getConnection(async (err, connection) => {

        if (err) {
            console.log(err);
        }
        else {
            const show_query = "SELECT * FROM STUDENT"
            await connection.query(show_query, (err, result) => {

                if (err) throw (err)

                console.log(result)
                res.json({
                    message: "Quesry Executed",
                    student: result
                })
                connection.release()
            })
        }
    })

})








loginrouter.get('/ascend', (req, res) => {

    db.getConnection(async (err, connection) => {

        if (err) {
            console.log(err);
        }
        else {
            const asend_query = "SELECT * FROM student ORDER BY classes"
            await connection.query(asend_query, (err, result) => {

                if (err) throw (err)

                console.log(result)
                res.json({
                    message: "Quesry Executed",
                    student: result
                })
                connection.release()
            })
        }
    })

})

loginrouter.get('/desc', (req, res) => {

    db.getConnection(async (err, connection) => {

        if (err) {
            console.log(err);
        }
        else {
            const asend_query = "SELECT * FROM student ORDER BY classes desc"
            await connection.query(asend_query, (err, result) => {

                if (err) throw (err)

                console.log(result)
                res.json({
                    message: "Quesry Executed",
                    student: result
                })
                connection.release()
            })
        }
    })

})






loginrouter.delete('/del', (req, res) => {

    let id = req.body.id;



    db.getConnection(async (err, connection) => {

        if (err) {
            console.log(err);
        }
        else {
            const del_query = `DELETE FROM STUDENT WHERE ID ='${id}'`
            // const del = mysql.format(del_query, [id])
            await connection.query(del_query, (err, result) => {

                if (err) throw (err)

                console.log(result)
                res.json({
                    message: "Quesry Executed",
                    // student: result
                })
                connection.release()
            })
            // console.log(del_query)
        }
    })

})



module.exports = loginrouter