import './Resources.css';
import Files from '../Files/Files';
import Videos from '../Videos/Videos';
import { useState } from 'react';
import Upload from '../Upload/Upload';

export default function () {
  const [filter, setFilter] = useState('Files');
  return (
    <div className='resources'>
      <div className='resources-filters'>
        <h3>Resources</h3>
        <div className='resource-filters'>
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
          <div
            className={
              filter === 'Videos'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Videos')}
          >
            Videos
          </div>
        </div>
      </div>
      <div className='resources-selected'>
        {filter === 'Files' ? (
          <Files />
        ) : filter === 'Videos' ? (
          <Videos />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
