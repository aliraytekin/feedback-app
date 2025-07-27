import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((element) => element.id !== id))
    }
  }

  return (
    <>
    <Header name="Feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App
