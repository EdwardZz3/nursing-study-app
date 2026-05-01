const fs = require('fs');

const content = fs.readFileSync('./src/data/content.js', 'utf8');

const prefix = 'export const subjects = ';
const suffixIndex = content.lastIndexOf(';');

let jsonString = content.substring(content.indexOf(prefix) + prefix.length, suffixIndex).trim();

try {
  const subjects = JSON.parse(jsonString);
  const ch8Questions = JSON.parse(fs.readFileSync('./ch8_q.json', 'utf8'));
  const ch9Questions = JSON.parse(fs.readFileSync('./ch9_q.json', 'utf8'));
  const ch10Questions = JSON.parse(fs.readFileSync('./ch10_q.json', 'utf8'));

  // map chapter 8 to Gastrointestinal Disorders (chapter-10)
  // map chapter 9 to Malignant Neoplasm (chapter-11)
  // map chapter 10 to Congenital Anomalies (chapter-12)
  const chapter8 = subjects[0].chapters.find(c => c.id === 'chapter-10 Gastrointestinal Disorders');
  const chapter9 = subjects[0].chapters.find(c => c.id === 'chapter-11 Malignant Neoplasm');
  const chapter10 = subjects[0].chapters.find(c => c.id === 'chapter-12Congenital Anomalies');

  if (chapter8) chapter8.questions = ch8Questions;
  if (chapter9) chapter9.questions = ch9Questions;
  if (chapter10) chapter10.questions = ch10Questions;

  const newContent = `export const subjects = ${JSON.stringify(subjects, null, 2)};\n`;
  fs.writeFileSync('./src/data/content.js', newContent, 'utf8');
  console.log('Success!');
} catch (e) {
  console.error('Error parsing or writing:', e);
}
