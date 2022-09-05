import './Title.css';
export default function Title(props) {
  const { title, description } = props;

  return (
    <div className='page-banner'>
      <div className='page-title'>{title}</div>
      <div
        className='page-description'
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}
