import { SiOutline } from "react-icons/si";

// Rename st to nameList for consistency
const nameList = [
  'Time', 'Past', 'Future', 'Dev', 'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue', 'Green', 'Yellow', 'Gold',
  'Demon', 'Demonic', 'Panda', 'Cat', 'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX',
  'Bandit', 'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest', 'Mine', 'Your',
  'Worst', 'Enemy', 'Hostile', 'Force', 'Video', 'Game', 'Donkey', 'Mule', 'Colt', 'Cult',
  'Cultist', 'Magnum', 'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle', 'Geo', 'Genome', 'Germ',
  'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha', 'Gamma', 'Omega', 'Seal', 'Squid', 'Money',
  'Cash', 'Lord', 'King', 'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker',
  'Numb', 'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster', 'Sand',
  'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big', 'Small', 'Short', 'Tall',
  'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken', 'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson',
  'Destiny', 'Deceit', 'Lies', 'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle',
  'Hawker', 'Walker', 'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno',
  'Slice', 'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound', 'Legacy', 'Sharp',
  'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi',
  'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head',
  'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

// The function uses the correct nameList array
export function generateName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
const messages = [
  // English
  "Hey everyone! Welcome to the stream. Hope your day is awesome—drop your favorite emoji in chat and let’s vibe together!",
  // Hinglish
  "Hello dosto! Stream pe swagat hai sabka. Aj mast enjoy karte hain, apna favorite emoji chat me daalo aur vibe karo!",

  // English
  "What’s up fam? Did you have a good day? Grab some snacks and let’s enjoy the show together for the next few hours.",
  // Hinglish
  "Kya haal hai fam? Din accha gaya na? Snacks le aao yaar, ab milke next kuch ghante maze karte hain!",

  // English
  "Nice play right there! The skills are on point today. Is anyone else trying these tricks at home?",
  // Hinglish
  "Mast khela yaar! Skills aaj full on hai. Aur koi ghar pe try kar raha hai aise tricks?",

  // English
  "This stream is seriously lit! Shoutout to the mods for keeping chat fun—y'all are the real MVPs.",
  // Hinglish
  "Stream aaj full on lit hai! Mods ko salute, chat mast bana ke rakha hai—tumlog hi asli MVP ho.",

  // English
  "Don’t forget to hit like and subscribe if you’re enjoying! Let’s try to hit a new record for chat messages today.",
  // Hinglish
  "Agar mazaa aa raha hai to like aur subscribe bhi kar do! Chat ki record todte hain aaj milke.",

  // English
  "You rock! Seriously, the energy in this chat is unmatched. Grateful to be hanging out with you all.",
  // Hinglish
  "Tum log zabardast ho! Chat ki energy alag level pe hai, aap sabke sath masti karne ka mazaa hi kuch aur hai.",

  // English
  "GG! That was super close—heart was racing! Who else is still cheering for the next round?",
  // Hinglish
  "GG bhai! Bahut nzdik tha—dil dhak dhak kar raha tha! Kaun kaun abhi bhi next round ke liye ready hai?",

  // English
  "First! I literally had notifications on and was refreshing like mad. Love being here with this amazing community.",
  // Hinglish
  "First! Notification pehle se on thi, poora din refresh maar raha tha. Maze hai iss mast community ke sath.",

  // English
  "Big brain move! Streamer just pulled off something even pros rarely do. Have you ever seen that before?",
  // Hinglish
  "Big brain game! Streamer ne kuch aisa kiya jo pro log bhi kam hi karte. Aap log ne pehle dekha hai aisa?",

  // English
  "Stay hydrated folks! Long stream ahead—remember to stretch, move a bit, and refill your water.",
  // Hinglish
  "Paani pee lo sab! Stream lambi chalegi, stretch bhi kar lo aur paani ki bottle bharke lao."
];

export function generateRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}
