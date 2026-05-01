const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/data/content.js');
let contentStr = fs.readFileSync(contentPath, 'utf8');

// Convert export const subjects = [...] to a JSON parsable string by evaluating it
// A safer way is to temporarily write it as a CommonJS module
const tempPath = path.join(__dirname, 'temp_content.cjs');
const cjsContent = contentStr.replace('export const subjects =', 'module.exports.subjects =');
fs.writeFileSync(tempPath, cjsContent);

const { subjects } = require('./temp_content.cjs');

const pediatric = subjects.find(s => s.id === 'pediatric-nursing');

const chap1 = pediatric.chapters.find(c => c.id === 'chapter-1');
const chap2 = pediatric.chapters.find(c => c.id === 'chapter-2');
const chap3 = pediatric.chapters.find(c => c.id === 'chapter-3  High_Risk_Neonates_Study_Guide');

// 1. Merge Chapter 1 and 2
const mergedQuestions = [];
const seen = new Set();
for (const q of [...chap1.questions, ...chap2.questions]) {
  if (!seen.has(q.question)) {
    seen.add(q.question);
    mergedQuestions.push(q);
  }
}

// Renumber merged questions
mergedQuestions.forEach((q, idx) => {
  q.id = `c1_q${idx + 1}`;
});

const mergedChapter = {
  id: 'chapter-1',
  title: 'Growth and Development',
  summary: chap1.summary + '\n\n' + chap2.summary,
  pdfs: ['chapter-1.pdf', 'chapter-2.pdf'],
  questions: mergedQuestions
};

// 2. Update Chapter 3 (now Chapter 2)
const newQuestionsChap3 = [
  {
    "question": "What is the definition of a high-risk neonate?",
    "options": [
      "A newborn with a birth weight over 4000g only",
      "A newborn regardless of gestational age or birth weight who has a greater chance of morbidity and mortality",
      "A newborn who reaches 28 days of life without complications",
      "A newborn born exactly at 40 weeks of gestation"
    ],
    "answer": "A newborn regardless of gestational age or birth weight who has a greater chance of morbidity and mortality"
  },
  {
    "question": "Which of the following is a neonatal predisposing factor for high-risk status?",
    "options": [
      "Maternal hypertension",
      "Multiple gestation",
      "Low 1-minute Apgar score",
      "Maternal Diabetes Mellitus"
    ],
    "answer": "Low 1-minute Apgar score"
  },
  {
    "question": "How often should a high-risk infant's weight be recorded?",
    "options": [
      "Every hour",
      "Every day",
      "Once a week",
      "Only upon discharge"
    ],
    "answer": "Every day"
  },
  {
    "question": "What is the definition of 'Appropriate to Gestational Age' (A.G.A)?",
    "options": [
      "Infant's weight is small for his gestational age",
      "Infant's weight is large for his gestational age",
      "Infant's weight is appropriate to his gestational age",
      "Infant is born exactly on the due date"
    ],
    "answer": "Infant's weight is appropriate to his gestational age"
  },
  {
    "question": "Which score is commonly used for physical maturity assessment after birth?",
    "options": [
      "Apgar score",
      "Ballard score",
      "Glasgow Coma Scale",
      "Fenton score"
    ],
    "answer": "Ballard score"
  },
  {
    "question": "A baby born at 35 weeks gestation is classified as:",
    "options": [
      "Extremely preterm",
      "Late preterm",
      "Full term",
      "Post term"
    ],
    "answer": "Late preterm"
  },
  {
    "question": "What birth weight range defines a 'Very low birth weight' (VLBW) infant?",
    "options": [
      "Less than 1000 g",
      "1000 to 1499 g",
      "1500 to 2500 g",
      "Above 2500 g"
    ],
    "answer": "1000 to 1499 g"
  },
  {
    "question": "Which of the following is a known cause of premature birth?",
    "options": [
      "Single pregnancy",
      "Toxemia of pregnancy",
      "High nutritional status",
      "Long spacing between pregnancies"
    ],
    "answer": "Toxemia of pregnancy"
  },
  {
    "question": "What is a physical characteristic of a premature infant's head?",
    "options": [
      "It is small in proportion to the body",
      "It is large in proportion to the body",
      "It has fused sutures at birth",
      "It is covered in thick hair"
    ],
    "answer": "It is large in proportion to the body"
  },
  {
    "question": "Why do premature infants have poor control of body temperature?",
    "options": [
      "Small surface area relative to body size",
      "Excessive insulating subcutaneous fat",
      "Immaturity of the heat regulating center",
      "Overdeveloped muscular system"
    ],
    "answer": "Immaturity of the heat regulating center"
  },
  {
    "question": "The presence of soft downy hair on a premature baby's body is called:",
    "options": [
      "Vernix",
      "Lanugo",
      "Milia",
      "Erythema"
    ],
    "answer": "Lanugo"
  },
  {
    "question": "Which condition is caused by oxygen therapy exceeding 40% in preterm infants?",
    "options": [
      "Neonatal Sepsis",
      "Retrolental fibroplasias (RLF)",
      "Hypoglycemia",
      "Kernicterus"
    ],
    "answer": "Retrolental fibroplasias (RLF)"
  },
  {
    "question": "What is the recommended incubator temperature for a premature baby?",
    "options": [
      "25-30°C",
      "32-36°C",
      "37-40°C",
      "20-25°C"
    ],
    "answer": "32-36°C"
  },
  {
    "question": "What does the term 'hyperbilirubinemia' refer to?",
    "options": [
      "Low blood sugar levels",
      "Excessive level of accumulated bilirubin in the blood",
      "Lack of surfactant in the lungs",
      "Severe infection in the bloodstream"
    ],
    "answer": "Excessive level of accumulated bilirubin in the blood"
  },
  {
    "question": "Which form of bilirubin is water-soluble and can be excreted in bile?",
    "options": [
      "Unconjugated bilirubin",
      "Conjugated bilirubin",
      "Hemoglobin",
      "Albumin"
    ],
    "answer": "Conjugated bilirubin"
  },
  {
    "question": "Physiological jaundice typically appears at what time?",
    "options": [
      "The first 24 hours of life",
      "Between the 2nd and 3rd days of life",
      "After the second week of life",
      "Only in post-term infants"
    ],
    "answer": "Between the 2nd and 3rd days of life"
  },
  {
    "question": "What is the most serious complication of hyperbilirubinemia where bilirubin deposits in brain tissue?",
    "options": [
      "Sepsis",
      "RDS",
      "Kernicterus",
      "Phototherapy"
    ],
    "answer": "Kernicterus"
  },
  {
    "question": "Which of the following is a side effect of phototherapy?",
    "options": [
      "Hypertension",
      "Bronze skin syndrome",
      "Dehydration due to increased water loss",
      "Weight gain"
    ],
    "answer": "Dehydration due to increased water loss"
  },
  {
    "question": "What is the primary cause of Respiratory Distress Syndrome (RDS) in premature infants?",
    "options": [
      "Bacterial infection",
      "Lack of surfactant",
      "Maternal smoking",
      "High blood glucose"
    ],
    "answer": "Lack of surfactant"
  },
  {
    "question": "Which clinical sign is characteristic of RDS?",
    "options": [
      "Bradycardia",
      "Flaring of the nostrils",
      "Pink skin color",
      "Deep slow breathing"
    ],
    "answer": "Flaring of the nostrils"
  },
  {
    "question": "How is artificial surfactant administered to an infant with RDS?",
    "options": [
      "Intramuscular injection",
      "Through an endotracheal tube (ETT)",
      "Orally",
      "By a skin patch"
    ],
    "answer": "Through an endotracheal tube (ETT)"
  },
  {
    "question": "Infants of diabetic mothers are often larger than others, a condition known as:",
    "options": [
      "Microsomia",
      "Macrosomia",
      "Hydrops fetalis",
      "Dysmaturity"
    ],
    "answer": "Macrosomia"
  },
  {
    "question": "Why do infants of diabetic mothers experience hypoglycemia after birth?",
    "options": [
      "They stop producing insulin",
      "Because of increased insulin levels in their blood from the high glucose environment",
      "They have small livers",
      "They cannot swallow milk"
    ],
    "answer": "Because of increased insulin levels in their blood from the high glucose environment"
  },
  {
    "question": "Early-onset neonatal sepsis occurs within:",
    "options": [
      "The first 3 days of life",
      "1 to 3 weeks of life",
      "The first month of life",
      "The prenatal period only"
    ],
    "answer": "The first 3 days of life"
  },
  {
    "question": "Which of the following is a general sign of neonatal sepsis?",
    "options": [
      "Increased activity",
      "Hyperthermia (commonly)",
      "Infant generally 'not doing well'",
      "Large appetite"
    ],
    "answer": "Infant generally 'not doing well'"
  },
  {
    "question": "What is 'standard precaution' to prevent the spread of infection in the NICU?",
    "options": [
      "Proper hand washing",
      "Using the same catheter for multiple infants",
      "Allowing all visitors without masks",
      "Recycling linens without washing"
    ],
    "answer": "Proper hand washing"
  },
  {
    "question": "Radiant, evaporative, conductive, and convective are mechanisms of:",
    "options": [
      "Bilirubin production",
      "Heat loss",
      "Infection transmission",
      "Respiratory exchange"
    ],
    "answer": "Heat loss"
  },
  {
    "question": "Severe hypothermia is classified as a body temperature below:",
    "options": [
      "35.0°C",
      "32.0°C",
      "36.3°C",
      "34.9°C"
    ],
    "answer": "32.0°C"
  },
  {
    "question": "The 'warm chain' is a set of steps used to prevent:",
    "options": [
      "Neonatal Sepsis",
      "Jaundice",
      "Hypothermia",
      "Hypoglycemia"
    ],
    "answer": "Hypothermia"
  },
  {
    "question": "Which rewarming method is recommended for moderate hypothermia (32-34.9°C)?",
    "options": [
      "Warm gastric lavage only",
      "Placing the infant in a warmed incubator",
      "Cooling the room to 20°C",
      "Immediate bathing"
    ],
    "answer": "Placing the infant in a warmed incubator"
  },
  {
    "question": "What is the primary sign of 'Cold Stress' in a high-risk infant?",
    "options": [
      "Increased activity and crying",
      "Hypoglycemia and metabolic acidosis",
      "Fever and sweating",
      "Hypertension and bradycardia"
    ],
    "answer": "Hypoglycemia and metabolic acidosis"
  },
  {
    "question": "What is the definition of a 'Post-term' infant?",
    "options": [
      "Born after 37 weeks",
      "Born after 40 weeks",
      "Born after 42 weeks",
      "Born between 38 and 42 weeks"
    ],
    "answer": "Born after 42 weeks"
  },
  {
    "question": "Which complication is common in post-term infants due to placental insufficiency?",
    "options": [
      "Excessive vernix caseosa",
      "Meconium Aspiration Syndrome",
      "Macrosomia only",
      "High levels of subcutaneous fat"
    ],
    "answer": "Meconium Aspiration Syndrome"
  },
  {
    "question": "What is the main goal of using a 'Radiant Warmer' for a newborn?",
    "options": [
      "To provide phototherapy for jaundice",
      "To maintain a neutral thermal environment while allowing easy access to the baby",
      "To measure the baby's weight accurately",
      "To administer oxygen therapy"
    ],
    "answer": "To maintain a neutral thermal environment while allowing easy access to the baby"
  },
  {
    "question": "Which of the following is a symptom of 'Hypoglycemia' in a neonate?",
    "options": [
      "Loud, vigorous crying",
      "Jitteriness or tremors",
      "Flushed, red skin",
      "Increased muscle tone"
    ],
    "answer": "Jitteriness or tremors"
  },
  {
    "question": "What is the typical blood glucose threshold used to define neonatal hypoglycemia?",
    "options": [
      "Below 70 mg/dl",
      "Below 40 mg/dl",
      "Above 100 mg/dl",
      "Below 90 mg/dl"
    ],
    "answer": "Below 40 mg/dl"
  },
  {
    "question": "The 'Silverman-Anderson' score is used to assess:",
    "options": [
      "Neurological maturity",
      "The severity of respiratory distress",
      "The degree of jaundice",
      "Birth trauma"
    ],
    "answer": "The severity of respiratory distress"
  },
  {
    "question": "Which position is generally recommended for a preterm infant to improve respiratory effort?",
    "options": [
      "Flat on the back (Supine)",
      "Prone (face down) under strict monitoring or side-lying",
      "Feet elevated higher than the head",
      "Strict upright sitting"
    ],
    "answer": "Prone (face down) under strict monitoring or side-lying"
  },
  {
    "question": "What is a 'Large for Gestational Age' (LGA) infant?",
    "options": [
      "Weight above the 50th percentile",
      "Weight above the 90th percentile",
      "Weight exactly at the 75th percentile",
      "Weight below the 10th percentile"
    ],
    "answer": "Weight above the 90th percentile"
  },
  {
    "question": "Apnea in a premature infant is defined as a cessation of breathing for at least:",
    "options": [
      "5 seconds",
      "10 seconds",
      "20 seconds",
      "60 seconds"
    ],
    "answer": "20 seconds"
  },
  {
    "question": "Which assessment is crucial before the first feeding of a premature infant?",
    "options": [
      "Checking the baby's hair color",
      "Presence of sucking and swallowing reflexes",
      "Measuring the infant's length",
      "Assessing the baby's hearing"
    ],
    "answer": "Presence of sucking and swallowing reflexes"
  },
  {
    "question": "What is the purpose of 'Gavage feeding'?",
    "options": [
      "To clean the stomach of meconium",
      "To provide nutrition to infants who are too weak or uncoordinated to suck and swallow",
      "To administer intravenous fluids",
      "To treat respiratory infections"
    ],
    "answer": "To provide nutrition to infants who are too weak or uncoordinated to suck and swallow"
  },
  {
    "question": "Necrotizing Enterocolitis (NEC) primarily affects which system?",
    "options": [
      "Respiratory system",
      "Gastrointestinal system",
      "Central nervous system",
      "Skeletal system"
    ],
    "answer": "Gastrointestinal system"
  },
  {
    "question": "A key nursing intervention during phototherapy is:",
    "options": [
      "Keeping the baby fully dressed to stay warm",
      "Covering the baby's eyes with opaque patches",
      "Limiting fluid intake",
      "Applying lotion to the baby's skin"
    ],
    "answer": "Covering the baby's eyes with opaque patches"
  },
  {
    "question": "Which of the following describes 'Small for Gestational Age' (SGA)?",
    "options": [
      "Weight below the 10th percentile",
      "Weight below the 50th percentile",
      "Any baby born before 30 weeks",
      "A baby with a small head circumference only"
    ],
    "answer": "Weight below the 10th percentile"
  },
  {
    "question": "What is the most common cause of Pathological Jaundice?",
    "options": [
      "Normal breakdown of red blood cells",
      "Hemolytic disease (e.g., Rh or ABO incompatibility)",
      "Late breastfeeding",
      "Vitamin K deficiency"
    ],
    "answer": "Hemolytic disease (e.g., Rh or ABO incompatibility)"
  },
  {
    "question": "In a high-risk infant, 'Tachycardia' is typically defined as a heart rate above:",
    "options": [
      "100 beats per minute",
      "140 beats per minute",
      "160 beats per minute",
      "200 beats per minute"
    ],
    "answer": "160 beats per minute"
  },
  {
    "question": "Kangaroo care (skin-to-skin contact) is primarily used to:",
    "options": [
      "Teach the baby how to walk",
      "Promote thermal regulation and bonding",
      "Decrease the baby's heart rate",
      "Treat neonatal sepsis"
    ],
    "answer": "Promote thermal regulation and bonding"
  },
  {
    "question": "Which of the following is a sign of 'Inborn Error of Metabolism' in a neonate?",
    "options": [
      "Rapid weight gain",
      "Persistent vomiting and unusual odor of urine",
      "Increased alertness",
      "Pink, moist mucous membranes"
    ],
    "answer": "Persistent vomiting and unusual odor of urine"
  },
  {
    "question": "When monitoring an infant in an incubator, the humidity is kept high to:",
    "options": [
      "Increase the risk of infection",
      "Prevent insensible water loss through the skin",
      "Keep the baby's clothes dry",
      "Decrease the need for oxygen"
    ],
    "answer": "Prevent insensible water loss through the skin"
  }
];

newQuestionsChap3.forEach((q, idx) => {
  q.id = `c2_q${idx + 1}`;
});

const updatedChap3 = {
  ...chap3,
  id: 'chapter-2',
  title: 'High Risk Neonates',
  pdfs: ['chapter-3  High_Risk_Neonates_Study_Guide.pdf'],
  questions: newQuestionsChap3
};

// Replace chapters array
// We drop chap2 entirely. We replace chap1 and chap3 with their merged/updated versions.
// Then we reorder them.
const remainingChapters = pediatric.chapters.filter(c => 
  c.id !== 'chapter-1' && 
  c.id !== 'chapter-2' && 
  c.id !== 'chapter-3  High_Risk_Neonates_Study_Guide'
);

// We should also probably preserve the order of the other chapters. 
// Just putting the merged ones first.
pediatric.chapters = [mergedChapter, updatedChap3, ...remainingChapters];

const outputStr = `export const subjects = ${JSON.stringify(subjects, null, 2)};\n`;

fs.writeFileSync(contentPath, outputStr);
console.log('Successfully updated content.js');
