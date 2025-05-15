import { useState, useEffect } from 'react';
import { getRandomWord } from '../data/words';
import '../styles/GameBoard.css';

const GameBoard = () => {
  const [targetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const getRandomEncouragement = () => {
    const encouragements = [
      "Don't give up! The word was ",
      "Keep trying! The word was ",
      "You're getting closer! The word was ",
      "Nice effort! The word was ",
      "Almost there! The word was ",
      "Great attempt! The word was ",
      "You'll get it next time! The word was ",
      "Keep practicing! The word was "
    ];
    return encouragements[Math.floor(Math.random() * encouragements.length)];
  };

  const handleKeyPress = (event) => {
    if (gameOver) return;

    const key = event.key.toUpperCase();
    
    if (key === 'ENTER' && currentGuess.length === 4) {
      if (currentGuess === targetWord) {
        setGameOver(true);
        setMessage('Amazing! You nailed it! 🎉');
      } else if (guesses.length === 5) {
        setGameOver(true);
        setMessage(getRandomEncouragement() + targetWord);
      } else {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }
    } else if (key === 'BACKSPACE') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < 4) {
      setCurrentGuess(currentGuess + key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentGuess, guesses, gameOver]);

  const getLetterStatus = (letter, index, guess) => {
    if (letter === targetWord[index]) return 'correct';
    if (targetWord.includes(letter)) return 'present';
    return 'absent';
  };

  return (
    <div className="game-board">
      <div className="message">{message}</div>
      <div className="grid">
        {[...Array(6)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(4)].map((_, colIndex) => {
              const letter = rowIndex < guesses.length
                ? guesses[rowIndex][colIndex]
                : rowIndex === guesses.length
                  ? currentGuess[colIndex] || ''
                  : '';
              const status = rowIndex < guesses.length
                ? getLetterStatus(letter, colIndex, guesses[rowIndex])
                : '';
              
              return (
                <div key={colIndex} className={`tile ${status}`}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard; 