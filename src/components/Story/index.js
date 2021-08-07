import React from 'react';

const Link = ({url, title}) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
)

const Story = ({story: {id, by, title, kids, time, url}}) => (
    <div className="story">
        <div className="story-tile">
            <Link url={url} title={title} />
        </div>
    
        <div className="story-info">
            <span>
                by{' '}
                <Link url={`https://news.ycombinator.com/user?id${id}`} title={by} />
            </span>
            |<span>
                {new Date(time * 1000).toLocaleDateString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric'
                })}
            </span>|
            <span>
                <Link 
                    url={`https://news.ycombinator.com/item?id=${id}`}
                    tile={`${kids && kids.length > 0 ? kids.length : 0} comments`}
                />
            </span>
        </div>
    </div>
)

export default Story;