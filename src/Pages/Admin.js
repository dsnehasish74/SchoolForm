import NavBar from "../Components/NavBar/NavBar.js";
import TextInput from "../Components/TextInput/TextInput.js";
import "./Admin.css";
import React, { useEffect, useState } from "react";
import Logo from "../images/Name2.png";
import Accordion from "react-bootstrap/Accordion";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import TextInput2 from "../Components/TextInput2/TextInput2.js";
import { auth, db, storage } from "../firebase.js";
import FileUploader from "react-firebase-file-uploader";
const Admin = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(0);
  const [caste, setCaste] = useState(0);
  const [subCaste, setSubCaste] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [nationality, setNationality] = useState("");
  const [motherLanguage, setMotherLanguage] = useState("");
  const [secondLanguage, setSecondLanguage] = useState("");
  const [thirdLanguage, setThirdLanguage] = useState("");
  const [addharNo, setAddharNo] = useState("");
  const [religion, setReligion] = useState(0);
  const [otherReligion, setOtherReligion] = useState("");
  const [bplCardNo, setBplCardNo] = useState("");
  const [isBpl, setIsBpl] = useState(0);
  const [disability, setDisability] = useState("");
  const [identification, setIdentification] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postOffice, setPostOffice] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [block, setBlock] = useState("");
  const [district, setDistrict] = useState("");
  const [pin, setPin] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherEducation, setFatherEducation] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [fatherOffice, setFatherOffice] = useState("");
  const [fatherContactNo, setFatherContactNo] = useState("");
  const [fatherAnnualIncome, setFatherAnnualIncome] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherEducation, setMotherEducation] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [motherOffice, setMotherOffice] = useState("");
  const [motherContactNo, setMotherContactNo] = useState("");
  const [motherAnnualIncome, setMotherAnnualIncome] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianOccupation, setGuadianOccupation] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianContactNo, setGuardianContactNo] = useState("");
  const [guardianAnnualIncome, setGuardianAnnualIncome] = useState("");
  const [timeByFather, setTimeByFather] = useState("");
  const [timeByMother, setTimeByMother] = useState("");
  const [needofTutor, setNeedofTutor] = useState("");
  const [reasonOfGuar, setReasonOfGuar] = useState("");
  const [prevSchoolName, setPrevSchoolName] = useState("");
  const [lastClassAttend, setLastClassAttend] = useState("");
  const [schoolLeavingCert, setSchoolLeavingCert] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [isJoinFamily, setIsJoinFamily] = useState("");
  const [totalMember, setTotalMember] = useState("");
  const [youngerMember, setYoungerMember] = useState("");
  const [elderMember, setElderMember] = useState("");
  const [impish, setImpish] = useState(0);
  const [specialHabbits, setSpecialHabbits] = useState("");
  const [particularDisease, setParticularDisease] = useState("");
  const [parrentDisease, setParrentDisease] = useState("");
  const [primaryImmunization, setPrimaryImmunization] = useState(0);
  const [medicalSystem, setMedicalSystem] = useState(0);
  const [needSchoolVehical, setNeedSchoolVehical] = useState(0);
  const [whyAdmit, setWhyAdmit] = useState("");

  const [studentPicture, setStudentPicture] = useState("");
  const [fatherPicture, setFatherPicture] = useState("");
  const [motherPicture, setMotherPicture] = useState("");

  const [admisonYear, setAdmisonYear] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [pageState, setPageState] = useState(1);
  const [error, setError] = useState(0);
  const [personErr, setPersonErr] = useState([]);
  const [contactErr, setContactErr] = useState([]);
  const [parrentErr, setParrentErr] = useState([]);
  const [otherErr, setOtherErr] = useState([]);

  const DateR = (d) => {
    var initial = d.split(/\//);
    return [initial[1], initial[0], initial[2]].join("/");
  };
  const onPreviewSubmit = () => {
    let err = [];
    let err1 = [];
    let err2 = [];
    let err3 = [];
    let err4 = [];
    if (name.length == 0) {
      err.push("Student's Name");
    }
    if (admisonYear.length == 0) {
      err.push("Admission Year");
    }
    if (age.length == 0) {
      err.push("Date of Birth");
    }
    if (gender == 0) {
      err.push("Gender");
    }
    if (caste == 0) {
      err.push("Caste");
    }

    if (religion == 0) {
      err.push("Religion");
    }

    if (nationality.length == 0) {
      err.push("Nationality");
    }
    if (motherLanguage.length == 0) {
      err.push("Mother Toungue");
    }

    if (isBpl == 0) {
      err.push("BPL Status");
    }
    if (identification.length == 0) {
      err.push("Identification Mark");
    }
    setPersonErr(err);

    if (fatherName.length == 0) {
      err2.push("Name");
    }
    if (fatherEducation.length == 0) {
      err2.push("Education");
    }

    if (fatherContactNo.length == 0) {
      err2.push("Contact No");
    }

    setParrentErr(err2);

    if (
      studentPicture.length == 0 ||
      fatherPicture.length == 0 ||
      motherPicture.length == 0
    ) {
      err3.push("photo");
    }
    setOtherErr(err3);
    if (
      err1.length != 0 ||
      err2.length != 0 ||
      err3.length != 0 ||
      err.length != 0
    ) {
      setError(1);
    } else {
      setError(0);
      setPageState(2);
    }
  };

  const viewPdf1 = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setStudentPicture(url);
      });
  };

  const viewPdf2 = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        setFatherPicture(url);
      });
  };

  const viewPdf3 = (filename) => {
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        setMotherPicture(url);
      });
  };
  const onEdit = () => {
    setPageState(1);
  };
  const fromSubmitCall = () => {
    const res = {
      Name: name,
      "Date of Birth": DateR(new Date(age).toLocaleDateString()),
      Gender: gender == 1 ? "Boy" : "Girl",
      Caste:
        caste == 1
          ? "GEN"
          : caste == 2
          ? "SC"
          : caste == 3
          ? "ST"
          : caste == 4
          ? "OBC A"
          : "OBC B",
      Subcaste: subCaste,
      Religion:
        religion == 1 ? "Hindu" : religion == 2 ? "Islam" : otherReligion,
      "Blood Group": bloodGroup,
      Nationality: nationality,
      MotherToungue: motherLanguage,
      "2nd Language": secondLanguage,
      "3rd Language": thirdLanguage,
      "Addhar Card No": addharNo,
      "BPL status": isBpl ? `Yes, ${bplCardNo} ` : "No",
      "Types of Disability": disability,
      "Identification Mark": identification,
      "House No/Village/Para/Road": houseNo,
      "Post Office": postOffice,
      "Police Station": policeStation,
      "Block / Municipalty": block,
      District: district,
      PIN: pin,
      "Primary Mobile": mobileNo,
      Email: email,
      "Father's Name": fatherName,
      "Father's Education": fatherEducation,
      "Father's Occupation": fatherOccupation,
      "Father's Office": fatherOffice,
      "Father's Contact No": fatherContactNo,
      "Father's Annual Income": fatherAnnualIncome,
      "Time given by Father": timeByFather,

      "Mother's Name": motherName,
      "Mother's Education": motherEducation,
      "Mother's Occupation": motherOccupation,
      "Mother's Office": motherOffice,
      "Mother's Contact No": motherContactNo,
      "Mother's Annual Income": motherAnnualIncome,
      "Time given by Mother": timeByMother,
      "Any Need of Private Tutor": needofTutor,
      "Guardian's Name": guardianName,
      "Guardian's Occupation": guardianOccupation,
      "Guardian's Relation": guardianRelation,
      "Guardian's Contact No": guardianContactNo,
      "Guardian's Annual Income": guardianAnnualIncome,
      "Reason if Someone else take the custody": reasonOfGuar,
      "Previous School Name": prevSchoolName,
      "Last Class Attend": lastClassAttend,
      "School Leaving Cert. No": schoolLeavingCert,
      "Issue Date": DateR(new Date(issueDate).toLocaleDateString()),
      "Whether Joint family":
        isJoinFamily == 1 ? "Yes" : isJoinFamily == 2 ? "No" : "",
      "Total Family Member": totalMember,
      "No of elder member": elderMember,
      "No of Younger member": youngerMember,
      "How impish the student is":
        impish == 1
          ? "Too much"
          : impish == 2
          ? "Normal"
          : impish == 3
          ? "Not At all"
          : "",
      "Special Habbits": specialHabbits,
      "particular Disease": particularDisease,
      "Parrent Particular Disease": parrentDisease,
      "primary immunizations":
        primaryImmunization == 1 ? "Yes" : primaryImmunization == 2 ? "No" : "",
      "Belive in which medical system":
        medicalSystem == 1 ? "Homeopathy" : "Allopathy",
      "Do you need school vehicle":
        needSchoolVehical == 1 ? "Yes" : needSchoolVehical == 2 ? "No" : "",
      "why you want to admit": whyAdmit,
      "Student's Photo": studentPicture,
      "Father's Photo": fatherPicture,
      "Mother's Photo": motherPicture,
      "Admission Year": admisonYear,
      Date: DateR(new Date().toLocaleDateString()),
      "Is Doc Submitted:": "No",
    };
    setIsLoading(true);
    console.log(res);
    db.collection("Notes")
      .add(res)
      .then((e) => {
        console.log("Successfully added");
        setPageState(3);
        setIsLoading(false);
      })
      .catch((e) => {
        alert("Error");
        setIsLoading(false);
      });
  };
  const componentRef = React.useRef();
  if (pageState === 1 || pageState == 1) {
    return (
      <>
        {" "}
        <div className="container">
          <div className="From Header">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Personal Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Student's Name"
                    type="text"
                    value={name}
                    setValue={setName}
                    placeholder="Enter Student's Name"
                    isRequired={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Admission Year"
                    type="text"
                    value={admisonYear}
                    setValue={setAdmisonYear}
                    placeholder="Enter Admission Year"
                    isRequired={true}
                  />
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Second Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Date of Birth"
                    type="date"
                    value={age}
                    setValue={setAge}
                    placeholder="Enter Student's Birth Date"
                    isRequired={true}
                  />
                </div>
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Gender
                    <span style={{ color: "red", marginLeft: "8px" }}>*</span>
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setGender(1);
                        }}
                        checked={gender == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Boy
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio1"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setGender(2);
                        }}
                        checked={gender == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Girl
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Third Row !!!!!!!!!!!!!!!!!*/}
              <div class="row">
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Caste
                    <span style={{ color: "red", marginLeft: "8px" }}>*</span>
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio2"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setCaste(1);
                        }}
                        checked={caste == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        GEN
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio2"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setCaste(2);
                        }}
                        checked={caste == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        SC
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio2"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setCaste(3);
                        }}
                        checked={caste == 3}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        ST
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio2"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setCaste(4);
                        }}
                        checked={caste == 4}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        OBC A
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio2"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setCaste(5);
                        }}
                        checked={caste == 5}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        OBC B
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" col col-12 col-md-6 ">
                  <TextInput
                    lable="Sub-Caste"
                    value={subCaste}
                    setValue={setSubCaste}
                    placeholder="Enter Student's Sub Caste"
                  />
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Forth Row !!!!!!!!!!!!!!!!!*/}
              <div class="row">
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Religion
                    <span style={{ color: "red", marginLeft: "8px" }}>*</span>
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio3"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setReligion(1);
                        }}
                        checked={religion == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Hindu
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio3"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setReligion(2);
                        }}
                        checked={religion == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Islam
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio3"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setReligion(3);
                        }}
                        checked={religion == 3}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Other
                      </label>
                      {religion == 3 && (
                        <input
                          style={{ marginLeft: "10px" }}
                          value={otherReligion}
                          onChange={(e) => {
                            setOtherReligion(e.target.value);
                          }}
                          placeholder="Enter Your Religion"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6 ">
                  <TextInput
                    lable="Blood Group"
                    value={bloodGroup}
                    setValue={setBloodGroup}
                    placeholder="Enter Student's Blood Group"
                  />
                </div>
              </div>
              {/* !!!!!!!!!!!!!!!!!!!!!!!!Fifth Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Nationality"
                    type="text"
                    value={nationality}
                    setValue={setNationality}
                    placeholder="Enter Student's Nationality"
                    isRequired={true}
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Mother Toungue"
                    type="text"
                    value={motherLanguage}
                    setValue={setMotherLanguage}
                    placeholder="Enter Student's Mother Toungue"
                    isRequired={true}
                  />
                </div>
              </div>

              {/* !!!!!!!!!!!!!!!!!!!!!!!!Sixth Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="2nd Language"
                    type="text"
                    value={secondLanguage}
                    setValue={setSecondLanguage}
                    placeholder="Enter Student's Second Language"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable={`3rd Language`}
                    type="text"
                    value={thirdLanguage}
                    setValue={setThirdLanguage}
                    placeholder="Enter Student's Third Language"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Aadhaar Card No (if available)"
                    type="text"
                    value={addharNo}
                    setValue={setAddharNo}
                    placeholder="Enter Student's Aadhaar Card No"
                  />
                </div>
              </div>

              <div class="row">
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    BPL Status
                    <span style={{ color: "red", marginLeft: "8px" }}>*</span>
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio4"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setIsBpl(1);
                        }}
                        checked={isBpl == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio4"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setIsBpl(2);
                        }}
                        checked={isBpl == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                {isBpl == 1 && (
                  <div className="col col-12 col-md-6 ">
                    <TextInput
                      lable="BPL No"
                      value={bplCardNo}
                      setValue={setBplCardNo}
                      placeholder="Enter Bpl Card No"
                    />
                  </div>
                )}
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Type of Disability(if any)"
                    type="text"
                    value={disability}
                    setValue={setDisability}
                    placeholder="Enter If any Disability"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Identification Mark"
                    type="text"
                    value={identification}
                    setValue={setIdentification}
                    placeholder="Enter Student's Identification Mark"
                    isRequired={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Contact Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="House No/Village/Para/Road"
                    type="text"
                    value={houseNo}
                    setValue={setHouseNo}
                    placeholder="Enter House No/Village/Para/Road"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Post Office"
                    type="text"
                    value={postOffice}
                    setValue={setPostOffice}
                    placeholder="Enter Post Office"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Police Station"
                    type="text"
                    value={policeStation}
                    setValue={setPoliceStation}
                    placeholder="Enter Police Station"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Block / Municipalty"
                    type="text"
                    value={block}
                    setValue={setBlock}
                    placeholder="Enter Block / Municipalty"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="District"
                    type="text"
                    value={district}
                    setValue={setDistrict}
                    placeholder="Enter District"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="PIN"
                    type="text"
                    value={pin}
                    setValue={setPin}
                    placeholder="Enter Pin"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Primary Mobile"
                    type="text"
                    value={mobileNo}
                    setValue={setMobileNo}
                    placeholder="Enter Primary Mobile No"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="E-Mail Id"
                    type="text"
                    value={email}
                    setValue={setEmail}
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Parrent Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Father's Name"
                    type="text"
                    value={fatherName}
                    setValue={setFatherName}
                    placeholder="Enter Father's Name"
                    isRequired={true}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Education"
                    type="text"
                    value={fatherEducation}
                    setValue={setFatherEducation}
                    placeholder="Enter Father's Education"
                    isRequired={true}
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Occupation"
                    type="text"
                    value={fatherOccupation}
                    setValue={setFatherOccupation}
                    placeholder="Enter Father's Occupation"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Name of Office/Business & Address"
                    type="text"
                    value={fatherOffice}
                    setValue={setFatherOffice}
                    placeholder="Enter Father's Name of Office/Business & Address"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Contact No"
                    type="text"
                    value={fatherContactNo}
                    setValue={setFatherContactNo}
                    placeholder="Enter Father's Contact No"
                    isRequired={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="How much time can father give in a day to his child?"
                    type="text"
                    value={timeByFather}
                    setValue={setTimeByFather}
                    placeholder="How much time can father give in a day to his child?"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Mother's Name"
                    type="text"
                    value={motherName}
                    setValue={setMotherName}
                    placeholder="Enter Mother's Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Education"
                    type="text"
                    value={motherEducation}
                    setValue={setMotherEducation}
                    placeholder="Enter Mother's Education"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Occupation"
                    type="text"
                    value={motherOccupation}
                    setValue={setMotherOccupation}
                    placeholder="Enter Mother's Occupation"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Name of Office/Business & Address"
                    type="text"
                    value={motherOffice}
                    setValue={setMotherOffice}
                    placeholder="Enter Mother's Name of Office/Business & Address"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Contact No"
                    type="text"
                    value={motherContactNo}
                    setValue={setMotherContactNo}
                    placeholder="Enter Mother's Contact No"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="How much time can mother give in a day to his child?"
                    type="text"
                    value={timeByMother}
                    setValue={setTimeByMother}
                    placeholder="How much time can mother give in a day to his child?"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Any need of private tution at initial stage for children?"
                    type="text"
                    value={needofTutor}
                    setValue={setNeedofTutor}
                    placeholder="Any need of private tution at initial stage for children?"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Guardian's Name(absence of father and mother)"
                    type="text"
                    value={guardianName}
                    setValue={setGuardianName}
                    placeholder="Enter Guardian's Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Occupation"
                    type="text"
                    value={guardianOccupation}
                    setValue={setGuadianOccupation}
                    placeholder="Enter Guardian's Education"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Relation"
                    type="text"
                    value={guardianRelation}
                    setValue={setGuardianRelation}
                    placeholder="Enter Guardian's Relation with Student"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Contact No"
                    type="text"
                    value={guardianContactNo}
                    setValue={setGuardianContactNo}
                    placeholder="Enter Guardian's Contact No"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Family Annual Income"
                    type="text"
                    value={guardianAnnualIncome}
                    setValue={setGuardianAnnualIncome}
                    placeholder="Enter Family Annual Income"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Reason if Someone else takes the custody instead of parents"
                    type="text"
                    value={reasonOfGuar}
                    setValue={setReasonOfGuar}
                    placeholder="Enter reason if Someone else takes the custody instead of parents"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Previous School Details (if any)
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Previous School Name"
                    type="text"
                    value={prevSchoolName}
                    setValue={setPrevSchoolName}
                    placeholder="Enter Previous School Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Previous Class"
                    type="text"
                    value={lastClassAttend}
                    setValue={setLastClassAttend}
                    placeholder="Previous Class"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="School Leaving Cert. No"
                    type="text"
                    value={schoolLeavingCert}
                    setValue={setSchoolLeavingCert}
                    placeholder="Enter School Leaving Cert. No"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Issue Date"
                    type="date"
                    value={issueDate}
                    setValue={setIssueDate}
                    placeholder="Enter Issue Date"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Other Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col col-12 col-md-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Whether Joint family
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio12"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setIsJoinFamily(1);
                        }}
                        checked={isJoinFamily == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio12"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setIsJoinFamily(2);
                        }}
                        checked={isJoinFamily == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Total Member of the family"
                    type="text"
                    value={totalMember}
                    setValue={setTotalMember}
                    placeholder="Enter total member of the family"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="No of elder member of the family"
                    type="text"
                    value={elderMember}
                    setValue={setElderMember}
                    placeholder="Enter no of elder member of the family"
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="No of younger member of the family"
                    type="text"
                    value={youngerMember}
                    setValue={setYoungerMember}
                    placeholder="Enter no of younger member of the family"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <label for="exampleFormControlInput1" class="form-label">
                    How impish do you think the student is?
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio13"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setImpish(1);
                        }}
                        checked={impish == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Too much
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio13"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setImpish(2);
                        }}
                        checked={impish == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Normal
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio13"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setImpish(3);
                        }}
                        checked={impish == 3}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Not at all
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-12 ">
                  <TextInput
                    lable="Whether the student has any special habits"
                    type="text"
                    value={specialHabbits}
                    setValue={setSpecialHabbits}
                    placeholder="Enter Whether the student has any special habits"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Whether the student has any particular disease"
                    type="text"
                    value={particularDisease}
                    setValue={setParticularDisease}
                    placeholder="Enter Whether the student has any special disease"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Whether the parrent has any particular disease"
                    type="text"
                    value={parrentDisease}
                    setValue={setParrentDisease}
                    placeholder="Enter Whether the parrent has any special disease"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <label for="exampleFormControlInput1" class="form-label">
                    Whether the students has been given primary
                    immunizations/antidote
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio14"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setPrimaryImmunization(1);
                        }}
                        checked={primaryImmunization == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio14"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setPrimaryImmunization(2);
                        }}
                        checked={primaryImmunization == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <label for="exampleFormControlInput1" class="form-label">
                    Belive in which medical system
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio15"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setMedicalSystem(1);
                        }}
                        checked={medicalSystem == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Homeopathy
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio15"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setMedicalSystem(2);
                        }}
                        checked={medicalSystem == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Allopathy
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <label for="exampleFormControlInput1" class="form-label">
                    Do you need school vehicle
                  </label>
                  <div className="CheckBoxes">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio16"
                        id="exampleRadios1"
                        value="option"
                        onChange={(e) => {
                          setNeedSchoolVehical(1);
                        }}
                        checked={needSchoolVehical == 1}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radio16"
                        id="exampleRadios2"
                        value="option2"
                        onChange={(e) => {
                          setNeedSchoolVehical(2);
                        }}
                        checked={needSchoolVehical == 2}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <label
                    className="form-label"
                    for="exampleFormControlTextarea3"
                  >
                    Why do you want to admit your child in Nivedita Shishu
                    Tirtha?
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea3"
                    rows="7"
                    value={whyAdmit}
                    onChange={(e) => setWhyAdmit(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {studentPicture ? (
                    <img src={studentPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="s">
                    <label style={{ paddingBottom: "16px" }}>
                      Upload Student's Picture{" "}
                      <span style={{ marginLeft: "8px", color: "red" }}>*</span>
                    </label>
                    <FileUploader
                      accept="image/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={storage.ref("images")}
                      onUploadSuccess={viewPdf1}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {fatherPicture ? (
                    <img src={fatherPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="s">
                    <label style={{ paddingBottom: "16px" }}>
                      Upload Father's Picture
                      <span style={{ marginLeft: "8px", color: "red" }}>*</span>
                    </label>
                    <FileUploader
                      accept="image/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={storage.ref("images")}
                      onUploadSuccess={viewPdf2}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {motherPicture ? (
                    <img src={motherPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="s">
                    <label style={{ paddingBottom: "16px" }}>
                      Upload Mothers's Picture
                      <span style={{ marginLeft: "8px", color: "red" }}>*</span>
                    </label>
                    <FileUploader
                      accept="image/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={storage.ref("images")}
                      onUploadSuccess={viewPdf3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Declaration
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <p>
                I hereby declare that the above information provided by me is
                complete and correct to the best of my knowledge and belief. I
                understand that rendering incorrect information shall disqualify
                the applicant for admission to the school. I have carefully read
                the rules and regulations laid by the school and being desirous
                of having my ward educated in this school. I hereby agree to
                abide by them in all respects. I understand that the decision of
                the management of the school shall be final. I hereby certify
                that my ward and I shall follow all the rules and regulations
                enforced from time to time by the school management. I undertake
                that I shall not indulge into unwanted activities in order to
                maintain the sanctity of the Institution.
              </p>
            </div>
          </div>

          {error != 0 && (
            <div className="error">
              <h3 className="errH">Error!! Fill below files</h3>

              {personErr.length != 0 && (
                <div>
                  <h5>Peronal Details</h5>
                  {personErr.map((e) => {
                    return <p>{e}</p>;
                  })}
                </div>
              )}
              {contactErr.length != 0 && (
                <div>
                  <h5>Contact Details</h5>
                  {contactErr.map((e) => {
                    return <p>{e}</p>;
                  })}
                </div>
              )}
              {parrentErr.length != 0 && (
                <div>
                  <h5>Parrent Details</h5>
                  {parrentErr.map((e) => {
                    return <p>{e}</p>;
                  })}
                </div>
              )}
              {otherErr.length != 0 && (
                <div>
                  <h5>Other Details</h5>
                  {otherErr.map((e) => {
                    return <p>{e}</p>;
                  })}
                </div>
              )}
            </div>
          )}

          <div className="submitContainer">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={onPreviewSubmit}
            >
              Preview
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div
          className="container"
          ref={componentRef}
          style={{ paddingBottom: "200px" }}
        >
          <img src={Logo} alt="Logo" className="logo" />
          <div>
            <h2 style={{ textAlign: "center" }}>Admission Form</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Admission Year : {admisonYear}</p>
              <p>Date: {DateR(new Date().toLocaleDateString())}</p>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Personal Details
              </h2>

              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Student's Name"
                    type="text"
                    value={name}
                    setValue={setName}
                    placeholder="Enter Student's Name"
                    isRequired={true}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Student's Name(In Bengali)"
                    type="text"
                    value={""}
                    setValue={setName}
                    placeholder="Enter Student's Name"
                    isRequired={true}
                  />
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Second Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Date of Birth"
                    type="date"
                    value={DateR(new Date(age).toLocaleDateString())}
                    setValue={setAge}
                    placeholder="Enter Student's Birth Date"
                    isRequired={true}
                  />
                </div>
                <div className="col2 col-12 col-md-6 ">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Gender{" "}
                    <span style={{ marginLeft: "8px", color: "red" }}>*</span> :
                  </label>
                  <lable class="form-label" style={{ marginLeft: "10px" }}>
                    {gender == 1 ? "Boy" : "Girl"}
                  </lable>
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Third Row !!!!!!!!!!!!!!!!!*/}
              <div class="row">
                <div className="col2 col-12 col-md-6 ">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Caste{" "}
                    <span style={{ marginLeft: "8px", color: "red" }}>*</span> :
                  </label>
                  <lable class="form-label" style={{ marginLeft: "10px" }}>
                    {caste == 1
                      ? "GEN"
                      : caste == 2
                      ? "SC"
                      : caste == 3
                      ? "ST"
                      : caste == 4
                      ? "OBC A"
                      : "OBC B"}
                  </lable>
                </div>
                <div className=" col2 col-12 col-md-6 ">
                  <TextInput2
                    lable="Sub-Caste"
                    value={subCaste}
                    setValue={setSubCaste}
                    placeholder="Enter Student's Sub Caste"
                  />
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Forth Row !!!!!!!!!!!!!!!!!*/}
              <div class="row">
                <div className="col2 col-12 col-md-6 ">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Religion{" "}
                    <span style={{ marginLeft: "8px", color: "red" }}>*</span> :
                  </label>
                  <lable class="form-label" style={{ marginLeft: "10px" }}>
                    {religion == 1
                      ? "Hindu"
                      : religion == 2
                      ? "Islam"
                      : otherReligion}
                  </lable>
                </div>
              </div>
              {/* !!!!!!!!!!!!!!!!!!!!!!!!Fifth Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Nationality"
                    type="text"
                    value={nationality}
                    setValue={setNationality}
                    placeholder="Enter Student's Nationality"
                    isRequired={true}
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Mother Toungue"
                    type="text"
                    value={motherLanguage}
                    setValue={setMotherLanguage}
                    placeholder="Enter Student's Mother Toungue"
                    isRequired={true}
                  />
                </div>
              </div>

              {/* !!!!!!!!!!!!!!!!!!!!!!!!Sixth Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="2nd Language"
                    type="text"
                    value={secondLanguage}
                    setValue={setSecondLanguage}
                    placeholder="Enter Student's Second Language"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable={`3rd Language`}
                    type="text"
                    value={thirdLanguage}
                    setValue={setThirdLanguage}
                    placeholder="Enter Student's Third Language"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Addhar Card No (if available)"
                    type="text"
                    value={addharNo}
                    setValue={setAddharNo}
                    placeholder="Enter Student's Addhar Card No"
                  />
                </div>
              </div>

              <div class="row">
                <div className="col2 col-12 col-md-6 ">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                    isRequired={true}
                  >
                    BPL Status
                    <span style={{ marginLeft: "8px", color: "red" }}>*</span> :
                  </label>
                  {isBpl == 1 ? " Yes, " + bplCardNo : " No"}
                </div>
                <div className="col2 col-12 col-md-6 ">
                  <TextInput2
                    lable="Blood Group"
                    value={bloodGroup}
                    setValue={setBloodGroup}
                    placeholder="Enter Student's Blood Group"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Type of Disability(if available)"
                    type="text"
                    value={disability}
                    setValue={setDisability}
                    placeholder="Enter If any Disability"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Identification Mark"
                    type="text"
                    value={identification}
                    setValue={setIdentification}
                    placeholder="Enter Student's Identification Mark"
                    isRequired={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Contact Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="House No/Village/Para/Road"
                    type="text"
                    value={houseNo}
                    setValue={setHouseNo}
                    placeholder="Enter House No/Village/Para/Road"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Post Office"
                    type="text"
                    value={postOffice}
                    setValue={setPostOffice}
                    placeholder="Enter Post Office"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Police Station"
                    type="text"
                    value={policeStation}
                    setValue={setPoliceStation}
                    placeholder="Enter Police Station"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Block / Municipalty"
                    type="text"
                    value={block}
                    setValue={setBlock}
                    placeholder="Enter Block / Municipalty"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="District"
                    type="text"
                    value={district}
                    setValue={setDistrict}
                    placeholder="Enter District"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="PIN"
                    type="text"
                    value={pin}
                    setValue={setPin}
                    placeholder="Enter Pin"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Primary Mobile"
                    type="text"
                    value={mobileNo}
                    setValue={setMobileNo}
                    placeholder="Enter Primary Mobile No"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="E-Mail Id"
                    type="text"
                    value={email}
                    setValue={setEmail}
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Parrent Details
              </h2>
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Father's Name"
                    type="text"
                    value={fatherName}
                    setValue={setFatherName}
                    placeholder="Enter Father's Name"
                    isRequired={true}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Education"
                    type="text"
                    value={fatherEducation}
                    setValue={setFatherEducation}
                    placeholder="Enter Father's Education"
                    isRequired={true}
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Occupation"
                    type="text"
                    value={fatherOccupation}
                    setValue={setFatherOccupation}
                    placeholder="Enter Father's Occupation"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Name of Office/Business & Address"
                    type="text"
                    value={fatherOffice}
                    setValue={setFatherOffice}
                    placeholder="Enter Father's Name of Office/Business & Address"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Contact No"
                    type="text"
                    value={fatherContactNo}
                    setValue={setFatherContactNo}
                    placeholder="Enter Father's Contact No"
                    isRequired={true}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="How much time can father give in a day to his child?"
                    type="text"
                    value={timeByFather}
                    setValue={setTimeByFather}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Mother's Name"
                    type="text"
                    value={motherName}
                    setValue={setMotherName}
                    placeholder="Enter Mother's Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Education"
                    type="text"
                    value={motherEducation}
                    setValue={setMotherEducation}
                    placeholder="Enter Mother's Education"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Occupation"
                    type="text"
                    value={motherOccupation}
                    setValue={setMotherOccupation}
                    placeholder="Enter Mother's Occupation"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Name of Office/Business & Address"
                    type="text"
                    value={motherOffice}
                    setValue={setMotherOffice}
                    placeholder="Enter Mother's Name of Office/Business & Address"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Contact No"
                    type="text"
                    value={motherContactNo}
                    setValue={setMotherContactNo}
                    placeholder="Enter Mother's Contact No"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="How much time can mother give in a day to his child?"
                    type="text"
                    value={timeByMother}
                    setValue={setTimeByMother}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Any need of private tution at initial stage for children?"
                    type="text"
                    value={needofTutor}
                    setValue={setNeedofTutor}
                    placeholder="Any need of private tution at initial stage for children?"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Guardian's Name"
                    type="text"
                    value={guardianName}
                    setValue={setGuardianName}
                    placeholder="Enter Guardian's Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Occupation"
                    type="text"
                    value={guardianOccupation}
                    setValue={setGuadianOccupation}
                    placeholder="Enter Guardian's Education"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Relation"
                    type="text"
                    value={guardianRelation}
                    setValue={setGuardianRelation}
                    placeholder="Enter Guardian's Relation"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Contact No"
                    type="text"
                    value={guardianContactNo}
                    setValue={setGuardianContactNo}
                    placeholder="Enter Guardian's Contact No"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Family Annual Income"
                    type="text"
                    value={guardianAnnualIncome}
                    setValue={setGuardianAnnualIncome}
                    placeholder="Enter Guardian's Annual Income"
                  />
                </div>
                <div className="row">
                  <div className="col2 col-12">
                    <TextInput2
                      lable="Reason if Someone else takes the custody instead of parents"
                      type="text"
                      value={reasonOfGuar}
                      setValue={setReasonOfGuar}
                      placeholder="Enter reason if Someone else takes the custody instead of parents"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Previous School Details (if any)
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Previous School Name"
                    type="text"
                    value={prevSchoolName}
                    setValue={setPrevSchoolName}
                    placeholder="Enter Previous School Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Previous Class"
                    type="text"
                    value={lastClassAttend}
                    setValue={setLastClassAttend}
                    placeholder="Enter Last Class Attend"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="School Leaving Cert. No"
                    type="text"
                    value={schoolLeavingCert}
                    setValue={setSchoolLeavingCert}
                    placeholder="Enter School Leaving Cert. No"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Issue Date"
                    type="text"
                    value={DateR(new Date(issueDate).toLocaleDateString())}
                    setValue={setIssueDate}
                    placeholder="Enter Issue Date"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Other Details
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Whether Joint family :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}>
                    {" "}
                    {isJoinFamily == 1
                      ? " Yes"
                      : isJoinFamily == 2
                      ? " No"
                      : ""}
                  </label>
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Total Member of the family"
                    type="text"
                    value={totalMember}
                    setValue={setTotalMember}
                    placeholder="Enter total member of the family"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="No of elder member of the family"
                    type="text"
                    value={elderMember}
                    setValue={setElderMember}
                    placeholder="Enter no of elder member of the family"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="No of younger member of the family"
                    type="text"
                    value={youngerMember}
                    setValue={setYoungerMember}
                    placeholder="Enter no of younger member of the family"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    How impish do you think the student is? :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}>
                    {impish == 1
                      ? " Too much"
                      : impish == 2
                      ? " Normal"
                      : impish == 3
                      ? " Not at all"
                      : ""}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 ">
                  <TextInput2
                    lable="Wheather the student has any special habits"
                    type="text"
                    value={specialHabbits}
                    setValue={setSpecialHabbits}
                    placeholder="Enter wheather the student has any special habits"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Wheather the student has any particular disease"
                    type="text"
                    value={particularDisease}
                    setValue={setParticularDisease}
                    placeholder="Enter wheather the student has any special disease"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Wheather the parrent has any particular disease"
                    type="text"
                    value={parrentDisease}
                    setValue={setParrentDisease}
                    placeholder="Enter wheather the parrent has any special disease"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Whether the students has been given primary
                    immunizations/antidote :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}>
                    {primaryImmunization == 1
                      ? "Yes"
                      : primaryImmunization == 2
                      ? "No"
                      : ""}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Belive in which medical system :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}>
                    {medicalSystem == 1
                      ? "Homeopathy"
                      : medicalSystem == 2
                      ? "Allopathy"
                      : ""}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Do you need school vehicle :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}>
                    {needSchoolVehical == 1
                      ? "Yes"
                      : needSchoolVehical == 2
                      ? "No"
                      : ""}
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <label
                    className="form-label"
                    for="exampleFormControlTextarea3"
                    style={{ fontWeight: "bold" }}
                  >
                    Why do you want to admit your child in Nivedita Shishu
                    Tirtha ? :{" "}
                  </label>
                  <lable style={{ marginLeft: "8px" }}>{" " + whyAdmit}</lable>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Declaration
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <p>
                I hereby declare that the above information provided by me is
                complete and correct to the best of my knowledge and belief. I
                understand that rendering incorrect information shall disqualify
                the applicant for admission to the school. I have carefully read
                the rules and regulations laid by the school and being desirous
                of having my ward educated in this school. I hereby agree to
                abide by them in all respects. I understand that the decision of
                the management of the school shall be final. I hereby certify
                that my ward and I shall follow all the rules and regulations
                enforced from time to time by the school management. I undertake
                that I shall not indulge into unwanted activities in order to
                maintain the sanctity of the Institution.
              </p>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {studentPicture ? (
                    <img src={studentPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="signature">
                    <p className="signaturep">Student Signature</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {fatherPicture ? (
                    <img src={fatherPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="signature">
                    <p className="signaturep">Father's Signature</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  {motherPicture ? (
                    <img src={motherPicture} className="uploadPic" />
                  ) : (
                    <div className="uploadPicd"></div>
                  )}
                </div>
                <div className="col2 col-12 col-md-6">
                  <div className="signature">
                    <p className="signaturep">Mother's Signature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Documents to be submitted with the form
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <p>
                {
                  "1) Xeroc copy of Birth Certificate 2) Xerox copy of Aadhaar Card 3) Xerox copy of Caste Certificate (In case of SC/ST students) 4) School Leaving Certificate (If applicable) 5) Xerox copy of Ration Card (In case of BPL) 6)Voter Card of Father and Mother 7) Immunization Certificate 8) Student stamp size photo (3 copy), 9) Father image stamp size(1 copy), 10) Mother image stamp size(1 copy)"
                }
              </p>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Admission Details (For office use only)
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Admission No"
                    type="text"
                    value={""}
                    setValue={setHouseNo}
                    placeholder="Enter House No/Village/Para/Road"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Admission Date (DD/MM/YYYY)"
                    type="text"
                    value={""}
                    setValue={setPostOffice}
                    placeholder="Enter Post Office"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Class of Admission"
                    type="text"
                    value={""}
                    setValue={setPoliceStation}
                    placeholder="Enter Police Station"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Student ID"
                    type="text"
                    value={""}
                    setValue={setBlock}
                    placeholder="Enter Block / Municipalty"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion nextSection" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                Current Class Details (For office use only)
              </h2>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! First Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Class"
                    type="text"
                    value={""}
                    setValue={setHouseNo}
                    placeholder="Enter House No/Village/Para/Road"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Section"
                    type="text"
                    value={""}
                    setValue={setPostOffice}
                    placeholder="Enter Post Office"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Roll no"
                    type="text"
                    value={""}
                    setValue={setPoliceStation}
                    placeholder="Enter Police Station"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="House Name"
                    type="text"
                    value={""}
                    setValue={setBlock}
                    placeholder="Enter Block / Municipalty"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col2 col-12">
                  <TextInput2
                    lable="Conveyance Details"
                    type="text"
                    value={""}
                    setValue={setBlock}
                    placeholder="Enter Block / Municipalty"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {pageState == 2 ? (
          <div className="Footer">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <button
                  class="EditButton btn btn-outline-secondary btn-lg"
                  onClick={onEdit}
                >
                  Edit
                </button>

                <button
                  className=" submitButoon btn btn-outline-primary btn-lg"
                  onClick={fromSubmitCall}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="Footer2">
              <h2>Successfully Submited</h2>
              <ReactToPrint
                trigger={() => (
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ marginTop: "16px" }}
                  >
                    Download Form
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Admin;
