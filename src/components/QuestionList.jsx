import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function QuestionList({ questions, selectedQuestion, onSelectQuestion, topic, subtopic, onBack }) {
  if (!topic || !subtopic) {
    return (
      <div className="question-list-pane">
        <div className="pane-header">
          <h2 className="pane-title">Select a topic</h2>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="question-list-pane">
        <div className="pane-header">
          <button className="mobile-back-btn" onClick={onBack}>
            <ChevronLeft size={20} /> Back
          </button>
          <h2 className="pane-title">{subtopic}</h2>
          <div className="pane-subtitle">{topic}</div>
        </div>
        <div className="question-cards" style={{ padding: '16px', color: '#a1a1aa' }}>
          No questions found for this topic.
        </div>
      </div>
    );
  }

  return (
    <div className="question-list-pane">
      <div className="pane-header">
        <button className="mobile-back-btn" onClick={onBack}>
          <ChevronLeft size={20} /> Back
        </button>
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
