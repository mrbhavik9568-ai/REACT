import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Spotify User Dashboard</h1>
      <p>Logged in as: {user?.email}</p>
      <button onClick={() => navigate("/dashboard")}>Refresh</button>
    </div>
  );
}

export default Dashboard;
