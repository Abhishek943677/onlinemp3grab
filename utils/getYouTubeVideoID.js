export default function getYouTubeVideoID(url) {
    // Define regular expression patterns for different formats of YouTube URLs
    const youtubePatterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/, // Standard video URL
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]+)/ // Shortened URL
    ];
  
    // Check if the URL matches any of the YouTube patterns and extract the video ID
    for (const pattern of youtubePatterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
  
    // If no match is found, return null or any appropriate default value
    return null;
  }
  

  
  
  
  