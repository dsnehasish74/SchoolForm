import NavBar from "../Components/NavBar/NavBar.js";
import TextInput from "../Components/TextInput/TextInput.js";
import "./Admin.css";
import React, { useEffect, useState } from "react";
import Logo from "../images/Name2.png";
import Accordion from "react-bootstrap/Accordion";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import TextInput2 from "../Components/TextInput2/TextInput2.js";
import { auth, db } from "../firebase.js";

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
  const [isLoading, setIsLoading] = useState(false);

  const [pageState, setPageState] = useState(1);

  const onPreviewSubmit = () => {
    setPageState(2);
  };

  const fromSubmitCall = () => {
    const res = {
      Name: name,
      "Date of Birth": age,
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
      "Issue Date": issueDate,
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
                  />
                </div>
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Gender
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
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Mother Toungue"
                    type="text"
                    value={motherLanguage}
                    setValue={setMotherLanguage}
                    placeholder="Enter Student's Mother Toungue"
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
                    lable="Addhar Card No (if available)"
                    type="text"
                    value={addharNo}
                    setValue={setAddharNo}
                    placeholder="Enter Student's Addhar Card No"
                  />
                </div>
              </div>

              <div class="row">
                <div className="col col-12 col-md-6 ">
                  <label for="exampleFormControlInput1" class="form-label">
                    Bpl Status
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
                    lable="Type of Disability(if available)"
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
                  />
                </div>
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Annual Income"
                    type="text"
                    value={fatherAnnualIncome}
                    setValue={setFatherAnnualIncome}
                    placeholder="Enter Father Annual income"
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
                <div className="col col-12 col-md-6">
                  <TextInput
                    lable="Annual Income"
                    type="text"
                    value={motherAnnualIncome}
                    setValue={setMotherAnnualIncome}
                    placeholder="Enter Mother's Annual income"
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
                    lable="Any need of private tution at initial stage for childre?"
                    type="text"
                    value={needofTutor}
                    setValue={setNeedofTutor}
                    placeholder="Any need of private tution at initial stage for childre?"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col col-12">
                  <TextInput
                    lable="Guardian's Name"
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
                    lable="Annual Income"
                    type="text"
                    value={guardianAnnualIncome}
                    setValue={setGuardianAnnualIncome}
                    placeholder="Enter Guardian's Annual Income"
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
                Previous School Details
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
                    lable="Last Class Attend"
                    type="text"
                    value={lastClassAttend}
                    setValue={setLastClassAttend}
                    placeholder="Enter Last Class Attend"
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
                enforced from tiome to time by the school management. I
                undertake that I shall not indulge into unwanted activities in
                order to maintain the sanctity of the Institution.
              </p>
            </div>
          </div>

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
                  />
                </div>
              </div>
              {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!! Second Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Date of Birth"
                    type="date"
                    value={age}
                    setValue={setAge}
                    placeholder="Enter Student's Birth Date"
                  />
                </div>
                <div className="col2 col-12 col-md-6 ">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Gender :
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
                    Caste :
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
                    Religion :
                  </label>
                  <lable class="form-label" style={{ marginLeft: "10px" }}>
                    {religion == 1
                      ? "Hindu"
                      : religion == 2
                      ? "Islam"
                      : otherReligion}
                  </lable>
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
              {/* !!!!!!!!!!!!!!!!!!!!!!!!Fifth Row !!!!!!!!!!!!!!!!!*/}
              <div className="row">
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Nationality"
                    type="text"
                    value={nationality}
                    setValue={setNationality}
                    placeholder="Enter Student's Nationality"
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Mother Toungue"
                    type="text"
                    value={motherLanguage}
                    setValue={setMotherLanguage}
                    placeholder="Enter Student's Mother Toungue"
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
                  >
                    Bpl Status :
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
                  />
                </div>
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Annual Income"
                    type="text"
                    value={fatherAnnualIncome}
                    setValue={setFatherAnnualIncome}
                    placeholder="Enter Father Annual income"
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
                <div className="col2 col-12 col-md-6">
                  <TextInput2
                    lable="Annual Income"
                    type="text"
                    value={motherAnnualIncome}
                    setValue={setMotherAnnualIncome}
                    placeholder="Enter Mother's Annual income"
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
                    lable="Any need of private tution at initial stage for childre?"
                    type="text"
                    value={needofTutor}
                    setValue={setNeedofTutor}
                    placeholder="Any need of private tution at initial stage for childre?"
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
                    lable="Annual Income"
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
                Previous School Details
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
                    lable="Last Class Attend"
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
                enforced from tiome to time by the school management. I
                undertake that I shall not indulge into unwanted activities in
                order to maintain the sanctity of the Institution.
              </p>
            </div>
          </div>
        </div>

        {pageState == 2 ? (
          <div className="Footer">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                <button class="EditButton btn btn-outline-secondary btn-lg">
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
