var connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {

    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb (result);
        });
    },
    insertOne: function(table, column, values, cb){
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
     update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
}

module.exports = orm;