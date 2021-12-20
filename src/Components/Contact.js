import React, { useState } from 'react';
import axios from 'axios';

const Contact = function () {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xqknzjpd',
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Thanks! Message received', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="row d-flex justify-content-center m-3">
      <div className="col-lg-5 col-md-8 col-sm-12">
        <form className="tm-bg-white-transparent" onSubmit={handleOnSubmit}>
          <div className="form-group p-3">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group p-3">
            <textarea
              rows="4"
              id="message"
              name="message"
              className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
              placeholder="Message"
              required
            />
          </div>
          <div className="text-center ms-5">
            <button className="btn ms-4 mb-2 tm-btn-submit rounded-0 text-white btn-info" type="submit" disabled={serverState.submitting}>
              Submit
            </button>
          </div>
          {serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
