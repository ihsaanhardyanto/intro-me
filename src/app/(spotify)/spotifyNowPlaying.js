"use client";

import { useEffect, useState } from "react";
import getNowPlayingItem from "../api/spotifyAPI";

export const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    getNowPlayingItem(
      props.client_id,
      props.client_secret,
      props.refresh_token
    ).then((result) => {
      setResult(result);
      setLoading(false);
    });
  }, [props.client_id, props.client_secret, props.refresh_token]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !result.isPlaying && (
        <div>
          
          <span>Currently offline</span>
        </div>
      )}
      {!loading && result.isPlaying && (
        <div>
          <div>
            <span>Now playing</span>
          </div>
          <div>
            
            <img src={result.albumImageUrl} alt={`${result.title} album art`} />
            <a href={result.songUrl} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
            <p>{result.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
};
