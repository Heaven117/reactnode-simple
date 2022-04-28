import React from "react";
import {Card, Container} from "@mui/material";

export default class ArticleDetail extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            articles:{}
        }
    }
    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles(){
        fetch(`http://localhost:3000/articles/${this.props.match.params.id}`)
            .then(res => {
                return res.json();
            }).then( res =>{
            console.log(res.data)
            this.setState({articles:res.data})
        }).catch( err => {
            alert('获取文章失败')
        })
    }

    render() {
        const {articles} = this.state;
        return(
            <div>
                <Container maxWidth={"md"}>
                    <Card>
                        <h1>{articles.title}</h1>
                        <h5>{articles.subtitle}</h5>
                        <span>---{articles.author}</span>
                        <p>{articles.content}</p>
                    </Card>
                </Container>
            </div>
        )
    }
}
