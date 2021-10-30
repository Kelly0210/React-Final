import React from 'react';
import style from '../Components/Users/Users.module.css';

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => {
            return <span className={props.currentPage === page && style.pickedPage}
                         onClick={(event) => {
                             props.onPageChanged(page)
                         }}>{page}</span>
        })}
    </div>
}

export default Paginator;