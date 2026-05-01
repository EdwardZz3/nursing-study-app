const fs = require('fs');

const content = fs.readFileSync('./src/data/content.js', 'utf8');
const prefix = 'export const subjects = ';
const suffixIndex = content.lastIndexOf(';');
let jsonString = content.substring(content.indexOf(prefix) + prefix.length, suffixIndex).trim();

try {
  const subjects = JSON.parse(jsonString);
  const ch6Questions = JSON.parse(fs.readFileSync('./ch6_new_q.json', 'utf8'));

  // map to Nutritional Disorders (chapter-8)
  const chapter8 = subjects[0].chapters.find(c => c.id === 'chapter-8 NUTRITIONAL DISORDERS');

  if (chapter8) {
      chapter8.questions = ch6Questions.map((q, i) => {
          return { ...q, id: 'c8_new_q' + (i + 1) };
      });
  }

  const newContent = "export const subjects = " + JSON.stringify(subjects, null, 2) + ";\n";
  fs.writeFileSync('./src/data/content.js', newContent, 'utf8');
  console.log('Success!');
} catch (e) {
  console.error('Error parsing or writing:', e);
}
