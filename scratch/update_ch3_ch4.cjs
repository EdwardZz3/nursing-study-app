const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/data/content.js');
let contentStr = fs.readFileSync(contentPath, 'utf8');

const tempPath = path.join(__dirname, 'temp_content_2.cjs');
const cjsContent = contentStr.replace('export const subjects =', 'module.exports.subjects =');
fs.writeFileSync(tempPath, cjsContent);

const { subjects } = require('./temp_content_2.cjs');
const pediatric = subjects.find(s => s.id === 'pediatric-nursing');

const inputData = {
  "unit_three_endocrine_and_metabolic_disorders": [
    {
      "question_number": 1,
      "question": "Which of the following defines Diabetes Mellitus?",
      "options": {
        "A": "A temporary increase in blood pressure",
        "B": "A chronic disease characterized by insufficient insulin production or inefficient insulin use",
        "C": "A condition caused by excessive iodine intake",
        "D": "A localized infection of the pancreas"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 2,
      "question": "Type 1 diabetes is primarily caused by:",
      "options": {
        "A": "Excessive body weight",
        "B": "Insulin resistance in the cells",
        "C": "Autoimmune destruction of the islets of Langerhans",
        "D": "Dietary factors and stress"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 3,
      "question": "A condition where cells fail to respond to insulin properly is known as:",
      "options": {
        "A": "Juvenile diabetes",
        "B": "Thyroid dysgenesis",
        "C": "Insulin resistance",
        "D": "Hyperglycemia"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 4,
      "question": "Which of the following is NOT a classic symptom of diabetes?",
      "options": {
        "A": "Polyuria",
        "B": "Polydipsia",
        "C": "Polyphagia",
        "D": "Weight gain"
      },
      "answer": "D",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 5,
      "question": "The recommended dietary percentage of carbohydrates for a diabetic child is:",
      "options": {
        "A": "20%",
        "B": "30-35%",
        "C": "45-50%",
        "D": "70-80%"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 6,
      "question": "Physical exercise in diabetic children helps to:",
      "options": {
        "A": "Increase insulin requirements",
        "B": "Raise blood glucose levels",
        "C": "Lower blood glucose and improve glucose tolerance",
        "D": "Increase anxiety and stress"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 7,
      "question": "Glycosylated hemoglobin (HbA1C) is used to:",
      "options": {
        "A": "Measure current urine sugar levels",
        "B": "Diagnose congenital hypothyroidism",
        "C": "Investigate long-term glucose control",
        "D": "Test for iodine deficiency"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 8,
      "question": "A common local complication at the site of insulin injection is:",
      "options": {
        "A": "Retinopathy",
        "B": "Fat atrophy",
        "C": "Nephropathy",
        "D": "Dental decay"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 9,
      "question": "Which instruction is vital for parents regarding insulin administration?",
      "options": {
        "A": "Injecting intramuscularly (IM)",
        "B": "Storing insulin in direct sunlight",
        "C": "Rotating injection sites",
        "D": "Using the same site every time"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 10,
      "question": "Congenital hypothyroidism is defined as:",
      "options": {
        "A": "An overactive thyroid gland from birth",
        "B": "A thyroid hormone deficiency affecting infants from birth",
        "C": "A lack of insulin production",
        "D": "A vitamin D deficiency"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 11,
      "question": "Thyroid dysgenesis includes which of the following?",
      "options": {
        "A": "Excessive iodine intake",
        "B": "Thyroid agenesis (missing gland)",
        "C": "Pituitary tumors",
        "D": "Autoimmune destruction of beta cells"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 12,
      "question": "Which of the following is a symptom of hypothyroidism in infants?",
      "options": {
        "A": "Rapid heartbeat",
        "B": "Small tongue",
        "C": "Large, thick tongue (Macroglossia)",
        "D": "Weight loss"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 13,
      "question": "Newborn screening for hypothyroidism involves measuring:",
      "options": {
        "A": "Blood glucose and HbA1C",
        "B": "T4 and TSH levels",
        "C": "Vitamin D and Calcium",
        "D": "White blood cell count"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 14,
      "question": "The standard medication for treating congenital hypothyroidism is:",
      "options": {
        "A": "Insulin",
        "B": "Levothyroxine",
        "C": "Penicillin",
        "D": "Mycostatin"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 15,
      "question": "To ensure proper absorption, Levothyroxine should NOT be mixed with:",
      "options": {
        "A": "Water",
        "B": "Soy protein formula",
        "C": "Breast milk",
        "D": "Fruit juice"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 16,
      "question": "Untreated congenital hypothyroidism can lead to:",
      "options": {
        "A": "Type 2 diabetes",
        "B": "Permanent learning problems and mental disability",
        "C": "Hyperactivity",
        "D": "Improved bone growth"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 17,
      "question": "Hyperthyroidism occurs when the thyroid gland:",
      "options": {
        "A": "Produces too little hormone",
        "B": "Produces more hormones than needed",
        "C": "Stops growing",
        "D": "Is surgically removed"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 18,
      "question": "The most common cause of hyperthyroidism in children is:",
      "options": {
        "A": "Thyroiditis",
        "B": "Excessive body weight",
        "C": "Graves' disease",
        "D": "Vitamin D deficiency"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 19,
      "question": "A clinical sign of hyperthyroidism is:",
      "options": {
        "A": "Cold intolerance",
        "B": "Constipation",
        "C": "Protrusion of the eye balls (Exophthalmos)",
        "D": "Slow heartbeat"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 20,
      "question": "Which classification of goiter occurs typically at puberty or during pregnancy?",
      "options": {
        "A": "Endemic goiter",
        "B": "Toxic goiter",
        "C": "Physiological goiter",
        "D": "Thyroiditis"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 21,
      "question": "Treatment options for pediatric hyperthyroidism include:",
      "options": {
        "A": "High-calorie diet and insulin",
        "B": "Anti-thyroid medicine, radioactive iodine, or surgery",
        "C": "Vitamin D supplements only",
        "D": "Low-protein diet"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 22,
      "question": "Nursing care for hyperthyroidism includes providing:",
      "options": {
        "A": "A hot, stimulating environment",
        "B": "Adequate rest and a cool, quiet environment",
        "C": "A low-calorie diet",
        "D": "Foods that increase peristalsis"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 23,
      "question": "Signs of anti-thyroid drug toxicity include:",
      "options": {
        "A": "Polyuria and polydipsia",
        "B": "Jaundice and macroglossia",
        "C": "Fever, headache, nausea, and stiffness of joints",
        "D": "Excessive weight gain"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 24,
      "question": "In diabetic foot care, the nurse should instruct parents to:",
      "options": {
        "A": "Avoid regular nail care",
        "B": "Ensure proper hygiene and regular inspection",
        "C": "Walk barefoot to improve circulation",
        "D": "Only check the feet if there is pain"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 25,
      "question": "Hypoglycemia is characterized by:",
      "options": {
        "A": "High blood glucose",
        "B": "Low blood glucose",
        "C": "High iodine levels",
        "D": "Excessive thyroid hormone"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 26,
      "question": "Which complication of diabetes involves damage to the eyes?",
      "options": {
        "A": "Nephropathy",
        "B": "Neuropathy",
        "C": "Retinopathy",
        "D": "Retrolental fibroplasia"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 27,
      "question": "Children with congenital hypothyroidism may exhibit:",
      "options": {
        "A": "Hyperactivity",
        "B": "Umbilical hernia",
        "C": "Rapid bone growth",
        "D": "Small anterior fontanels"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 28,
      "question": "For hypothyroidism, how should the Levothyroxine tablet be given to an infant?",
      "options": {
        "A": "Swallowed whole",
        "B": "Crushed and mixed with a small volume of liquid",
        "C": "Dissolved in a full bottle of soy milk",
        "D": "Injected subcutaneously"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 29,
      "question": "Which laboratory test helps determine the spread of a goiter?",
      "options": {
        "A": "HbA1C",
        "B": "CT scan or MRI",
        "C": "Blood sugar curve",
        "D": "Random blood glucose"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 30,
      "question": "Endemic goiter is typically caused by:",
      "options": {
        "A": "Autoimmune response",
        "B": "Lack of iodine in specific geographical areas",
        "C": "Excessive exercise",
        "D": "Obesity"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    }
  ],
  "unit_four_infectious_disorders": [
    {
      "question_number": 31,
      "question": "Neonatal infection can occur:",
      "options": {
        "A": "Only after the baby is one month old",
        "B": "Antenatal, intranatal, and postnatal",
        "C": "Only through transplacental transmission",
        "D": "Only during the first 24 hours"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 32,
      "question": "The causative organisms for Ophthalmia Neonatorum are:",
      "options": {
        "A": "Candida Albicans",
        "B": "Neisseria Gonorrhea or Chlamydia",
        "C": "E. coli",
        "D": "Tetanus bacillus"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 33,
      "question": "A serious complication of untreated Ophthalmia Neonatorum is:",
      "options": {
        "A": "Weight loss",
        "B": "Corneal ulceration and loss of vision",
        "C": "Esophagitis",
        "D": "Hypoglycemia"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 34,
      "question": "Oral Thrush is caused by the fungus:",
      "options": {
        "A": "Staphylococcus",
        "B": "Streptococcus",
        "C": "Candida Albicans",
        "D": "Toxoplasma gondii"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 35,
      "question": "The appearance of oral thrush is described as:",
      "options": {
        "A": "Red papules on the skin",
        "B": "Creamy white lesions on the tongue and mouth",
        "C": "Yellow discharge from the eyes",
        "D": "Foul-smelling umbilical stump"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 36,
      "question": "In the acronym TORCH, the 'R' stands for:",
      "options": {
        "A": "Respiratory",
        "B": "Rubella",
        "C": "Renal",
        "D": "Retinopathy"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 37,
      "question": "TORCH infections pose the greatest risk to the fetus during the:",
      "options": {
        "A": "First trimester",
        "B": "Second trimester",
        "C": "Third trimester",
        "D": "Postnatal period"
      },
      "answer": "A",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 38,
      "question": "A classic sign of TORCH syndrome in a newborn is:",
      "options": {
        "A": "Macrosomia",
        "B": "Microcephaly (small head)",
        "C": "Hyperglycemia",
        "D": "Rapid weight gain"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 39,
      "question": "Impetigo involves the invasion of which skin layer?",
      "options": {
        "A": "Deep muscle tissue",
        "B": "Superficial layer of the skin",
        "C": "Skeletal system",
        "D": "Circulatory system"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 40,
      "question": "The causative organism of Tetanus Neonatorum is:",
      "options": {
        "A": "E. coli",
        "B": "Clostridium tetani",
        "C": "Staphylococcus aureus",
        "D": "Herpes simplex"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 41,
      "question": "A characteristic sign of Tetanus Neonatorum is:",
      "options": {
        "A": "Excessive sucking",
        "B": "Tetanic spasm of the jaw muscles (lockjaw)",
        "C": "Hypotonia (floppy muscles)",
        "D": "Hypothermia"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 42,
      "question": "The mortality rate for Tetanus Neonatorum can be as high as:",
      "options": {
        "A": "10%",
        "B": "25%",
        "C": "50%",
        "D": "90%"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 43,
      "question": "Umbilical infection can be complicated by:",
      "options": {
        "A": "Retinopathy",
        "B": "Septicemia or Tetanus",
        "C": "Diabetes Mellitus",
        "D": "Hyperthyroidism"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 44,
      "question": "Which nursing intervention is essential for an infant with an umbilical infection?",
      "options": {
        "A": "Immediate tub bathing",
        "B": "Frequent cord care with alcohol",
        "C": "Applying a tight bandage",
        "D": "Feeding the baby less frequently"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 45,
      "question": "Neonatal meningitis is an inflammation of the:",
      "options": {
        "A": "Heart valves",
        "B": "Lungs",
        "C": "Thin membrane covering the brain and spinal cord",
        "D": "Thyroid gland"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 46,
      "question": "A specific CNS sign of neonatal meningitis is:",
      "options": {
        "A": "Bulging fontanel",
        "B": "Slow bone growth",
        "C": "Excessive hair growth",
        "D": "Low blood pressure"
      },
      "answer": "A",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 47,
      "question": "Primary pathogens in neonatal meningitis include:",
      "options": {
        "A": "Group B streptococcus and E. coli",
        "B": "Candida albicans",
        "C": "Tetanus palladium",
        "D": "Rubella virus"
      },
      "answer": "A",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 48,
      "question": "Goal 2 of nursing care for an infected infant is to:",
      "options": {
        "A": "Maintain nutrition",
        "B": "Prevent the spread of infection",
        "C": "Support the parents",
        "D": "Recognize signs of infection"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 49,
      "question": "Meticulous hand washing is an example of:",
      "options": {
        "A": "Supportive therapy",
        "B": "Standard infection control principle",
        "C": "Diagnostic procedure",
        "D": "Gavage feeding"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 50,
      "question": "To prevent toxoplasmosis, pregnant women should avoid contact with:",
      "options": {
        "A": "Cooked meat",
        "B": "Cat feces",
        "C": "Alcohol wipes",
        "D": "Saline solution"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 51,
      "question": "What is the prophylactic treatment for Ophthalmia Neonatorum immediately after birth?",
      "options": {
        "A": "Mycostatin drops",
        "B": "Chloramphenicol eye drops",
        "C": "Oral penicillin",
        "D": "Gentian violet"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 52,
      "question": "What should be ready for an infant suffering from Tetanus Neonatorum respiratory distress?",
      "options": {
        "A": "Insulin pump",
        "B": "Tracheostomy set",
        "C": "Phototherapy lights",
        "D": "Weight scale"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 53,
      "question": "Oral thrush can be treated locally with:",
      "options": {
        "A": "Alcohol",
        "B": "Gentian violet or Daktarin gel",
        "C": "Neomycin ointment",
        "D": "Saline irrigation only"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 54,
      "question": "Antenatal infection can be transmitted via the:",
      "options": {
        "A": "Infected vagina",
        "B": "Improper cord cutting",
        "C": "Placenta (transplacental)",
        "D": "Feeding articles"
      },
      "answer": "C",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 55,
      "question": "Diagnosis of neonatal meningitis often requires:",
      "options": {
        "A": "Urine ketones test",
        "B": "Cerebrospinal fluid (CSF) culture",
        "C": "Thyroid ultrasound",
        "D": "Fasting blood glucose"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 56,
      "question": "In impetigo, erythematous papules progress to:",
      "options": {
        "A": "Pustules that rupture and crust",
        "B": "Large thick tongues",
        "C": "Permanent scars",
        "D": "Blue spots"
      },
      "answer": "A",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 57,
      "question": "The incubation period for Tetanus Neonatorum is:",
      "options": {
        "A": "24 hours",
        "B": "5 days to several days",
        "C": "1 month",
        "D": "1 year"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 58,
      "question": "Nursing care for meningitis includes observing for:",
      "options": {
        "A": "Bulging and pulsating anterior fontanel",
        "B": "Delayed dentition",
        "C": "Excessive sweating",
        "D": "Slow healing wounds"
      },
      "answer": "A",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 59,
      "question": "Which vaccine is mentioned for the prevention of Tetanus?",
      "options": {
        "A": "HbA1C",
        "B": "DPT",
        "C": "T4",
        "D": "MMR"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    },
    {
      "question_number": 60,
      "question": "Sepsis in newborns is often characterized by:",
      "options": {
        "A": "High energy levels",
        "B": "Vague or nonspecific signs of illness",
        "C": "Rapid muscle development",
        "D": "Immediate recovery without treatment"
      },
      "answer": "B",
      "citation": "[cite: 3]"
    }
  ]
};

function formatQuestions(rawQuestions, prefix) {
  return rawQuestions.map((q, idx) => {
    const optionsArray = [q.options.A, q.options.B, q.options.C, q.options.D];
    const answerText = q.options[q.answer];
    return {
      id: `${prefix}_q${idx + 1}`,
      question: q.question,
      options: optionsArray,
      answer: answerText
    };
  });
}

// Find chapters to update
// From previous step, old chapter 4 has id: 'chapter-4 Endocrine_Metabolic_Disorders_Study_Guide'
// Old chapter 5 has id: 'chapter-5Neonatal_Infections_Study_Guide'
const ch3 = pediatric.chapters.find(c => c.id === 'chapter-4 Endocrine_Metabolic_Disorders_Study_Guide');
const ch4 = pediatric.chapters.find(c => c.id === 'chapter-5Neonatal_Infections_Study_Guide');

if (ch3) {
  ch3.id = 'chapter-3';
  ch3.pdfs = ['chapter-4 Endocrine_Metabolic_Disorders_Study_Guide.pdf'];
  ch3.questions = formatQuestions(inputData.unit_three_endocrine_and_metabolic_disorders, 'c3');
}

if (ch4) {
  ch4.id = 'chapter-4';
  ch4.pdfs = ['chapter-5Neonatal_Infections_Study_Guide.pdf'];
  ch4.questions = formatQuestions(inputData.unit_four_infectious_disorders, 'c4');
}

const outputStr = `export const subjects = ${JSON.stringify(subjects, null, 2)};\n`;
fs.writeFileSync(contentPath, outputStr);
console.log('Successfully updated chapter 3 and 4 in content.js');
