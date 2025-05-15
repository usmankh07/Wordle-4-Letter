// List of 4-letter words for the game
export const WORDS = [
  'ABLE', 'ACID', 'AGED', 'ALSO', 'AREA', 'ARMY', 'AWAY', 'BABY', 'BACK', 'BALL',
  'BANK', 'BASE', 'BATH', 'BEAR', 'BEAT', 'BEEN', 'BEER', 'BELL', 'BELT', 'BEST',
  'BILL', 'BIRD', 'BLOOD', 'BLOW', 'BLUE', 'BOAT', 'BODY', 'BOMB', 'BOND', 'BONE',
  'BOOK', 'BORN', 'BOSS', 'BOTH', 'BOWL', 'BULK', 'BURN', 'BUSH', 'BUSY', 'CALL',
  'CALM', 'CAME', 'CARD', 'CARE', 'CASE', 'CASH', 'CAST', 'CELL', 'CENT', 'COST',
  'COOL', 'COPE', 'COPY', 'CORE', 'COST', 'CREW', 'CROP', 'CURE', 'CUTS', 'DARK',
  'DATA', 'DATE', 'DAWN', 'DAYS', 'DEAD', 'DEAL', 'DEAN', 'DEAR', 'DEBT', 'DEEP',
  'DENY', 'DESK', 'DIAL', 'DIET', 'DISC', 'DISK', 'DOES', 'DONE', 'DOOR', 'DOSE',
  'DOWN', 'DRAW', 'DREW', 'DROP', 'DRUG', 'DUAL', 'DUE', 'DULL', 'DUTY', 'EACH',
  'EARN', 'EASE', 'EAST', 'EASY', 'EDGE', 'ELSE', 'EVEN', 'EVER', 'EVERY', 'FACE'
];

// Function to get a random word from the list
export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}; 