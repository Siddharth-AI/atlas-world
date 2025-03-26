export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
  };

  return (
    <section className="section-contact">
      <h1 className="container-title">Contact Us</h1>
      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
            required
          />
          <input
            type="email"
            className="form-control"
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
            required
          />
          <textarea
            className="form-control"
            rows="10"
            autoComplete="false"
            placeholder="Enter your message"
            name="message"
            required
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
