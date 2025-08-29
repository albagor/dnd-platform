export async function fetchRealAIGeneration(apiKey, prompt, type) {
  let fullPrompt = ''
  let jsonStructure = ''

  // ... (tutta la logica dello switch per creare il prompt rimane uguale) ...
  switch (type) {
    case 'Mostro':
      jsonStructure = `{ "name": "string", "size": "string", "type": "string", "alignment": "string", "ac": "number", "ac_type": "string", "hp": "number", "hp_dice": "string", "speed": "string (in metri)", "ability_scores": { "str": "number", "dex": "number", "con": "number", "int": "number", "wis": "number", "cha": "number" }, "skills": "string (es. 'Furtività +6, Percezione +4')", "senses": "string (es. 'scurovisione 18 m, Percezione passiva 14')", "languages": "string (es. 'Comune, Goblin')", "challenge_rating": "string (es. '1/2 (100 PE)')", "description": "string (descrizione fisica e lore dettagliata)", "image_url": "string (URL opzionale)", "traits": "string (un unico blocco di testo con i tratti, ogni tratto in grassetto e seguito dalla descrizione)", "actions": "string (un unico blocco di testo con le azioni, ogni azione in grassetto e seguita dalla descrizione)" }`
      fullPrompt = `Sei un DM di D&D 5e. Genera un blocco statistiche completo per: "${prompt}". Usa sempre il sistema metrico decimale (metri per le distanze, kg per i pesi). Rispondi SOLO con un oggetto JSON valido che segua questa struttura: ${jsonStructure}. Non includere mai commenti, markdown o la dicitura \`\`\`json.`
      break
    case 'PNG':
      jsonStructure = `{ "name": "string (nome e cognome)", "size": "string", "type": "string", "alignment": "string", "ac": "number", "ac_type": "string", "hp": "number", "hp_dice": "string", "speed": "string (in metri)", "ability_scores": { "str": "number", "dex": "number", "con": "number", "int": "number", "wis": "number", "cha": "number" }, "skills": "string", "senses": "string", "languages": "string", "challenge_rating": "string", "description": "string (descrizione fisica dettagliata e background del personaggio)", "dm_prompt": "string (uno spunto di trama, un segreto o una missione legata al PNG, visibile solo al DM)", "image_url": "string (URL opzionale)", "traits": "string", "actions": "string" }`
      fullPrompt = `Sei un DM di D&D 5e. Genera un PNG completo basato su: "${prompt}". Includi nome e cognome, una descrizione dettagliata e uno spunto per il DM. Usa sempre il sistema metrico decimale (metri per le distanze). Rispondi SOLO con un oggetto JSON valido che segua questa struttura: ${jsonStructure}. Non includere mai commenti, markdown o la dicitura \`\`\`json.`
      break
    case 'Tesoro':
      jsonStructure = `{"name": "string", "shareNotes": "string (descrizione fisica e storia)", "dmNotes": "string (proprietà magiche, rarità, sintonia)"}`
      fullPrompt = `Sei un DM di D&D 5e. Genera un oggetto magico basato su: "${prompt}". Rispondi SOLO con un oggetto JSON valido che segua questa struttura: ${jsonStructure}. Non includere mai commenti, markdown o la dicitura \`\`\`json.`
      break
    case 'Ambiente':
      jsonStructure = `{"name": "string", "shareNotes": "string (descrizione immersiva per i giocatori)", "dmNotes": "string (segreti, pericoli, PNG o tesori nascosti)"}`
      fullPrompt = `Sei un DM di D&D 5e. Genera una descrizione per un ambiente basato su: "${prompt}". Rispondi SOLO con un oggetto JSON valido che segua questa struttura: ${jsonStructure}. Non includere mai commenti, markdown o la dicitura \`\`\`json.`
      break
  }

  const payload = { contents: [{ role: 'user', parts: [{ text: fullPrompt }] }] }
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error(`Errore API: ${response.statusText}`)
  const result = await response.json()

  if (result.candidates && result.candidates[0].content.parts) {
    const rawText = result.candidates[0].content.parts[0].text
    try {
      const cleanedText = rawText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim()
      return JSON.parse(cleanedText)
    } catch (e) {
      throw new Error("L'IA ha restituito una risposta non valida.")
    }
  } else {
    console.error('Struttura della risposta API inattesa:', result)
    throw new Error("La risposta dell'API non ha un formato valido.")
  }
}
