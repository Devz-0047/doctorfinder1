import { IoMdStar } from "react-icons/io";
function Profile() {
  return (
    <div className="mt-[9rem] ">
      <img
        src="public\bg.png"
        className="h-[151px] w-[1220px] rounded-t-2xl mx-auto"
      ></img>
      <div className="h-[151px] w-[1220px] bg-[#FFFBF2] mx-auto ">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-6">
            <img src="./public/profile.png" className="w-[159px] h-[159px]" />
            <div className="font-poppins">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">Dr. Bruce Willis</h2>
                <img src="./public/tick.svg" alt="blue tick"></img>{" "}
              </div>
              <div>
                <p className="text-base font-medium pt-1">Gynecologist </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <p className="font-semibold text-base">4.2</p>
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
            <div className="flex flex-col justify-center items-center">
              <p className="font-medium">Followers</p>
              <p className="font-semibold text-xl">850</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-medium">Following</p>
              <p className="font-semibold text-xl">18K</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-medium">Posts</p>
              <p className="font-semibold text-xl">250</p>
            </div>
          </div>
          <button className="bg-highlight text-white py-3 px-8 text-xl font-inter font-medium rounded-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
