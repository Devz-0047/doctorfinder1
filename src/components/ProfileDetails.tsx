import { IoMdAdd } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
function ProfileDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-[625px] h-[410px]  rounded-2xl border border-green-700 flex flex-col justify-between">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px] flex items-center justify-between px-8">
          <h2 className="text-2xl font-semibold font-nunito">
            A Little About me
          </h2>
          <button className="flex items-center gap-1 px-3 py-1 text-base border rounded-lg border-1 border-highlight font-poppins">
            <p>Follow</p> <IoMdAdd />
          </button>
        </div>
        <div className="pl-8 pr-12 ">
          <p className="text-base text-wrap font-poppins ">
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and seniour doctors.
            Completed my graduation in Gynaecologist Medicine from the
          </p>
          <div className="flex items-center justify-between mt-4 ">
            <div className="h-[1.5px] bg-gray-500 w-[460px] "></div>
            <p className="underline underline-offset-1">Read more</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pl-8 text-xl font-nunito">
          <p className="font-semibold">Language Spoken</p>
          <p className="px-3 py-1 bg-gray-100 rounded-lg">English</p>
          <p className="px-3 py-1 bg-gray-100 rounded-lg">Hindi</p>
          <p className="px-3 py-1 bg-gray-100 rounded-lg">Telugu</p>
        </div>
        <div className="flex gap-4 pl-8 mb-12 item center">
          <button className="px-3 py-2 text-2xl bg-gray-100 rounded-full">
            <SlSocialFacebook />
          </button>
          <button className="px-3 py-2 text-2xl bg-gray-100 rounded-full">
            <SlSocialInstagram />
          </button>
          <button className="px-3 py-2 text-2xl bg-gray-100 rounded-full">
            <SlSocialYoutube />
          </button>
          <button className="px-3 py-2 text-2xl bg-gray-100 rounded-full">
            <SlSocialTwitter />
          </button>
        </div>
      </div>
      <div className="w-[625px] h-[251px]  rounded-2xl border border-green-700">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px] flex items-center justify-between px-8">
          <h2 className="text-2xl font-semibold font-nunito">
            I Specialize In
          </h2>
        </div>
        <div className="flex items-center justify-around mt-8">
          <img
            src="/specialize/image1.png"
            alt="Specialize1"
            className="h-[123px] w-[121px]"
          />
          <img
            src="/specialize/image2.png"
            alt="Specialize1"
            className="h-[123px] w-[121px]"
          />
          <img
            src="/specialize/image3.png"
            alt="Specialize1"
            className="h-[123px] w-[121px]"
          />
          <img
            src="/specialize/image4.png"
            alt="Specialize1"
            className="h-[123px] w-[121px]"
          />
        </div>
      </div>
      <div className="w-[625px] h-[251px]  rounded-2xl border border-green-700">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px] flex items-center justify-between px-8">
          <h2 className="text-2xl font-semibold font-nunito">
            The Concerns I Treat
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-4 px-6 mt-8 text-lg text-popins">
          <p className="px-3 py-2 bg-gray-100 rounded-2xl">Skin Treatment</p>
          <p className="px-3 py-2 bg-gray-100 rounded-2xl">Period Doubts</p>
          <p className="px-3 py-2 bg-gray-100 rounded-2xl">Endometriosis</p>
          <p className="px-3 py-2 bg-gray-100 rounded-2xl">Pelvic Pain </p>
          <p className="px-3 py-2 bg-gray-100 rounded-2xl">Ovarian Cysts </p>
          <p className="px-3 py-2 border border-gray-300 rounded-2xl">
            + 5 More
          </p>
        </div>
      </div>
      <div className="w-[625px] h-[331px] rounded-2xl border border-green-700">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px] flex items-center justify-between px-8">
          <h2 className="text-2xl font-semibold font-nunito">
            My Work Experience
          </h2>
        </div>
        <div className="font-poppins">
          <h3 className="pt-10 pb-4 pl-8 text-xl font-medium font-poppins">
            I have been in practice for : 7+ Years
          </h3>
          <div>
            <div className="flex items-center justify-between pl-8 pr-14">
              <div className="flex items-center gap-6 pt-4">
                <img
                  src="/building.png"
                  alt="Building"
                  className="w-[58px] h-[58px]"
                />
                <div className="flex flex-col ">
                  <p className="text-lg">Midtown Medical Clinic</p>
                  <p className="text-lg text-gray-700">Senior Doctor</p>
                </div>
              </div>
              <p className="text-lg text-gray-700">2016-Present</p>
            </div>
            <div className="flex items-center justify-between pl-8 pr-[5.2rem]">
              <div className="flex items-center gap-6 pt-4">
                <img
                  src="/building.png"
                  alt="Building"
                  className="w-[58px] h-[58px]"
                />
                <div className="flex flex-col ">
                  <p className="text-lg">Midtown Medical Clinic</p>
                  <p className="text-lg text-gray-700">Senior Doctor</p>
                </div>
              </div>
              <p className="text-lg text-gray-700">2010-2016</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[625px] h-[524px] rounded-2xl border border-green-700">
        <div className="w-full bg-gradient-to-r from-[#F2FBF2] rounded-t-2xl to-white h-[62px] flex items-center justify-between px-8">
          <h2 className="text-2xl font-semibold font-nunito">
            Featured Reviews (102)
          </h2>
        </div>
        <div className="pl-8 pr-10 mt-10 ">
          <div className="flex items-center justify-between pr-10 font-nunito ">
            <div className="flex items-center gap-2">
              <img
                src="/patient1.png"
                alt="Patient"
                className="h-[56px] w-[54px]"
              />
              <div>
                <p className="text-xl font-medium">Alicent Hightower</p>
                <p className="text-lg text-gray-600">
                  Consulted for Skin care
                </p>{" "}
              </div>
            </div>
            <p className="text-lg text-gray-600">10 January 2023</p>
          </div>
          <div className="mt-5">
            <div className="text-lg text-[#F79624] flex items-center gap-2 mt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-2">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
        <div className="pl-8 pr-10 mt-16 ">
          <div className="flex items-center justify-between pr-10 font-nunito ">
            <div className="flex items-center gap-2">
              <img
                src="/patient2.jpg"
                alt="Patient"
                className="h-[56px] w-[54px] rounded-full"
              />
              <div>
                <p className="text-xl font-medium">Daemon Targaryen</p>
                <p className="text-lg text-gray-600">
                  Consulted for Skin cuts
                </p>{" "}
              </div>
            </div>
            <p className="text-lg text-gray-600">25 Dec 2023</p>
          </div>
          <div className="mt-5">
            <div className="text-lg text-[#F79624] flex items-center gap-2 mt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-2">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
