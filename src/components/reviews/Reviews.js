import React, { Component } from "react";
import Styles from "./ReviewsStyles.module.css";
import { getReviews } from "../../services/GetFetch";

export default class AsyncReviews extends Component {
  state = {
    reviews: []
  };

   componentDidMount() {
    const id = this.props.id;

     getReviews(id).then(({ data }) =>
      this.setState({
        reviews: data.results
      })
    );
  }

  render() {
    const { reviews } = this.state;
    // console.log(reviews);
    return reviews.length > 0 ? (
      <ul className={Styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <p className={Styles.reviewAuthor}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p> We don't have any reviews for this movie.</p>
    );
  }
}

