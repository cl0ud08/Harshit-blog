// List of blog posts
const blogPosts = [
    { title: "Hosting a static website using Amazon S3", link: "blog/post1.html", date: "Feb 24, 2025" },
    { title: "Understanding JavaScript Closures", link: "blog/post2.html", date: "Feb 25, 2025" },
    { title: "How to Deploy Websites for Free", link: "blog/post3.html", date: "Feb 26, 2025" }
];

// Function to display blogs
function loadBlogPosts() {
    let blogList = document.getElementById("blog-list");
    blogPosts.forEach(post => {
        let postItem = document.createElement("div");
        postItem.classList.add("blog-item");
        postItem.innerHTML = `<a href="${post.link}">${post.title}</a><br><small>${post.date}</small>`;
        blogList.appendChild(postItem);
    });
}

// Load blogs when the page loads
document.addEventListener("DOMContentLoaded", loadBlogPosts);
