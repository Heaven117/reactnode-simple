import React from "react";
import {Button, Card, CardActions, Container, Grid, TextField} from "@mui/material";
import {Link} from "react-router-dom";

class Articles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            articles:[{
                title:'title',
                subtitle:'subtitle'
            }],
            search_text:'',
        }
    }
    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles(){
        fetch(`http://localhost:3000/articles?search_text=${this.state.search_text}`)
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
        return (
            <div>
                <Container maxWidth={"md"}>
                    <Card  style={{padding:'20px'}}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    placeholder={'搜索内容'}
                                    value={this.state.search_text}
                                    onChange={ event => {
                                        this.setState({search_text:event.target.value})
                                    }}
                                    />
                            </Grid>
                            <Grid item xs={6}>
                                <Button color={"primary"} variant={"contained"}
                                        onClick={this.fetchArticles.bind(this)}
                                >
                                    Search!
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                    {
                        this.state.articles.length ?
                            this.state.articles.map((item,index) =>{
                                return (
                                    <Card style={{padding:'10px'}} key={item.id-1}>
                                        <p>{item.title}</p>
                                        <span>{item.subtitle}</span>
                                        <CardActions>
                                            <Link to={`/articles/${item.id}`}>
                                                <Button size={"small"}>Learn More</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                )
                            }) : null
                    }
                </Container>
            </div>
        )
    }
}

export default Articles;
