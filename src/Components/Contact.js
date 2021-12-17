const Contact = function () {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <form
          action="https://formspree.io/f/xqknzjpd"
          method="POST"
          id="tmContactForm"
          className="tm-bg-white-transparent"
        >
          <div className="form-group">
            <input
              type="email"
              id="contact_email"
              name="_replyto"
              className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              id="contact_message"
              name="message"
              className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
              placeholder="Message"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn tm-btn-submit rounded-0 text-white btn-info"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
