import { useState } from "react";
import "../../styles/UserDashboard/applyConcession.css";

function ApplyConcession() {
  const [travelClass, setTravelClass] = useState("1st");
  const [period, setPeriod] = useState("monthly");
  const [appDate, setAppDate] = useState(new Date().toISOString().split('T')[0]);

  const isFormValid = travelClass && period && appDate;

  return (
    <div className="concession-layout">

      {/* LEFT SIDE FORM */}
      <div className="concession-container">
        <h2 className="section-title">Concession Application</h2>

        {/* SELECT CLASS */}
        <div className="form-group">
          <label>Select Class</label>
          <div className="class-toggle">
            <button
              type="button"
              className={travelClass === "1st" ? "active" : ""}
              onClick={() => setTravelClass("1st")}
            >
              1st Class
            </button>

            <button
              type="button"
              className={travelClass === "2nd" ? "active" : ""}
              onClick={() => setTravelClass("2nd")}
            >
              2nd Class
            </button>
          </div>
        </div>

        {/* SELECT PERIOD */}
        <div className="form-group">
          <label>Select Period</label>

          <div className="period-options">
            <label className="radio-label">
              <input
                type="radio"
                name="period"
                checked={period === "monthly"}
                onChange={() => setPeriod("monthly")}
              />
              <span>Monthly</span>
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="period"
                checked={period === "quarterly"}
                onChange={() => setPeriod("quarterly")}
              />
              <span>Quarterly</span>
            </label>
          </div>
        </div>

        {/* DATE */}
        <div className="form-group">
          <label>Date of Application</label>

          <div className="date-input-wrapper">
            <input
              type="date"
              className="calendar-input"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
            />
          </div>
        </div>

        {/* NOTE */}
        <div className="note-box">
          ⚠ Note: Apply for concession can be done only once.
        </div>

        <button className="apply-btn" disabled={!isFormValid}>
          Apply for Concession
        </button>
      </div>

      {/* RIGHT SIDE INSTRUCTIONS */}
      <div className="instructions-box">
        <h3>Important Instructions</h3>

        <ul>
          <li>Select the correct travel class (1st Class or 2nd Class).</li>
          <li>Choose a valid concession period.</li>
          <li><b>Monthly Pass</b> – valid for 1 month.</li>
          <li><b>Quarterly Pass</b> – valid for 3 months.</li>
          <li>SC/ST students must upload valid caste certificate.</li>
          <li>Upload all documents before applying.</li>
          <li>After approval check the <b>My Concession</b> section.</li>
          <li>Application cannot be modified once submitted.</li>
        </ul>
      </div>

    </div>
  );
}

export default ApplyConcession;