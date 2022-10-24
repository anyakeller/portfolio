import React from "react";

function Contact(props) {
  return (<div>
    <div className="row">
      <div className="col">
        <div className="bg-gradient-light mx-auto shadow-sm px-4 py-4 clearfix" style={{
            maxWidth: "690px"
          }}>
          <div className="mb-3 mb-md-0">
            <h1>
              <small className="text-muted text-small mr-2 d-block d-sm-inline">
                
              </small>
              <span className="display-4">Contact Me</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col">
        <div className="bg-gradient-light mx-auto shadow-lg px-4 py-4 clearfix" style={{
            maxWidth: "400px"
          }}>
          <div className="mb-3 mb-md-0">
            <h1 className="font-weight-light">
              Anya Keller
            </h1>
            <dl className="row">
              <dt className="col-sm-3">Email</dt>
              <dd className="col-sm-9">alkeller@bu.edu</dd>

              <dt className="col-sm-3">Links</dt>
              <dd className="col-sm-9">
                <a href="https://github.com/anyakeller">Github</a><br/>
                <a href="https://www.linkedin.com/in/anya-keller-7914b297/">Linkedin</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Contact;
