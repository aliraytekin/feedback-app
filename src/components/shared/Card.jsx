import PropTypes from 'prop-types'

function Card({children, reverse = false}) {
  return(
    <div className="card" style={{
      backgroundColor: reverse ? 'black' : 'white',
      color: reverse ? 'white' : 'black',
    }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: true,
}

// For some reason default props does not work for me :/

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
