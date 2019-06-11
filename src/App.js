import React from "react";
import useMovies from "../src/hooks/movies/index.js";
import useFilters from "../src/hooks/filters/index.js";
import Feed from "../src/components/Feed";
import Modal from "../src/components/Modal";
import ConnectedNavBar from "../src/components/ConnectedNavbar";
import LandingPage from "../src/components/LandingPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import "./App.css";

const NAV_HEIGHT = 120;

const localStyles = {
  container: {
    fontFamily: "Inter var, sans-serif"
  },

  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    paddingBottom: 5,
    backgroundColor: "none",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "2px",
    fontSize: 12
  }
};

const App = props => {
  const {
    value,
    popularList,
    searchMovies,
    favouriteList,
    setFavouriteList,
    favouriteMovie,
    isFavourite,
    clearSearch,
    setMovieRating,
    getPopularFeed,
    getFavouriteFeed
  } = useMovies();

  const { setFilter, filter, returnAlteredList, sort, setSort } = useFilters();

  const displayFilters = [
    {
      component: (
        <Link style={localStyles.link} to="/popular">
          POPULAR
        </Link>
      ),
      id: "popular"
    },
    {
      component: (
        <Link style={localStyles.link} to="/favourites">
          {`MY LIST (${favouriteList.length})`}
        </Link>
      ),
      id: "favourites"
    }
  ];

  if (!window.localStorage.getItem("token")) {
    props.history.push("/");
  }

  // if (props.history.location.pathname === "/popular") {
  //   getPopularFeed();
  //   getFavouriteFeed();
  // }

  return (
    <Router>
      <div style={localStyles.container}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ConnectedNavBar
            displayFilters={displayFilters}
            value={value}
            searchMovies={searchMovies}
            clearSearch={clearSearch}
            NAV_HEIGHT={NAV_HEIGHT}
            setFilter={setFilter}
            filter={filter}
            sort={sort}
            setSort={setSort}
            history={props.history}
          />
          <Switch>
            <Route path="/" exact render={() => <LandingPage />} />
            <Route path="/signup" render={props => <SignUp {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route
              path={"/(popular|favourites)"}
              exact
              render={props => (
                <Feed
                  popularList={popularList}
                  favouriteMovie={favouriteMovie}
                  isFavourite={isFavourite}
                  favouriteList={returnAlteredList(favouriteList)}
                  navOffset={NAV_HEIGHT}
                  setRating={setMovieRating}
                  getFavouriteFeed={getFavouriteFeed}
                  getPopularFeed={getPopularFeed}
                  {...props}
                />
              )}
            />
            <Route
              path={"/movies/:id"}
              render={props => (
                <Modal
                  {...props}
                  setFavouriteList={setFavouriteList}
                  variant={"popular"}
                />
              )}
            />
            <Route
              path={"/favourites/:id"}
              render={props => (
                <Modal
                  {...props}
                  setFavouriteList={setFavouriteList}
                  variant={"favourites"}
                />
              )}
            />
            <Route path="/blah" render={() => <div>hey</div>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
