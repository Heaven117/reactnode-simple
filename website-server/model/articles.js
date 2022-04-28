const sequelize = require('../utils/db')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Articles = sequelize.define('articles',{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:Sequelize.STRING,
    subtitle:Sequelize.STRING,
    content:Sequelize.STRING,
    author:Sequelize.STRING
},{
    timestamps:false,
    underscored:true
})

//强制同步 force=true先删除在创建 false是否存在重新创建 异步创建数据表
// var articles = Articles.sync({ force: false });

//查询所有文章
exports.findAllArticle = function (){
    return Articles.findAll();
}

//根据搜索关键字查找
exports.findBySearch = function (search_text) {
    return Articles.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ],  // 排序
        where: {
            // name: 'cheny', // 精确查询
            content: {
                // 模糊查询
                [Op.like]: '%' + search_text + '%'
            }
        },
    })
}

//根据id查找
exports.findById = function(id){
    return Articles.findOne({
        where:{
            id:id
        }
    });
}


//更新文章内容
exports.updateContent = function(id,content){
    console.log(content)
    return Articles.update({
        content:content
    },{
        where:{
            id:id
        }
    })
}
