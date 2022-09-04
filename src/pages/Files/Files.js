import './Files.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function () {
  const [oldFiles, setOldFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const getFiles = (
        await axios.get(
          'https://opensheet.elk.sh/11xqPVH0F1V4_4a1DiD5ZMnehJOZ3LVtNa0nk-oWK4rw/1'
        )
      ).data;
      setFiles(getFiles);
      setOldFiles(getFiles);
      setLoading(false);
    }
    fetch();
  }, []);

  function search(e) {
    console.log(e.target.value);
    if (e.target.value !== '') {
      const newFiles = oldFiles.filter((file) => {
        return (
          file.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          file.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          file.tags.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFiles(newFiles);
    } else {
      setFiles(oldFiles);
    }
  }

  // if (loading) {
  //   return (
  //     <div className='center-center'>
  //       <img src='https://res.cloudinary.com/imuhammadosama/image/upload/v1658069428/Portfolio/Loading_b2lqoz.gif' />
  //     </div>
  //   );
  // }
  if (loading) {
    return <div className='center-center'>Loading...</div>;
  }
  return (
    <div className='file-page'>
      <div>
        <input
          className='file-search'
          placeholder='search file'
          onChange={(e) => search(e)}
        />
      </div>
      <div className='file-cards'>
        {files.map((file, index) => {
          return (
            <a className='file-card clickable' href={file.link} key={index}>
              <div className='file-card-link'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00051 10.38L6.9998 1.79365L9.00091 1.79365L9.0002 10.3786L11.9998 7.37908L13.414 8.7933L7.99965 14.2076L2.58604 8.794L4.00025 7.37979L7.00051 10.38Z'
                    fill='#1E1E1E'
                    className='arrow'
                  />
                </svg>
              </div>
              <div>
                <img
                  src={file.img}
                  width='fit-content'
                  className='file-card-thumbnail'
                />
              </div>
              <div className='file-card-title'>{file.title}</div>
              <div className='file-card-description'>{file.description}</div>
              <div className='file-card-tags'>{file.tags}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
