import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import QuestionList from './components/QuestionList';
import MarkdownViewer from './components/MarkdownViewer';
import { getAppStructure } from './utils/dataLoader';

function App() {
  const [appData, setAppData] = useState({});
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [sidebarsCollapsed, setSidebarsCollapsed] = useState(false);

  useEffect(() => {
    const data = getAppStructure();
    setAppData(data);
    
    // Auto-select first available topic/subtopic on desktop load
    if (window.innerWidth > 768) {
      const topics = Object.keys(data);
      if (topics.length > 0) {
        const firstTopic = topics[0];
        const subtopics = Object.keys(data[firstTopic]);
        if (subtopics.length > 0) {
          setSelectedTopic(firstTopic);
          setSelectedSubtopic(subtopics[0]);
        }
      }
    }
  }, []);

  const handleSelectSubtopic = (topic, subtopic) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(subtopic);
    setSelectedQuestion(null);
  };

  const currentQuestions = selectedTopic && selectedSubtopic 
    ? appData[selectedTopic][selectedSubtopic] 
    : [];

  // Determine active view for mobile CSS classes
  let activeMobileView = 'sidebar';
  if (selectedQuestion) {
    activeMobileView = 'viewer';
  } else if (selectedTopic && selectedSubtopic) {
    activeMobileView = 'list';
  }

  return (
    <div className={`app-container mobile-view-${activeMobileView} ${sidebarsCollapsed ? 'sidebars-collapsed' : ''}`}>
      <Sidebar 
        data={appData} 
        selectedTopic={selectedTopic}
        selectedSubtopic={selectedSubtopic}
        onSelectSubtopic={handleSelectSubtopic}
      />
      <QuestionList 
        topic={selectedTopic}
        subtopic={selectedSubtopic}
        questions={currentQuestions}
        selectedQuestion={selectedQuestion}
        onSelectQuestion={setSelectedQuestion}
        onBack={() => { setSelectedTopic(null); setSelectedSubtopic(null); }}
      />
      <MarkdownViewer 
        question={selectedQuestion} 
        onBack={() => setSelectedQuestion(null)}
        sidebarsCollapsed={sidebarsCollapsed}
        onToggleSidebars={() => setSidebarsCollapsed(!sidebarsCollapsed)}
      />
    </div>
  );
}

export default App;
