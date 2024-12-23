import { IoMdAdd } from "react-icons/io";
function ProfileDetails() {
  return (
    <div>
      <div className="w-[625px] h-[410px] mx-auto rounded-2xl border border-green-700">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px]">
          <h2 className="text-2xl font-semibold font-nunito">
            A Little About me
          </h2>
          <button className="border-1 border-highlight">
            Follow <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
