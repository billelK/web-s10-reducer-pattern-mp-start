import React from 'react' // 👈 you'll need the reducer hook

// 👇 these are the types of actions that can change state
const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

// 👇 create your initial state object here

// 👇 create your reducer function here

export default function TodoForm({ createQuote = () => { createQuote } }) {
  // 👇 use the reducer hook to spin up state and dispatch

  const onChange = () => {
    // 👇 implement
  }
  const resetForm = () => {
    // 👇 implement
  }
  const onNewQuote = (e) => {
    e.preventDefault()
    // 👇 implement
    createQuote()
    resetForm()
  }

  // 👇 some props are missing in the JSX below:
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          type='text'
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          type='text'
          name='quoteText'
          placeholder='type quote'
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
