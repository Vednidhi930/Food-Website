import React from "react";

const Alert = () => {
  return (
    <>
      <div class="alert alert-dark text-center" role="alert">
        This is a dark alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
    </>
  );
};

export default Alert;
