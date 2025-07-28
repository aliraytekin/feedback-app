import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ element, handleDelete }) {
  return (
      <Card>
        <div className="num-display">{element.rating}</div>
        <button className="close">
          <FaTimes color="purple" onClick={() => handleDelete(element.id) } />
        </button>
        <div className="text-display">{element.text}</div>
      </Card>
  )
}

FeedbackItem.propTypes = {
  element: PropTypes.object.isRequired,
}

export default FeedbackItem
