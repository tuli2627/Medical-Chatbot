// wrap all initialization after DOM ready
document.addEventListener("DOMContentLoaded", () => {
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
 const sendBtn = document.getElementById("sendBtn");

const diseaseDatabase = {
  // General illnesses
  fever: {
    disease: "Fever is usually caused by infections like viral flu or malaria.",
    medicine: "Paracetamol (Dolo-650, Crocin), hydration, and rest.",
    remedies: "Drink plenty of fluids, rest, apply a cool damp cloth on forehead."
  },
  cough: {
    disease: "Cough may be due to cold, flu, asthma, or lung infections.",
    medicine: "Cough syrup (Benadryl, Ascoril), steam inhalation.",
    remedies: "Drink warm fluids, honey with ginger, do steam inhalation."
  },
  cold: {
    disease: "Common cold is a viral infection affecting the nose and throat.",
    medicine: "Rest, steam inhalation, antihistamines (Cetzine).",
    remedies: "Gargle with warm salt water, drink ginger tea, stay hydrated."
  },
  headache: {
    disease: "Headache may be caused by stress, migraine, or dehydration.",
    medicine: "Paracetamol, Ibuprofen, hydration, relaxation.",
    remedies: "Stay in a quiet dark room, drink water, try gentle massage."
  },
  vomiting: {
    disease: "Vomiting may be caused by food poisoning, stomach infection, or migraine.",
    medicine: "ORS solution, antiemetics (Ondansetron), hydration.",
    remedies: "Sip ginger tea, eat small bland meals, avoid oily food."
  },
  flu: {
    disease: "Flu (influenza) is a viral infection causing fever, cough, body pain.",
    medicine: "Rest, hydration, paracetamol, antiviral (Oseltamivir) if severe.",
    remedies: "Drink warm fluids, inhale steam, rest well."
  },
  stomachache: {
    disease: "Stomach ache may be due to gastritis, indigestion, or ulcer.",
    medicine: "Antacids, Omeprazole, light diet.",
    remedies: "Eat bland food, avoid spicy food, drink ginger tea, apply warm compress."
  },
  heartattack: {
    disease: "Heart attack is caused by blocked blood flow to the heart.",
    medicine: "Aspirin, Nitroglycerin, emergency hospital care.",
    remedies: "Call emergency services immediately, chew aspirin if available."
  },
  migraine: {
    disease: "Migraine is a severe headache often with nausea and sensitivity to light.",
    medicine: "Sumatriptan, Naproxen, avoid triggers.",
    remedies: "Rest in a quiet dark room, apply cold compress, avoid bright lights."
  },
  diabetes: {
    disease: "Diabetes is a condition where blood sugar levels are too high.",
    medicine: "Metformin, Insulin, diet control.",
    remedies: "Exercise regularly, eat fiber-rich foods, avoid sugary drinks."
  },
  hypertension: {
    disease: "High blood pressure increases the risk of heart disease.",
    medicine: "Amlodipine, Losartan, low-salt diet.",
    remedies: "Reduce salt, exercise daily, practice meditation."
  },
  asthma: {
    disease: "Asthma causes difficulty in breathing due to airway narrowing.",
    medicine: "Inhalers (Salbutamol), corticosteroids.",
    remedies: "Avoid dust, do breathing exercises, stay calm during attacks."
  },
  malaria: {
    disease: "Malaria is a mosquito-borne disease causing fever and chills.",
    medicine: "Artemisinin-based therapy, Chloroquine.",
    remedies: "Use mosquito nets, drink plenty of fluids, rest well."
  },
  typhoid: {
    disease: "Typhoid is a bacterial infection causing high fever and weakness.",
    medicine: "Antibiotics (Ciprofloxacin, Azithromycin).",
    remedies: "Eat soft foods, stay hydrated, avoid outside food."
  },
  dengue: {
    disease: "Dengue is a mosquito-borne viral fever with low platelets.",
    medicine: "Paracetamol, hydration, avoid NSAIDs like Aspirin.",
    remedies: "Drink papaya leaf juice (traditional), rest, plenty of fluids."
  },
  chickenpox: {
    disease: "Chickenpox causes itchy blisters and fever.",
    medicine: "Calamine lotion, antihistamines, rest.",
    remedies: "Apply neem leaves paste, take oatmeal baths, avoid scratching."
  },
  tuberculosis: {
    disease: "TB is a bacterial infection that mainly affects lungs.",
    medicine: "Anti-TB drugs (Rifampicin, Isoniazid).",
    remedies: "Eat nutritious food, avoid smoking, maintain ventilation."
  },
  pneumonia: {
    disease: "Pneumonia is a lung infection with fever, cough, chest pain.",
    medicine: "Antibiotics (Amoxicillin, Azithromycin).",
    remedies: "Drink warm fluids, rest, elevate head while sleeping."
  },
  jaundice: {
    disease: "Jaundice is caused by liver problems leading to yellow eyes/skin.",
    medicine: "Rest, hydration, avoid alcohol, treat underlying cause.",
    remedies: "Eat fruits, drink sugarcane juice, avoid fatty food."
  },
  hepatitis: {
    disease: "Hepatitis is liver inflammation caused by viruses A, B, or C.",
    medicine: "Antivirals (Tenofovir for Hep-B), rest.",
    remedies: "Eat light meals, avoid alcohol, get vaccinated if possible."
  },
  anemia: {
    disease: "Anemia occurs when body lacks healthy red blood cells.",
    medicine: "Iron supplements, folic acid, vitamin B12.",
    remedies: "Eat spinach, beetroot, jaggery, and iron-rich foods."
  },
  arthritis: {
    disease: "Arthritis causes joint pain and stiffness.",
    medicine: "Pain relievers (Ibuprofen), physiotherapy.",
    remedies: "Apply warm compress, gentle exercise, turmeric milk."
  },
  covid: {
    disease: "COVID-19 is a viral infection causing fever, cough, breathing issues.",
    medicine: "Rest, hydration, paracetamol, antivirals if severe.",
    remedies: "Drink warm water, inhale steam, isolate, eat vitamin C-rich food."
  },

  // STDs / Sexual diseases
  hiv: {
    disease: "HIV weakens the immune system, increasing infection risk.",
    medicine: "Antiretroviral Therapy (ART) is lifelong treatment.",
    remedies: "Eat healthy food, avoid infections, regular checkups."
  },
  aids: {
    disease: "AIDS is the advanced stage of HIV infection.",
    medicine: "ART drugs (Tenofovir, Efavirenz, Lamivudine).",
    remedies: "Maintain hygiene, avoid infections, take prescribed medicines."
  },
  syphilis: {
    disease: "Syphilis is a bacterial STD causing sores and rash.",
    medicine: "Penicillin injection.",
    remedies: "Avoid sexual contact until treated, maintain hygiene."
  },
  gonorrhea: {
    disease: "Gonorrhea affects genitals, rectum, and throat.",
    medicine: "Ceftriaxone injection + Azithromycin.",
    remedies: "Complete full antibiotic course, avoid sexual contact until cured."
  },
  chlamydia: {
    disease: "Chlamydia is a bacterial infection causing genital pain.",
    medicine: "Azithromycin or Doxycycline.",
    remedies: "Avoid sexual activity until treatment complete, maintain hygiene."
  },
  herpes: {
    disease: "Herpes causes painful blisters around genitals/mouth.",
    medicine: "Acyclovir, Valacyclovir.",
    remedies: "Apply cold compress, avoid stress, keep area clean."
  },
  hpv: {
    disease: "HPV is a viral infection that can cause genital warts and cancer.",
    medicine: "No cure, HPV vaccine prevents it.",
    remedies: "Get vaccinated, maintain hygiene, boost immunity."
  },
  trichomoniasis: {
    disease: "Trichomoniasis is caused by a parasite, leading to discharge and itching.",
    medicine: "Metronidazole.",
    remedies: "Avoid alcohol during medication, maintain hygiene."
  },

  // More common illnesses
  ulcer: {
    disease: "Stomach ulcer is caused by excess acid or H. pylori infection.",
    medicine: "Omeprazole, Antacids, Antibiotics (if H. pylori).",
    remedies: "Eat small meals, avoid spicy food, drink milk."
  },
  stroke: {
    disease: "Stroke occurs when blood supply to brain is blocked.",
    medicine: "Clot-busting drugs (tPA), rehabilitation.",
    remedies: "Call emergency immediately, physiotherapy after recovery."
  },
  kidney: {
    disease: "Kidney disease affects the body’s ability to filter waste.",
    medicine: "Dialysis in severe cases, ACE inhibitors.",
    remedies: "Limit salt, drink water carefully, avoid painkillers."
  },
  epilepsy: {
    disease: "Epilepsy is a neurological disorder causing seizures.",
    medicine: "Anticonvulsants (Valproate, Phenytoin).",
    remedies: "Avoid flashing lights, take medicines regularly."
  },
  anxiety: {
    disease: "Anxiety causes excessive fear and nervousness.",
    medicine: "SSRIs (Sertraline), therapy, relaxation techniques.",
    remedies: "Practice meditation, deep breathing, avoid caffeine."
  },
  depression: {
    disease: "Depression is a mood disorder with sadness and low energy.",
    medicine: "SSRIs (Fluoxetine), therapy, support.",
    remedies: "Talk to friends, do physical exercise, maintain a routine."
  },
  insomnia: {
    disease: "Insomnia is difficulty falling or staying asleep.",
    medicine: "Zolpidem, lifestyle changes.",
    remedies: "Maintain sleep schedule, avoid screens before sleep, drink warm milk."
  },
  allergy: {
    disease: "Allergies are immune reactions to pollen, food, or dust.",
    medicine: "Antihistamines (Cetirizine, Loratadine).",
    remedies: "Avoid allergens, keep windows closed, use air filters."
  },
  eczema: {
    disease: "Eczema causes itchy, inflamed skin patches.",
    medicine: "Moisturizers, steroid creams.",
    remedies: "Use coconut oil, avoid harsh soaps, wear cotton clothes."
  },
  psoriasis: {
    disease: "Psoriasis causes scaly skin patches due to immune reaction.",
    medicine: "Steroid creams, biologics (Adalimumab).",
    remedies: "Take sun exposure, apply aloe vera, avoid stress."
  },
  conjunctivitis: {
    disease: "Conjunctivitis is an eye infection causing redness and discharge.",
    medicine: "Antibiotic eye drops.",
    remedies: "Wash eyes with clean water, avoid touching eyes, use cold compress."
  },
  earinfection: {
    disease: "Ear infection causes ear pain, swelling, and fever.",
    medicine: "Antibiotics (Amoxicillin), ear drops.",
    remedies: "Apply warm compress, keep ears dry, avoid loud noises."
  },
  toothache: {
    disease: "Toothache may be due to cavity, infection, or gum disease.",
    medicine: "Painkillers, dental cleaning or antibiotics.",
    remedies: "Apply clove oil, rinse with salt water, avoid cold foods."
  },
  gastritis: {
    disease: "Gastritis is inflammation of stomach lining.",
    medicine: "Omeprazole, antacids, avoid spicy food.",
    remedies: "Eat small meals, drink coconut water, avoid alcohol."
  },
  obesity: {
    disease: "Obesity increases risk of diabetes and heart disease.",
    medicine: "Lifestyle changes, Orlistat in severe cases.",
    remedies: "Exercise daily, eat vegetables, avoid junk food."
  },
  hypothyroidism: {
    disease: "Hypothyroidism means underactive thyroid gland.",
    medicine: "Levothyroxine (Thyroxine tablets).",
    remedies: "Eat iodine-rich foods, regular medication, avoid junk food."
  },
  hyperthyroidism: {
    disease: "Overactive thyroid causes weight loss, anxiety, sweating.",
    medicine: "Methimazole, Beta-blockers.",
    remedies: "Avoid caffeine, eat balanced meals, practice meditation."
  }
};

// ✅ Symptom phrases mapped to diseases
const symptomMapping = {
  "i have a fever": "fever",
  "i am coughing": "cough",
  "i caught a cold": "cold",
  "my head hurts": "headache",
  "i feel vomiting": "vomiting",
  "i feel like vomiting": "vomiting",
  "i am feeling dizzy": "anemia",
  "i have chest pain": "heartattack",
  "i feel breathless": "asthma",
  "i cannot sleep": "insomnia",
  "i am anxious": "anxiety",

  // ✅ Extra variations you suggested
  "stomach ache": "stomachache",
  "stomach pain": "stomachache",
  "belly pain": "stomachache",
  "tummy ache": "stomachache",
  "head hurts": "headache",
  "head pain": "headache",
  "migraine attack": "migraine",
  "feeling hot": "fever",
  "high temperature": "fever",
  "shivering": "fever",
  "coughing": "cough",
  "sore throat": "cough",
  "runny nose": "cold",
  "sneezing": "cold",
  "vomiting": "vomiting",
  "nausea": "vomiting",
  "weakness": "anemia",
  "joint pain": "arthritis",
  "short breath": "asthma",
  "chest pain": "heartattack",
  "skin rash": "eczema",
  "itchy skin": "allergy"
};
 async function sendMessage() {
    const raw = userInput.value.trim();
    if (!raw) return;
    const text = raw.toLowerCase();

    appendMessage("You", raw, "user");

    let key = null;

    // Exact match
    if (diseaseDatabase[text]) {
      key = text;
    } else {
      // Symptom phrase match
      for (const phrase in symptomMapping) {
        if (text.includes(phrase)) {
          key = symptomMapping[phrase];
          break;
        }
      }
    }

    // Local database check
    if (key && diseaseDatabase[key]) {
      const info = diseaseDatabase[key];
      appendMessage("Bot", `🦠 Disease Info: ${info.disease}`, "bot");
      appendMessage("Bot", `💊 Suggested Medicine: ${info.medicine}`, "bot");
      if (info.remedies) appendMessage("Bot", `🏡 Home Remedies: ${info.remedies}`, "bot");
      userInput.value = "";
      return;
    }

    // Fallback to backend (Flask CSV lookup)
    try {
      const resp = await fetch("/get_disease_info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text })
      });

      if (!resp.ok) throw new Error("Network error");

      const data = await resp.json();
      if (data.found) {
        if (data.disease) appendMessage("Bot", `🦠 Disease Info: ${data.disease}`, "bot");
        if (data.medicine) appendMessage("Bot", `💊 Suggested Medicine: ${data.medicine}`, "bot");
        if (data.remedies) appendMessage("Bot", `🏡 Home Remedies: ${data.remedies}`, "bot");
      } else {
        appendMessage("Bot", "❌ Sorry, I don’t have info about that condition.", "bot");
      }
    } catch (err) {
      appendMessage("Bot", "⚠️ Backend not reachable. Try running the Flask server.", "bot");
    }

    userInput.value = "";
  }

  // Append message to chatbox
  function appendMessage(sender, text, cls = "") {
    const div = document.createElement("div");
    div.className = cls;
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  // Event listeners
  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // Debug
  window._sendMessage = sendMessage;
});

