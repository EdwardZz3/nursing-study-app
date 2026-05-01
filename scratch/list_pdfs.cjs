const { subjects } = require('./src/data/content.js');
subjects[0].chapters.forEach(c => console.log(c.id, c.pdfs));
