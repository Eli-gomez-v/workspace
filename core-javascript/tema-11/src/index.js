// Functions to fetch a specific article by ID
async function fetchArticleById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(`Status: ${response.status}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

async function fetchAllArticles() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(`Status: ${response.status}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

module.exports = { fetchArticleById, fetchAllArticles };
