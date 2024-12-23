import Appointment from "./Appointment";
import ProfileDetails from "./ProfileDetails";

function Dashboard() {
  return (
    <div className="grid justify-center grid-cols-2 mx-[8rem] mt-10 gap-x-0 justify-items-center">
      <ProfileDetails />
      <Appointment />
    </div>
  );
}

export default Dashboard;
