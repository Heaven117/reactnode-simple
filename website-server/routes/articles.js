const express = require('express')
const router = express.Router()
const articles = require("../model/articles");

//根据搜索查询文章列表
router.get('/',function (req,res,next){
    if(req.query.search_text){
        articles.findBySearch(req.query.search_text)
            .then(data => {
                console.log(JSON.stringify(data))
                res.json({
                    code: 0,
                    data: data
                });
            })
            .catch(err => {
                console.log('查询错误', err)
            })
    }
    else {
        articles.findAllArticle()
            .then(data => {
                console.log(JSON.stringify(data))
                res.json({
                    code: 0,
                    data: data
                });
            })
            .catch(err => {
                console.log('查询错误', err)
            })
    }
})

//根据id查询文章详情
router.get('/:id',function(req,res,next){
    articles.findById(req.params.id)
        .then( data =>{
            console.log(JSON.stringify(data));
            res.json({
                code:0,
                data:data
            })
        })
        .catch( err =>{
            res.json({
                code:-1,
                data:err
            })
            console.log(err);
        })
})

router.patch('/:id',function (req,res,next){
    const id = req.params.id;
    const content = req.body.content;

    articles.updateContent(id,content)
        .then( data =>{
            console.log(data);
            res.json({
                code:0,
                data:content
            })
        })
        .catch(err =>{
            console.log(err)
            res.json({
                code:-1,
                data:err
            })
        })


})
module.exports = router;
