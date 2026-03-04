import { useState } from "react";
import { toast } from "react-toastify";
import "../../styles/UserDashboard/uploadDocuments.css";

import centralStations from "../../data/centralStations.json";
import westernStations from "../../data/westernStations.json";
import harbourStations from "../../data/harbourStations.json";


function UploadDocuments() {
  const [category, setCategory] = useState("open");

  const [aadhaar, setAadhaar] = useState(null);
  const [electricity, setElectricity] = useState(null);
  const [caste, setCaste] = useState(null);
  const [fromStation, setFromStation] = useState("");


  // VALIDATION CHECK
  const isFormValid =
    aadhaar &&
    electricity &&
    fromStation.trim() !== "" &&
    (category === "open" || caste);

    const allStations = [
      // Central main line
      ...centralStations.stations.map(s => s.name),

      // Central branches
      ...centralStations.branches.karjat_khopoli,
      ...centralStations.branches.kasara,

      // Western line
      ...westernStations.stations.map(s => s.name),

      // Harbour line
      ...harbourStations.main_route,
      ...harbourStations.branches.towards_panvel,
      ...harbourStations.branches.towards_goregaon
    ].map(station => station.toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    const stationInput = fromStation.trim().toLowerCase();

    // REQUIRED FIELD CHECK
    if (!aadhaar || !electricity || stationInput === "") {
      toast.error("Please fill all required fields");
      return;
    }

    // STATION VALIDATION USING JSON DATA
    if (!allStations.includes(stationInput)) {
      toast.error(
        "Invalid station name. Please enter a valid Mumbai local station.",
        { autoClose: 4000 }
      );

      setTimeout(() => {
        window.location.reload();
      }, 4000);

      return;
    }

    // ✅ SUCCESS
    toast.success("Documents uploaded successfully!");

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="upload-container">
      <h2 className="section-title">Upload Documents</h2>

      {/* CATEGORY TOGGLE */}
      <div className="category-toggle">
        <button
          type="button"
          className={category === "open" ? "active" : ""}
          onClick={() => setCategory("open")}
        >
          Open
        </button>

        <button
          type="button"
          className={category === "scst" ? "active" : ""}
          onClick={() => setCategory("scst")}
        >
          SC / ST
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* --- Aadhaar Card Field --- */}
        <div className="doc-field">
          <label>Aadhaar Card *</label>
          <input
            type="file"
            required
            onChange={(e) => setAadhaar(e.target.files[0])}
          />
        </div>

        {/* --- Electricity Bill Field --- */}
        <div className="doc-field">
          <label>Electricity Bill *</label>
          <input
            type="file"
            required
            onChange={(e) => setElectricity(e.target.files[0])}
          />
        </div>

        {/* --- Caste Certificate Field (Conditional) --- */}
        {category === "scst" && (
          <div className="doc-field">
            <label>Caste Certificate *</label>
            <input
              type="file"
              required
              onChange={(e) => setCaste(e.target.files[0])}
            />
          </div>
        )}

        {/* TRAVEL DETAILS */}
        <div className="travel-row">
          <div className="travel-field">
            <label>From *</label>
            <input
              type="text"
              placeholder="Enter starting station"
              value={fromStation}
              required
              onChange={(e) => setFromStation(e.target.value)}
            />
          </div>

          <div className="travel-field">
            <label>To</label>
            <input type="text" value="Thane" disabled className="disabled-input" />
          </div>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid}
        >
          Upload Documents
        </button>
      </form>
      {/* IMPORTANT INSTRUCTIONS */}
      <div className="instructions-box">
        <h3>
          <i className="fa-solid fa-circle-info"></i> Important Instructions Before Uploading Documents
        </h3>

        <ul>
          <li>Upload clear scanned copies or photos of the required documents.</li>
          <li>Ensure all text and numbers are clearly visible in the uploaded files.</li>
          <li>Accepted file formats: <strong>PDF, JPG, JPEG, PNG</strong>.</li>
          <li>Maximum file size for each document: <strong>2 MB</strong>.</li>
          <li>The Aadhaar card must match the student's registered name and PRN details.</li>
          <li>The electricity bill must show the current residential address of the student.</li>
          <li>Make sure the From and To stations are entered correctly before submitting.</li>
          <li>Uploading incorrect or unclear documents may lead to rejection of the concession application.</li>
          <li>Once submitted, documents cannot be edited until the admin reviews the application.</li>
        </ul>
      </div>
    </div>
  );
}

export default UploadDocuments;