import './PagesComponent.css';

const PagesComponent = ({
  totalPages, onChangePage, onNextPage, onBackPage}) => {

  const pagesArray = Array(totalPages)
    .fill()
    .map((_,i) => i + 1);

  return (
    <div className='page_container'>
      <button className='back_btn' onClick={() => onBackPage()}>Back</button>

      {pagesArray.map((page) => (
        <button key={page} className='page_btn' onClick={() => onChangePage(page)}>
          {page}
        </button>
      ))}

      <button className='next_btn' onClick={() => onNextPage()}>Next</button>
    </div>
  );
};

export default PagesComponent;