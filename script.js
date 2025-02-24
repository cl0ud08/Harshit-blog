// List of blog posts with categories
const blogPosts = [
    { title: "Hosting a static website using Amazon S3", link: "blog/post1.html", date: "Feb 24, 2025", category: "AWS" },
    { title: "Automating Continuous Delivery: Deploying a Dockerized FastAPI App with GitHub Actions", link: "blog/post2.html", date: "Feb 25, 2025", category: "DevOps" },
    { title: "Docker commands ", link: "blog/post3.html", date: "Feb 25, 2025", category: "DevOps" }
];

// Function to display blogs by category
function loadBlogPosts(category = "All") {
    let blogList = document.getElementById("blog-list");
    blogList.innerHTML = ""; // Clear previous posts

    let filteredPosts = category === "All" ? blogPosts : blogPosts.filter(post => post.category === category);

    filteredPosts.forEach(post => {
        let postItem = document.createElement("div");
        postItem.classList.add("blog-item");
        postItem.innerHTML = `<a href="${post.link}">${post.title}</a><br><small>${post.date}</small>`;
        blogList.appendChild(postItem);
    });
}

// Function to handle category change
function handleCategoryChange() {
    let selectedCategory = document.getElementById("category-filter").value;
    loadBlogPosts(selectedCategory);
}

// Load blogs when the page loads
document.addEventListener("DOMContentLoaded", () => loadBlogPosts());
