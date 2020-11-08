import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles.js';
import NetworkFunctions from './NetworkFunctions';
import constants from './constants';
import { Link } from "react-router-dom";


const PostsListPage = () => {

    const classes = useStyles();
    const [postsList, setPostsList] = useState();

    useEffect(() => {
        getAllPosts()
    }, []);

    const getAllPosts = () => {
        NetworkFunctions.sendGETRequest(constants.URL + constants.GETALLPOSTSURL).then(function (response) {
            setPostsList(response);
        });
    }

    return (

        <Grid container direction="column" justify="center" >
            {postsList && postsList.map(({ id, author, title, comments }) => (
                <div className={classes.post} key={id}>
                    <div className={classes.author}>{author}</div>
                    <div><Link to={"/" + id} className={classes.title}>{title}</Link></div>
                    <div className={classes.commentsNumber}>{comments.length} Comments</div>
                </div>
            ))}
        </Grid>
    )
}
export default PostsListPage;