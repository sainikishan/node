const fs = require('fs');

const FILE = 'data.json';

// Initialize file if not exists
if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, '[]');
}

const args = process.argv.slice(2);
const command = args[0];

function readData() {
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

switch (command) {
  case 'create': {
    const name = args[1];
    const price = parseFloat(args[2]);
    if (!name || isNaN(price)) {
      console.log('❌ Usage: node syncrud.js create <name> <price>');
      break;
    }
    const data = readData();
    const newItem = { id: Date.now(), name, price };
    data.push(newItem);
    writeData(data);
    console.log('✅ Item created:', newItem);
    break;
  }

  case 'read': {
    const data = readData();
    if (data.length === 0) {
      console.log('📂 No items found.');
    } else {
      console.log('📋 All Items:');
      data.forEach(item => {
        console.log(`- ID: ${item.id}, Name: ${item.name}, Price: ${item.price}`);
      });
    }
    break;
  }

  case 'update': {
    const id = parseInt(args[1]);
    const name = args[2];
    const price = parseFloat(args[3]);

    if (isNaN(id) || !name || isNaN(price)) {
      console.log('❌ Usage: node syncrud.js update <id> <name> <price>');
      break;
    }

    const data = readData();
    const index = data.findIndex(item => item.id === id);

    if (index === -1) {
      console.log('❌ Item not found');
    } else {
      data[index] = { ...data[index], name, price };
      writeData(data);
      console.log('✅ Updated:', data[index]);
    }
    break;
  }

  case 'delete': {
    const id = parseInt(args[1]);
    if (isNaN(id)) {
      console.log('❌ Usage: node syncrud.js delete <id>');
      break;
    }

    let data = readData();
    const exists = data.some(item => item.id === id);

    if (!exists) {
      console.log('❌ Item not found');
    } else {
      data = data.filter(item => item.id !== id);
      writeData(data);
      console.log(`✅ Item with ID ${id} deleted`);
    }
    break;
  }

  default:
    console.log(`
📦 Terminal CRUD Usage:
  node syncrud.js create <name> <price>
  node syncrud.js read
  node syncrud.js update <id> <name> <price>
  node syncrud.js delete <id>
`);
}
