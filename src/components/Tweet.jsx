import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  console.log(tweet);
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">

        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />

          {/* <span className="timestamp">{tweet.timestamp}</span> */}
          <Timestamp time={tweet.timestamp} /> 
        </div>

        <p className="message">{tweet.message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
