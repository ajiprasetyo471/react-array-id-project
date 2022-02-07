import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Welcome to my website</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        aspernatur nihil omnis reiciendis eos labore ullam eveniet aut dicta
        sit.
      </p>
    </section>
  );
};

export default Home;
