/* eslint-disable no-use-before-define */
const readline = require('readline');
const { fetchArticleById, fetchAllArticles } = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para mostrar el menú y recibir input
function showMenu() {
  console.log('\n--- Article Fetcher CLI ---');
  console.log('1. Fetch article by ID');
  console.log('2. Fetch all articles');
  console.log('3. Exit');
  rl.question('Choose an option: ', handleMenuSelection);
}

// Función para manejar la selección del menú
async function handleMenuSelection(option) {
  switch (option.trim()) {
    case '1':
      rl.question('Enter article ID: ', async (id) => {
        const article = await fetchArticleById(id);
        if (article) {
          console.log(`\nTitle: ${article.title}\nContent: ${article.body}`);
        } else {
          console.log('Error fetching the article.');
        }
        showMenu(); // Volver al menú después de mostrar el resultado
      });
      break;

    case '2': {
      console.log('\nFetching all articles...');
      const articles = await fetchAllArticles();
      if (articles) {
        articles.forEach(({ id, title }) => {
          console.log(`\nID: ${id}\nTitle: ${title}`);
        });
      } else {
        console.log('Error fetching articles.');
      }
      showMenu(); // Volver al menú
      break;
    }

    case '3':
      console.log('Exiting...');
      rl.close(); // Cerrar la interfaz de readline
      break;

    default:
      console.log('Invalid option, please choose again.');
      showMenu(); // Mostrar el menú si la opción es inválida
  }
}

// Iniciar el programa mostrando el menú
showMenu();
