const fs = require('fs');

const content = fs.readFileSync('./src/data/content.js', 'utf8');

// The file looks like:
// export const subjects = [
//   ...
// ];
// We can extract the array using string manipulation

const prefix = 'export const subjects = ';
const suffixIndex = content.lastIndexOf(';');

let jsonString = content.substring(content.indexOf(prefix) + prefix.length, suffixIndex).trim();

try {
  const subjects = JSON.parse(jsonString);
  const ch5Questions = JSON.parse(fs.readFileSync('./ch5_q.json', 'utf8'));
  const ch6Questions = JSON.parse(fs.readFileSync('./ch6_q.json', 'utf8'));

  // The user says "Chapter 5 and Chapter 6" but in the array they are chapter-7 and chapter-8 (indices 4 and 5 in the chapters array)
  // Let's find them by their id to be safe.
  const chapter5 = subjects[0].chapters.find(c => c.id === 'chapter-7 E.N.T AND RESPIRATORY');
  const chapter6 = subjects[0].chapters.find(c => c.id === 'chapter-8 NUTRITIONAL DISORDERS');

  if (chapter5) {
    chapter5.questions = ch5Questions;
  } else {
    console.log('Chapter 5 not found by ID!');
  }

  if (chapter6) {
    chapter6.questions = ch6Questions;
  } else {
    console.log('Chapter 6 not found by ID!');
  }

  const newContent = `export const subjects = ${JSON.stringify(subjects, null, 2)};\n`;
  fs.writeFileSync('./src/data/content.js', newContent, 'utf8');
  console.log('Success!');
} catch (e) {
  console.error('Error parsing or writing:', e);
}
