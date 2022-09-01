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
              filter === 'Links'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Links')}
          >
            Links
          </div>
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
              filter === 'Videos'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Videos')}
          >
            Videos
          </div>
          <div
            className={
              filter === 'Upload'
                ? 'resources-filter-active clickable'
                : 'resources-filter clickable'
            }
            onClick={() => setFilter('Upload')}
          >
            Upload
          </div>
        </div>
      </div>
      <div className='resources-selected'>
        {filter === 'Files' ? (
          <Files />
        ) : filter === 'Videos' ? (
          <Videos />
        ) : filter === 'Upload' ? (
          <Upload />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
