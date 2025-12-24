export default function useTypingSound() {
    const audio =
      typeof window !== "undefined"
        ? new Audio("/type.mp3")
        : null;
  
    const play = () => {
      if (!audio) return;
      audio.currentTime = 0;
      audio.volume = 0.2;
      audio.play();
    };
  
    return play;
  }
  