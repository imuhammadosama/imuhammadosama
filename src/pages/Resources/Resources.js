import './Resources.css';
import Files from './Files/Files';
import Icons from './Icons/Icons';
import { useState } from 'react';

export default function () {
  const [filter, setFilter] = useState('Icons');
  return (
    <div className='resources'>
      <div className='resources-filters'>
        <div className='resource-filters'>
          <h3>Resources</h3>

          <div
            className={
              filter === 'Icons'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Icons')}
          >
            Icons
          </div>
          <div
            className={
              filter === 'Files'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Files')}
          >
            Files
          </div>
        </div>
      </div>
      <div className='resources-selected'>
        {filter === 'Files' ? (
          <Files />
        ) : filter === 'Icons' ? (
          <Icons />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
