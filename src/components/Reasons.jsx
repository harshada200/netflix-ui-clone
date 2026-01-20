import "./Reasons.css";

function Reasons() {
  return (
    <section className="reasons">
      <h2>More reasons to join</h2>

      <div className="reasons-grid">
        <div className="reason-card">
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <span className="icon tv"></span>
        </div>

        <div className="reason-card">
          <h3>Download your shows to watch offline</h3>
          <p>
            Save your favourites easily and always have something to watch.
          </p>
          <span className="icon download"></span>
        </div>

        <div className="reason-card">
          <h3>Watch everywhere</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
          <span className="icon watch"></span>
        </div>

        <div className="reason-card">
          <h3>Create profiles for kids</h3>
          <p>
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
          <span className="icon kids"></span>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
