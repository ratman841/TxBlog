import React from 'react';
import { MemoryRouter , Switch, Route, useParams} from "react-router-dom";
import { Container } from '@material-ui/core';
import { useStyles } from './styles.js';
import PostPage from './PostPage';
import PostsListPage from './PostsListPage';

const App = () => {

    const classes = useStyles();

    const Post = () => {
        let { id } = useParams();
        return <PostPage index={id} />
    }

    const PostList = () => {
        return <PostsListPage />
    }

    return (
        <Container className={classes.blog}>
            <div className={classes.blogTitle}>My Blog Title</div>
            <MemoryRouter>
                <Switch>
                    <Route path="/:id">
                        <Post />
                    </Route>
                    <Route path="/">
                        <PostList />
                    </Route>
                </Switch>
            </MemoryRouter>
        </Container>
    )
}

export default App;