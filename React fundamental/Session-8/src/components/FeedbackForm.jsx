import { useState, useRef } from 'react';

// FeedbackForm - controlled form with useRef to focus message field
function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // ref for the message input
  const messageRef = useRef(null);

  // focus the message field when button is clicked
  const handleFocusMessage = () => {
    messageRef.current.focus();
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback from ' + name + ': ' + message);
    setName('');
    setMessage('');
  };

  return (
    <div>
      <h2>📝 Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <textarea
          ref={messageRef}
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit Feedback</button>
        <button type="button" onClick={handleFocusMessage}>Focus Message</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
