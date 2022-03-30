import { useState, ChangeEvent, Dispatch, SetStateAction} from "react";

export const useCounter = (initialValue: string, setValue: Dispatch<SetStateAction<string>>) => {
    const [countWords, setCountWords] = useState(0);
    const [countChars, setCountChars] = useState(0);
    
    const handleText = (e: ChangeEvent<{ value: string }>) => {
        const { value } = e.target;
        setCountWords(value === '' ? 0 : value.split(' ').length);
        setCountChars(value.split('').length);
    };
    
    return {
        countWords,
        countChars,
        handleText,
    };
}