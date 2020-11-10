# TX Group code challenge

Gabriele Käser
## Backend
The backend is implemented in node js, with express framework

### Json structure
#### Post
{  
  "author": "author",  
  "title": "title",  
  "text": "text",  
  "comments": [{  
    "author": "author",  
    "text": "text"  
  },{...}]  
}
#### Comment
{  
    "author": "author",  
    "text": "text"  
}

### Endpoints
#### getAllPosts
simply returns a JSON array containing all the posts

#### getPost
(Parameters: post index) returns a JSON Object representing the post (author, title, text, list of comments)

#### getPostComments
(Parameters: post index) returns a JSON array containing all the comments belonging to a post

#### addComment
(Parameters: post index, json structure representing the comment (author, comment)) adds the comment to the post (author can be undefined)

#### updateComment
(Parameters: post index, comment index, json structure representing the comment (author, comment), updates the comment

##Frontend
The frontend is a React application, with a main component <App>, a component for the post list <PostListPage> and a component for the post page <PostPage>  
It uses material-ui for styling.

##Setup
To build the docker container, run `docker build -t tx-blog .` in the TxBlogServer folder.
To run the container, run `docker run -p 8080:8080 tx-blog`, the application will be served on localhost:8080

##Text steps
- add tests to the client code, mocking the API call response and testing that the page displays the correct data
- add a database backend, with posts and comments table, and with a relation between comments and posts
- modify the server and client to generate a unique URL for each post, so that it is possible to reach each post without going trough the home page (in react, use BrowserRouter instead of MemoryRouter, in  express research how to do that)

