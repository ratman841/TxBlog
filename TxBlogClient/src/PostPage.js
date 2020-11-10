import React, { useEffect, useState } from 'react';
import { useStyles } from './styles.js';
import NetworkFunctions from './NetworkFunctions';
import constants from './constants';
import { Link } from "react-router-dom";


const PostPage = ({ index }) => {

    const classes = useStyles();
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        const getPost = () => {
            NetworkFunctions.sendGETRequest(constants.URL + constants.GETPOST + "?index=" + index).then(function (response) {
                setAuthor(response.author);
                setTitle(response.title);
                setText(response.text);
                setComments(response.comments);
            });
        }
        getPost();
    }, [index]);


    return (
        <div className={classes.post}>
            <div className={classes.postAuthor} data-testid={"author"}>By: {author}</div>
            <div className={classes.postTitle} data-testid={"title"}>{title}</div>
            <div className={classes.postText} data-testid={"text"}>{text}</div>
            <div className={classes.postComments}>
                <div className={classes.postLink}>Comments</div>
                {comments && comments.map(({ id, author, text }) => (
                    <div className={classes.postComment} key={id}>
                        <div className={classes.commentAuthor} data-testid={"comment-author"+id}>{author}</div>
                        <div className={classes.commentText} data-testid={"comment-text"+id}>{text}</div>
                    </div>
                ))}
            </div>
            <Link to={"/"} className={classes.postLink}>Back</Link>
        </div>
    );
}
export default PostPage;