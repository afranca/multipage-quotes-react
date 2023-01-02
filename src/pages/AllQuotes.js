import React, {Fragment} from 'react'
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Albert Einstein",
    text: "Two things are infinite: the universe and human stupidity; and I am not sure about the universe",
  },
  {
    id: "q2",
    author: "Mahatma Gandhi",
    text: "Be the change that you wish to see in the world",
  },
  {
    id: "q3",
    author: "Frank Zappa",
    text: "Without deviation from the norm, progress is not possible",
  },
  {
    id: "q4",
    author: "Richard Dawkins",
    text: "We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further",
  },
];

const AllQuotes = () => { 
  return (
    <Fragment>      
      <QuoteList quotes={DUMMY_QUOTES}/>
    </Fragment>

  )
}

export default AllQuotes