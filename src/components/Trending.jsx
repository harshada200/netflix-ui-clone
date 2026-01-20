import "./Trending.css";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
  },
  {
    id: 2,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w300/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    id: 3,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w300/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg"
  },
  {
    id: 4,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
  },
  {
    id: 5,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w300/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
  },
  {
    id: 6,
    title: "Lupin",
    image: "https://image.tmdb.org/t/p/w300/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg"
  },
  {
    id: 7,
    title: "Extraction",
    image: "https://image.tmdb.org/t/p/w300/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg"
  },
  {
    id: 8,
    title: "RRR (Hindi)",
    image: "https://image.tmdb.org/t/p/w300/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg"
  },
  {
  id: 9,
  title: "Pathaan",
  image: "https://image.tmdb.org/t/p/w300/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg"
 },
  {
    id: 10,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w300/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  }
];


function Trending() {
  return (
    <div className="trending">
      <h2>Trending Now</h2>

      <div className="trending-row">
        {movies.map((movie, index) => (
          <div className="movie-card" key={movie.id}>
            <span className="rank">{index + 1}</span>
            <img src={movie.image} alt={movie.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
