import axios from 'axios';

const fetchNews = async (retries = 3, delay = 1000) => {
    try {
        const response = await axios.get('https://newsapi90.p.rapidapi.com/search', {
            params: {
                query: 'logistics',
                language: 'en-US',
                region: 'US'
            },
            headers: {
                'x-rapidapi-key': '1537912f93mshb0d055e825ceddep1fd5aejsnccf76c759fbf',
                'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
            }
        });
        console.log('API response:', response.data); // Log the response data
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchNews(retries - 1, delay * 2); // Exponential backoff
        } else {
            console.error('Error fetching news:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export default fetchNews;