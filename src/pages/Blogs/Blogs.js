import './Blogs.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function () {
  const [oldBlogs, setOldBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const getBlogs = (
        await axios.get(
          'https://opensheet.elk.sh/1AcJq6x1NHCeCSWRJq2j9zMMASFxN1ZwCzqS4zwRZypY/1'
        )
      ).data;
      setBlogs(getBlogs);
      setOldBlogs(getBlogs);
      setLoading(false);
    }
    fetch();
  }, []);

  function search(e) {
    console.log(e.target.value);
    if (e.target.value !== '') {
      const newBlogs = oldBlogs.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          blog.description
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          blog.content.toLowerCase().includes(e.target.value.toLowerCase()) ||
          blog.tags.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setBlogs(newBlogs);
    } else {
      setBlogs(oldBlogs);
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
    <div className='blogs-page'>
      <div>
        <input
          className='blog-search'
          placeholder='search blog'
          onChange={(e) => search(e)}
        />
      </div>
      <div className='blog-cards'>
        {blogs.map((blog, index) => {
          return (
            <Link
              className='blog-card clickable'
              to={`/blog/${blog.id}`}
              key={index}
            >
              <div className='blog-card-link'>
                <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m10.743 6.964-6.071 6.072-1.415-1.415 6.071-6.07H5.086v-2h7.657v7.656h-2V6.964Z'
                    fill='#1e1e1e'
                    fillRule='nonzero'
                    className='arrow'
                  ></path>
                </svg>
              </div>
              <div>
                <img
                  src={blog.img}
                  width='fit-content'
                  className='blog-card-thumbnail'
                />
              </div>
              <div className='blog-card-title'>{blog.title}</div>
              <div className='blog-card-description'>{blog.description}</div>
              <div className='blog-card-tags'>{blog.tags}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
