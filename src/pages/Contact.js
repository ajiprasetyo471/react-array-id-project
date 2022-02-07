import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">Lorem ipsum dolor sit amet:</p>
      <ul>
        <li>WA: 088216758205</li>
        <li>Email: ajiprsty4713@gmail.com</li>
      </ul>
      <p className="section-description">Lorem ipsum dolor sit amet:</p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/ajiprasetyo.js">Instagram</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
