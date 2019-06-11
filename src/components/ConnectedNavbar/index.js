import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import SearchForm from "../SearchForm";
import FeedFilter from "../FeedFilter";

const localStyles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },

  smallerContainer: {
    justifyContent: "center"
  }
};

const ConnectedNavBar = ({
  displayFilters,
  value,
  searchMovies,
  clearSearch,
  NAV_HEIGHT,
  setFilter,
  filter,
  sort,
  setSort,
  history,
  match,
  getFavouriteFeed,
  getPopularFeed
}) => {
  if (!window.localStorage.getItem("token")) {
    history.push("/");
  }
  return (
    <Switch>
      <Route
        path={"/(popular|favourites)"}
        render={props => (
          <Navbar height={NAV_HEIGHT} buttons={displayFilters} {...props}>
            <div style={localStyles.container}>
              <div style={localStyles.smallerContainer}>
                <Switch>
                  <Route
                    path={"/(popular|)"}
                    render={() => (
                      <SearchForm
                        value={value}
                        searchMovies={searchMovies}
                        onClear={clearSearch}
                      />
                    )}
                  />
                  <Route
                    path={"/favourites"}
                    render={() => (
                      <FeedFilter
                        setFilter={setFilter}
                        filter={filter}
                        sort={sort}
                        setSort={setSort}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </Navbar>
        )}
      />
    </Switch>
  );
};

export default ConnectedNavBar;
