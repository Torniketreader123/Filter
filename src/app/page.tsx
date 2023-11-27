'use client'
import React, { useState } from 'react';
import data from './Data'; 
import { svgData } from '../Asest/svg'; 
import {
  Main,
  User,
  Img,
  About,
  Company,
  Position,
  Posted,
  Text,
  Circle,
  Skill,
  Skills,
  MainFilter,
} from './stylecomponents/styled';
import FilterButtons from '../components/Button';

const MyForm: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState(data);

  const filterJobs = (criteria: string) => {
    const filtered = data.filter((job) => job.role === criteria);
    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setFilteredJobs(data);
  };

  const divStyle = {
    background: `url("data:image/svg+xml,${encodeURIComponent(svgData)}") center/cover no-repeat`,
    width: '100%',
    height: '200px',
  };

  return (
    <Main>
      <MainFilter style={divStyle}>
        <FilterButtons
          filterHandler={filterJobs}
          clearFiltersHandler={clearFilters}
        />
      </MainFilter>
      {filteredJobs.map((item) => (
        <User key={item.id}>
          <Img src={item.logo} alt="Logo" />
          <About>
            <Company>{item.company}</Company>
            <Position>{item.position}</Position>
            <Posted>
              <Text>{item.postedAt}</Text>
              <Circle />
              <Text>{item.contract}</Text>
              <Circle />
              <Text>{item.location}</Text>
            </Posted>
          </About>
         
          <Skill>
            {item.role && <Skills>{item.role}</Skills>}
            {item.level && <Skills>{item.level}</Skills>}
            {item.languages.slice(0, 3).map((language, index) => (
              <Skills key={`${language}_${index}`}>{language}</Skills>
            ))}
          </Skill>
        </User>
      ))}
    </Main>
  );
};

export default MyForm;

