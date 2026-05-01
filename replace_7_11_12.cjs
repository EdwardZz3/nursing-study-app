const fs = require('fs');

const unit_11_urinary_system = [
    {
      "question": "What is the primary excretory function of the kidney?",
      "options": ["Production of insulin", "Removal of metabolic waste products", "Regulation of body temperature", "Digestion of proteins"],
      "answer": "Removal of metabolic waste products"
    },
    {
      "question": "Which hormone is produced by the kidney to stimulate red blood cell production?",
      "options": ["Renin", "Erythropoietin", "Aldosterone", "Cortisol"],
      "answer": "Erythropoietin"
    },
    {
      "question": "Nephrotic Syndrome is characterized by which of the following?",
      "options": ["Low levels of protein in urine", "Increased glomerular permeability to plasma protein", "Decreased salt and water retention", "Dehydration"],
      "answer": "Increased glomerular permeability to plasma protein"
    },
    {
      "question": "At what age does Nephrotic Syndrome most commonly occur?",
      "options": ["Birth to 6 months", "2 to 5 years", "10 to 12 years", "Adolescence"],
      "answer": "2 to 5 years"
    },
    {
      "question": "Which clinical manifestation is associated with fluid in the peritoneal cavity in Nephrotic Syndrome?",
      "options": ["Pleural effusion", "Ascites", "Anorexia", "Hypertension"],
      "answer": "Ascites"
    },
    {
      "question": "What is the characteristic of urine in a child with Nephrotic Syndrome?",
      "options": ["Protein excretion exceeds 2 gm/24 hrs", "High glucose levels", "Absence of white blood cells", "Low specific gravity"],
      "answer": "Protein excretion exceeds 2 gm/24 hrs"
    },
    {
      "question": "What type of diet is recommended for a child with Nephrotic Syndrome during the edematous phase?",
      "options": ["High sodium", "Sodium-restricted", "High fat", "Fluid-unrestricted"],
      "answer": "Sodium-restricted"
    },
    {
      "question": "What is the primary cause of Acute Glomerulonephritis?",
      "options": ["Genetic mutation", "Group A beta hemolytic streptococci", "High sugar intake", "Lack of Vitamin D"],
      "answer": "Group A beta hemolytic streptococci"
    },
    {
      "question": "Which presenting symptom is common in Acute Glomerulonephritis?",
      "options": ["Profuse sweating", "Grossly bloody urine", "Extreme hunger", "Increased energy"],
      "answer": "Grossly bloody urine"
    },
    {
      "question": "How long should activities be limited for a child with Acute Glomerulonephritis?",
      "options": ["1 week", "2 to 4 weeks", "6 months", "No limitation needed"],
      "answer": "2 to 4 weeks"
    },
    {
      "question": "Why are UTIs more common in girls?",
      "options": ["Genetic predisposition", "Shorter urinary tract", "Dietary habits", "Higher physical activity"],
      "answer": "Shorter urinary tract"
    },
    {
      "question": "Which bacteria is the most common cause of UTIs?",
      "options": ["Streptococcus", "Escherichia coli", "Staphylococcus", "Hepatitis B"],
      "answer": "Escherichia coli"
    },
    {
      "question": "What is a symptom of UTI specifically in neonates?",
      "options": ["Painful urination", "Foul smelling urine", "Discomfort above pubic bone", "Urgency"],
      "answer": "Foul smelling urine"
    },
    {
      "question": "Acute renal failure is defined as:",
      "options": ["Permanent damage developing over years", "Abrupt onset and potentially reversible damage", "Obstruction due to stones only", "A result of Vitamin D deficiency"],
      "answer": "Abrupt onset and potentially reversible damage"
    },
    {
      "question": "What defines the Oliguric Phase of Acute Renal Failure?",
      "options": [">1000 cc urine/day", "<400 cc urine/day", "Normal BUN levels", "Absence of protein in urine"],
      "answer": "<400 cc urine/day"
    },
    {
      "question": "Which is a 'Prerenal' cause of renal failure?",
      "options": ["Bladder stones", "Thrombus in renal artery", "Acute tubular necrosis", "Tumors"],
      "answer": "Thrombus in renal artery"
    },
    {
      "question": "What is a cardiovascular manifestation of renal failure?",
      "options": ["Hypotension", "Hyperkalemia", "Bradycardia", "Low blood cell count only"],
      "answer": "Hyperkalemia"
    },
    {
      "question": "In the diuretic phase of ARF, the early phase is characterized by:",
      "options": ["Urine output <100 cc/day", "Hypotonic urine", "High specific gravity", "Normal BUN levels"],
      "answer": "Hypotonic urine"
    },
    {
      "question": "Which diagnostic test for renal failure shows abnormal heart rhythms?",
      "options": ["Chest x-ray", "Bone scan", "Electrocardiogram (ECG)", "Renal ultrasound"],
      "answer": "Electrocardiogram (ECG)"
    },
    {
      "question": "For a child with renal failure, nursing interventions include:",
      "options": ["Encouraging high sodium intake", "Daily weights and strict I&O", "Unlimited fluid intake", "Encouraging a high-protein diet"],
      "answer": "Daily weights and strict I&O"
    },
    {
      "question": "What is a psychosocial manifestation of renal failure?",
      "options": ["Muscle weakness", "Anemia", "Depression", "Dyspnea"],
      "answer": "Depression"
    },
    {
      "question": "The recovery phase of ARF can last up to:",
      "options": ["1 week", "1 month", "4 to 5 months", "1 year"],
      "answer": "4 to 5 months"
    },
    {
      "question": "Postrenal causes of renal failure include:",
      "options": ["Hemorrhage", "Stones and tumors", "Glomerulonephritis", "Diabetes"],
      "answer": "Stones and tumors"
    },
    {
      "question": "The late diuretic phase is marked by:",
      "options": ["BUN returning to normal", "Increased lethargy", "Decreased urine output", "High potassium levels"],
      "answer": "BUN returning to normal"
    },
    {
      "question": "What nursing diagnosis is related to uremia in renal failure?",
      "options": ["Excess fluid volume", "Sensory alterations", "Fatigue", "Knowledge deficit"],
      "answer": "Sensory alterations"
    },
    {
      "question": "Hypertension appears during which days of Acute Glomerulonephritis?",
      "options": ["First 4 days", "After 2 weeks", "Only at night", "It does not appear"],
      "answer": "First 4 days"
    },
    {
      "question": "Which test confirms the diagnosis of streptococcal infection in Glomerulonephritis?",
      "options": ["Renal biopsy", "Culture of throat swab", "Bone scan", "Chest x-ray"],
      "answer": "Culture of throat swab"
    },
    {
      "question": "What is the sex ratio for Nephrotic Syndrome in young children?",
      "options": ["1:1", "2:1 (boys to girls)", "3:1 (girls to boys)", "4:1"],
      "answer": "2:1 (boys to girls)"
    },
    {
      "question": "Which is a complication of Nephrotic Syndrome?",
      "options": ["Increased growth", "Pulmonary edema", "Low blood pressure only", "Excessive energy"],
      "answer": "Pulmonary edema"
    },
    {
      "question": "To promote skin integrity in a child with edema, the nurse should:",
      "options": ["Keep the child in one position", "Turn and position every 2 hours", "Limit fluid intake only", "Avoid using soap"],
      "answer": "Turn and position every 2 hours"
    }
  ];

const unit_12_hematological_disorders = [
    {
      "question": "What causes Thalassemia?",
      "options": ["Bacterial infection", "Genetic mutation or deletion", "Lack of exercise", "Excessive iron intake"],
      "answer": "Genetic mutation or deletion"
    },
    {
      "question": "Thalassemia major onset generally occurs at what age?",
      "options": ["Birth", "6-24 months", "5-10 years", "Adulthood"],
      "answer": "6-24 months"
    },
    {
      "question": "What is a common skeletal complication of severe Thalassemia?",
      "options": ["Bone marrow shrinkage", "Bone deformities and thinning", "Increased bone density", "Shortened limbs only"],
      "answer": "Bone deformities and thinning"
    },
    {
      "question": "Why might a child with Thalassemia have an enlarged spleen?",
      "options": ["Lack of iron", "Destruction of large numbers of RBCs", "Viral infection", "High protein diet"],
      "answer": "Destruction of large numbers of RBCs"
    },
    {
      "question": "The drug Deferoxamine is used in Thalassemia for:",
      "options": ["Increasing blood sugar", "Iron chelation therapy", "Treating bacterial infection", "Pain relief"],
      "answer": "Iron chelation therapy"
    },
    {
      "question": "Sickle cell anemia is what type of genetic disorder?",
      "options": ["X-linked dominant", "Autosomal recessive", "Autosomal dominant", "Y-linked"],
      "answer": "Autosomal recessive"
    },
    {
      "question": "What shape do RBCs take in Sickle Cell Anemia?",
      "options": ["Square", "Disc-shaped", "C-shaped (sickle)", "Star-shaped"],
      "answer": "C-shaped (sickle)"
    },
    {
      "question": "What is a Vaso-occlusive crisis?",
      "options": ["Rapid drop in Hb", "Obstructed capillaries causing ischemia and pain", "Excessive bleeding", "Allergic reaction to food"],
      "answer": "Obstructed capillaries causing ischemia and pain"
    },
    {
      "question": "Hand and foot syndrome in Sickle Cell is caused by vaso-occlusion in:",
      "options": ["Metacarpals and metatarsals", "Lungs", "Brain", "Intestines"],
      "answer": "Metacarpals and metatarsals"
    },
    {
      "question": "Which race is Sickle Cell Anemia most common in?",
      "options": ["Asian", "Caucasian", "Black race", "Hispanic"],
      "answer": "Black race"
    },
    {
      "question": "Classic Hemophilia (Hemophilia A) is a deficiency of which factor?",
      "options": ["Factor IX", "Factor VIII", "Factor X", "Factor V"],
      "answer": "Factor VIII"
    },
    {
      "question": "Why is Hemophilia A more common in males?",
      "options": ["They have two X chromosomes", "They have only one X chromosome", "It is a Y-linked trait", "Males have less blood"],
      "answer": "They have only one X chromosome"
    },
    {
      "question": "What does the 'I' in the RICE treatment for Hemophilia stand for?",
      "options": ["Injection", "Ice", "Immersion", "Ibuprofen"],
      "answer": "Ice"
    },
    {
      "question": "Which medication should be avoided in Hemophilia because it promotes bleeding?",
      "options": ["Acetaminophen", "Aspirin", "Codeine", "Corticosteroids"],
      "answer": "Aspirin"
    },
    {
      "question": "What is a common sign of internal bleeding into joints in Hemophilia?",
      "options": ["Increased range of motion", "Swelling and pain", "Decreased skin temperature", "Numbness only"],
      "answer": "Swelling and pain"
    },
    {
      "question": "Idiopathic Thrombocytopenic Purpura (ITP) is characterized by:",
      "options": ["High white blood cell count", "Low platelet count", "High hemoglobin", "Excessive iron"],
      "answer": "Low platelet count"
    },
    {
      "question": "What are Petechiae?",
      "options": ["Large bone fractures", "Tiny red dots under the skin", "Joint swellings", "Deep muscle bruises"],
      "answer": "Tiny red dots under the skin"
    },
    {
      "question": "The most dangerous symptom of ITP is bleeding in the:",
      "options": ["Mouth", "Joints", "Head", "Skin"],
      "answer": "Head"
    },
    {
      "question": "Which ratio describes the gender prevalence of ITP in adults?",
      "options": ["3:2 (Female to Male)", "1:1", "4:1 (Male to Female)", "2:1 (Male to Female)"],
      "answer": "3:2 (Female to Male)"
    },
    {
      "question": "In Thalassemia Major, the goal is to maintain Hb at what level?",
      "options": ["5-6 g/dL", "9-10 g/dL", "14-15 g/dL", "Above 18 g/dL"],
      "answer": "9-10 g/dL"
    },
    {
      "question": "Which diagnostic test is used to detect the percentage of different hemoglobins?",
      "options": ["Hemoglobin electrophoresis", "Chest x-ray", "Renal biopsy", "Glucose test"],
      "answer": "Hemoglobin electrophoresis"
    },
    {
      "question": "Sickle cell crises can be precipitated by:",
      "options": ["Hydration", "Hypoxia and dehydration", "Sleeping", "Eating vegetables"],
      "answer": "Hypoxia and dehydration"
    },
    {
      "question": "What is the life-saving treatment for severe ITP involving a surgical procedure?",
      "options": ["Spleen removal (Splenectomy)", "Kidney transplant", "Liver biopsy", "Heart surgery"],
      "answer": "Spleen removal (Splenectomy)"
    },
    {
      "question": "What is 'Christmas Disease'?",
      "options": ["Hemophilia A", "Hemophilia B", "Thalassemia Minor", "Sickle Cell Trait"],
      "answer": "Hemophilia B"
    },
    {
      "question": "Desmopressin works in Hemophilia A by:",
      "options": ["Destroying platelets", "Increasing Factor VIII levels", "Decreasing blood pressure", "Eliminating iron"],
      "answer": "Increasing Factor VIII levels"
    },
    {
      "question": "Hematocrit and hemoglobin monitoring in ITP nursing care is to ensure:",
      "options": ["Weight gain", "Prevention of infection", "Detection of internal bleeding", "Bone growth"],
      "answer": "Detection of internal bleeding"
    },
    {
      "question": "A complication of frequent blood transfusions in Thalassemia is:",
      "options": ["Iron overload", "Dehydration", "Vitamin D deficiency", "Hypotension"],
      "answer": "Iron overload"
    },
    {
      "question": "In Sickle Cell Anemia, the sickle shape causes cells to be:",
      "options": ["Soft and flexible", "Stiff and sticky", "Round and smooth", "Larger than normal"],
      "answer": "Stiff and sticky"
    },
    {
      "question": "What type of environment should be provided for a child with Sickle Cell crisis?",
      "options": ["Highly stimulating", "Bed rest and minimized energy expenditure", "Outdoor exercise", "High altitude"],
      "answer": "Bed rest and minimized energy expenditure"
    },
    {
      "question": "Purpura is defined as:",
      "options": ["Yellowing of the skin", "Purple color of skin due to blood leaking underneath", "White patches", "Itchy rash"],
      "answer": "Purple color of skin due to blood leaking underneath"
    }
  ];

const unit_07_nervous_system_disorders = [
    {
      "question": "Which disorder is defined as a group of conditions affecting a child's ability to move and maintain balance and posture?",
      "options": ["Down's Syndrome", "Cerebral Palsy", "Mental Retardation", "Gastroenteritis"],
      "answer": "Cerebral Palsy",
      "citation": ""
    },
    {
      "question": "What is the most common motor disability in childhood?",
      "options": ["Spastic diplegia", "Muscular dystrophy", "Cerebral Palsy", "Ataxia"],
      "answer": "Cerebral Palsy",
      "citation": ""
    },
    {
      "question": "Cerebral Palsy is primarily caused by damage to which part of the body?",
      "options": ["Spinal cord", "Peripheral nerves", "Brain", "Muscles"],
      "answer": "Brain",
      "citation": ""
    },
    {
      "question": "Which maternal infection is linked to a parasite found in contaminated food and cat feces?",
      "options": ["Rubella", "Syphilis", "Toxoplasmosis", "Cytomegalovirus"],
      "answer": "Toxoplasmosis",
      "citation": ""
    },
    {
      "question": "Babies weighing less than how many kilograms are at a higher risk for Cerebral Palsy?",
      "options": ["1.5 kg", "2.0 kg", "2.5 kg", "3.0 kg"],
      "answer": "2.5 kg",
      "citation": ""
    },
    {
      "question": "What is the most common movement disorder associated with Cerebral Palsy?",
      "options": ["Ataxia", "Spasticity", "Rigidity", "Tremors"],
      "answer": "Spasticity",
      "citation": ""
    },
    {
      "question": "Which type of gait is characterized by knees crossing in a scissors-like fashion?",
      "options": ["Asymmetrical gait", "Wide gait", "Spastic diplegia gait", "Ataxic gait"],
      "answer": "Spastic diplegia gait",
      "citation": ""
    },
    {
      "question": "Which type of Cerebral Palsy affects about 80% of children with the condition?",
      "options": ["Dyskinetic CP", "Ataxic CP", "Spastic CP", "Mixed CP"],
      "answer": "Spastic CP",
      "citation": ""
    },
    {
      "question": "What is the most severe form of spastic CP, affecting all four limbs and the trunk?",
      "options": ["Spastic diplegia", "Spastic hemiplegia", "Spastic quadriplegia", "Dyskinetic CP"],
      "answer": "Spastic quadriplegia",
      "citation": ""
    },
    {
      "question": "In Dyskinetic Cerebral Palsy, what is a characteristic of the muscle tone?",
      "options": ["Always floppy", "Always stiff", "Changes from too tight to too loose", "Normal"],
      "answer": "Changes from too tight to too loose",
      "citation": ""
    },
    {
      "question": "Which diagnostic tool uses radio waves and magnetic fields to produce 3D brain images?",
      "options": ["Cranial ultrasound", "EEG", "MRI", "CT Scan"],
      "answer": "MRI",
      "citation": ""
    },
    {
      "question": "What complication involves muscle tissue shortening due to severe tightening?",
      "options": ["Osteoporosis", "Contracture", "Osteoarthritis", "Scoliosis"],
      "answer": "Contracture",
      "citation": ""
    },
    {
      "question": "Which medication is typically prescribed to treat tremors and muscle stiffness in CP?",
      "options": ["Anticonvulsants", "Anticholinergics", "Muscle relaxants", "Benzodiazepines"],
      "answer": "Anticholinergics",
      "citation": ""
    },
    {
      "question": "What is the recommended positioning for a child with CP during feedings?",
      "options": ["Supine", "Side-lying", "Upright", "Prone"],
      "answer": "Upright",
      "citation": ""
    },
    {
      "question": "Down's Syndrome is also known by which chromosomal name?",
      "options": ["Trisomy 18", "Trisomy 21", "Monosomy X", "Trisomy 13"],
      "answer": "Trisomy 21",
      "citation": ""
    },
    {
      "question": "What is a significant risk factor for having a child with Down's Syndrome?",
      "options": ["Low maternal age", "Increased maternal age", "Paternal smoking", "High protein diet"],
      "answer": "Increased maternal age",
      "citation": ""
    },
    {
      "question": "Which physical characteristic is common in Down's Syndrome?",
      "options": ["Long neck", "Eyes that slant up", "Three palm creases", "Tall height"],
      "answer": "Eyes that slant up",
      "citation": ""
    },
    {
      "question": "Why are thyroid levels (TSH and T4) monitored in children with Down's Syndrome?",
      "options": ["To rule out leukemia", "To rule out hypothyroidism", "To check for heart defects", "To monitor growth"],
      "answer": "To rule out hypothyroidism",
      "citation": ""
    },
    {
      "question": "Which medication is used for cardiac management in Down's Syndrome if necessary?",
      "options": ["Digitalis and diuretics", "Thyroid hormone", "Anticonvulsants", "Steroids"],
      "answer": "Digitalis and diuretics",
      "citation": ""
    },
    {
      "question": "What is the intelligence factor (IQ) threshold usually associated with mental retardation?",
      "options": ["Below 90-95", "Below 70-75", "Exactly 100", "Above 80"],
      "answer": "Below 70-75",
      "citation": ""
    },
    {
      "question": "What percentage of mental retardation is attributed to genetic causes?",
      "options": ["10%", "20%", "Over 30%", "Over 50%"],
      "answer": "Over 30%",
      "citation": ""
    },
    {
      "question": "Which infectious disease can lead to encephalitis and subsequent mental retardation?",
      "options": ["Gastroenteritis", "Measles", "Common cold", "Chickenpox"],
      "answer": "Measles",
      "citation": ""
    },
    {
      "question": "A child who has a short-term memory recall but can learn through repetition shows which characteristic?",
      "options": ["Attention deficiency", "Bad memory", "Social isolation", "Disinterest"],
      "answer": "Bad memory",
      "citation": ""
    },
    {
      "question": "What IQ range defines 'Mild Intellectual Disability'?",
      "options": ["20-34", "35-54", "55-70", "Less than 20"],
      "answer": "55-70",
      "citation": ""
    },
    {
      "question": "Which group of mentally challenged children is considered 'trainable' but not 'educable'?",
      "options": ["Mild", "Moderate", "Severe", "Profound"],
      "answer": "Moderate",
      "citation": ""
    },
    {
      "question": "What is the incidence rate of Mild Intellectual Disability among affected children?",
      "options": ["85%", "10%", "4%", "1%"],
      "answer": "85%",
      "citation": ""
    },
    {
      "question": "In nursing management for mental retardation, the 'three Rs' stand for:",
      "options": ["Reading, Writing, Arithmetic", "Routine, Repetition, Relaxation", "Rest, Recovery, Rehabilitation", "Respect, Responsibility, Rewards"],
      "answer": "Routine, Repetition, Relaxation",
      "citation": ""
    },
    {
      "question": "For a child with mental retardation, it is important to treat them according to their:",
      "options": ["Chronological age", "Mental age", "Height and weight", "Grade level"],
      "answer": "Mental age",
      "citation": ""
    },
    {
      "question": "Which intervention helps prevent neural defects during pregnancy?",
      "options": ["Avoiding smoking and alcohol", "High intensity exercise", "Delayed prenatal care", "Increased caffeine intake"],
      "answer": "Avoiding smoking and alcohol",
      "citation": ""
    },
    {
      "question": "What is a common psychosocial problem faced by mentally retarded children?",
      "options": ["Hyperactivity", "Social isolation", "High self-esteem", "Independence"],
      "answer": "Social isolation",
      "citation": ""
    }
  ];

const content = fs.readFileSync('./src/data/content.js', 'utf8');
const prefix = 'export const subjects = ';
const suffixIndex = content.lastIndexOf(';');
let jsonString = content.substring(content.indexOf(prefix) + prefix.length, suffixIndex).trim();

try {
  const subjects = JSON.parse(jsonString);

  // Map to chapters
  const urinaryChapter = subjects[0].chapters.find(c => c.id === 'chapter-13 Urinary System Disorders');
  const hematologicalChapter = subjects[0].chapters.find(c => c.id === 'chapter-14 Hematological Disorders and CHILD RIGHTS');
  const nervousChapter = subjects[0].chapters.find(c => c.id === 'chapter-9 DISEASES OF THE NERVOUS SYST EM');

  // Add IDs and attach
  const addIds = (arr, prefix) => arr.map((q, i) => {
      // remove citation if empty or keep it
      if (q.citation === "") delete q.citation;
      return { ...q, id: prefix + "_q" + (i + 1) };
  });

  if (urinaryChapter) urinaryChapter.questions = addIds(unit_11_urinary_system, 'c13');
  if (hematologicalChapter) hematologicalChapter.questions = addIds(unit_12_hematological_disorders, 'c14');
  if (nervousChapter) nervousChapter.questions = addIds(unit_07_nervous_system_disorders, 'c9');

  const newContent = "export const subjects = " + JSON.stringify(subjects, null, 2) + ";\n";
  fs.writeFileSync('./src/data/content.js', newContent, 'utf8');
  console.log('Success!');
} catch (e) {
  console.error('Error parsing or writing:', e);
}
