import React from "react";

function ShowForm() {
  return (
    <div>
      <div className="container">
        <div className="row m-3">
          <div className="col-4 ">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
          <div className="col-4">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
          <div className="col-4">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
        </div>
        <div className="row m-3">
          <div className="col-4">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
          <div className="col-4">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
          <div className="col-4">
            <input type="name" name="name" placeholder="enter name" required />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowForm;
