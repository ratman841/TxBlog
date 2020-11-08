import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    blog: {
        fontFamily: 'Arial',
    },
    blogTitle: {
        fontSize: 32,
    },
    post: {
        marginTop: 30
    },
    author: {
        color: '#999999',
        marginBottom: 10
    },
    title: {
        color: '#000000',
        fontSize: 22,
    },
    commentsNumber: {
        marginTop: 10,
        color: '#999999',
    },
    postAuthor: {
        color: '#999999',
        marginBottom: 10
    },
    postTitle: {
        color: '#000000',
        fontSize: 22,
    },
    postText: {
        textAlign:'justify',
        marginBottom: 20,
        marginTop: 20
    },
    postLink: {
        color: '#000000',
    },
    postComments: {
        marginBottom: 20
    },
    postComment: {
        marginTop: 10
    },
    commentAuthor: {
        fontSize: 12,
        color: '#999999',
    },
    commentText: {
        fontSize: 12,
    },
}));

export {useStyles};