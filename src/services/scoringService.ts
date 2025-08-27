import { ScoringInput, ScoringResult } from "../types/scoringTypes";
import { arraysEqual, decodeSumToNumbers, generateItems } from "../utils/mathUtils";

export function calculateScore(input: ScoringInput): ScoringResult{
    const { 
        userTotalSum, 
        correctTotalSum, 
        totalQuestionItems
    } = input;

    const userNumbers = decodeSumToNumbers(userTotalSum).sort((a, b) => a - b);
    const correctNumbers = decodeSumToNumbers(correctTotalSum).sort((a, b) => a - b);
    const allNumbers = generateItems(totalQuestionItems)


    const [userSet, correctSet] = [new Set(userNumbers), new Set(correctNumbers)];

    
    const correctMarked = userNumbers.filter(num => correctSet.has(num));
    const missedCorrectMarked = correctNumbers.filter(num => !userSet.has(num));
    const wrongMarked = userNumbers.filter(num => !correctSet.has(num));
    
    const wrongNumbers = allNumbers.filter(num => !correctSet.has(num));
    const wrongNotMarked = wrongNumbers.filter(num => !userSet.has(num));
     

    const points = arraysEqual(correctNumbers, userNumbers)
    ? 1
    : wrongMarked.length >= correctMarked.length
        ? 0
        : (correctMarked.length + wrongNotMarked.length) / allNumbers.length;

    return {
        userNumbers,
        correctNumbers,
        missedCorrectNumbers: missedCorrectMarked,
        wrongNumbers: wrongMarked,
        points
    };
}
