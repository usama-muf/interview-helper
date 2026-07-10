import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen } from 'lucide-react';

export default function MarkdownViewer({ question }) {
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
      <div className="markdown-container">
        <div className="markdown-body">
          <h1>{question.title}</h1>
          <ReactMarkdown>{question.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
