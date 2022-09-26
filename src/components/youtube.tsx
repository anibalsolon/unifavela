import React from "react";

type YoutubeEmbedProps = {
  embedId: string;
  title?: string;
};
type YoutubeEmbedState = {
};

export default class YoutubeEmbed extends React.Component<YoutubeEmbedProps, YoutubeEmbedState> {
  state: YoutubeEmbedState = {
  };
  render() {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${this.props.embedId}?controls=0`}
          title={this.props.title} frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
