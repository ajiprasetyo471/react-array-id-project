import { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quos ullam
        ducimus deserunt, maxime nobis!
      </p>
    </section>
  );
};

export default Profile;
