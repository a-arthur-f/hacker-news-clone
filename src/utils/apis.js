import axios from 'axios';
import { BASE_URL } from './constants';

const getStory = async (id) => {
    try {
        const {data: story} = await axios(`${BASE_URL}/item/${id}.json`);
        return story;
    } catch(e) {
        console.log(e);
    }
}

export const getStories = async (type) => {
    try {
        const {data: storyIds} = await axios(`${BASE_URL}/${type}stories.json`);
        const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
        return stories;
    } catch(e) {
        console.log(e);
    }
}

