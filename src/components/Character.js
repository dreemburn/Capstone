import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import './Character.css';

const Character = ({ match }) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const characterId = match.params.id;
        const apiUrl = `https://anapioficeandfire.com/api/characters/${characterId}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [match.params.id]);

  if (loading) {
    return <Loading />;
  }

  const { father, mother, spouse, allegiances } = character;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{character.name || character.aliases}</h1>
      <p>Born: {character.born}</p>
      <p>Died: {character.died}</p>
      <p>Titles: {character.titles.join(', ')}</p>

      <p>Father: {father && father.name}</p>
      <p>Mother: {mother && mother.name}</p>
      <p>Spouse: {spouse && spouse.name}</p>

      <p>Allegiances: {allegiances && allegiances.map((allegiance) => allegiance.name).join(', ')}</p>
    </div>
  );
};

export default Character;
