// Trabajar con rutas
const path = require('path');
const salesFiles = require('./sales-files.json');

async function main() {
  const salesDir = path.join(__dirname, 'stores');

  const salesFiles = await findSalesFiles(salesDir);
}

console.log(salesFiles);
