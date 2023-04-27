export const shortcutText = (text?: string | null) => {
  let fullText = " ";
  for (let i = 0; i < 25; i++) {
    if (text) {
      fullText += " " + text?.split(" ")[i];
    }
  }
  return fullText.concat("...");
};
