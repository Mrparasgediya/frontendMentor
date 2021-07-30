import { Fragment, useEffect, useState } from "react";
import GlobalStyles from "global.styles.jsx";
import jobsData from "./data.js";

import Header from "components/Header/Header";
import Card from "components/Card/Card";
import FilterPanel from "components/FilterPanel/FilterPanel";
import CardsList from "components/CardsList/CardsList";

function App() {
  const [filterTags, setFilterTags] = useState([]);
  const [currentJobs, setCurrentJobs] = useState([]);

  useEffect(() => {
    if (filterTags.length !== 0) {
      const checkIsItemInFilterTags = (item) => filterTags.includes(item);
      setCurrentJobs(
        jobsData.filter(
          (job) =>
            filterTags.includes(job.role) ||
            filterTags.includes(job.level) ||
            job.tools.some(checkIsItemInFilterTags) ||
            job.languages.some(checkIsItemInFilterTags)
        )
      );
    } else {
      setCurrentJobs(jobsData);
    }

    return () => {};
  }, [filterTags]);

  const removeFilterTagHandler = (tagToRemove) => {
    setFilterTags((prevState) => {
      const filterItems = prevState;
      const removeItemIdx = filterItems.indexOf(tagToRemove);
      if (removeItemIdx !== -1) filterItems.splice(removeItemIdx, 1);
      return Array.from(filterItems);
    });
  };

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <CardsList>
        {filterTags.length > 0 && (
          <FilterPanel
            tags={filterTags}
            onRemoveFilterTag={removeFilterTagHandler}
            onClearFilter={() => setFilterTags([])}
          />
        )}
        {currentJobs.map((job) => (
          <Card
            key={job.id}
            job={job}
            onTagClick={(tag) => {
              if (!filterTags.includes(tag))
                setFilterTags((prevState) => [...prevState, tag]);
            }}
          />
        ))}
      </CardsList>
    </Fragment>
  );
}

export default App;
