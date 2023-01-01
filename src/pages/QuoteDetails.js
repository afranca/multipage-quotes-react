import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>Quote Details </h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetails;
