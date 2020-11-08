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
            <div className={classes.postAuthor}>By: {author}</div>
            <div className={classes.postTitle}>{title}</div>
            <div className={classes.postText}>{text}</div>
            <div className={classes.postComments}>
                <div className={classes.postLink}>Comments</div>
                {comments && comments.map(({ id, author, text }) => (
                    <div className={classes.postComment} key={id}>
                        <div className={classes.commentAuthor}>{author}</div>
                        <div className={classes.commentText}>{text}</div>
                    </div>
                ))}
            </div>
            <Link to={"/"} className={classes.postLink}>Back</Link>
        </div>
    );
}
export default PostPage;