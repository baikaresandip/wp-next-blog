export default getMediaUrl = async (mediaId) => {
  const mediaData = await fetch(
    "http://www.wpdemo.local/wp-json/wp/v2/media/" + { mediaId }
  );
  const media = await mediaData.json();
  return media.guid?.rendered;
};
