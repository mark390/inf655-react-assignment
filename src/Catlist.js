import React from 'react';
import Cat from './Cat';

const Catlist = ({ catnames }) => {
  return (
    <div>
      {
        catnames.map((user, i) => {
          return (
            <Cat
              key={catnames[i].id}
              id={catnames[i].id}
              name={catnames[i].name}
              />
          );
        })
      }
    </div>
  );
}

export default Catlist;