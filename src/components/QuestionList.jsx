import React from 'react';

export default function QuestionList({ questions, selectedQuestion, onSelectQuestion, topic, subtopic }) {
  if (!questions || questions.length === 0) {
    return (
      <div className="question-list-pane">
        <div className="pane-header">
          <h2 className="pane-title">Select a topic</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="question-list-pane">
      <div className="pane-header">
        <h2 className="pane-title">{subtopic}</h2>
        <div className="pane-subtitle">{topic}</div>
      </div>
      <div className="question-cards">
        {questions.map((q) => {
          const isActive = selectedQuestion && selectedQuestion.id === q.id;
          return (
            <div 
              key={q.id} 
              className={`question-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectQuestion(q)}
            >
              <div className="question-card-title">{q.title}</div>
              <div className="question-card-preview">{q.shortAnswer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
