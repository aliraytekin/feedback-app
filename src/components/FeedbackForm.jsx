import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [message, setMessage] = useState()

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)

    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate our service?</h2>
        {/* todo: rating select component */}
        <div className="input-group">
          <input type="text" onChange={handleTextChange} placeholder='Write in review' value={text} />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm
