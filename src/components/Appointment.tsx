import { FaCircleCheck } from "react-icons/fa6";
function Appointment() {
  return (
    <div className="w-[584px] border border-green-700  rounded-2xl flex flex-col items-center">
      <div className="flex items-center justify-between px-6 rounded-2xl mt-8 border border-gray-300 font-nunito w-[545px] py-3">
        <h2 className="text-xl font-semibold">Appointment Fee</h2>
        <h2 className="text-xl font-semibold text-highlight ">₹699.00</h2>
      </div>

      <div>
        <h2 className="text-xl font-bold font-nunito">
          Select your mode of session
        </h2>
        <div className="flex items-center justify-between gap-5 px-2">
          <div className="w-[158px] h-[78px] border border-gray-400 rounded-2xl text-base flex flex-col items-center justify-center">
            <p className="font-semibold text-slate-900">In-Clinic</p>
            <p className="text-slate-600">45 mins</p>
          </div>
          <div className="w-[158px] h-[78px] border bg-[#F2FBF2] border-gray-400 rounded-2xl text-base flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-slate-900">Video </p>
              <span className="text-lg text-highlight">
                <FaCircleCheck />
              </span>
            </div>
            <p className="text-slate-600">45 mins</p>
          </div>
          <div className="w-[158px] h-[78px] border border-gray-400 rounded-2xl text-base flex flex-col items-center justify-center">
            <p className="font-semibold text-slate-900">Chat</p>
            <p className="text-slate-600">10 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
