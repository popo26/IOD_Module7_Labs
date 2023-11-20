import { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";

export default function Emoji() {
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
