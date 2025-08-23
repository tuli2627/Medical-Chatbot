const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

const diseaseDatabase = {
  // General illnesses
  fever: {
    disease: "Fever is usually caused by infections like viral flu or malaria.",
    medicine: "Paracetamol (Dolo-650, Crocin), hydration, and rest."
  },
  cough: {
    disease: "Cough may be due to cold, flu, asthma, or lung infections.",
    medicine: "Cough syrup (Benadryl, Ascoril), steam inhalation."
  },
  cold: {
    disease: "Common cold is a viral infection affecting the nose and throat.",
    medicine: "Rest, steam inhalation, antihistamines (Cetzine)."
  },
  headache: {
    disease: "Headache may be caused by stress, migraine, or dehydration.",
    medicine: "Paracetamol, Ibuprofen, hydration, relaxation."
  },
  vomiting: {
    disease: "Vomiting may be caused by food poisoning, stomach infection, or migraine.",
    medicine: "ORS solution, antiemetics (Ondansetron), hydration."
  },
  flu: {
    disease: "Flu (influenza) is a viral infection causing fever, cough, body pain.",
    medicine: "Rest, hydration, paracetamol, antiviral (Oseltamivir) if severe."
  },
  heartattack: {
    disease: "Heart attack is caused by blocked blood flow to the heart.",
    medicine: "Aspirin, Nitroglycerin, emergency hospital care."
  },
  migraine: {
    disease: "Migraine is a severe headache often with nausea and sensitivity to light.",
    medicine: "Sumatriptan, Naproxen, avoid triggers."
  },
  diabetes: {
    disease: "Diabetes is a condition where blood sugar levels are too high.",
    medicine: "Metformin, Insulin, diet control."
  },
  hypertension: {
    disease: "High blood pressure increases the risk of heart disease.",
    medicine: "Amlodipine, Losartan, low-salt diet."
  },
  asthma: {
    disease: "Asthma causes difficulty in breathing due to airway narrowing.",
    medicine: "Inhalers (Salbutamol), corticosteroids."
  },
  malaria: {
    disease: "Malaria is a mosquito-borne disease causing fever and chills.",
    medicine: "Artemisinin-based therapy, Chloroquine."
  },
  typhoid: {
    disease: "Typhoid is a bacterial infection causing high fever and weakness.",
    medicine: "Antibiotics (Ciprofloxacin, Azithromycin)."
  },
  dengue: {
    disease: "Dengue is a mosquito-borne viral fever with low platelets.",
    medicine: "Paracetamol, hydration, avoid NSAIDs like Aspirin."
  },
  chickenpox: {
    disease: "Chickenpox causes itchy blisters and fever.",
    medicine: "Calamine lotion, antihistamines, rest."
  },
  tuberculosis: {
    disease: "TB is a bacterial infection that mainly affects lungs.",
    medicine: "Anti-TB drugs (Rifampicin, Isoniazid)."
  },
  pneumonia: {
    disease: "Pneumonia is a lung infection with fever, cough, chest pain.",
    medicine: "Antibiotics (Amoxicillin, Azithromycin)."
  },
  jaundice: {
    disease: "Jaundice is caused by liver problems leading to yellow eyes/skin.",
    medicine: "Rest, hydration, avoid alcohol, treat underlying cause."
  },
  hepatitis: {
    disease: "Hepatitis is liver inflammation caused by viruses A, B, or C.",
    medicine: "Antivirals (Tenofovir for Hep-B), rest."
  },
  anemia: {
    disease: "Anemia occurs when body lacks healthy red blood cells.",
    medicine: "Iron supplements, folic acid, vitamin B12."
  },
  arthritis: {
    disease: "Arthritis causes joint pain and stiffness.",
    medicine: "Pain relievers (Ibuprofen), physiotherapy."
  },
  covid: {
    disease: "COVID-19 is a viral infection causing fever, cough, breathing issues.",
    medicine: "Rest, hydration, paracetamol, antivirals if severe."
  },

  // STDs / Sexual diseases
  hiv: {
    disease: "HIV weakens the immune system, increasing infection risk.",
    medicine: "Antiretroviral Therapy (ART) is lifelong treatment."
  },
  aids: {
    disease: "AIDS is the advanced stage of HIV infection.",
    medicine: "ART drugs (Tenofovir, Efavirenz, Lamivudine)."
  },
  syphilis: {
    disease: "Syphilis is a bacterial STD causing sores and rash.",
    medicine: "Penicillin injection."
  },
  gonorrhea: {
    disease: "Gonorrhea affects genitals, rectum, and throat.",
    medicine: "Ceftriaxone injection + Azithromycin."
  },
  chlamydia: {
    disease: "Chlamydia is a bacterial infection causing genital pain.",
    medicine: "Azithromycin or Doxycycline."
  },
  herpes: {
    disease: "Herpes causes painful blisters around genitals/mouth.",
    medicine: "Acyclovir, Valacyclovir."
  },
  hpv: {
    disease: "HPV is a viral infection that can cause genital warts and cancer.",
    medicine: "No cure, HPV vaccine prevents it."
  },
  trichomoniasis: {
    disease: "Trichomoniasis is caused by a parasite, leading to discharge and itching.",
    medicine: "Metronidazole."
  },

  // More common illnesses
  ulcer: {
    disease: "Stomach ulcer is caused by excess acid or H. pylori infection.",
    medicine: "Omeprazole, Antacids, Antibiotics (if H. pylori)."
  },
  stroke: {
    disease: "Stroke occurs when blood supply to brain is blocked.",
    medicine: "Clot-busting drugs (tPA), rehabilitation."
  },
  heartattack: {
    disease: "Heart attack is caused by blocked blood flow to heart.",
    medicine: "Aspirin, Nitroglycerin, emergency care."
  },
  kidney: {
    disease: "Kidney disease affects the body’s ability to filter waste.",
    medicine: "Dialysis in severe cases, ACE inhibitors."
  },
  epilepsy: {
    disease: "Epilepsy is a neurological disorder causing seizures.",
    medicine: "Anticonvulsants (Valproate, Phenytoin)."
  },
  anxiety: {
    disease: "Anxiety causes excessive fear and nervousness.",
    medicine: "SSRIs (Sertraline), therapy, relaxation techniques."
  },
  depression: {
    disease: "Depression is a mood disorder with sadness and low energy.",
    medicine: "SSRIs (Fluoxetine), therapy, support."
  },
  insomnia: {
    disease: "Insomnia is difficulty falling or staying asleep.",
    medicine: "Zolpidem, lifestyle changes."
  },
  allergy: {
    disease: "Allergies are immune reactions to pollen, food, or dust.",
    medicine: "Antihistamines (Cetirizine, Loratadine)."
  },
  eczema: {
    disease: "Eczema causes itchy, inflamed skin patches.",
    medicine: "Moisturizers, steroid creams."
  },
  psoriasis: {
    disease: "Psoriasis causes scaly skin patches due to immune reaction.",
    medicine: "Steroid creams, biologics (Adalimumab)."
  },
  conjunctivitis: {
    disease: "Conjunctivitis is an eye infection causing redness and discharge.",
    medicine: "Antibiotic eye drops."
  },
  earinfection: {
    disease: "Ear infection causes ear pain, swelling, and fever.",
    medicine: "Antibiotics (Amoxicillin), ear drops."
  },
  toothache: {
    disease: "Toothache may be due to cavity, infection, or gum disease.",
    medicine: "Painkillers, dental cleaning or antibiotics."
  },
  gastritis: {
    disease: "Gastritis is inflammation of stomach lining.",
    medicine: "Omeprazole, antacids, avoid spicy food."
  },
  obesity: {
    disease: "Obesity increases risk of diabetes and heart disease.",
    medicine: "Lifestyle changes, Orlistat in severe cases."
  },
  hypothyroidism: {
    disease: "Hypothyroidism means underactive thyroid gland.",
    medicine: "Levothyroxine (Thyroxine tablets)."
  },
  hyperthyroidism: {
    disease: "Overactive thyroid causes weight loss, anxiety, sweating.",
    medicine: "Methimazole, Beta-blockers."
  }
};

function sendMessage() {
  const text = userInput.value.trim().toLowerCase();
  if (text === "") return;

  appendMessage("You", text);

  if (diseaseDatabase[text]) {
    const info = diseaseDatabase[text];
    appendMessage("Bot", `🦠 Disease Info: ${info.disease}`);
    appendMessage("Bot", `💊 Suggested Medicine: ${info.medicine}`);
  } else {
    appendMessage("Bot", "❌ Sorry, I don’t have info about that disease.");
  }

  userInput.value = "";
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}                                                                                                                                                                                   