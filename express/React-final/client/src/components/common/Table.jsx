import React from 'react';

const Table = ({ peopleData, removePeople, title }) => {
  return (
    <section>
      <div className='title'>
        {title}
      </div>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {peopleData.map((person, index) => {
              const { id, name, job } = person;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{job}</td>
                  <td>
                    <button className='btn remove-btn' onClick={() => removePeople(index)}>
                      remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;