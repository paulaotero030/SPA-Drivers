import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTeams, getTeams } from '../../redux/actions/index';

const Filter = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.activies);

  const handleTeams = (event) => {
    event.preventDefault();
    dispatch(filterTeams(event.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div>
      <fieldset>
        <legend>Teams</legend>
        <select onChange={() => handleTeams()}>
          <option disabled>Search by teams...</option>
          <option value='All'>All</option>
          {allTeams?.map((element) => {
            return <option value={element.season}>{element.season}</option>;
          })}
          <option></option>
        </select>
      </fieldset>
    </div>
  );
};

export default Filter;
