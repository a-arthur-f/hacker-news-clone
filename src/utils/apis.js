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

export const getStories = async (type, page) => {
    try {
        const {data: storyIds} = await axios(`${BASE_URL}/${type}stories.json`);
        const from = (page - 1) * 30;
        const to = page * 30;
        const stories = await Promise.all(storyIds.slice(from, to).map(getStory));
        return stories;
    } catch(e) {
        console.log(e);     
    }
}

export const getStoriesCount = async (type) => {
    try {
        const { data: storyIds } = await axios(`${BASE_URL}/${type}stories.json`);
        const count = storyIds.length;
        return count;
    } catch(e) {
        console.log(e);
    }
}

