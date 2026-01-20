import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Reasons from "../components/Reasons";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


function App() {
  return (
    <>
      <Hero />
      <Trending />
      <Reasons />
      <FAQ />

      {/* ✅ EMAIL SECTION — PASTE HERE */}
      <div className="email-bottom">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>Get Started ›</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
