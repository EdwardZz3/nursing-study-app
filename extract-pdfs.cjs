const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfDir = path.join(__dirname, 'public', 'pdfs');
const outputDir = path.join(__dirname, 'pdf_texts');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function extractAll() {
  const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
  
  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(pdfDir, file));
    try {
      const data = await pdf(dataBuffer);
      const text = data.text;
      fs.writeFileSync(path.join(outputDir, file.replace('.pdf', '.txt')), text);
      console.log(`Extracted: ${file}`);
    } catch (e) {
      console.error(`Error on ${file}:`, e.message);
    }
  }
}

extractAll();
