(() => {
  "use strict";

  const CHANNEL_ID = "UCVDrvUGLEpHK8AkTCTIU-sQ";
  const CHANNEL_URL = "https://www.youtube.com/channel/" + CHANNEL_ID;
  const FEED_URL = "https://www.youtube.com/feeds/videos.xml?channel_id=" + CHANNEL_ID;
  const API_URL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(FEED_URL);
  const GRID_ID = "youtubeLatestVideos";
  const VIDEO_COUNT = 4;
  const REFRESH_INTERVAL = 30 * 60 * 1000;
  const grid = document.getElementById(GRID_ID);
  if (!grid) return;

  const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';

  function getVideoId(item) {
    const link = item.link || "";
    const match = link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];
    const guid = item.guid || item.id || "";
    const guidMatch = guid.match(/[a-zA-Z0-9_-]{11}/);
    return guidMatch ? guidMatch[0] : null;
  }

  function getThumbnail(item, videoId) {
    if (typeof item.thumbnail === "string" && /^https:\/\//i.test(item.thumbnail)) return item.thumbnail;
    return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
  }

  function createVideoCard(item) {
    const videoId = getVideoId(item);
    if (!videoId) return null;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnailUrl = getThumbnail(item, videoId);
    if (!thumbnailUrl) return null;

    const link = document.createElement("a");
    link.className = "youtube-video";
    link.href = videoUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Watch on YouTube: ${item.title || "Latest video"}`);

    const image = document.createElement("img");
    image.src = thumbnailUrl;
    image.alt = item.title || "YouTube video thumbnail";
    image.loading = "lazy";
    image.decoding = "async";
    image.onerror = () => {
      const fallback = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
      if (image.src !== fallback) image.src = fallback;
      else image.onerror = null;
    };

    const playBadge = document.createElement("span");
    playBadge.className = "youtube-play-badge";
    playBadge.innerHTML = PLAY_ICON;
    playBadge.setAttribute("aria-hidden", "true");
    link.append(image, playBadge);
    return link;
  }

  function showError() {
    const message = document.createElement("div");
    message.className = "youtube-error";
    const text = document.createElement("p");
    text.textContent = "Videos could not be loaded right now.";
    const link = document.createElement("a");
    link.href = CHANNEL_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Watch on YouTube ↗";
    message.append(text, link);
    grid.replaceChildren(message);
  }

  async function loadLatestVideos() {
    try {
      const response = await fetch(API_URL, { method: "GET", cache: "no-cache" });
      if (!response.ok) throw new Error("Feed request failed.");
      const data = await response.json();
      if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error("The feed returned no usable videos.");
      const videos = data.items.slice(0, VIDEO_COUNT).map(createVideoCard).filter(Boolean);
      if (videos.length === 0) throw new Error("No videos were available.");
      grid.replaceChildren(...videos);
    } catch (error) {
      console.error("Unable to load YouTube videos:", error);
      if (!grid.querySelector(".youtube-video")) showError();
    }
  }

  loadLatestVideos();
  window.setInterval(loadLatestVideos, REFRESH_INTERVAL);
})();
