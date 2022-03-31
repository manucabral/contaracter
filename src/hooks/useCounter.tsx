import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

export const useCounter = (
  initialValue: string,
  setValue: Dispatch<SetStateAction<string>>
) => {
  const [countWords, setCountWords] = useState(0);
  const [countChars, setCountChars] = useState(0);
  const [countParagraphs, setCountParagraphs] = useState(0);

  const handleText = (e: ChangeEvent<{ value: string }>) => {
    const { value } = e.target;
    setValue(value);
    const lines = value.split("\n");
    setCountWords(
      value === ""
        ? 0
        : lines.reduce((acc, line) => acc + line.split(" ").length, 0)
    );
    setCountChars(value.split("").length);
    setCountParagraphs(value === "" ? 0 : value.split("\n").length);
  };

  const clearText = () => {
    setValue("");
    setCountWords(0);
    setCountChars(0);
    setCountParagraphs(0);
  };

  return {
    countWords,
    countChars,
    countParagraphs,
    handleText,
    clearText,
  };
};
