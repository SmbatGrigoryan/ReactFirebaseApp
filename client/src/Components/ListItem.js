import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ListItem = (props) => {
  return (
      <div className="list-header content-container show-for-desktop">
        <ul >
          <li><h3>{props.description}</h3></li>
          <li>{props.amount} AMD</li>
          <li>{props.notes}</li>
          <li>{moment(props.createdAt).format('MMMM Do, YYYY')}</li>
        </ul>
        <Link
            className="button"
            to={'/edit/' + props.id}>
          Edit
        </Link>

      </div>

  );
};

export default ListItem;
