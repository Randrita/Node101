const fs = require('fs')

fs.writeFileSync('note.txt', 'this note is created by node.js!')

//use appendFileSync to append files and to avoid overlapping