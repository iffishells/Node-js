var express = require("express");
var mysql  =  require('mysql');
var app = express()

// am use creaatepool instead of createConnection 
// becuase of connectionlimit
var connection = mysql.createPool({
    connectionLimit : 50,
    host : 'localhost',
    user: 'root',
    password: 'murti123',
    database : 'sampleDB'
});


// connection.connect(function (error)
// {
//     if (!!error)
//     {
//         console.log('Error in Connnection.connect');
//     }
//     else
//     {
//         console.log('connected');
//     }
// });
app.get('/' ,function (req,resp) {

    //about mysql
    // connection.query('select * from login_table',function (error,rows,fields) {
    //     // callback function

    //     if (!!error)
    //     {
    //                 console.log('Error in the Query');
    //     }
    //     else
    //     {
    //         console.log('successfully query executed');
    //         console.log(rows);
    //         resp.send(rows)
    //     }   
        
    // });
    connection.getConnection(function (error ,tempconct) {

        if(!!error)
        {
            console.log("Error");
            tempconct.release();
        }
        else{
            console.log("connected " )
            tempconct.query('select * from login_table' , function (error,rows,fields) {
                 tempconct.release();  //if no query execute then release it not wait for it
                if(!!error)
                {
                    console.log("Error : tempconct side")
                }else{
                    console.log("query executed successfully");
                    // resp.send(rows);
                    // what if i wonna use this
                    resp.json(rows)
                }
                
                
            });
        }
        
    });    

});


app.listen(3000 , function () {
    console.log('listen at 3000');
    
})