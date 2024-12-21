import { IoMdStar } from "react-icons/io";
function Profile() {
  return (
    <div className="mt-[9rem] ">
      <img
        src="/bg.png"
        className="h-[151px] w-[1220px] rounded-t-2xl mx-auto"
      ></img>
      <div className="h-[151px] w-[1220px] bg-[#FFFBF2] mx-auto ">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-6">
            <img src="/profile.png" className="w-[159px] h-[159px]" />
            <div className="font-poppins">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">Dr. Bruce Willis</h2>
                <img src="/tick.svg" alt="blue tick"></img>{" "}
              </div>
              <div>
                <p className="pt-1 text-base font-medium">Gynecologist </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <p className="text-base font-semibold">4.2</p>
                <div className="text-xl text-[#F79624] flex items-center">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-16">
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Followers</p>
              <p className="text-xl font-semibold">850</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Following</p>
              <p className="text-xl font-semibold">18K</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Posts</p>
              <p className="text-xl font-semibold">250</p>
            </div>
          </div>
          <button className="px-8 py-3 text-xl font-medium text-white rounded-lg bg-highlight font-inter">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
