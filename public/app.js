// Fetch results from the server and display them
async function fetchResults() {
  try {
    const response = await fetch("/fetch");
    // console.log(response);

    const { results } = await response.json();
    const resultsDiv = document.getElementById("results");

    // Render each result as a card
    resultsDiv.innerHTML = results
      .map(
        (result) => `
          <div class="card ${result.status.toLowerCase()}">
            <strong>${result.name}:</strong> ${result.status}
          </div>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching results:", error);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML =
      "<p>Error loading results. Please try again later.</p>";
  }
}

// Fetch and render results when the page loads because we using defer attribute in script tag
fetchResults();
