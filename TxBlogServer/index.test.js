const request = require("supertest");
const app = require("./index");
const postsRepository = require("./PostsRepository");

describe("getAllPosts", () => {
    it("should return all posts", async () => {
        const res = await request(app).get("/getAllPosts")
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(postsRepository.getAllPosts());
    });
});

describe("getPost", () => {
    it("should return 1 post", async () => {
        const res = await request(app).get("/getPost?index=1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(postsRepository.getPost(1));
    });
});

describe("getPostComment", () => {
    it("should return the post comments", async() => {
        const res = await request(app).get("/getPostComments?index=1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(postsRepository.getPostComments(1));
    });
});

describe("addComment", () => {
    it("should add 1 comment to the post", async() => {
        const length = postsRepository.getPostComments(1).length;
        const res = await request(app).post("/addComment?index=1").send({author: "test author", text: "test text"});
        expect(res.statusCode).toEqual(200);
        expect(postsRepository.getPostComments(1).length).toEqual(length +1);
    });
});

describe("updateComment", () => {
    it("should update the comment data", async() => {
        const newComment = {author: "test author", text: "test text"};
        const res = await request(app).post("/updateComment?postIndex=1&commentIndex=1").send(newComment);
        expect(res.statusCode).toEqual(200);
        expect(postsRepository.getPostComments(1)[1]["author"]).toEqual(newComment.author);
        expect(postsRepository.getPostComments(1)[1]["text"]).toEqual(newComment.text);
    });
});
