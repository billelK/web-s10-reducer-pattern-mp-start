import React, {useReducer} from 'react' // 👈 you'll need the reducer hook

// 👇 these are the types of actions that can change state
const CHANGE_INPUT_AUTHOR_NAME = 'CHANGE_INPUT_AUTHOR_NAME'
const CHANGE_INPUT_QUOTE_TEXT = "CHANGE_INPUT_QUOTE_TEXT"
const RESET_FORM = 'RESET_FORM'

// 👇 create your initial state object here
const initialState = {
  authorName: "",
  quoteText: "" 
}

// 👇 create your reducer function here
const reducer = (state,action) => {
  switch(action.type) {
    case CHANGE_INPUT_AUTHOR_NAME :
      return {...state, authorName: action.payload}
    case CHANGE_INPUT_QUOTE_TEXT :
      return {...state, quoteText: action.payload}
    case RESET_FORM :
      return {authorName: "", quoteText: ""}
    default:
      return state
  }
}
export default function TodoForm({createQuote}) {
  // 👇 use the reducer hook to spin up state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState)
  const onChange = ({target: {value,name}}) => {
    // 👇 implement
    if (name === "authorName") dispatch({type: CHANGE_INPUT_AUTHOR_NAME, payload: value})
    else dispatch({type: CHANGE_INPUT_QUOTE_TEXT, payload: value})
  }
  const resetForm = () => {
    // 👇 implement
    dispatch({type: RESET_FORM})
  }
  const onNewQuote = (e) => {
    // 👇 implement
    e.preventDefault()
    console.log(state.authorName,state.quoteText);
    createQuote(state.authorName,state.quoteText)
    resetForm()
  }

  // 👇 some props are missing in the JSX below:
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          value={state.authorName}
          type='text'
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          value={state.quoteText}
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
