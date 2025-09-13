import React from "react";
import { PenTool } from "lucide-react";

function WelcomeModal() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-secondary bg-gradient bg-opacity-75">
      <div className="rounded-5 p-5 shadow bg-white">
        <div className="d-flex justify-content-center">
          <div className="border border-dark rounded-3 p-3 mb-3 bg-secondary bg-gradient bg-opacity-50">
            <PenTool size={48} />
          </div>
        </div>
        <div className="mb-3 mt-3">
          <h1>Notes</h1>
        </div>
        <div className="mb-4">
          <p> Your thoughts, beautifully organized.</p>
        </div>
        <div className="mb-3 d-grid gap-2 col-8 mx-auto">
          <button className="btn btn-dark">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
