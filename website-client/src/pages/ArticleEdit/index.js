import React from "react";
import {Button, Card, Container, Paper, TextareaAutosize} from "@mui/material";

export default class ArticleEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article:{}
        }
    }
    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles(){
        fetch(`http://localhost:3000/articles/${this.props.match.params.id}`)
            .then(res => {
                return res.json();
            }).then( res =>{
            console.log(res.data)
            this.setState({article:res.data})
        }).catch( err => {
            alert('获取文章失败')
        })
    }
    editArticle(){
        fetch(`http://localhost:3000/articles/${this.props.match.params.id}`,{
            method:"PATCH",
            body:JSON.stringify({content:this.state.article.content}),
            headers:new Headers({
                'Content-Type':'application/json'
            })
        }).then( res =>{
            console.log("sdsd")
            return res.json()
        }).then(res =>{
            this.props.history.push(`/articles/${this.props.match.params.id}`)
        }).catch( e=>{
            alert('获取文章失败')
        })

    }
    render() {
        const {article} = this.state;

        return(
            <div>
                <Container maxWidth={"md"}>
                    <Card>
                        <Paper style={{marginBottom:16}}>{article.title}</Paper>
                        <TextareaAutosize
                            style={{width:"100%"}}
                            value={article.content}
                            onChange={ event => {
                                this.setState({
                                    article:{
                                        ...article,
                                        content:event.target.value
                                    }
                                })
                            }}
                        />
                        <Button
                            style={{float:'right',marginTop:16}}
                            color={"primary"}
                            onClick={this.editArticle.bind(this)}
                        >提交</Button>
                    </Card>
                </Container>
            </div>
        )
    }
}
