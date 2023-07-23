
export default function isYouTubeUrl(url) {
  const youtubePatterns = [
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)$/, // Standard video URL
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]+)$/, // Embed URL
    /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]+)$/ // Shortened URL
  ];

  // Check if the URL matches any of the YouTube patterns
  return youtubePatterns.some(pattern => pattern.test(url));
  }