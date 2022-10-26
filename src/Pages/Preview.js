import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { JsonToCsv, useJsonToCsv } from "react-json-csv";
import { JsonToExcel } from "react-json-to-excel";
// Create styles

// Create Document Component
const MyDocument = () => {
  const [data, setData] = useState([]);
  const filename = "Csv-file";
  const { saveAsCsv } = useJsonToCsv();
  const fields = {
    Name: "Name",
    "Date of Birth": "Date of Birth",
    Gender: "Gender",
    Caste: "Caste",
    Subcaste: "Subcaste",
    Religion: "Religion",
    "Blood Group": "Blood Group",
    Nationality: "Nationality",
    MotherToungue: "MotherToungue",
    "2nd Language": "2nd Language",
    "3rd Language": "3rd Language",
    "Addhar Card No": "Addhar Card No",
    "BPL status": "BPL status",
    "Types of Disability": "Types of Disability",
    "Identification Mark": "Identification Mark",
    "House No/Village/Para/Road": "House No/Village/Para/Road",
    "Post Office": "Post Office",
    "Police Station": "Police Station",
    "Block / Municipalty": "Block / Municipalty",
    District: "District",
    PIN: "PIN",
    "Primary Mobile": "Primary Mobile",
    Email: "Email",
    "Father's Name": "Father's Name",
    "Father's Education": "Father's Education",
    "Father's Occupation": "Father's Occupation",
    "Father's Office": "Father's Office",
    "Father's Contact No": "Father's Contact No",
    "Father's Annual Income": "Father's Annual Income",
    "Time given by Father": "Time given by Father",

    "Mother's Name": "Mother's Name",
    "Mother's Education": "Mother's Education",
    "Mother's Occupation": "Mother's Occupation",
    "Mother's Office": "Mother's Office",
    "Mother's Contact No": "Mother's Contact No",
    "Mother's Annual Income": "Mother's Annual Income",
    "Time given by Mother": "Time given by Mother",
    "Any Need of Private Tutor": "Any Need of Private Tutor",
    "Guardian's Name": "Guardian's Name",
    "Guardian's Occupation": "Guardian's Occupation",
    "Guardian's Relation": "Guardian's Relation",
    "Guardian's Contact No": "Guardian's Contact No",
    "Guardian's Annual Income": "Guardian's Annual Income",
    "Reason if Someone else take the custody":
      "Reason if Someone else take the custody",
    "Previous School Name": "Previous School Name",
    "Last Class Attend": "Last Class Attend",
    "School Leaving Cert. No": "School Leaving Cert. No",
    "Issue Date": "Issue Date",
  };
  useEffect(() => {
    db.collection("Notes")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        let result = [];
        var i = 1;
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          let x = {
            Name: doc.data()["Name"],
            "Date of Birth": doc.data()["Date of Birth"],
            Gender: doc.data()["Gender"],
            Caste: doc.data()["Caste"],
            Subcaste: doc.data()["Subcaste"],
            Religion: doc.data()["Religion"],
            "Blood Group": doc.data()["Blood Group"],
            Nationality: doc.data()["Nationality"],
            MotherToungue: doc.data()["MotherToungue"],
            "2nd Language": doc.data()["2nd Language"],
            "3rd Language": doc.data()["3rd Language"],
            "Addhar Card No": doc.data()["Addhar Card No"],
            "BPL status": doc.data()["BPL status"],
            "Types of Disability": doc.data()["Types of Disability"],
            "Identification Mark": doc.data()["Identification Mark"],
            "House No/Village/Para/Road":
              doc.data()["House No/Village/Para/Road"],
            "Post Office": doc.data()["Post Office"],
            "Police Station": doc.data()["Police Station"],
            "Block / Municipalty": doc.data()["Block / Municipalty"],
            District: doc.data()["District"],
            PIN: doc.data()["PIN"],
            "Primary Mobile": doc.data()["Primary Mobile"],
            Email: doc.data()["Email"],
            "Father's Name": doc.data()["Father's Name"],
            "Father's Education": doc.data()["Father's Education"],
            "Father's Occupation": doc.data()["Father's Occupation"],
            "Father's Office": doc.data()["Father's Office"],
            "Father's Contact No": doc.data()["Father's Contact No"],
            "Father's Annual Income": doc.data()["Father's Annual Income]"],
            "Time given by Father": doc.data()["Time given by Father"],
            "Mother's Name": doc.data()["Mother's Name"],
            "Mother's Education": doc.data()["Mother's Education"],
            "Mother's Occupation": doc.data()["Mother's Occupation"],
            "Mother's Office": doc.data()["Mother's Office"],
            "Mother's Contact No": doc.data()["Mother's Contact No"],
            "Mother's Annual Income": doc.data()["Mother's Annual Income"],
            "Time given by Mother": doc.data()["Time given by Mother"],
            "Any Need of Private Tutor":
              doc.data()["Any Need of Private Tutor"],
            "Guardian's Name": doc.data()["Guardian's Name"],
            "Guardian's Occupation": doc.data()["Guardian's Occupation"],
            "Guardian's Relation": doc.data()["Guardian's Relation"],
            "Guardian's Contact No": doc.data()["Guardian's Contact No"],
            "Guardian's Annual Income": doc.data()["Guardian's Annual Income"],
            "Reason if Someone else take the custody":
              doc.data()["Reason if Someone else take the custody"],
            "Previous School Name": doc.data()["Previous School Name"],
            "Last Class Attend": doc.data()["Last Class Attend"],
            "School Leaving Cert. No": doc.data()["School Leaving Cert. No"],
            "Issue Date": doc.data()["Issue Date"],
          };
          result.push(x);
          i++;
        });

        setData(result);
        console.log("hi", result);
      });
  }, []);
  return (
    <div className="Body">
      <h1>hi</h1>
      <JsonToExcel
        title="Download as Excel"
        data={data}
        fileName="sample-file"
      />
    </div>
  );
};

export default MyDocument;
