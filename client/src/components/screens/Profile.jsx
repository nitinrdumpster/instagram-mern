import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "750px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            src="https://github.com/itsnitinr.png"
            alt="Profile pic"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <h4>Nitin Ranganath</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="gallery-item"
        />
      </div>
    </div>
  );
};

export default Profile;
