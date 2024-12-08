import MenCardIcon from "@/public/Images/MenCardIcon.png";
import WomenCardIcon from "@/public/Images/WomenCardIcon.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BiodataCard({ dataName, dataObj }) {
  const [copied, setCopied] = useState(false);

  console.log(dataName);

  const {
    id,
    date,
    boyOrGirl,
    name,
    mobile,
    age,
    height,
    birthID,
    birthDate,
    address,
    marriedStatus,
    division,
    education,
    occupation,
    monthlyIncome,
    personalDetails,
    familyDetails,
    partnerDetails,
    fbLink,
    extra,
  } = dataObj;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dataName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("UID কপি করা হয়নি!!");
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="border rounded-3xl hover:ring-4 hover:ring-blue-400 duration-100">
      {/* Header */}
      <div className="w-full flex justify-center   bg-purple-700 py-3 rounded-t-3xl">
        {boyOrGirl === "পাত্র" ? (
          <Image
            src={MenCardIcon}
            alt="Men Card Icon"
            placeholder="blur"
            height={100}
            className="p-2 bg-white rounded-full mt-1"
          />
        ) : (
          <Image
            src={WomenCardIcon}
            alt="Women Card Icon"
            placeholder="blur"
            height={110}
            className="p-2 bg-white rounded-full mt-1"
          />
        )}
      </div>
      <div className="bg-purple-700 text-white text-center">
        <p className="text-xl underline decoration-dotted underline-offset-4">
          বায়োডাটা UID
        </p>
        <div className="pb-2 pt-1">
          <p className="text-lg mb-2">{dataName}</p>
          <span
            onClick={handleCopy}
            className="ml-4 border py-[6px] px-3 rounded-md text-md cursor-pointer hover:underline"
          >
            {copied ? "কপি করা হয়েছে" : "UID কপি করুন"}
          </span>
        </div>{" "}
      </div>

      {/* Middle */}
      <div className="bg-white text-black  rounded-md w-full">
        <div className="flex text-xl gap-3 px-3  border py-2">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            নাম:{""}
          </p>
          <p className=" text-purple-950">{name}</p>
        </div>
        {/*  */}

        <div className="flex text-xl gap-3 px-3 border border-t-0 py-2 ">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            বয়স:{""}
          </p>{" "}
          <p className=" text-purple-950">{age}</p>
        </div>
        {/*  */}
        <div className="flex text-xl gap-3 px-3 border border-t-0  py-2">
          <p className="underline underline-offset-2 decoration-wavy font-bold text-pink-700 pl-4">
            বিভাগ:{""}
          </p>
          <p className=" text-purple-950">{division}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full text-center m-6">
        <Link
          href={`/all_biodata/${dataName}`}
          className="text-white p-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-lg hover:ring-2 hover:underline "
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
}
