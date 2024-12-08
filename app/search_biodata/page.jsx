"use client";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import BiodataCard from "./biodata_card.jsx";
import Loading from "../loading.jsx";
import { useSearchParams } from "next/navigation";

const DataComponent = () => {
  const [data, setData] = useState(null);

  const searchParams = useSearchParams();
  const biodata = searchParams.get("biodata");
  const marriedStatus = searchParams.get("marriedStatus");
  const division = searchParams.get("division");

  useEffect(() => {
    const usersRef = ref(database, "AllBiodata");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapData = Object.entries(snapshot.val());
          const newArray = [];

          snapData.map((data) => {
            if (
              data[1].boyOrGirl == biodata &&
              data[1].marriedStatus == marriedStatus &&
              data[1].division == division
            ) {
              newArray.push(data);
            } else {
            }
          });

          setTimeout(() => {
            setData(newArray);
          }, 300);
        } else {
          alert("Somthing wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data ? (
        <div className="">
          <div className="w-full text-center">
            <h1 className="px-2 py-4 text-3xl text-purple-800 underline underline-offset-8 decoration-wavy">
              “সমস্ত বায়োডাটা”
            </h1>
            <p className="text-pink-700">
              আপনার কোনো বায়োডাটা পছন্দ হলে আমাদের পেইজে মেসেজ দিন।
            </p>
          </div>

          <div>
            <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1   mt-3">
              {data.map((singleData) => (
                <div
                  key={singleData[0]}
                  className="h-max rounded-xl m-2  text-white p-3"
                >
                  <BiodataCard
                    dataName={singleData[0]}
                    dataObj={singleData[1]}
                    searchParams={{ biodata, marriedStatus, division }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DataComponent;
