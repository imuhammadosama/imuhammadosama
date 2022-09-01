import './Videos.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function () {
  const [oldvideos, setOldvideos] = useState([]);
  const [videos, setvideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const getvideos = (
        await axios.get(
          'https://opensheet.elk.sh/1k7NAtztx76fSDVLnyhkYFvfUzkclZCA6bReZeScV2kw/1'
        )
      ).data;
      setvideos(getvideos);
      setOldvideos(getvideos);
      setLoading(false);
    }
    fetch();
  }, []);

  function search(e) {
    console.log(e.target.value);
    if (e.target.value !== '') {
      const newvideos = oldvideos.filter((video) => {
        return (
          video.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          video.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          video.tags.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setvideos(newvideos);
    } else {
      setvideos(oldvideos);
    }
  }

  if (loading) {
    return (
      <div className='center-center'>
        <img src='https://res.cloudinary.com/imuhammadosama/image/upload/v1658069428/Portfolio/Loading_b2lqoz.gif' />
      </div>
    );
  }
  return (
    <div className='video-page'>
      <div>
        <input
          className='video-search'
          placeholder='search video'
          onChange={(e) => search(e)}
        />
      </div>
      <div className='video-cards'>
        {videos.map((video, index) => {
          return (
            <a
              className='video-card clickable'
              href={video.link}
              key={index}
              target='_blank'
            >
              <div className='video-card-link'>
                <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m10.743 6.964-6.071 6.072-1.415-1.415 6.071-6.07H5.086v-2h7.657v7.656h-2V6.964Z'
                    fill='#1e1e1e'
                    fillRule='nonzero'
                    className='arrow'
                  ></path>
                </svg>
              </div>
              <div className='video-container'>
                <iframe
                  src={video.link}
                  className='video-card-thumbnail'
                  allow='fullscreen'
                ></iframe>
              </div>
              <div className='video-card-title'>{video.title}</div>
              {/* <div className='video-card-description'>{video.description}</div> */}
              <div className='video-card-tags'>{video.tags}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
