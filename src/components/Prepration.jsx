import axios from 'axios';
import React, { useState } from 'react';

function Prepration() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [audio, setAudio] = useState('');
  const [error, setError] = useState('');

  const getAnswer = async () => {
    if (!word.trim()) return;
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data[0];
      const firstMeaning = data.meanings[0];
      const firstDefinition = firstMeaning.definitions[0].definition;

      setDefinition(firstDefinition);
      setSynonyms(firstMeaning.synonyms || []);
      setAntonyms(firstMeaning.antonyms || []);

      const audioURL = data.phonetics.find(p => p.audio)?.audio || '';
      setAudio(audioURL);
      setError('');
    } catch (err) {
      console.error("API Error:", err);
      setDefinition('');
      setSynonyms([]);
      setAntonyms([]);
      setAudio('');
      setError('No results found. Please try another word.');
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dictionary Lookup</h1>
      
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
          className="border px-4 py-2 w-full rounded"
        />
        <button
          onClick={getAnswer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {definition && (
        <>
          <h2 className="text-xl font-semibold mb-2">Definition:</h2>
          <p>{definition}</p>
        </>
      )}

      {synonyms.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-4 mb-2">Synonyms:</h2>
          <ul className="list-disc pl-6">
            {synonyms.map((syn, index) => (
              <li key={index}>{syn}</li>
            ))}
          </ul>
        </>
      )}

      {antonyms.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-4 mb-2">Antonyms:</h2>
          <ul className="list-disc pl-6">
            {antonyms.map((ant, index) => (
              <li key={index}>{ant}</li>
            ))}
          </ul>
        </>
      )}

      {audio && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Audio Pronunciation:</h2>
          <audio controls src={audio}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default Prepration;
