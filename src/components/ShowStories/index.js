import React from 'react';
import useDataFetcher from '../../hooks/dataFetcher';
import Loader from '../Loader';
import Story from '../Story';

const ShowStories = ({ type, page }) => {
    const { isLoading, stories } = useDataFetcher(type, page);

    return (
        <React.Fragment>
            <Loader show={isLoading}>Loading...</Loader>
            <React.Fragment>
                {stories.map((story)=> (
                    <Story key={story.id} story={story} />
                ))}
            </React.Fragment>
        
        </React.Fragment>
    )
}

export default ShowStories;