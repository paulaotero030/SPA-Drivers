import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterDriversByTeam,
  getTeams,
  filterDriversByOrigin,
} from '../../redux/actions/index';

const Filter = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.teams);
  console.log('Teams:', allTeams);
  const [filteredTeams, setFilteredTeams] = useState([]); // Nuevo estado para los equipos filtrados

  const [selectedTeam, setSelectedTeam] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState('All');

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleOriginChange = (event) => {
    setSelectedOrigin(event.target.value);
  };

  const handleFilterClick = () => {
    dispatch(filterDriversByTeam(selectedTeam));
    dispatch(filterDriversByOrigin(selectedOrigin));
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log('Calling getTeams action');

    dispatch(getTeams())
      .then((data) => {
        console.log('Received teams data:', data);
      })
      .catch((error) => {
        console.log('Error fetching teams:', error);
      });
  }, [dispatch]);
  useEffect(() => {
    if (selectedOrigin === 'All') {
      setFilteredTeams(allTeams);
    } else {
      const filtered = allTeams.filter(
        (team) => team.origin === selectedOrigin
      );
      setFilteredTeams(filtered);
    }
  }, [selectedOrigin, allTeams]);

  return (
    <div>
      <fieldset>
        <legend>Filter drivers</legend>
        <select
          onChange={(event) => handleTeamChange(event)}
          value={selectedTeam}
        >
          <option value='All'>All Teams</option>
          {filteredTeams?.map((element) => (
            <option key={element.teams} value={element.teams}>
              {element.teams}
            </option>
          ))}
        </select>
        <select
          onChange={(event) => handleOriginChange(event)}
          value={selectedOrigin}
        >
          <option value='All'>All Origins</option>
          <option value='API'>API</option>
          <option value='Database'>Database</option>
        </select>
        <button onClick={handleFilterClick}>Apply Filters</button>
      </fieldset>

      {/* Renderizar la información de los equipos filtrados aquí */}
      <div>
        <h2>Teams Information</h2>
        <ul>
          {filteredTeams?.map((team) => (
            <li key={team.id}>
              <strong>Name:</strong> {team.name}
              <br />
              <strong>ID:</strong> {team.id}
              <br />
              <strong>Created At:</strong> {team.createdAt}
              <br />
              <strong>Updated At:</strong> {team.updatedAt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
