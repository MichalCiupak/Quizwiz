import React, { useState, ChangeEvent, FormEvent } from 'react';
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import './Containers.css'
import axios from 'axios';
import { IFlashcard, IFlashcardSet } from '../utils/Interfaces';

const CreateSet = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState(['']);
  const [flashcards, setFlashcards] = useState([{ question: '', answer: '' }]);

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { question: '', answer: '' }]);
    console.log(flashcards)
  };

  const handleFlashcardChange = (index: number, field: keyof IFlashcard, value: string) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      name,
      category,
      keywords,
      flashcards
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/flashcards', data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container-container'>
      <NavigationBar location='newset'/>
      <div className='container-main-content'> 
        <div className='section-container'>
          <div className='section-header-container'>
            <div className='section-header-text'>
              Create Card Set
            </div>
            <hr />
          </div>
          
        </div>
        <div className='container-create-card-form'>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='create-set-label'>Name:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Enter the name'
                required 
              />
            </div>
            <div>
              <label className='create-set-label'>Category:</label>
              <input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                placeholder='Enter the category'
                required 
              />
            </div>
            <div>
              <label className='create-set-label'>Keywords:</label>
              <input 
                type="text" 
                value={keywords.join(', ')} 
                onChange={(e) => setKeywords(e.target.value.split(',').map(kw => kw.trim()))}
                placeholder='Enter the keywords' 
              />
            </div >
            {flashcards.map((flashcard, index) => (
              <div key={index} className='single-card-create-container'>
                <h2>Flashcard {index + 1}</h2>
                <div>
                  <label className='create-set-label'>Question:</label>
                  <input
                    type="text"
                    value={flashcard.question}
                    onChange={(e) => handleFlashcardChange(index, 'question', e.target.value)}
                    placeholder='Enter the question'
                    required
                  />
                </div>
                <div>
                  <label className='create-set-label'>Answer:</label>
                  <input
                    type="text"
                    value={flashcard.answer}
                    onChange={(e) => handleFlashcardChange(index, 'answer', e.target.value)}
                    placeholder='Enter the answer'
                    required
                  />
                </div>
              </div>
            ))}
            <div className='create-card-button-container'>
              <div className='create-card-button' onClick={handleAddFlashcard}>Add Another Flashcard</div>
              <div className='create-card-button-submit'>Submit</div>
            </div>
            
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default CreateSet