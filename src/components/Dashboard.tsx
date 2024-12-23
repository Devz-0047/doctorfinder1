import Appointment from "./Appointment";
import ProfileDetails from "./ProfileDetails";

function Dashboard() {
  return (
    <div className="mt-10">
      <ProfileDetails />
      <Appointment />
    </div>
  );
}

export default Dashboard;
