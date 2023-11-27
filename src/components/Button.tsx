import React from 'react';
import { FilterButton,Filter } from '@/app/stylecomponents/styled';

interface FilterButtonsProps {
  filterHandler: (criteria: string) => void;
  clearFiltersHandler: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filterHandler, clearFiltersHandler }) => {
  return (
    <Filter>
      <FilterButton>
        <button onClick={() => filterHandler('Frontend')}>Frontend</button>
        <button onClick={() => filterHandler('Fullstack')}>Fullstack</button>
        <button onClick={() => filterHandler('Backend')}>Backend</button>
      </FilterButton>
      <div>
        <button onClick={clearFiltersHandler}>Clear</button>
      </div>
    </Filter>
  );
};

export default FilterButtons;