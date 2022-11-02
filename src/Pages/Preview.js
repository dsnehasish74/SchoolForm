import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { JsonToCsv, useJsonToCsv } from "react-json-csv";
import { JsonToExcel } from "react-json-to-excel";
import { Link } from "react-router-dom";
// Create styles

// Create Document Component
const MyDocument = () => {
  const [data, setData] = useState([]);
  const filename = "Csv-file";
  const { saveAsCsv } = useJsonToCsv();
  const fields = {
    Name: "Name",
    "Date of Birth(MM/DD/YYYY)": "Date of Birth",
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
      .orderBy("Date")
      .onSnapshot((querySnapshot) => {
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
            "Time given by Father": doc.data()["Time given by Father"],
            "Mother's Name": doc.data()["Mother's Name"],
            "Mother's Education": doc.data()["Mother's Education"],
            "Mother's Occupation": doc.data()["Mother's Occupation"],
            "Mother's Office": doc.data()["Mother's Office"],
            "Mother's Contact No": doc.data()["Mother's Contact No"],
            "Time given by Mother": doc.data()["Time given by Mother"],
            "Any Need of Private Tutor":
              doc.data()["Any Need of Private Tutor"],
            "Guardian's Name": doc.data()["Guardian's Name"],
            "Guardian's Occupation": doc.data()["Guardian's Occupation"],
            "Guardian's Relation": doc.data()["Guardian's Relation"],
            "Guardian's Contact No": doc.data()["Guardian's Contact No"],
            "Family Annual Income": doc.data()["Guardian's Annual Income"],
            "Reason if Someone else take the custody":
              doc.data()["Reason if Someone else take the custody"],
            "Previous School Name": doc.data()["Previous School Name"],
            "Last Class Attend": doc.data()["Last Class Attend"],
            "School Leaving Cert. No": doc.data()["School Leaving Cert. No"],
            "Issue Date": doc.data()["Issue Date"],
            "Whether Joint family": doc.data()["Whether Joint family"],
            "Total Family Member": doc.data()["Total Family Member"],
            "No of elder member": doc.data()["No of elder member"],
            "No of Younger member": doc.data()["No of Younger member"],
            "How impish the student is":
              doc.data()["How impish the student is"],
            "Special Habbits": doc.data()["Special Habbits"],
            "particular Disease": doc.data()["particular Disease"],
            "Parrent Particular Disease":
              doc.data()["Parrent Particular Disease"],
            "primary immunizations": doc.data()["primary immunizations"],
            "Belive in which medical system":
              doc.data()["Belive in which medical system"],
            "Do you need school vehicle":
              doc.data()["Do you need school vehicle"],
            "why you want to admit": doc.data()["why you want to admit"],
            "Student's Photo": doc.data()["Student's Photo"],
            "Father's Photo": doc.data()["Father's Photo"],
            "Mother's Photo": doc.data()["Mother's Photo"],
            Date: doc.data()["Date"],
            "Is Doc Submitted:": doc.data()["Is Doc Submitted:"],
            id: doc.id,
          };
          result.push(x);
          i++;
        });

        setData(result);
        console.log("hi", result);
      });
  }, []);
  const onSubmit = (id) => {
    console.log(id);
    db.collection("Notes").doc(id).update({
      "Is Doc Submitted:": "Yes",
    });
  };
  const onUnSubmit = (id) => {
    db.collection("Notes").doc(id).update({
      "Is Doc Submitted:": "No",
    });
  };
  const [p, setP] = useState("");
  const [ps, setPS] = useState(1);
  const onPS = () => {
    if (p == "nst@6532") {
      setPS(2);
    } else {
      alert("Wrong Password");
    }
  };
  const onDelete = (id) => {
    console.log(id);
    db.collection("Notes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const DeleteAll = () => {
    data.map((e) => {
      onDelete(e.id);
    });
  };
  return (
    <div className="container">
      {ps == 1 ? (
        <>
          <input
            placeholder="Enter Password"
            type="text"
            style={{ marginTop: "100px" }}
            value={p}
            onChange={(e) => setP(e.target.value)}
          />
          <button onClick={onPS}>Submit</button>
        </>
      ) : (
        <>
          <h1>Total {data.length} responses</h1>
          <JsonToExcel
            title="Download as Excel"
            data={data}
            fileName="sample-file"
          />
          <button
            className="btn btn-danger"
            onClick={DeleteAll}
            style={{ marginTop: "8px", marginBottom: "8px" }}
          >
            Delete All
          </button>
          <div style={{ width: "100%", height: "100px" }}></div>
          {
            <div>
              {data.map((e) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      overflow: "auto",
                      marginBottom: "16px",
                    }}
                  >
                    <button
                      onClick={() => {
                        onDelete(e.id);
                      }}
                    >
                      Delete
                    </button>

                    <p style={{ marginLeft: "8px", marginRight: "8px" }}>
                      {e["Date"]}
                    </p>
                    <p style={{ marginLeft: "8px", marginRight: "8px" }}>
                      {e["Name"]}
                    </p>
                    <p style={{ marginLeft: "8px", marginRight: "8px" }}>
                      {e["Father's Name"]}
                    </p>
                    {e["Is Doc Submitted:"] == "No" ? (
                      <button
                        style={{ marginLeft: "8px", marginRight: "8px" }}
                        onClick={() => onSubmit(e.id)}
                      >
                        submitted
                      </button>
                    ) : (
                      <button
                        style={{ marginLeft: "8px", marginRight: "8px" }}
                        onClick={() => onUnSubmit(e.id)}
                      >
                        not Submitted
                      </button>
                    )}
                    <Link
                      to={"/applications/" + e.id}
                      key={e.id}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <button>View</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          }
        </>
      )}
    </div>
  );
};

export default MyDocument;
