var express = require("express");
const router = express.Router();

var { class1 , class2 } = require('../controller/controller');

var path = require("path");

const HTTP = require("../../constant/response.constant");

router.get("/CertiFicateByFilter1", class1.CertiFicateByFilter1);
router.get("/CertiFicateByFilter2", class1.CertiFicateByFilter2);
router.get("/CertiFicateByFilter3", class1.CertiFicateByFilter3);
router.get("/CertiFicateByFilter4", class1.CertiFicateByFilter4);
router.get("/GetDistrict", class1.GetDistrict);
// router.get("/GetTaluka", class1.GetTaluka);
router.get("/GetSchool1", class1.GetSchool1);
router.get("/GetSchool2", class1.GetSchool2);
router.get("/GetSchool3", class1.GetSchool3);
router.get("/GetSchool4", class1.GetSchool4);
router.get("/ShortListData1", class1.ShortListData1);
router.get("/ShortListData2", class1.ShortListData2);
router.get("/ShortListData3", class1.ShortListData3);
router.get("/ShortListData4", class1.ShortListData4);
router.get("/pssCert", class1.pssCertificateFilter);
router.get("/pupCert",class1.pupCertificateFilter);
router.get("/pssMarklist/:id1/:id2",class1.pssMarklistFilter);
router.get("/pupMarklist/:id1/:id2",class1.pupMarklistFilter);
router.get("/GetTaluka/:id1", class1.GetTaluka);
router.get("/GetSchool/:id", class1.GetSchool);
// pup certificate
router.get("/GetschoolByDistrict", class1.GetschoolByDistrict);
router.get("/GetTalukaByDistrict", class1.GetTalukaByDistrict);
router.get("/GetschoolBytaluka", class1.GetschoolBytaluka);

// pss certificates

router.get("/GetpsscertSchoolByDistrict",class1.GetpsscertSchoolByDistrict);
router.get("/GetpsscertTalukaByDistrict",class1.GetTalukaByDistrict);
router.get("/GetpsscertschoolBytaluka",class1.GetschoolBytaluka);








module.exports = router;