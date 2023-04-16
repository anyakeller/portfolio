import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-2">
      <div className="row mx-0">
        <div className="col text-center">
          <small>
            <a href="https://github.com/anyakeller/portfolio">
              View Source Code
            </a>
          </small>
        </div>
        <div className="col text-center">
          <small>Built with React.js</small>
        </div>
      </div>
    </footer>
  );
}
