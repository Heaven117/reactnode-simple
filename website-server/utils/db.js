const Sequelize = require('sequelize')

const db_name = 'test_db'
const username = "root"
const password = '123456'

const sequelize =  new Sequelize(db_name,username,password,{//表名 用户名 密码
    host:'localhost',
    port:3306,
    dialect:'mysql', //数据库类型：'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
    pool:{  // 连接池配置
        max:5,
        min:0
    },
})

module.exports = sequelize;
