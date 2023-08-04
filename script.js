// Dummy data for featured job listings (for demo purpose)
const featuredJobs = [
    {
        id: 1,
        title: "Software Engineer",
        location: "Bangalore, India",
        skills: ["Java", "Python", "JavaScript"],
    },
    {
        id: 2,
        title: "Product Manager",
        location: "San Francisco, USA",
        skills: ["Product Strategy", "Market Analysis", "Project Management"],
    },
    {
        id: 3,
        title: "Data Scientist",
        location: "New York, USA",
        skills: ["Machine Learning", "Data Analysis", "Statistics"],
    },
];

// Function to display featured job listings on the home page
function displayFeaturedJobs() {
    const jobListContainer = document.getElementById("job-list");
    let jobListHTML = "";
    featuredJobs.forEach((job) => {
        jobListHTML += `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Skills:</strong> ${job.skills.join(", ")}</p>
            </div>
        `;
    });
    jobListContainer.innerHTML = jobListHTML;
}

// Add event listener to the search form (you can customize the search functionality in the backend)
document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = event.target.querySelector("input");
    const searchTerm = searchInput.value;
    console.log("Searching for:", searchTerm);
    // You can implement search functionality in the backend and update the job listings accordingly.
});

// Display featured job listings when the page loads
displayFeaturedJobs();
