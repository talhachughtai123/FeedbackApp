import './App.css';
import Header from './components/Header';
import Feedbacklist from './components/Feedbacklist';
import FeedbackData from './Data/Feedbackdata';
import FeedbackStats from './components/FeedbackStats';
import { useState } from 'react';
function App() {
  const [feedback,setFeedback] = useState(FeedbackData)
  const deleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }
  return (
    <>
    <Header  />
    <div className="container">
    <FeedbackStats feedback = {feedback} />
    <Feedbacklist feedback = {feedback} handleDelete={deleteFeedBack} />
    </div>
    </>
  );
}

export default App;
