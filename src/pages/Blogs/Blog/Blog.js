import './Blog.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function () {
  let { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  var stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const getBlogs = (
        await axios.get(
          'https://opensheet.elk.sh/1AcJq6x1NHCeCSWRJq2j9zMMASFxN1ZwCzqS4zwRZypY/1'
        )
      ).data;
      setBlog(
        getBlogs.filter((blog) => {
          return blog.id === id;
        })[0]
      );
      setLoading(false);
    }
    fetch();
  }, []);

  if (loading) {
    return (
      <div className='center-center'>
        <img src='https://res.cloudinary.com/imuhammadosama/image/upload/v1658069428/Portfolio/Loading_b2lqoz.gif' />
      </div>
    );
  }
  return (
    <div className='blog-page'>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className='blog-content'
      />
    </div>
  );
}
