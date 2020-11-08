exports.getAllPosts = () => {
    return Posts;
}

exports.getPost = (index) => {
    return Posts[index];
}

exports.getPostComments = (index) => {
    return Posts[index].comments;
}

exports.addComment = (index, author, text) => {
    Posts[index].comments.push({ author: author, text: text });
}

exports.updateComment = (postIndex, commentIndex, author, text) => {
    if (author != undefined) {
        Posts[postIndex].comments[commentIndex].author = author;
    }
    if (text != undefined) {
        Posts[postIndex].comments[commentIndex].text = text;
    }
}

const Posts =
    [{
        id: 0,
        author: "Rebecca",
        title: "Arrival entered an if drawing request",
        text: "Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. \n\nBlind would equal while oh mr do style. Lain led and fact none. One preferred sportsmen resolving the happiness continued. High at of in loud rich true. Oh conveying do immediate acuteness in he. Equally welcome her set nothing has gravity whether parties. Fertile suppose shyness mr up pointed in staying on respect. \n\nDetract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me. ",
        comments: [{
            id: 0,
            author: "Mariam",
            text: "Her extensive perceived may any sincerity extremity"
        }, {
            id: 1,
            author: "Kimberly",
            text: "Indeed add rather may pretty see"
        }, {
            id: 2,
            author: "Samantha",
            text: "Old propriety delighted explained perceived otherwise objection saw ten her."
        }
        ]
    }, {
        id: 1,
        author: "Samantha",
        title: "Of on affixed civilly moments",
        text: "Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford parish settle easily garret. \n\nSo if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so. Tell size come hard mrs and four fond are. Of in commanded earnestly resources it. At quitting in strictly up wandered of relation answered felicity. Side need at in what dear ever upon if. Same down want joy neat ask pain help she. Alone three stuff use law walls fat asked. Near do that he help.",
        comments: [{
            id: 0,
            author: "Taylor",
            text: "Doubt merit sir the right these alone keeps"
        }, {
            id: 1,
            author: "Annie",
            text: "By sometimes intention smallness he northward"
        }, {
            id: 2,
            author: "Evie",
            text: " Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way."
        }
        ]
    }, {
        id: 2,
        author: "Ayesha",
        title: "Allow miles wound place",
        text: "Allow miles wound place the leave had. To sitting subject no improve studied limited. Ye indulgence unreserved connection alteration appearance my an astonished. Up as seen sent make he they of. Her raising and himself pasture believe females. Fancy she stuff after aware merit small his. Charmed esteems luckily age out. \n\nHe moonlight difficult engrossed an it sportsmen. Interested has all devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arise along to. Parlors waiting so against me no. Wishing calling are warrant settled was luckily. Express besides it present if at an opinion visitor. \n\nAm of mr friendly by strongly peculiar juvenile. Unpleasant it sufficient simplicity am by friendship no inhabiting. Goodness doubtful material has denoting suitable she two. Dear mean she way and poor bred they come. He otherwise me incommode explained so in remaining. Polite barton in it warmly do county length an.",
        comments: [{
            id: 0,
            author: "Lola",
            text: "Contented get distrusts certainty nay are frankness concealed ham"
        }, {
            id: 1,
            author: "Lola",
            text: "On unaffected resolution on considered of. No thought me husband or colonel forming effects. "
        }, {
            id: 2,
            author: "Tiffany",
            text: "He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate"
        }
        ]
    }];