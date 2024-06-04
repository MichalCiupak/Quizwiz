export interface IUser {
  id: string;
  username: string;
  email: string;
  savedCardSets: any; 
}

export interface IFlashcard {
  question: string;
  answer: string;
}

export interface IFlashcardSet {
  name: string;
  category: string;
  keywords: string[];
  flashcards: IFlashcard[];
}
