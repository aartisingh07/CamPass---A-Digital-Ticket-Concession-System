import "../../styles/UserDashboard/myConcession.css";

function MyConcession() {

  const concessions = [
    {
      date: "04 Mar 2026",
      period: "Monthly",
      class: "1st",
      route: "Dombivli → Thane",
      status: "Pending"
    },
    {
      date: "5 Feb 2026",
      period: "Monthly",
      class: "2nd",
      route: "Dombivli → Thane",
      status: "Approved"
    }
  ];

  return (
    <div className="concession-history-container">

      <h2 className="section-title">My Concession</h2>

      <table className="concession-table">

        <thead>
          <tr>
            <th>Date</th>
            <th>Period</th>
            <th>Class</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {concessions.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.period}</td>
              <td>{item.class}</td>
              <td>{item.route}</td>

              <td>
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default MyConcession;