import React from 'react';


function Flashcards() {
  return (
    <div className="flashcards">
      <h1>Flashcards</h1>
      <div className = "flashcardContainer">
        <div className = "flashcard">
          <span className = "title">Practice</span>
          <span className = "wordCount">(9210 Words)</span>
          <input type="button" value="Word List" className="words">
          </input>
          <input type = "button" value="Practice" className="practice"></input>
        </div>

        <div className = "flashcard">
          <span className = "title">Super Hard</span>
          <span className = "wordCount">(192 Words)</span>
          <input type="button" value="Word List" className="words">
          </input>
          <input type = "button" value="Practice" className="practice"></input>
        </div>

        <div className = "flashcard">
          <span className = "title">Hard</span>
          <span className = "wordCount">(192 Words)</span>
          <input type="button" value="Word List" className="words">
          </input>
          <input type = "button" value="Practice" className="practice"></input>
        </div>

        <div className = "flashcard">
          <span className = "title">Easy</span>
          <span className = "wordCount">(192 Words)</span>
          <input type="button" value="Word List" className="words">
          </input>
          <input type = "button" value="Practice" className="practice"></input>
        </div>

        <div className = "flashcard">
          <span className = "title">Super Easy</span>
          <span className = "wordCount">(192 Words)</span>
          <input type="button" value="Word List" className="words">
          </input>
          <input type = "button" value="Practice" className="practice"></input>
        </div>
      </div>
    </div>
  );
}

export default Flashcards;
  