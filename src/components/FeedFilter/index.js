import React from "react";
import Dropdown from "../Dropdown";
import useDropdown from "../../hooks/dropdown/index.js";
import { sorters, filters } from "../../hooks/filters";
import sortIcon from "../../images/sortIcon.png";
import filterIcon from "../../images/filterIcon.png";

const localStyles = {
  daddyDiv: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(.75turn, rgba(15,214,175, 1), 80%, rgba(0,253,151,0.6)"
  },
  container: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },

  dropdownContainer: {
    alignItems: "center",
    padding: 5,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5
  },

  filterIcon: {
    height: 12
  },

  sortIcon: {
    height: 14
  },

  filterItems: {
    padding: 4,
    paddingLeft: 16,
    fontSize: 12
  }
};

const FeedFilter = ({ setFilter, filter, sort, setSort }) => {
  const filterDropdown = useDropdown();
  const sortDropdown = useDropdown();

  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <Dropdown
          isDropped={filterDropdown.isDropped}
          setIsDropped={filterDropdown.setIsDropped}
          placeholder={"Select filter"}
          value={filter.name}
          icon={filterIcon}
          style={localStyles.filterIcon}
          containerStyle={localStyles.dropdownContainer}
        >
          {Object.values(filters).map(item => {
            return (
              <div
                key={item.id}
                style={localStyles.filterItems}
                onClick={() => {
                  setFilter(item);
                  filterDropdown.setIsDropped(!filterDropdown.isDropped);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </Dropdown>
        <Dropdown
          isDropped={sortDropdown.isDropped}
          setIsDropped={sortDropdown.setIsDropped}
          placeholder={"Select sort"}
          value={sort.name}
          icon={sortIcon}
          style={localStyles.sortIcon}
          containerStyle={localStyles.dropdownContainer}
        >
          {Object.values(sorters).map(item => {
            return (
              <div
                key={item.id}
                style={localStyles.filterItems}
                onClick={() => {
                  setSort(item);
                  sortDropdown.setIsDropped(!sortDropdown.isDropped);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};

export default FeedFilter;
