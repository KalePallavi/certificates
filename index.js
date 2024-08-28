const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');

// Define your schema
const Schema = mongoose.Schema;

const DataSchema = new Schema({
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

const Data = mongoose.model('ShortListData4', DataSchema);

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
  fs.createReadStream('ShortListData4.csv')
    .pipe(csv())
    .on('data', async (row) => {
      try {
        const newData = new Data(row);
        await newData.save();
        console.log('Data saved:', row);
      } catch (err) {
        console.error('Error saving data:', err);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
});
