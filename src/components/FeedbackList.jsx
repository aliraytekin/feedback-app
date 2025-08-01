import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback) {
    return <p>No feedbacks yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((element) => (
        <FeedbackItem key={element.id} element={element} handleDelete={handleDelete} />
      ))}

    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList
