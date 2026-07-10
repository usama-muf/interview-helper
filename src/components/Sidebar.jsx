import React, { useState } from 'react';
import { Folder, ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar({ data, selectedTopic, selectedSubtopic, onSelectSubtopic }) {
  const topics = Object.keys(data);
  const [expandedTopics, setExpandedTopics] = useState(
    topics.reduce((acc, topic) => ({ ...acc, [topic]: true }), {})
  );

  const toggleTopic = (topic) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Knowledge Base
      </div>
      <div className="sidebar-content">
        {topics.map((topic) => (
          <div key={topic} className="topic-group">
            <div className="topic-title" onClick={() => toggleTopic(topic)}>
              {expandedTopics[topic] ? (
                <ChevronDown size={16} className="topic-icon" />
              ) : (
                <ChevronRight size={16} className="topic-icon" />
              )}
              <Folder size={16} className="topic-icon" style={{ marginLeft: 4, marginRight: 8 }} />
              {topic}
            </div>
            
            {expandedTopics[topic] && (
              <ul className="subtopic-list">
                {Object.keys(data[topic]).map((subtopic) => {
                  const isActive = selectedTopic === topic && selectedSubtopic === subtopic;
                  return (
                    <li 
                      key={subtopic} 
                      className={`subtopic-item ${isActive ? 'active' : ''}`}
                      onClick={() => onSelectSubtopic(topic, subtopic)}
                    >
                      {subtopic}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
