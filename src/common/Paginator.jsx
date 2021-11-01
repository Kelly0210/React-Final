import React, {useState} from 'react';
import style from '../Components/Users/Users.module.css';

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
                return <span className={props.currentPage === page && style.pickedPage}
                             key={page}
                             onClick={(event) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}

export default Paginator;