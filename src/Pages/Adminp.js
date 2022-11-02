import React, { useState, useEffect } from "react";
import Logo from "../images/Name2.png";
import Accordion from "react-bootstrap/Accordion";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import TextInput2 from "../Components/TextInput2/TextInput2.js";
import { auth, db, storage } from "../firebase.js";
const Adminp = (props) => {
  const componentRef = React.useRef();

  const [id, setId] = useState(null);
  const route = props.match.params.id;

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

  useEffect(() => {
    setId(route);
  }, [route]);

  useEffect(() => {
    if (id) {
      db.collection("Notes")
        .doc(id)
        .get()
        .then((doc) => {
          console.log(doc.data());
          setName(doc.data()["Name"]);
          setAge(doc.data()["Date of Birth"]);
          setGender(doc.data()["Gender"]);
          setCaste(doc.data()["Caste"]);
          setSubCaste(doc.data()["Subcaste"]);
          setReligion(doc.data()["Religion"]);
          setBloodGroup(doc.data()["Blood Group"]);
          setNationality(doc.data()["Nationality"]);
          setMotherLanguage(doc.data()["MotherToungue"]);
          setSecondLanguage(doc.data()["2nd Language"]);
          setThirdLanguage(doc.data()["3rd Language"]);
          setAddharNo(doc.data()["Addhar Card No"]);
          setIsBpl(doc.data()["BPL status"]);
          setDisability(doc.data()["Types of Disability"]);
          setIdentification(doc.data()["Identification Mark"]);
          setHouseNo(doc.data()["House No/Village/Para/Road"]);
          setPostOffice(doc.data()["Post Office"]);
          setPoliceStation(doc.data()["Police Station"]);
          setBlock(doc.data()["Block / Municipalty"]);
          setDistrict(doc.data()["District"]);
          setPin(doc.data()["PIN"]);
          setMobileNo(doc.data()["Primary Mobile"]);
          setEmail(doc.data()["Email"]);
          setFatherName(doc.data()["Father's Name"]);
          setFatherEducation(doc.data()["Father's Education"]);
          setFatherOccupation(doc.data()["Father's Occupation"]);
          setFatherOffice(doc.data()["Father's Office"]);
          setFatherContactNo(doc.data()["Father's Contact No"]);
          setTimeByFather(doc.data()["Time given by Father"]);
          setMotherName(doc.data()["Mother's Name"]);
          setMotherEducation(doc.data()["Mother's Education"]);
          setMotherOccupation(doc.data()["Mother's Occupation"]);
          setMotherOffice(doc.data()["Mother's Office"]);
          setMotherContactNo(doc.data()["Mother's Contact No"]);
          setTimeByMother(doc.data()["Time given by Mother"]);
          setNeedofTutor(doc.data()["Any Need of Private Tutor"]);
          setGuardianName(doc.data()["Guardian's Name"]);
          setGuadianOccupation(doc.data()["Guardian's Occupation"]);
          setGuardianRelation(doc.data()["Guardian's Relation"]);
          setGuardianContactNo(doc.data()["Guardian's Contact No"]);
          setGuardianAnnualIncome(doc.data()["Guardian's Annual Income"]);
          setReasonOfGuar(
            doc.data()["Reason if Someone else take the custody"]
          );
          setPrevSchoolName(doc.data()["Previous School Name"]);
          setLastClassAttend(doc.data()["Last Class Attend"]);
          setSchoolLeavingCert(doc.data()["School Leaving Cert. No"]);
          setIssueDate(doc.data()["Issue Date"]);
          setIsJoinFamily(doc.data()["Whether Joint family"]);
          setTotalMember(doc.data()["Total Family Member"]);
          setElderMember(doc.data()["No of elder member"]);
          setYoungerMember(doc.data()["No of Younger member"]);
          setImpish(doc.data()["How impish the student is"]);
          setSpecialHabbits(doc.data()["Special Habbits"]);
          setParticularDisease(doc.data()["particular Disease"]);
          setParrentDisease(doc.data()["Parrent Particular Disease"]);
          setPrimaryImmunization(doc.data()["primary immunizations"]);
          setMedicalSystem(doc.data()["Belive in which medical system"]);
          setNeedSchoolVehical(doc.data()["Do you need school vehicle"]);
          setWhyAdmit(doc.data()["why you want to admit"]);
          setStudentPicture(doc.data()["Student's Photo"]);
          setFatherPicture(doc.data()["Father's Photo"]);
          setMotherPicture(doc.data()["Mother's Photo"]);
          setAdmisonYear(doc.data()["Admission Year"]);
        });
    }
  }, [id]);

  return (
    <>
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
              <p>Date: {new Date().toLocaleDateString()}</p>
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
                    value={new Date(age).toLocaleDateString()}
                    setValue={setAge}
                    placeholder="Enter Student's Birth Date"
                    isrequired={true}
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
                    {gender}
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
                    {caste}
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
                    {religion}
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
                  {isBpl}
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
                <div className="col2 col-12 col-md-6">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Whether Joint family :{" "}
                  </label>
                  <label style={{ marginLeft: "8px" }}> {isJoinFamily}</label>
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
                  <label style={{ marginLeft: "8px" }}>{impish}</label>
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
                    {primaryImmunization}
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
                  <label style={{ marginLeft: "8px" }}>{medicalSystem}</label>
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
                    {needSchoolVehical}
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

        <>
          <div className="Footer2" style={{ height: "100px" }}>
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
      </div>
    </>
  );
};

export default Adminp;
