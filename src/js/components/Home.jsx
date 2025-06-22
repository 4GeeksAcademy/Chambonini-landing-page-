import React from "react";

const Home = () => {
  const cards = Array(4).fill({
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row gap-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="container mt-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi,
              in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis
              illo aspernatur vitae fugiat numquam repellat.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Call to action!
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 d-flex flex-column">
                {/* Placeholder Box */}
                <div
                  className="card-img-top d-flex justify-content-center align-items-center bg-light border"
                  style={{ height: "325px", fontSize: "24px", color: "#999" }}
                >
                  500 x 325
                </div>
                <div className="card-body text-center flex-grow-1">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
                <div className="card-footer bg-white border-0 text-center pb-3">
                  <button className="btn btn-primary">Find Out More!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">Copyright © Your Website 2019</p>
        </div>
      </footer>
    </>
  );
};

export default Home;