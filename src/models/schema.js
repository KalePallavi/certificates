var mongoose = require("mongoose");

var DISTRICTSchema = new mongoose.Schema({
  DISTRICT_NAME: String
});

var Todo2 = mongoose.model("District", DISTRICTSchema);

var ShortListData1 = new mongoose.Schema({
  SrNo: String,
  CERTNO: String,
  DISTRICT_CODE: String,
  DISTRICT_NAME: String,
  NoColumnName: String,
  CENTERCode: String,
  udies: String,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: String,
  Paper2Marks: String,
  TotalMarks: String,
  Paper1Per: String,
  Paper2Per: String,
  TotalPer: String,
  PSSPaper1TotalMarks: String,
  PSSPaper2TotalMarks: String,
  MaxTotalMarks: String,
  Result: String
});

var Todo3 = mongoose.model("shortlistdata1", ShortListData1);

var ShortListData2 = new mongoose.Schema({
  SrNo: String,
  CERTNO: String,
  DISTRICT_CODE: String,
  DISTRICT_NAME: String,
  NoColumnName: String,
  CENTERCode: String,
  udies: String,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: String,
  Paper2Marks: String,
  TotalMarks: String,
  Paper1Per: String,
  Paper2Per: String,
  TotalPer: String,
  PSSPaper1TotalMarks: String,
  PSSPaper2TotalMarks: String,
  MaxTotalMarks: String,
  Result: String
});

var Todo4 = mongoose.model("shortlistdata2", ShortListData2);

var ShortListData3 = new mongoose.Schema({
  SrNo: String,
  CERTNO: String,
  DISTRICT_CODE: String,
  DISTRICT_NAME: String,
  NoColumnName: String,
  CENTERCode: String,
  udies: String,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: String,
  Paper2Marks: String,
  TotalMarks: String,
  Paper1Per: String,
  Paper2Per: String,
  TotalPer: String,
  PSSPaper1TotalMarks: String,
  PSSPaper2TotalMarks: String,
  MaxTotalMarks: String,
  Result: String
});

var Todo5 = mongoose.model("shortlistdata3", ShortListData3);

var ShortListData4 = new mongoose.Schema({
  SrNo: String,
  CERTNO: String,
  DISTRICT_CODE: String,
  DISTRICT_NAME: String,
  NoColumnName: String,
  CENTERCode: String,
  udies: String,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: String,
  Paper2Marks: String,
  TotalMarks: String,
  Paper1Per: String,
  Paper2Per: String,
  TotalPer: String,
  PSSPaper1TotalMarks: String,
  PSSPaper2TotalMarks: String,
  MaxTotalMarks: String,
  Result: String
});

var Todo6 = mongoose.model("shortlistdata4", ShortListData4);

var pssCert = new mongoose.Schema({
  SrNo: Number,
  DISTRICT_CODE: Number,
  DISTRICT_NAME: String,
  TALUKA: String,
  TALUCODE: Number,
  CENTERCode: Number,
  udies: Number,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: Number,
  Paper2Marks: Number,
  TotalMarks: Number,
  Paper1Per: Number,
  Paper2Per: Number,
  TotalPer: Number,
  PSSPaper1TotalMarks: Number,
  PSSPaper2TotalMarks: Number,
  MaxTotalMarks: Number,
  Result: String,
  Column2: String,
  MeritSetCode: String,
  MeritRank: String,
  CERTIFICATENO: Number
})

var Todo7 = mongoose.model("psscert", pssCert)

var pupCert = new mongoose.Schema({
  SrNo: Number,
  DISTRICT_CODE: Number,
  DISTRICT_NAME: String,
  TALUKA: String,
  TALUCODE: Number,
  CENTERCode: Number,
  udies: Number,
  SCH_NAME: String,
  Seatno: String,
  CandidateName: String,
  MotherName: String,
  MEDIUM: String,
  Paper1Marks: Number,
  Paper2Marks: Number,
  TotalMarks: Number,
  Paper1Per: Number,
  Paper2Per: Number,
  TotalPer: Number,
  Paper1TotalMarks: Number,
  Paper2TotalMarks: Number,
  MaxTotalMarks: Number,
  Result: String,
  Column2: String,
  MeritSetCode: String,
  MeritRank: Number,
  ReservReason: String,
  Cretificateno: Number
})

var Todo8 = mongoose.model("pupcert", pupCert)

var pupMarklist = new mongoose.Schema({
    SrNo: Number,
    DISTRICT_CODE: Number,
    DISTRICT_NAME:String,
    TALUKA: String ,
    TALUCODE: Number ,
    CENTERCode: Number,
    udies:Number,
    SCH_NAME: String,
    Seatno: String,
    CandidateName: String,
    MotherName: String,
    MEDIUM: String,
    Paper1Marks: String,
    Paper2Marks: String,
    TotalMarks: String,
    Paper1Per: String,
    Paper2Per: String,
    TotalPer: String,
    Paper1TotalMarks: Number,
    Paper2TotalMarks: Number,
    MaxTotalMarks: Number,
    Result: String,
    ReservReason: String,
    Cretificateno: Number 
})

var Todo9 = mongoose.model("pupmarklist", pupMarklist)

var pssMarklist = new mongoose.Schema({
    SrNo: Number,   
    DISTRICTCODE: Number,
    DISTRICTNAME: String,
    TALUKA: String,
    TALUCODE: Number,
    CENTERCode: Number,
    udies: Number,
    SCH_NAME: String,
    Seatno: String,
    Candidateame: String ,
    Motherame: String,
    MEDIUM: String,
    Paper1Marks: String,
    Paper2Marks: String,
    Totalarks: String,
    Paper1Per:String,
    Paper2Per: String,
    Totaler: String,
    PSSPaper1Totalarks: Number ,
    PSSPaper2Totalarks: Number,
    MaxTotalMarks: Number,
    Result: String,
    CERTIFICATENO: Number
})

var Todo10 = mongoose.model("pssmarklist", pssMarklist)

var TalukaSchema = new mongoose.Schema({
  Taluka_Name: String,
  DISTRICT_Id:String
});

var Todo11 = mongoose.model("Taluka", TalukaSchema);

var SchoolSchema = new mongoose.Schema({
  School_Name: String,
 Taluka_Id:String
});

var Todo12 = mongoose.model("School", SchoolSchema);


module.exports = { Todo2, Todo3, Todo4, Todo5, Todo6, Todo7, Todo8, Todo9, Todo10, Todo11,Todo12 };



