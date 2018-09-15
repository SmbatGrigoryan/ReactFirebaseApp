import React from 'react';

import List from './List'
import ListFilters from './ListFilters'
import Summary from './Summary';

const HomePage = (props) => {
  return (
      <div>
        <Summary/>
        <ListFilters/>
        <List/>
      </div>
  )
};

export default HomePage
