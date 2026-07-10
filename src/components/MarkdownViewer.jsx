import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, ChevronLeft } from 'lucide-react';

export default function MarkdownViewer({ question, onBack }) {
  if (!question) {
    return (
      <div className="markdown-viewer-pane">
        <div className="empty-state">
          <BookOpen className="empty-state-icon" />
          <h2>Select a question to view details</h2>
          <p>Choose a topic from the sidebar and a question from the list.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="markdown-viewer-pane">
      <div className="pane-header mobile-only-header">
        <button className="mobile-back-btn" onClick={onBack}>
          <ChevronLeft size={20} /> Back to questions
        </button>
      </div>
      <div className="markdown-container">
        <div className="markdown-body">
          <h1>{question.title}</h1>
          <ReactMarkdown>{question.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
