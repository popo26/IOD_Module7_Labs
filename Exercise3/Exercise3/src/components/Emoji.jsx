import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";


//Q1 --- Modify the Emoji component from Module 6 Exercise 3 and
//       create a context for storing the current emoji/mood
export default function Emoji() {
  // const [emoji, setEmoji] = useState("😺");
  const [emoji, setEmoji] = useContext(EmojiContext);

  const handleClick = () => {
    let newMood = "🙀";
    if (emoji === "🙀") newMood = "😺";
    else if (emoji === "😺") newMood = "🙀";
    setEmoji(newMood);
  };

  return (
    <div>
      <div className="Emoji">{emoji}</div>
      <button onClick={handleClick} className="change-mood-btn">
        Change Mood
      </button>
    </div>
  );
}
