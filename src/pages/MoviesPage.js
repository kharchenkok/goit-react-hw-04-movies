import React, { Component } from "react";
import queryString from 'query-string'
import { Link } from "react-router-dom";
import { searchMovies } from "../services/GetFetch";
// import getQueryParams from "../utils/getQueryString";

import Styles from "./MoviesPageStyles.module.css";



export default class AsyncMoviesPage extends Component {
  state = {
    searchQuery: "",
    searchList: []
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    searchMovies(query).then(({ data }) => {
      this.setState({
        searchList: data.results,
        searchQuery: ""
      });
    });
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  search = async (e, query) => {
    query = this.state.searchQuery;
    e.preventDefault();

    const { location, history } = this.props;
    history.push({ ...location, search: `query=${query}` });
  };

  render() {
    const { searchList } = this.state;
    return (
      <>
        <form onSubmit={this.search} className={Styles.searchForm}>
          <input type="text" name="search" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>

        <ul className={Styles.searchList}>
          {searchList.map(item => (
            <Link
              key={item.id}
              to={{
                pathname: `${this.props.match.url}/${item.id}`,
                state: {
                  from: this.props.location
                }
              }}
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </>
    );
  }
}