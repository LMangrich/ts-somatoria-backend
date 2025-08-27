export interface ScoringInput {
    userTotalSum: number;
    correctTotalSum: number;
    totalQuestionItems: number;
}

export interface ScoringResult {
    userNumbers: number[];
    correctNumbers: number[];
    missedCorrectNumbers: number[];
    wrongNumbers: number[];
    points: number;
}