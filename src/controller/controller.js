// var { Todo , Todo2 , Todo3 , Todo4 , Todo5 , Todo6 } = require("../models/schema");
var { Todo , Todo2 , Todo3 , Todo4 , Todo5 , Todo6, Todo7, Todo8, Todo9, Todo10, Todo11 ,Todo12,Todo13,Todo14,School} = require("../models/schema");
const HTTP = require("../../constant/response.constant");

var path = require("path");

require("dotenv").config();

class class1 {
  static CertiFicateByFilter1 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      var SendData = await Todo3.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 
  static CertiFicateByFilter2 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      var SendData = await Todo4.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };  
  static CertiFicateByFilter3 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      var SendData = await Todo5.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 
  static CertiFicateByFilter4 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      var SendData = await Todo6.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 
  
  static GetSchool1 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      var SendData = await Todo3.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static GetSchool2 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      var SendData = await Todo4.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static GetSchool3 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      var SendData = await Todo5.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static GetSchool4 = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }
      
      var SendData = await Todo6.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static ShortListData1 = async (req, res) => {
    try {

      var SendData = await Todo3.find();

      var First100Data = SendData.slice(0, 100);

      const message = {
        data: First100Data,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static ShortListData2 = async (req, res) => {
    try {

      var SendData = await Todo4.find();

      var First100Data = SendData.slice(0, 100);

      const message = {
        data: First100Data,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static ShortListData3 = async (req, res) => {
    try {

      var SendData = await Todo5.find();
      var First100Data = SendData.slice(0, 100);
      const message = {
        data: First100Data,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };
  static ShortListData4 = async (req, res) => {
    try {

      var SendData = await Todo6.find();

      var First100Data = SendData.slice(0, 100);

      const message = {
        data: First100Data,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };

  static pssCertificateFilter = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      // FilterJson["Column2"]={$exists:true}
      
      var SendData = await Todo7.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 

  static pupCertificateFilter = async (req, res) => {
    try {

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }

      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }
      if (req.query.TALUKA) {
        FilterJson.TALUKA = req.query.TALUKA;
      }
      
      // FilterJson["Column2"]={$exists:true}

      var SendData = await Todo8.find(FilterJson);

      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 

  static pssMarklistFilter = async (req, res) => {
    try {
  
      const lowerBound = (req.params.id1 - 1) * req.params.id2; 
      const upperBound = req.params.id2 ; 
  
      var FilterJson = {};
  
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }
  
      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }

      var SendData = await Todo10.find(FilterJson).skip(lowerBound).limit(upperBound);
  
      // Create the response message
      const message = {
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };
  
      // Send the response
      res.status(HTTP.SUCCESS).json(message);
  
    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };

  static  pupMarklistFilter = async (req, res) => {
    try {
  
      const lowerBound = (req.params.id1 - 1) * req.params.id2; 
      const upperBound = req.params.id2 ; 

      var FilterJson = {};
      
      if (req.query.DISTRICT_NAME) {
        FilterJson.DISTRICT_NAME = req.query.DISTRICT_NAME;
      }
  
      if (req.query.SCH_NAME) {
        FilterJson.SCH_NAME = req.query.SCH_NAME;
      }
  
      // FilterJson["Column2"]={$exists:true}
      
      var SendDataWithLimit = await Todo9.find(FilterJson).skip(lowerBound).limit(upperBound);

      const message = {
        data: SendDataWithLimit,
        status: `${HTTP.SUCCESS}`
      };
  
      res.status(HTTP.SUCCESS).json(message);
  
    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };  

  static  GetTaluka = async (req, res) => {
    try {

      var SendData = await Todo11.find({DISTRICT_Id:req.params.id1});

      
      const message = {
        data: SendData,
        dataLength: SendData.length,
        status: `${HTTP.SUCCESS}`
      };
  
      res.status(HTTP.SUCCESS).json(message);
  
    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };  

  static GetSchool = async (req, res) => {
    try {
        // Step 1: Get all unique districts by their ID and names
        const distinctDistricts = await Todo8.distinct('DISTRICT_CODE', {}, { DISTRICT_NAME: 1 });
        if (!distinctDistricts.length) {
            return res.status(404).json({ message: 'No districts found' });
        }

        

        // Initialize an empty array to hold the hierarchical data
        const districtData = [distinctDistricts];
        console.log(districtData);
        

        // Step 3: Iterate over each district and fetch corresponding talukas, schools, and certificates
        for (const districtCode of distinctDistricts) {
            // Fetch district name by its code
            const districtName = await Todo8.findOne({ DISTRICT_CODE: districtCode }, 'DISTRICT_NAME');

            // Fetch talukas for the district
            const distinctTalukas = await Todo8.distinct('TALUKA', { DISTRICT_CODE: districtCode });
            const talukaData = [distinctTalukas];
            console.log(talukaData);
            

            for (const taluka of distinctTalukas) {
                // Fetch schools for the taluka
                const distinctSchools = await Todo8.distinct('SCH_NAME', { DISTRICT_CODE: districtCode, TALUKA: taluka });
                const schoolData = [distinctSchools];

                console.log(schoolData);
                
                for (const school of distinctSchools) {
                    // Fetch certificates for the school
                    const certificates = await Todo8.find({ DISTRICT_CODE: districtCode, TALUKA: taluka, SCH_NAME: school
                      });

                    schoolData.push({
                        schoolName: school,
                        certificates: certificates,
                        udies:27230100506
                    });
                }

                talukaData.push({
                    talukaName: taluka,
                    schools: schoolData
                    
                });
            }

            districtData.push({
                districtCode: districtCode, // District ID
                districtName: districtName?.DISTRICT_NAME || 'Unknown', // Ensure districtName is a string
                talukas: talukaData
            });
        }

        // Step 4: Return the organized data
        const message = {
            data: districtData,
            status: `${HTTP.SUCCESS}`
        };

        res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
        console.error(e);
        const errorResponse = { message: `${e.message}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
        res.status(HTTP.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
};

  static  GetpssCert = async (req, res) => {
    try {

      var SendData = await Todo13.find({School_Id:req.params.id1});

      const message = {
        // data2: SendData.length,
        data: SendData,
        status: `${HTTP.SUCCESS}`
        
        
      };
  
      res.status(HTTP.SUCCESS).json(message);
      
    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  }; 

  static async getPassCertificates(req, res) {
    try {
      const districts = await District.find();
      if (!districts.length) {
        return res.status(404).json({ message: 'No districts found' });
      }

      const talukas = await Taluka.find({
        DISTRICT_CODE: { $in: districts.map(d => d.DISTRICT_CODE) }
      });
      if (!talukas.length) {
        return res.status(404).json({ message: 'No talukas found for the given districts' });
      }

      const schools = await School.find({
        TALUCODE: { $in: talukas.map(t => t.TALUCODE) }
      });
      if (!schools.length) {
        return res.status(404).json({ message: 'No schools found for the given talukas' });
      }

      const certificates = await Certificate.find({
        CENTERCode: { $in: schools.map(s => s.CENTERCode) }
      });
      if (!certificates.length) {
        return res.status(404).json({ message: 'No certificates found for the given schools' });
      }

      const response = districts.map(district => {
        const districtTalukas = talukas.filter(t => t.DISTRICT_CODE === district.DISTRICT_CODE);
        return {
          district: district,
          talukas: districtTalukas.map(taluka => {
            const talukaSchools = schools.filter(s => s.TALUCODE === taluka.TALUCODE);
            return {
              taluka: taluka,
              schools: talukaSchools.map(school => {
                const schoolCertificates = certificates.filter(c => c.CENTERCode === school.CENTERCode);
                return {
                  school: school,
                  certificates: schoolCertificates
                };
              })
            };
          })
        };
      });

      res.status(200).json({
          districts,
          talukas,
          schools,
          certificates,});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  static async getPupCertificates(req, res) {
    try {
      const districts = await District.find();
      if (!districts.length) {
        return res.status(404).json({ message: 'No districts found' });
      }

      const talukas = await Taluka.find({
        DISTRICT_CODE: { $in: districts.map(d => d.DISTRICT_CODE) }
      });
      if (!talukas.length) {
        return res.status(404).json({ message: 'No talukas found for the given districts' });
      }

      const schools = await School.find({
        TALUCODE: { $in: talukas.map(t => t.TALUCODE) }
      });
      if (!schools.length) {
        return res.status(404).json({ message: 'No schools found for the given talukas' });
      }

      const certificates = await Certificate.find({
        CENTERCode: { $in: schools.map(s => s.CENTERCode) }
      });
      if (!certificates.length) {
        return res.status(404).json({ message: 'No certificates found for the given schools' });
      }

      const response = districts.map(district => {
        const districtTalukas = talukas.filter(t => t.DISTRICT_CODE === district.DISTRICT_CODE);
        return {
          district: district,
          talukas: districtTalukas.map(taluka => {
            const talukaSchools = schools.filter(s => s.TALUCODE === taluka.TALUCODE);
            return {
              taluka: taluka,
              schools: talukaSchools.map(school => {
                const schoolCertificates = certificates.filter(c => c.CENTERCode === school.CENTERCode);
                return {
                  school: school,
                  certificates: schoolCertificates
                };
              })
            };
          })
        };
      });

      res.status(200).json({
          districts,
          talukas,
          schools,
          certificates,});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

  // pup cert
  static GetDistrict = async (req, res) => {
    try {

      console.log("Hii");

      var SendData = await Todo2.find();

      const message = {
        data55 :SendData.length,
        data: SendData,
        status: `${HTTP.SUCCESS}`
      };

      res.status(HTTP.SUCCESS).json(message);

    } catch (e) {
      console.log(e);
      var a = { message: `${e}`, status: `${HTTP.INTERNAL_SERVER_ERROR}` };
      res.status(HTTP.INTERNAL_SERVER_ERROR).json(a);
    }
  };

  static GetschoolByDistrict = async (req, res) => {
    try {
      // Fetch all districts
      const allDistricts = await Todo2.find();
  
      // If no districts found, return a 404 status
      if (!allDistricts.length) {
        return res.status(404).json({ message: 'No districts found' });
      }
  
      // Fetch all schools (pupCert documents) and group by DISTRICT_NAME, SCH_NAME, and udies to ensure uniqueness
      const allSchools = await Todo8.aggregate([
        {
          $group: {
            _id: { DISTRICT_NAME: "$DISTRICT_NAME", SCH_NAME: "$SCH_NAME", udies: "$udies" },
            SCH_NAME: { $first: "$SCH_NAME" },
            udies: { $first: "$udies" }
          }
        },
        {
          $project: {
            _id: 0,
            DISTRICT_NAME: "$_id.DISTRICT_NAME",
            SCH_NAME: 1,
            udies: 1
          }
        }
      ]);
  
      // Create a mapping of schools by district name
      const schoolsByDistrict = {};
      allSchools.forEach(school => {
        if (!schoolsByDistrict[school.DISTRICT_NAME]) {
          schoolsByDistrict[school.DISTRICT_NAME] = [];
        }
        schoolsByDistrict[school.DISTRICT_NAME].push({
          SCH_NAME: school.SCH_NAME,
          udies: school.udies
        });
      });
  
      // Map each district to include its schools
      const response = allDistricts.map(district => {
        return {
          ...district.toObject(), // Convert Mongoose document to plain object
          schools: schoolsByDistrict[district.DISTRICT_NAME] || [] // Attach schools to the district
        };
      });
  
      // Send the response with districts and their associated schools
      const message = {
        data: response,
        dataLength: response.length,
        status: 'SUCCESS'
      };
      res.status(200).json(message);
  
    } catch (e) {
      console.error(e);
      const errorMessage = {
        message: 'Internal Server Error',
        error: e.message,
        status: 'INTERNAL_SERVER_ERROR'
      };
      res.status(500).json(errorMessage);
    }
  };
  
  static GetTalukaByDistrict = async (req, res) => {
    try {
      // Fetch all districts
      const allDistricts = await Todo2.find();
  
      // If no districts found, return a 404 status
      if (!allDistricts.length) {
        return res.status(404).json({ message: 'No districts found' });
      }
  
      // Fetch all talukas
      const allTalukas = await Todo8.find();
  
      // Create a mapping of talukas by district name
      const talukasByDistrict = {};
      allTalukas.forEach(taluka => {
        if (!talukasByDistrict[taluka.DISTRICT_NAME]) {
          talukasByDistrict[taluka.DISTRICT_NAME] = new Set();
        }
        talukasByDistrict[taluka.DISTRICT_NAME].add(taluka.TALUKA);
      });
  
      // Map each district to include its talukas (ensure uniqueness)
      const response = allDistricts.map(district => {
        return {
          ...district.toObject(), // Convert Mongoose document to plain object
          talukas: Array.from(talukasByDistrict[district.DISTRICT_NAME] || []) // Convert Set to Array and attach talukas to the district
        };
      });
  
      // Send the response with districts and their associated talukas
      const message = {
        data: response,
        dataLength: response.length,
        status: 'SUCCESS'
      };
  
      res.status(200).json(message);
  
    } catch (e) {
      console.error(e);
      const errorMessage = {
        message: 'Internal Server Error',
        error: e.message,
        status: 'INTERNAL_SERVER_ERROR'
      };
      res.status(500).json(errorMessage);
    }
  };
  
  static GetschoolBytaluka = async (req, res) => {
  try {
      const { taluka } = req.query; // Get the taluka name from the query parameters

      // Validate if taluka is provided
      if (!taluka) {
          return res.status(400).json({ message: 'Taluka name is required', status: 'BAD_REQUEST' });
      }

      // Fetch distinct schools in the specified taluka to avoid duplicates
      const schoolsInTaluka = await Todo8.aggregate([
          { $match: { TALUKA: taluka } }, // Filter by TALUKA
          { $group: { _id: { SCH_NAME: "$SCH_NAME", udies: "$udies" } } }, // Group by SCH_NAME and udies to remove duplicates
          { $project: { _id: 0, SCH_NAME: "$_id.SCH_NAME", udies: "$_id.udies" } } // Project only SCH_NAME and udies fields
      ]);

      // Check if any schools were found
      if (!schoolsInTaluka.length) {
          return res.status(404).json({ message: `No schools found in taluka: ${taluka}`, status: 'NOT_FOUND' });
      }

      // Prepare the response
      const message = {
          taluka: taluka,
          schoolCount: schoolsInTaluka.length,
          schools: schoolsInTaluka,
          status: 'SUCCESS'
      };

      // Send the response
      res.status(200).json(message);

  } catch (e) {
      console.error(e);
      const errorResponse = { 
          message: `Error: ${e.message}`, 
          status: 'INTERNAL_SERVER_ERROR' 
      };
      res.status(500).json(errorResponse);
  }
};

// pss certficate District Wise School Name & Udies no.
  static GetpsscertSchoolByDistrict = async (req, res) => {
    try {
      // Fetch all districts
      const allDistricts = await Todo2.distinct('DISTRICT_NAME');
  
      // If no districts found, return a 404 status
      if (!allDistricts.length) {
        return res.status(404).json({ message: 'No districts found' });
      }
  
      // Aggregate certificates to get unique school names and UDIES numbers per district
      const allCertificates = await Todo7.aggregate([
        {
          $group: {
            _id: { DISTRICT_NAME: "$DISTRICT_NAME", SCH_NAME: "$SCH_NAME", udies: "$udies" },
            SCH_NAME: { $first: "$SCH_NAME" },
            udies: { $first: "$udies" }
          }
        },
        {
          $group: {
            _id: "$_id.DISTRICT_NAME",
            schools: {
              $push: {
                SCH_NAME: "$SCH_NAME",
                udies: "$udies"
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            DISTRICT_NAME: "$_id",
            schools: 1
          }
        }
      ]);
  
      // Map each district to include its schools and UDIES numbers
      const response = allDistricts.map(district => {
        return {
          DISTRICT_NAME: district,
          schools: allCertificates.find(cert => cert.DISTRICT_NAME === district)?.schools || []
        };
      });
  
      // Send the response with districts and their associated schools
      const message = {
        data: response,
        dataLength: response.length,
        status: 'SUCCESS'
      };
  
      res.status(200).json(message);
  
    } catch (e) {
      console.error(e);
      const errorMessage = {
        message: 'Internal Server Error',
        error: e.message,
        status: 'INTERNAL_SERVER_ERROR'
      };
      res.status(500).json(errorMessage);
    }
  };
  // pss cert district wise taluka list 
  static GetpsscertTalukaByDistrict = async (req, res) => {
    try {
      // Fetch and group talukas by district name
      const result = await Todo7.aggregate([
        // Group by DISTRICT_NAME and TALUKA to ensure uniqueness
        {
          $group: {
            _id: {
              DISTRICT_NAME: "$DISTRICT_NAME",
              TALUKA: "$TALUKA"
            }
          }
        },
        // Group by DISTRICT_NAME and collect unique TALUKA
        {
          $group: {
            _id: "$_id.DISTRICT_NAME",
            talukas: {
              $addToSet: "$_id.TALUKA" // Use $addToSet to avoid duplicates
            }
          }
        },
        // Project the result in the desired format
        {
          $project: {
            _id: 0,
            DISTRICT_NAME: "$_id",
            talukas: 1
          }
        }
      ]);
  
      // Send the response with districts and their unique talukas
      const message = {
        data: result,
        dataLength: result.length,
        status: 'SUCCESS'
      };
  
      res.status(200).json(message);
  
    } catch (e) {
      console.error(e);
      const errorMessage = {
        message: 'Internal Server Error',
        error: e.message,
        status: 'INTERNAL_SERVER_ERROR'
      };
      res.status(500).json(errorMessage);
    }
  }
  // pss cert taluka wise school list & Udies no.
  static GetpsscertSchoolByTaluka = async (req,res) => {
    try {
      // Extract the taluka from the query parameters
      const { taluka } = req.query;
      
      // Log the taluka to verify it's being extracted
      console.log(`Requested Taluka: ${taluka}`);
  
      // Validate the taluka parameter
      if (!taluka) {
        return res.status(400).json({ message: 'Taluka name is required', status: 'BAD_REQUEST' });
      }
  
      // Fetch and group schools by TALUKA for the selected taluka
      const result = await Todo7.aggregate([
        // Match documents for the specified taluka
        {
          $match: { TALUKA: taluka }
        },
        // Group by SCH_NAME and udies to ensure uniqueness
        {
          $group: {
            _id: {
              SCH_NAME: "$SCH_NAME",
              udies: "$udies"
            }
          }
        },
        // Group by TALUKA and collect the unique schools and UDIES numbers into an array
        {
          $group: {
            _id: "$_id.SCH_NAME",
            udies: { $first: "$_id.udies" }
          }
        },
        // Project the result in the desired format
        {
          $project: {
            _id: 0,
            SCH_NAME: "$_id",
            udies: 1
          }
        }
      ]);
  
      // Send the response with the list of schools and their UDIES numbers for the specified taluka
      const message = {
        data: result,
        dataLength: result.length,
        status: 'SUCCESS'
      };
  
      res.status(200).json(message);
  
    } catch (e) {
      console.error(e);
      const errorMessage = {
        message: 'Internal Server Error',
        error: e.message,
        status: 'INTERNAL_SERVER_ERROR'
      };
      res.status(500).json(errorMessage);
    }
  }
  
}


  








module.exports = { class1 };
