import { FaCircleCheck } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
function Appointment() {
  return (
    <div className="w-[584px] border border-green-700  rounded-2xl flex flex-col items-center justify-between h-[1087px] pb-12">
      <div className="flex items-center justify-between px-6 rounded-2xl mt-8 border border-gray-300 font-nunito w-[545px] py-3">
        <h2 className="text-xl font-semibold">Appointment Fee</h2>
        <h2 className="text-xl font-semibold text-highlight ">₹699.00</h2>
      </div>

      <div>
        <h2 className="text-xl font-bold font-nunito">
          Select your mode of session
        </h2>
        <div className="flex items-center justify-between gap-5 px-2 mt-6">
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
      <div className="w-[584px]">
        <div className="flex items-center justify-between pl-8 pr-8 ">
          <p className="text-xl font-semibold font-nunito">Pick a Time slot</p>
          <div className="p-2 text-lg font-semibold border border-gray-400 rounded-full">
            <SlCalender />
          </div>
        </div>

        <div className="w-[530px] flex items-center justify-between h-[123px] border border-gray-500 rounded-xl pl-3 pr-3 mt-6 mx-auto">
          <div className="text-3xl">
            <CiCircleChevLeft />
          </div>
          <div className="w-[123px] h-[80px] bg-[#F2FBF2] border border-highlight rounded-lg font-inter text-base flex items-center justify-center flex-col">
            <p className="font-semibold text-highlight">Mon, 10 Oct</p>
            <p className="font-medium text-gray-600">10 Slots</p>
          </div>
          <div className="w-[123px] h-[80px] border border-highlight  rounded-lg font-inter text-base flex items-center justify-center flex-col">
            <p className="font-semibold text-highlight">Tue, 11 Oct</p>
            <p className="font-medium text-[#D5512E]">02 Slots</p>
          </div>
          <div className="w-[123px] h-[80px] border border-highlight rounded-lg font-inter text-base flex items-center justify-center flex-col">
            <p className="font-semibold text-highlight">Wed, 12 Oct</p>
            <p className="font-medium text-[#F1B93A]">05 Slots</p>
          </div>
          <div className="text-3xl">
            <CiCircleChevRight />
          </div>
        </div>
      </div>
      <div className=" w-[503px]">
        <p className="text-xl font-semibold font-inter"> Morning</p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>09:00 AM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>09:30 AM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>10:00 AM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>10:30 AM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>11:00 AM</p>
          </div>
          <div className="px-3 py-3 text-white border border-gray-500 rounded-lg bg-highlight">
            <p>11:30 AM</p>
          </div>
        </div>
      </div>
      <div className=" w-[503px]">
        <p className="text-xl font-semibold font-inter"> Evening</p>
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>04:00 PM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>04:30 PM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>05:00 PM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>05:30 PM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg">
            <p>06:00 PM</p>
          </div>
          <div className="px-3 py-3 border border-gray-500 rounded-lg ">
            <p>06:30 PM</p>
          </div>
        </div>
      </div>
      <button className="px-32 py-4 text-xl text-white rounded-lg font-inter bg-highlight">
        Make an appointment
      </button>
    </div>
  );
}

export default Appointment;
