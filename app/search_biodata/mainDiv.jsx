export default function MainDiv({ biodata, searchParams }) {
  let newArr = [];

  return (
    <div>
      {biodata.map((data) => {
        if (
          data.boyOrGirl == searchParams.biodata &&
          data.marriedStatus == searchParams.marriedStatus &&
          data.division == searchParams.division
        ) {
          console.log(data);
        } else {
        }
      })}
    </div>
  );
}
