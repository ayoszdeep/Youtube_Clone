// constants.js

// Put your real API key here (for local dev/testing only, not production)
const GOOGLE_API_KEY = "AIzaSyB0agnxovrhISFy0JG86jhRroLymXrZ-tc";

// Only use the API key in the "key=" query param. Do NOT include Authorization headers.
export const YOU_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
 export const YT_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";