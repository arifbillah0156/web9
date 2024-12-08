"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { get, ref } from "firebase/database";
import { database } from "@/lib/firebase";
import MainDiv from "./mainDiv";
import Loading from "../loading";

export default function SearchBiodata() {
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
          setData(Object.entries(snapshot.val()));
        } else {
          alert("Somthing wrong! No data found!!");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const filterArray = [];

  if (data) {
    const arrMap = data.map((arr) => {
      const mainArray = arr[1];
      const arrPush = filterArray.push(mainArray);
    });
    setTimeout(() => {
      // console.log(filterArray);
    }, 400);
  }

  // console.log(biodata, marriedStatus, division);

  return (
    <div>
      {filterArray[0] ? (
        <MainDiv
          biodata={filterArray}
          searchParams={{ biodata, marriedStatus, division }}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
// console.log(data[0][1])
