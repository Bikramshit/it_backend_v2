import React from "react";
import FileSaver from "file-saver";
// import XLSX from "xlsx";
import {utils, write} from "xlsx"
import {RiFileExcel2Fill} from "react-icons/ri"
const ExportCSV = ({ csvData, fileName, wscols }) => {
  // ******** XLSX with object key as header *************
  // const fileType =
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  // const fileExtension = ".xlsx";

  // const exportToCSV = (csvData, fileName) => {
  //   const ws = XLSX.utils.json_to_sheet(csvData);
  //   const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const data = new Blob([excelBuffer], { type: fileType });
  //   FileSaver.saveAs(data, fileName + fileExtension);
  // };

  // ******** XLSX with new header *************
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const Heading = [
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      address: "Address",
      postcode: "Postcode"
    }
  ];

  const exportToCSV = (csvData, fileName, wscols) => {
    console.log(Heading);
    /*const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["firstName", "lastName", "email", "address", "postcode"],
      skipHeader: true,
      origin: 0 //ok
    });*/
    var ws = utils.aoa_to_sheet([
      // ["OneCloud"],
      // ["sdaaaaaaaaaaaaaaaaaaaaaaa: 111111111111111111111"]
    ]);
    ws["!cols"] = wscols;
    /*ws["A1"].l = {
      Target: "https://sheetjs.com",
      Tooltip: "Find us @ SheetJS.com!"
    };*/
    //ONLY Data Added here
    utils.sheet_add_json(ws, csvData, 
    //   {
    //   header: ["User Name", "Value", "Months", "Added On"],
    //   skipHeader: false,
    //   origin: "A6" //ok -1
    // }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
    
    {/* bikram shit */}
   
    <button
      // variant="warning"
      onClick={(e) => exportToCSV(csvData, fileName, wscols)}
      className='execl_icon'
    >
      <RiFileExcel2Fill/>
    </button>
    </>
  );
};

export default ExportCSV;
