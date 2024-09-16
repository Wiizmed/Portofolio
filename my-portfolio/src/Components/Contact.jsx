import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
    <p>Email: [your.email@example.com]</p>
    <p>Phone: [Your Phone Number]</p>
    <p>LinkedIn: <a href="[Your LinkedIn Profile]">[Your LinkedIn Profile]</a></p>
    <p>GitHub: <a href="[Your GitHub Profile]">[Your GitHub Profile]</a></p>
  </section>
);

export default Contact;