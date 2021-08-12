import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStoriesCount } from '../../utils/apis';
import './styles.css';

const Button = ({text, onClick}) => (
    <span onClick={onClick}>{text}</span>
)

const Pagination = ({ type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pageButtons = [];

    useEffect(async () => {
        const pages = await getStoriesCount(type);
        setTotalPages(pages);
    }, [type, totalPages]);

    const pageOnClick = (nextPage) => {
        if(nextPage < 1) return;
        if(nextPage > totalPages) return;
        if(currentPage !== nextPage) {
            setCurrentPage(nextPage);
        }   
    }

    if(totalPages < 6) {
        for(let i = 0; i < totalPages; i++) {
            pageButtons.push(
                <Link key={i}
                    to={`/${type}/${currentPage + i}`}>
                        <Button 
                            text={currentPage}
                            onClick={pageOnClick} 
                        />
                </Link>)
        }
    } else {
        pageButtons.push(
            <Link key="<"
                to={`/${type}/${currentPage > 1 ? currentPage - 1 : 1}`}
            >
                <Button
                    text='<'
                    onClick={() => {pageOnClick(currentPage - 1)}}
                />
            </Link>
        )

        for(let i = 0; i < 6; i++) {
            pageButtons.push(
                <Link key={i}
                    to={`/${type}/${currentPage + i}`}
                >
                        <Button 
                            text={currentPage + i}
                            onClick={() => {pageOnClick(currentPage + i)}}
                        />
                </Link>)
        }

        pageButtons.push(
            <Link key=">"
                to={`/${type}/${currentPage < totalPages ? currentPage + 1 : totalPages}`}
            >
                <Button
                    text='>'
                    onClick={() => {pageOnClick(currentPage + 1)}}
                />
            </Link>
        )
    }

    return (
        <div className="pagination">
            {pageButtons}
        </div>
    )
}

export default Pagination;