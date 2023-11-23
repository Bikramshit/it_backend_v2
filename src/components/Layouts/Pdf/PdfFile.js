import React from 'react'
import {Page, Text, Image ,View, Document, StyleSheet, Font} from "@react-pdf/renderer" ;
import RegFont from "./Fonts/Roboto-Regular.ttf";
import RegBold from "./Fonts/Roboto-Bold.ttf";
import RegMedium from "./Fonts/Roboto-Medium.ttf";
import RegCon from "./Fonts/Roboto-Condensed.ttf";
import RegBlack from "./Fonts/Roboto-Black.ttf";
import Price from '../Price/Price';
Font.register({family:'Roboto', fonts:[
    {src:RegFont},
    {src:RegBold, fontWeight:"bold"},
    {src:RegMedium, fontWeight:"medium"},
    {src:RegBlack, fontWeight:'semibold'},
    {src:RegCon, fontWeight:'ultrabold'}

]})
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      color:'#212529',
      fontFamily:'Roboto',
      fontSize:13,
    //   backgroundColor:'red',
      
    },
  
    input3:{
        position: "absolute",
        left:35,
        right:35,
        top: 35,

    },
    input4:{
        position: "absolute",
        left:35,
        right:35,
        top: 20,

    },
    body3: {
        paddingTop: 35,
        paddingBottom: 0,
        paddingHorizontal: 35,
        color:'#212529',
        fontFamily:'Roboto',
        fontSize:13,
        
      },
    body2:{
    paddingTop: 30,
    //   paddingBottom: 25,
      color:'#212529',
      fontFamily:'Roboto',
      fontSize:13,
    },
    input2:{
        position: "absolute",
        left:0,
        right:0,
        top: 35,

        // left:35,
        // top:35,
        // right:35,
    },
    body4:{
        paddingTop: 10,
        paddingBottom: 0,
        paddingHorizontal: 35,
        color:'#212529',
        fontFamily:'Roboto',
        fontSize:13,
    },
    Letter_input :{
        fontSize:13,
        position: "absolute",
        left:35,
        top:25,
        right:35,
    },
  
    Image:{
        opacity:0.1,
        marginTop:100
        // marginTop:400
    },
    Image2:{
        opacity:0.1,
        height:400,
        width:400,
        marginHorizontal:'auto'

    },
    letter_From:{
        fontWeight:'bold' ,
        paddingBottom:12,
    },
    input_label:{
        display:"flex",
        flexDirection:"column",
        fontWeight:500
    },
    input_values:{
        paddingLeft:12,
        paddingBottom:10,
        display:'flex',
        flexDirection:'row'

        // color
    },
    dotted:{
        borderBottomWidth:1,
        borderBottomColor:'#0c0e00',
        borderBottomStyle:'dotted',
        flex:3,
        width:20,
    },
    label:{
        flex:2,
        fontWeight:'bold'
    },
    lett:{
        paddingBottom:5,
        paddingLeft:12,

    },
    lett_to:{
        paddingBottom:5,
        marginTop:10
    },
    it_Dec:{
        textDecoration:"underline",
        fontWeight:"bold",
        textAlign:'center',
        fontSize:14,
    
    },
    fy:{
        fontWeight:"bold"
    },
    form_heading:{
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        textDecoration:'underline',
        // paddingBottom:5
    },
    tr:{
        display:"flex",
        flexDirection:"column"        
    },
    trr:{
        display:"flex",
        flexDirection:"column"  ,
        width:50      
    },
    trr2:{
        display:"flex",
        flexDirection:"column" ,
        width:300      
    },
    trr4:{
        display:"flex",
        flexDirection:"column" ,
        width:200      
    },
    trr3:{
        display:"flex",
        flexDirection:"column" ,
        width:100  
    },
    tr2:{
        display:"flex",
        flexDirection:"row"        
    },
    tr3:{
        width:130
    },
    th:{
      fontWeight:"bold",
      paddingHorizontal:10,
      paddingVertical:5,
      border:"1px solid rgb(191, 188, 188)",
      margin:0
    //   textAlign:"center"
    },
    thh:{
        height:20,
        fontWeight:"bold",
      paddingHorizontal:5,
      paddingTop:2,
    //   paddingVertical:5,
      border:"1px solid rgb(191, 188, 188)",
      margin:0,
      textAlign:'center'
    },
    tdd:{
      paddingTop:2,
      paddingHorizontal: 5,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        height:20
      },
      total:{
        paddingTop:2,
        paddingLeft: 140,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        height:20,
        fontWeight:'bold'

      },
      tdd2:{
      paddingTop:2,
      paddingHorizontal: 5,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        height:40
      },
      tdd22:{
        paddingTop:2,
        paddingHorizontal: 5,
          border:"1px solid rgb(191, 188, 188)",
          margin:0,
          height:30
        },
      tdd3:{
        paddingTop:65,
        paddingHorizontal: 5,
          border:"1px solid rgb(191, 188, 188)",
          margin:0,
          height:140
        },
      ele:{
      paddingTop:105,
      paddingHorizontal: 12,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        height:220
      //   textAlign:"center"
      },
      ele2:{
        paddingTop:105,
        paddingHorizontal: 12,
          border:"1px solid rgb(191, 188, 188)",
          margin:0,
          height:240
        //   textAlign:"center"
        },

    td:{
        paddingHorizontal:10,
        paddingVertical:5,
        border:"1px solid rgb(191, 188, 188)",
        margin:0
      //   textAlign:"center"
      },
      td_f:{
        paddingHorizontal:10,
        paddingVertical:5,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        width:180

      //   textAlign:"center"
      },
      td_f2:{
        paddingHorizontal:10,
        paddingVertical:5,
        border:"1px solid rgb(191, 188, 188)",
        margin:0,
        width:60
        
      //   textAlign:"center"
      },
      
    table: {
        borderColor:'rgb(191, 188, 188)',
        borderWidth:1,
        borderStyle:'solid',
        fontSize:10,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'row',
        // width:"100%"
     },
     table4: {
        // borderColor:'rgb(191, 188, 188)',
        // borderWidth:1,
        // borderStyle:'solid',
        fontSize:12,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'row',
        // width:"100%"
     },
     table3: {
        borderColor:'rgb(191, 188, 188)',
        borderWidth:1,
        borderStyle:'solid',
        fontSize:10,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'column',
        // width:"100%"
     },
     table_feedback: {
        // borderColor:'rgb(191, 188, 188)',
        // borderWidth:1,
        // borderStyle:'solid',
        fontSize:11,
        marginHorizontal: "auto",
        display:'flex',
        flexDirection:'column',
        marginTop:5
        // width:"100%"
     },
     table2: {
        // borderColor:'rgb(191, 188, 188)',
        // borderWidth:1,
        // borderStyle:'solid',
        fontSize:10,
        marginHorizontal: 10,
        display:'flex',
        flexDirection:'row',
        // width:"100%"
     },
     center:{
        textAlign:'center',
        fontWeight:"bold",
        paddingLeft:45,
        paddingBottom:3
     },
     arrear_sec:{
        display:"flex",
        flexDirection:"row",
        paddingTop:12,
        fontSize:10,
        paddingHorizontal:20

     },
     fyay:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:12,
        fontSize:11,
        marginHorizontal: 10
     },
     fyay2:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"center",
        marginTop:12,
        fontSize:11,
        marginHorizontal: 10
     },

     hra_emp:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:12,
        fontSize:11,
        marginHorizontal: 10
     },
     hbl_yr:{
        marginTop:5,
        fontSize:10,
        marginHorizontal: 10

     },
     exceed:{
        marginHorizontal:30,
        marginTop:6,
        border:"1px solid rgb(191, 188, 188)",
        padding:5,
        borderRadius:2

     },
     details:{
        marginLeft:30
     },
     section:{
        marginTop:10
     }
   

  });

function PdfFile({response}) {
    const getDate =(yourDate)=> {
        if(yourDate===undefined) return;
        yourDate = new Date(yourDate);
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() - (offset*60*1000))
        return yourDate.toISOString().split('T')[0]
      }


console.log(response.ex_i);

  return (
    <>
    
    <Document>

       
        <Page style={styles.body} size={'A4'}>
            <Image style={styles.Image} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
            <View style={styles.Letter_input}>
                <Text style={styles.letter_From}>From,</Text>
                <View style={styles.input_div}>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Name</Text>
                        <Text style={styles.dotted}>{response.name}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Designation</Text>
                        <Text style={styles.dotted}>{response.designation}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Department/Section</Text>
                        <Text style={styles.dotted}>{response.department}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Category</Text>
                        <Text style={styles.dotted}>{response.category}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Employer</Text>
                        <Text style={styles.dotted}>Aliah University</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Contact No</Text>
                        <Text style={styles.dotted}>{response.phone}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.dotted}>{response.email}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>PAN</Text>
                        <Text style={styles.dotted}>{response.pan}</Text>
                    </View>
                    <View style={styles.input_values}>
                        <Text style={styles.label}>Aadhaar</Text>
                        <Text style={styles.dotted}>{response.aadhaar}</Text>
                    </View>
                   
                   
                </View>

                <View>
                <Text style={styles.lett_to}>To,</Text>
                <View>
                    <Text style={styles.lett}>Finance Officer</Text>
                    <Text style={styles.lett}>Aliah University</Text>
                    <Text style={styles.lett}>A/27, Action Area II, </Text>
                    <Text style={styles.lett}>New Town, Rajarhat</Text>
                    <Text style={styles.lett}>Kolkata-700160</Text>
                </View>
                <View>
                    <Text style={styles.it_Dec}>Subject: IT Declaration</Text>
                    <Text>Sir,</Text>
                    <Text  style={styles.lett}>1. Please find encolsed herewith my proposed Income Tax Calculation Form for <Text style={styles.fy}>FY 2023-24</Text> </Text>
                    <Text  style={styles.lett}>2. I certify that particulars furnished are true and correct to the best of my knowledge and belief</Text>
                    <Text  style={styles.lett}>3. I authorize the University to recover Income Tax from my salary based on the declaration/documents submitted here</Text>
                    <Text  style={styles.lett}>4. I certify that these investments/savings have been made/proposed from my own earned income</Text>
                    <Text  style={styles.lett}>5. Proof of the proposed investments/savings declared will be submitted positively by <Text style={styles.fy}>12.04.2024</Text></Text>
                    <Text  style={styles.lett}>6. I will be solely responsible to CBDT, Income Tax Department, Govt. of India for all information pertaining to income tax assessment</Text>
                    <Text  style={styles.lett}>7. I will be solely responsible if not paid the proposed investment and will deposit the tax payable and its penalty directly to the Income Tax Department and will furnish the copy of paid challan to collect the Form 16</Text>
                </View>
                </View>

            </View>
        </Page>

        <Page style={styles.body2} size={'A4'} orientation='landscape'>
        <Image style={styles.Image2} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
        <View style={styles.input2}>
        <View>
            <Text style={styles.form_heading}>Salary Statement</Text>
            <Text>Are you a contractual Employee: {response.contactual}</Text>
        </View>
        <View style={styles.table}>
            <View style={styles.tr}>
                <Text style={styles.th}>Months</Text>
                <Text style={styles.th}>MAR 23</Text>
                <Text style={styles.th}>APR 23</Text>
                <Text style={styles.th}>MAY 23</Text>
                <Text style={styles.th}>JUN 23</Text>
                <Text style={styles.th}>JUL 23</Text>
                <Text style={styles.th}>AUG 23</Text>
                <Text style={styles.th}>SEP 23</Text>
                <Text style={styles.th}>OCT 23</Text>
                <Text style={styles.th}>NOV 23</Text>
                <Text style={styles.th}>DEC 23</Text>
                <Text style={styles.th}>JAN 24</Text>
                <Text style={styles.th}>FEB 24</Text>
                <Text style={styles.th}>Total</Text>
            </View>
            <View>
                <Text style={styles.th}>DA Rate</Text>
                <Text style={styles.td}><Price number={response.rate_s1}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s2}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s3}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s4}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s5}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s6}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s7}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s8}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s9}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s10}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s11}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s12}  /></Text>
                <Text style={styles.td}><Price number={response.rate_s13}  /></Text>
            </View>
            <View>
                <Text style={styles.th}>Basic/Consolidate</Text>
                <Text style={styles.td}> <Price number={response.basic_s1} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s2} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s3} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s4} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s5} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s6} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s7} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s8} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s9} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s10} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s11} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s12} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_s13} /> </Text>
            </View>
            <View>
                <Text style={styles.th}>DA</Text>
                <Text style={styles.td}><Price number={response.da_s1} /></Text>
                <Text style={styles.td}><Price number={response.da_s2} /></Text>
                <Text style={styles.td}><Price number={response.da_s3} /></Text>
                <Text style={styles.td}><Price number={response.da_s4} /></Text>
                <Text style={styles.td}><Price number={response.da_s5} /></Text>
                <Text style={styles.td}><Price number={response.da_s6} /></Text>
                <Text style={styles.td}><Price number={response.da_s7} /></Text>
                <Text style={styles.td}><Price number={response.da_s8} /></Text>
                <Text style={styles.td}><Price number={response.da_s9} /></Text>
                <Text style={styles.td}><Price number={response.da_s10} /></Text>
                <Text style={styles.td}><Price number={response.da_s11} /></Text>
                <Text style={styles.td}><Price number={response.da_s12} /></Text>
                <Text style={styles.td}><Price number={response.da_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>HRA</Text>
                <Text style={styles.td}><Price number={response.hra_s1} /></Text>
                <Text style={styles.td}><Price number={response.hra_s2} /></Text>
                <Text style={styles.td}><Price number={response.hra_s3} /></Text>
                <Text style={styles.td}><Price number={response.hra_s4} /></Text>
                <Text style={styles.td}><Price number={response.hra_s5} /></Text>
                <Text style={styles.td}><Price number={response.hra_s6} /></Text>
                <Text style={styles.td}><Price number={response.hra_s7} /></Text>
                <Text style={styles.td}><Price number={response.hra_s8} /></Text>
                <Text style={styles.td}><Price number={response.hra_s9} /></Text>
                <Text style={styles.td}><Price number={response.hra_s10} /></Text>
                <Text style={styles.td}><Price number={response.hra_s11} /></Text>
                <Text style={styles.td}><Price number={response.hra_s12} /></Text>
                <Text style={styles.td}><Price number={response.hra_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>MA</Text>
                <Text style={styles.td}><Price number={response.ma_s1} /></Text>
                <Text style={styles.td}><Price number={response.ma_s2} /></Text>
                <Text style={styles.td}><Price number={response.ma_s3} /></Text>
                <Text style={styles.td}><Price number={response.ma_s4} /></Text>
                <Text style={styles.td}><Price number={response.ma_s5} /></Text>
                <Text style={styles.td}><Price number={response.ma_s6} /></Text>
                <Text style={styles.td}><Price number={response.ma_s7} /></Text>
                <Text style={styles.td}><Price number={response.ma_s8} /></Text>
                <Text style={styles.td}><Price number={response.ma_s9} /></Text>
                <Text style={styles.td}><Price number={response.ma_s10} /></Text>
                <Text style={styles.td}><Price number={response.ma_s11} /></Text>
                <Text style={styles.td}><Price number={response.ma_s12} /></Text>
                <Text style={styles.td}><Price number={response.ma_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Adjustment</Text>
                <Text style={styles.td}><Price number={response.adjust_s1} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s2} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s3} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s4} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s5} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s6} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s7} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s8} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s9} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s10} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s11} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s12} /></Text>
                <Text style={styles.td}><Price number={response.adjust_s13} /></Text>
            </View>
             <View>
                <Text style={styles.th}>Gross</Text>
                <Text style={styles.td}><Price number={response.gross_s1} /></Text>
                <Text style={styles.td}><Price number={response.gross_s2} /></Text>
                <Text style={styles.td}><Price number={response.gross_s3} /></Text>
                <Text style={styles.td}><Price number={response.gross_s4} /></Text>
                <Text style={styles.td}><Price number={response.gross_s5} /></Text>
                <Text style={styles.td}><Price number={response.gross_s6} /></Text>
                <Text style={styles.td}><Price number={response.gross_s7} /></Text>
                <Text style={styles.td}><Price number={response.gross_s8} /></Text>
                <Text style={styles.td}><Price number={response.gross_s9} /></Text>
                <Text style={styles.td}><Price number={response.gross_s10} /></Text>
                <Text style={styles.td}><Price number={response.gross_s11} /></Text>
                <Text style={styles.td}><Price number={response.gross_s12} /></Text>
                <Text style={styles.td}><Price number={response.gross_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Profession Tax</Text>
                <Text style={styles.td}><Price number={response.ptax_s1} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s2} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s3} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s4} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s5} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s6} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s7} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s8} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s9} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s10} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s11} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s12} /></Text>
                <Text style={styles.td}><Price number={response.ptax_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>AUPF/GPF</Text>
                <Text style={styles.td}><Price number={response.aupf_s1} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s2} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s3} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s4} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s5} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s6} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s7} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s8} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s9} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s10} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s11} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s12} /></Text>
                <Text style={styles.td}><Price number={response.aupf_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>SF/IF</Text>
                <Text style={styles.td}><Price number={response.sf_s1} /></Text>
                <Text style={styles.td}><Price number={response.sf_s2} /></Text>
                <Text style={styles.td}><Price number={response.sf_s3} /></Text>
                <Text style={styles.td}><Price number={response.sf_s4} /></Text>
                <Text style={styles.td}><Price number={response.sf_s5} /></Text>
                <Text style={styles.td}><Price number={response.sf_s6} /></Text>
                <Text style={styles.td}><Price number={response.sf_s7} /></Text>
                <Text style={styles.td}><Price number={response.sf_s8} /></Text>
                <Text style={styles.td}><Price number={response.sf_s9} /></Text>
                <Text style={styles.td}><Price number={response.sf_s10} /></Text>
                <Text style={styles.td}><Price number={response.sf_s11} /></Text>
                <Text style={styles.td}><Price number={response.sf_s12} /></Text>
                <Text style={styles.td}><Price number={response.sf_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Income Tax</Text>
                <Text style={styles.td}><Price number={response.income_s1} /></Text>
                <Text style={styles.td}><Price number={response.income_s2} /></Text>
                <Text style={styles.td}><Price number={response.income_s3} /></Text>
                <Text style={styles.td}><Price number={response.income_s4} /></Text>
                <Text style={styles.td}><Price number={response.income_s5} /></Text>
                <Text style={styles.td}><Price number={response.income_s6} /></Text>
                <Text style={styles.td}><Price number={response.income_s7} /></Text>
                <Text style={styles.td}><Price number={response.income_s8} /></Text>
                <Text style={styles.td}><Price number={response.income_s9} /></Text>
                <Text style={styles.td}><Price number={response.income_s10} /></Text>
                <Text style={styles.td}><Price number={response.income_s11} /></Text>
                <Text style={styles.td}><Price number={response.income_s12} /></Text>
                <Text style={styles.td}><Price number={response.income_s13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Net Salary</Text>
                <Text style={styles.td}><Price number={response.netsal_s1} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s2} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s3} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s4} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s5} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s6} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s7} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s8} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s9} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s10} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s11} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s12} /></Text>
                <Text style={styles.td}><Price number={response.netsal_s13} /></Text>
            </View>
            


        </View>
        <View style={styles.arrear_sec}>
            <View>
                <Text style={styles.lett_to}>Note:</Text>
                <Text>1. Enter the amount for March 2023</Text>
                <Text>2. In HRA column, enter the amount for March and July</Text>
                <Text>3. In Adjustment column enter the monthly extra drawal amount, if any.</Text>
            </View>
            <View>
                <Text style={styles.center}>Arrear Salary</Text>
            <View style={styles.table}>
                <View style={styles.tr}>
                 <Text style={styles.td}>Gross Arrear Salary</Text>
                 <Text style={styles.td}>Less: Profession Tax</Text>
                 <Text style={styles.td}>Less: TDS</Text>
                 <Text style={styles.td}>Net Arrear Salary</Text>
                </View>
            <View style={styles.tr}>
                <Text style={styles.td}> <Price number={response.gas_s} /> </Text>
                <Text style={styles.td}> <Price number={response.lpt_s} /> </Text>
                <Text style={styles.td}> <Price number={response.ltds_s} /> </Text>
                <Text style={styles.td}> <Price number={response.nas_s} /> </Text>
            </View>
            </View>
            </View>
        </View>
        </View>
        </Page>

        {
            Number(response.netsal_f13!==0) &&
        
        <Page style={styles.body2} size={'A4'} orientation='landscape'>
        <Image style={styles.Image2} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
        <View style={styles.input2}>
        <View>
            <Text style={styles.form_heading}>Form 12B</Text>
            <Text style={{fontSize:10, textAlign:"center", paddingTop:3}}>[See Rule 26A]</Text>
            <Text style={{textAlign:'center', fontSize:11, fontWeight:"bold", paddingTop:3}}>Form for furnishing details of Income Tax under section 192(2) for the year ending 31st March, 2024</Text>
            <Text style={{textAlign:'center', fontSize:11, fontWeight:"bold", paddingTop:3}}>Details to be furnished by the newly joined employee during the year</Text>
            <Text  style={{fontSize:11, paddingTop:3}}>Name: {response.name}</Text>
        </View>
        <View style={styles.table2}>
            <View style={styles.tr}>
                <Text style={styles.th}>Months</Text>
                <Text style={styles.th}>MAR 23</Text>
                <Text style={styles.th}>APR 23</Text>
                <Text style={styles.th}>MAY 23</Text>
                <Text style={styles.th}>JUN 23</Text>
                <Text style={styles.th}>JUL 23</Text>
                <Text style={styles.th}>AUG 23</Text>
                <Text style={styles.th}>SEP 23</Text>
                <Text style={styles.th}>OCT 23</Text>
                <Text style={styles.th}>NOV 23</Text>
                <Text style={styles.th}>DEC 23</Text>
                <Text style={styles.th}>JAN 24</Text>
                <Text style={styles.th}>FEB 24</Text>
                <Text style={styles.th}>Total</Text>
            </View>
            <View>
                <Text style={styles.th}>DA Rate</Text>
                <Text style={styles.td}><Price number={response.rate_f1}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f2}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f3}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f4}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f5}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f6}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f7}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f8}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f9}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f10}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f11}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f12}  /></Text>
                <Text style={styles.td}><Price number={response.rate_f13}  /></Text>
            </View>
            <View>
                <Text style={styles.th}>Basic/Consolidate</Text>
                <Text style={styles.td}> <Price number={response.basic_f1} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f2} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f3} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f4} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f5} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f6} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f7} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f8} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f9} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f10} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f11} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f12} /> </Text>
                <Text style={styles.td}> <Price number={response.basic_f13} /> </Text>
            </View>
            <View>
                <Text style={styles.th}>DA</Text>
                <Text style={styles.td}><Price number={response.da_f1} /></Text>
                <Text style={styles.td}><Price number={response.da_f2} /></Text>
                <Text style={styles.td}><Price number={response.da_f3} /></Text>
                <Text style={styles.td}><Price number={response.da_f4} /></Text>
                <Text style={styles.td}><Price number={response.da_f5} /></Text>
                <Text style={styles.td}><Price number={response.da_f6} /></Text>
                <Text style={styles.td}><Price number={response.da_f7} /></Text>
                <Text style={styles.td}><Price number={response.da_f8} /></Text>
                <Text style={styles.td}><Price number={response.da_f9} /></Text>
                <Text style={styles.td}><Price number={response.da_f10} /></Text>
                <Text style={styles.td}><Price number={response.da_f11} /></Text>
                <Text style={styles.td}><Price number={response.da_f12} /></Text>
                <Text style={styles.td}><Price number={response.da_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>HRA</Text>
                <Text style={styles.td}><Price number={response.hra_f1} /></Text>
                <Text style={styles.td}><Price number={response.hra_f2} /></Text>
                <Text style={styles.td}><Price number={response.hra_f3} /></Text>
                <Text style={styles.td}><Price number={response.hra_f4} /></Text>
                <Text style={styles.td}><Price number={response.hra_f5} /></Text>
                <Text style={styles.td}><Price number={response.hra_f6} /></Text>
                <Text style={styles.td}><Price number={response.hra_f7} /></Text>
                <Text style={styles.td}><Price number={response.hra_f8} /></Text>
                <Text style={styles.td}><Price number={response.hra_f9} /></Text>
                <Text style={styles.td}><Price number={response.hra_f10} /></Text>
                <Text style={styles.td}><Price number={response.hra_f11} /></Text>
                <Text style={styles.td}><Price number={response.hra_f12} /></Text>
                <Text style={styles.td}><Price number={response.hra_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>MA</Text>
                <Text style={styles.td}><Price number={response.ma_f1} /></Text>
                <Text style={styles.td}><Price number={response.ma_f2} /></Text>
                <Text style={styles.td}><Price number={response.ma_f3} /></Text>
                <Text style={styles.td}><Price number={response.ma_f4} /></Text>
                <Text style={styles.td}><Price number={response.ma_f5} /></Text>
                <Text style={styles.td}><Price number={response.ma_f6} /></Text>
                <Text style={styles.td}><Price number={response.ma_f7} /></Text>
                <Text style={styles.td}><Price number={response.ma_f8} /></Text>
                <Text style={styles.td}><Price number={response.ma_f9} /></Text>
                <Text style={styles.td}><Price number={response.ma_f10} /></Text>
                <Text style={styles.td}><Price number={response.ma_f11} /></Text>
                <Text style={styles.td}><Price number={response.ma_f12} /></Text>
                <Text style={styles.td}><Price number={response.ma_f13} /></Text>
            </View>
             <View>
                <Text style={styles.th}>Gross</Text>
                <Text style={styles.td}><Price number={response.gross_f1} /></Text>
                <Text style={styles.td}><Price number={response.gross_f2} /></Text>
                <Text style={styles.td}><Price number={response.gross_f3} /></Text>
                <Text style={styles.td}><Price number={response.gross_f4} /></Text>
                <Text style={styles.td}><Price number={response.gross_f5} /></Text>
                <Text style={styles.td}><Price number={response.gross_f6} /></Text>
                <Text style={styles.td}><Price number={response.gross_f7} /></Text>
                <Text style={styles.td}><Price number={response.gross_f8} /></Text>
                <Text style={styles.td}><Price number={response.gross_f9} /></Text>
                <Text style={styles.td}><Price number={response.gross_f10} /></Text>
                <Text style={styles.td}><Price number={response.gross_f11} /></Text>
                <Text style={styles.td}><Price number={response.gross_f12} /></Text>
                <Text style={styles.td}><Price number={response.gross_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Profession Tax</Text>
                <Text style={styles.td}><Price number={response.ptax_f1} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f2} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f3} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f4} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f5} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f6} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f7} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f8} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f9} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f10} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f11} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f12} /></Text>
                <Text style={styles.td}><Price number={response.ptax_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>GPF/EPF</Text>
                <Text style={styles.td}><Price number={response.aupf_f1} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f2} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f3} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f4} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f5} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f6} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f7} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f8} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f9} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f10} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f11} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f12} /></Text>
                <Text style={styles.td}><Price number={response.aupf_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>SF/IF</Text>
                <Text style={styles.td}><Price number={response.sf_f1} /></Text>
                <Text style={styles.td}><Price number={response.sf_f2} /></Text>
                <Text style={styles.td}><Price number={response.sf_f3} /></Text>
                <Text style={styles.td}><Price number={response.sf_f4} /></Text>
                <Text style={styles.td}><Price number={response.sf_f5} /></Text>
                <Text style={styles.td}><Price number={response.sf_f6} /></Text>
                <Text style={styles.td}><Price number={response.sf_f7} /></Text>
                <Text style={styles.td}><Price number={response.sf_f8} /></Text>
                <Text style={styles.td}><Price number={response.sf_f9} /></Text>
                <Text style={styles.td}><Price number={response.sf_f10} /></Text>
                <Text style={styles.td}><Price number={response.sf_f11} /></Text>
                <Text style={styles.td}><Price number={response.sf_f12} /></Text>
                <Text style={styles.td}><Price number={response.sf_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Income Tax</Text>
                <Text style={styles.td}><Price number={response.income_f1} /></Text>
                <Text style={styles.td}><Price number={response.income_f2} /></Text>
                <Text style={styles.td}><Price number={response.income_f3} /></Text>
                <Text style={styles.td}><Price number={response.income_f4} /></Text>
                <Text style={styles.td}><Price number={response.income_f5} /></Text>
                <Text style={styles.td}><Price number={response.income_f6} /></Text>
                <Text style={styles.td}><Price number={response.income_f7} /></Text>
                <Text style={styles.td}><Price number={response.income_f8} /></Text>
                <Text style={styles.td}><Price number={response.income_f9} /></Text>
                <Text style={styles.td}><Price number={response.income_f10} /></Text>
                <Text style={styles.td}><Price number={response.income_f11} /></Text>
                <Text style={styles.td}><Price number={response.income_f12} /></Text>
                <Text style={styles.td}><Price number={response.income_f13} /></Text>
            </View>
            <View>
                <Text style={styles.th}>Net Salary</Text>
                <Text style={styles.td}><Price number={response.netsal_f1} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f2} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f3} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f4} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f5} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f6} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f7} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f8} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f9} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f10} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f11} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f12} /></Text>
                <Text style={styles.td}><Price number={response.netsal_f13} /></Text>
            </View>
            


        </View>
        <View style={styles.arrear_sec}>
            <View>
                <Text style={styles.lett_to}>Enclosure:</Text>
                <Text>1. Pay slip(s)</Text>
                
            </View>
            <View>
                <Text style={styles.center}>Arrear Salary</Text>
            <View style={styles.table}>
                <View style={styles.tr}>
                 <Text style={styles.td}>Gross Arrear Salary</Text>
                 <Text style={styles.td}>Less: Profession Tax</Text>
                 <Text style={styles.td}>Less: TDS</Text>
                 <Text style={styles.td}>Net Arrear Salary</Text>
                </View>
            <View style={styles.tr}>
                <Text style={styles.td}> <Price number={response.gas_f} /> </Text>
                <Text style={styles.td}> <Price number={response.lpt_f} /> </Text>
                <Text style={styles.td}> <Price number={response.ltds_f} /> </Text>
                <Text style={styles.td}> <Price number={response.nas_f} /> </Text>
            </View>
            </View>
            </View>
        </View>
        </View>
        </Page>
}
        <Page style={styles.body4} size={'A4'}>
        <Image style={styles.Image} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
        <View style={styles.input4}>
        <Text style={styles.form_heading}>IT Computation</Text>

            <View style={styles.table}>
                <View style={styles.tr}>
                    <Text style={styles.td}>Name</Text>
                    <Text style={styles.td}>PAN</Text>
                </View>
                <View style={styles.tr3}>
                    <Text style={styles.td}>{response.name}</Text>
                    <Text style={styles.td}>{response.pan}</Text>
                </View>
                <View style={styles.tr}>
                    <Text style={styles.td}>D.O.B</Text>
                    <Text style={styles.td}>Aadhaar</Text>
                </View>
                <View style={styles.tr3}>
                    <Text style={styles.td}>{getDate(response.dob)}</Text>
                    <Text style={styles.td}>{response.aadhaar}</Text>
                </View>
                <View style={styles.tr}>
                    <Text style={styles.td}>D.O.R</Text>
                    <Text style={styles.td}>Status</Text>
                </View>
                <View style={styles.tr3}>
                    <Text style={styles.td}>{getDate(response.dor)}</Text>
                    <Text style={styles.td}>{response.it_status}</Text>
                </View>
            </View>


            <View style={styles.fyay}>
                <Text>Financial Year: {response.financial_year}</Text>
                <Text>Assessment Year: {response.assessment_year}</Text>
            </View>

            <View style={styles.table}>
                <View style={styles.trr}>
                    <Text style={styles.thh}>Sl No</Text>
                    <Text style={styles.tdd}>1</Text>
                    <Text style={styles.tdd}>2</Text>
                    <Text style={styles.tdd}>3</Text>
                    <Text style={styles.tdd}>4</Text>
                    <Text style={styles.tdd}>5</Text>
                    <Text style={styles.tdd}>6</Text>
                    <Text style={styles.tdd}>7</Text>
                    <Text style={styles.tdd}>8</Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}>9</Text>
                    <Text style={styles.tdd}>10</Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}>11</Text>
                    <Text style={styles.tdd}>12</Text>
                    <Text style={styles.tdd}>13</Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}>14</Text>
                    <Text style={styles.tdd}>15</Text>
                    <Text style={styles.tdd}>16</Text>
                    <Text style={styles.tdd}>17</Text>
                    <Text style={styles.tdd}>18</Text>
                    <Text style={styles.tdd}>19</Text>
                    <Text style={styles.tdd}>20</Text>
                    
                </View>
                <View style={styles.trr2}>
                    <Text style={styles.thh}>Particulars</Text>
                    <Text style={styles.tdd}>Gross Salary</Text>
                    <Text style={styles.tdd}>Bonus                                                                          <Price number={response.bonus_it} /> </Text>
                    <Text style={styles.tdd}>Honorarium (AUAT/Dean/Hostel,Exam, etc)        <Price number={response.hono_it} /> </Text>
                    <Text style={styles.tdd}>Current Employer Gross Salary</Text>
                    <Text style={styles.tdd}>Previous Employer Gross Salary</Text>
                    <Text style={styles.tdd}>Pension</Text>
                    <Text style={styles.tdd}>Cuommuted Value of Pension</Text>
                    <Text style={styles.tdd}>Less: Allowance under section 10</Text>
                    <Text style={styles.tdd}>10 (10A) - Commuted value of Pension</Text>
                    <Text style={styles.tdd}>10 (13A) - HRA</Text>
                    <Text style={styles.tdd}>Gross Salary and Pension</Text>
                    <Text style={styles.tdd}>Less: Deduction u/s 16:</Text>
                    <Text style={styles.tdd}>Tax on Employment (16iii)</Text>
                    <Text style={styles.tdd}>Current Employer:        <Price number={response.c_employer_it} />  Previous Employer:        <Price number={response.p_employer_it}/></Text>
                    <Text style={styles.tdd}>Standard Deduction u/s (16ia)</Text>
                    <Text style={styles.tdd}>Net Salary and Pension</Text>
                    <Text style={styles.tdd}>Interest on House Building Loan u/s 24(b)       <Price number={response.interest_hbl_it} /></Text>
                    <Text style={styles.tdd}>Income from other Sources:</Text>
                    <Text style={styles.tdd}>Savings Bank Interest:     <Price number={response.savings_interest_it} />       Any Other Income:        <Price number={response.other_income_it} /> </Text>
                    <Text style={styles.tdd}>Gross Income</Text>
                    <Text style={styles.tdd}>Total Deductions under Chapter VIA</Text>
                    <Text style={styles.tdd}>Net Income</Text>
                    <Text style={styles.tdd}>Taxable Income (Roundup u/s 288A in multiple of Rs.10/-)</Text>
                    <Text style={styles.tdd}>Tax Payable on Taxable Income</Text>
                    <Text style={styles.tdd}>Less: Rebate u/s 87A</Text>
                    <Text style={styles.tdd}>Tax after Rebate</Text>
                
                </View>
                <View style={styles.trr3}>
                    <Text style={styles.thh}>Old Regime</Text>
                    <Text style={styles.tdd}><Price number={response.gross_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.bonus_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.honoo_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.current_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.previous_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.pension_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.cvp_it_o} /></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}><Price number={response.ten_a__it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.thirteen_a__it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.gsp_it_o} /></Text>
                    {/* <Text style={styles.tdd}><Price number={response.gsp_it_n} /></Text> */}
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}><Price number={response.employer_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.s_deduction_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.net_sp_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.interest_hbl_it_o} /></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}><Price number={response.income_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.gross_income_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.chapter_total} /></Text>
                    <Text style={styles.tdd}><Price number={response.net_income_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.tax_income_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.tax_pay_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.less_it_o} /></Text>
                    <Text style={styles.tdd}><Price number={response.tar_it_o} /></Text>

                    

                </View>
                <View style={styles.trr3}>
                    <Text style={styles.thh}>New Regime</Text>
                    <Text style={styles.tdd}><Price number={response.gross_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.bonus_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.honoo_it2} /></Text>
                    <Text style={styles.tdd}><Price number={response.current_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.previous_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.pension_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.cvp_it_n} /></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}> <Price number={response.ten_a__it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.thirteen_a__it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.gsp_it_n} /></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}><Price number={response.employer_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.s_deduction_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.net_sp_it_n} /></Text>
                    <Text style={styles.tdd}> <Price number={response.interest_hbl_it_n} /></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}><Price number={response.income_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.gross_income_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.total_deduction_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.net_income_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.tax_income_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.tax_pay_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.less_it_n} /></Text>
                    <Text style={styles.tdd}><Price number={response.tar_it_n} /></Text>

                </View>


            </View>

            <View style={styles.table}>
                <View style={styles.trr}>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}>21</Text>
                    <Text style={styles.tdd}>22</Text>
                    <Text style={styles.tdd}>23</Text>
                    <Text style={styles.tdd}>24</Text>
                    <Text style={styles.tdd}>25</Text>
                    <Text style={styles.tdd}>26</Text>
                    <Text style={styles.tdd}>27</Text>
                </View>

                <View style={styles.trr2}>
                    <Text style={styles.tdd}>I am opting for</Text>
                    <Text style={styles.tdd}>{response.tax_per_inp}</Text>
                    <Text style={styles.tdd}>Add: 4% CESS (Health & Education)</Text>
                    <Text style={styles.tdd}>Gross Tax Payable</Text>
                    <Text style={styles.tdd}>Less: Relief u/s 89 (Please ensure to submit Form 10E to claim this relief)</Text>
                    <Text style={styles.tdd}>Net Tax Payable</Text>
                    <Text style={styles.tdd}>Tax Deducted From Salary</Text>
                    <Text style={styles.tdd}>{response.tex_payable_it}</Text>
                </View>

                <View style={styles.trr4}>
                    <Text style={styles.tdd}>  {response.opting_for}</Text>
                    <Text style={styles.tdd}><Price number={response.tax_per_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.add_four_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.gtax_payable_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.less_relief_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.ntax_payable_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.td_sal_it} /></Text>
                    <Text style={styles.tdd}><Price number={response.tax_refund} /></Text>
                </View>
                <View>

                </View>
            </View>
        
        <View style={styles.hbl_yr}>
            <Text> HBL taken in which Financial Year:      {response.hbl_taken_fy}</Text>
        </View>

        </View>
        </Page>
        
        <Page style={styles.body3} size={'A4'}>
        <Image style={styles.Image} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
        <View style={styles.input3}>
        <Text style={styles.form_heading}>Chapter VI</Text>

            <View style={styles.table}>
                <View style={styles.trr}>
                    <Text style={styles.thh}>u/s</Text>
                    <Text style={styles.ele2}>80C</Text>
                    <Text style={styles.tdd3}>80D</Text>
                    <Text style={styles.tdd2}>80DD {"\n"} 80U</Text>
                    <Text style={styles.tdd}>80E</Text>
                    <Text style={styles.tdd22}>80CCD {"\n"} (1B)</Text>
                    <Text style={styles.tdd}>80EE</Text>
                    <Text style={styles.tdd}>80EEA</Text>
                    <Text style={styles.tdd22}>80TTA</Text>
                    <Text style={styles.tdd22}>80TTB</Text>
                    <Text style={styles.tdd22}>80G</Text>
                    <Text style={styles.tdd22}>80EEB</Text>
                    { Number(response.ex_i) && <Text style={styles.tdd}>{response.ex_sec}</Text> }
                    
                    <Text style={styles.tdd}></Text>
                </View>
                <View style={styles.trr2}>
                    <Text style={styles.thh}>Particulars</Text>
                    <Text style={styles.tdd}>AUPF/ GPF/ PF transferred</Text>
                    <Text style={styles.tdd}>EPF/GPF deducted from Ex-employer</Text>
                    <Text style={styles.tdd}>SF/IF</Text>
                    <Text style={styles.tdd}>Life Insurance Premium</Text>
                    <Text style={styles.tdd}>PPF</Text>
                    <Text style={styles.tdd}>Sukanya Samridhi Yojna Contribution</Text>
                    <Text style={styles.tdd}>Child's School/College Tuition Fee (Max. 02 child)</Text>
                    <Text style={styles.tdd}>Payment of House Building Loan (Principle Only)</Text>
                    <Text style={styles.tdd}>{response.inp_n1}</Text>
                    <Text style={styles.tdd}>{response.inp_n2}</Text>
                    <Text style={styles.tdd}>{response.inp_n3}</Text>
                    <Text style={styles.tdd}>Deductible</Text>
                    <Text style={styles.tdd2}>Head                                                     Assessee, Spouse,                                              & Independent Children   </Text>
                    <Text style={styles.tdd2}> Medical Insurance Premium for Individual         <Price number={response.mii1_c}/>{"\n"}
(mode other than cash, maximum Rs.25000/-{"\n"} in each case)         </Text>
                    <Text style={styles.tdd2}>Medical Insurance Premium for Sr. Citizen         <Price number={response.mis1_c}/>{"\n"}
(mode other than cash, maximum Rs.50000/-{"\n"} in each case )         </Text>
                    <Text style={styles.tdd}>Deductible</Text>
                    <Text style={styles.tdd2}>For maintenance of handicapped dependent/for own disability  Rs.75,000/- for disability over 40% & Rs.1,25,000/- for severe {"\n"} disability over 80%</Text>
                    <Text style={styles.tdd}>Interest on Educational Loan (Max Rs.40,000)</Text>
                    <Text style={styles.tdd22}>NPS/Atal Pension Yojana (Max Rs.50,000)</Text>
                    <Text style={styles.tdd}>Interest in HBL (Max Rs.50,000)</Text>
                    <Text style={styles.tdd}>Interest in HBL (Max Rs.1,50,000)</Text>
                    <Text style={styles.tdd22}>Interest on Savings Bank A/c (for Individual - Maximum Rs.10,000/-)</Text>
                    <Text style={styles.tdd22}>Interest on Savings Bank A/c (for Sr. Citizen - Maximum Rs.50,000/-)</Text>
                    <Text style={styles.tdd22}>Donation/Charity to registered donatee (Refer to IT website for any clarification)</Text>
                    <Text style={styles.tdd22}>Deduction towards interest payments made on loan for purchase of Electric Vehicle</Text>
                    {  Number(response.ex_i) && <Text style={styles.tdd}>{response.ex_i}</Text> }

                    <Text style={styles.total}>Total</Text>
                </View>

                <View style={styles.tr}>
                    <Text style={styles.thh}>Actual Amount</Text>
                    <Text style={styles.tdd}><Price number={response.aupf_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.epf_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.sf_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.lip_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.ppf_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.ssy_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.cs_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.phb_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.input1}/></Text>
                    <Text style={styles.tdd}><Price number={response.input2}/></Text>
                    <Text style={styles.tdd}><Price number={response.input3}/></Text>
                    <Text style={styles.tdd}><Price number={response.deductible_80c}/></Text>
                    <Text style={styles.tdd2}>Assessee's Parents</Text>
                    <Text style={styles.tdd2}><Price number={response.mii2_c}/></Text>
                    <Text style={styles.tdd2}><Price number={response.mis2_c}/></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd2}> {response.disability_c}</Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd22}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd}></Text>
                    <Text style={styles.tdd22}></Text>
                    <Text style={styles.tdd22}></Text>
                    <Text style={styles.tdd22}></Text>
                    <Text style={styles.tdd22}></Text>
                    {
                          Number(response.ex_i) && <Text style={styles.tdd}></Text> 
                    }
                    
                    <Text style={styles.tdd}></Text>
                </View>

                <View style={styles.tr}>
                    <Text style={styles.thh}>Deductible Amount</Text>
                    <Text style={styles.ele}></Text>
                    <Text style={styles.tdd}><Price number={response.deductible_80c2}/></Text>
                    <Text style={styles.tdd2}></Text>
                    <Text style={styles.tdd2}><Price number={response.mii3_c}/></Text>
                    <Text style={styles.tdd2}> <Price number={response.mis3_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.deductible_80d}/></Text>
                    <Text style={styles.tdd2}> <Price number={response.disability_c2}/></Text>
                    <Text style={styles.tdd}><Price number={response.iel_c}/></Text>
                    <Text style={styles.tdd22}><Price number={response.nps_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.ihbl_c}/></Text>
                    <Text style={styles.tdd}><Price number={response.ihbl_c2}/></Text>
                    <Text style={styles.tdd22}><Price number={response.isb_c}/></Text>
                    <Text style={styles.tdd22}><Price number={response.isb_c2}/></Text>
                    <Text style={styles.tdd22}><Price number={response.donation_c}/></Text>
                    <Text style={styles.tdd22}><Price number={response.electric_c}/></Text>
                    {
                        Number(response.ex_i)!==0 && <Text style={styles.tdd}><Price number={response.ex_t}/></Text> 
                    }
                    
                    <Text style={styles.tdd}><Price number={response.chapter_total}/></Text>
       

                </View>

            </View>
            </View>

        </Page>

        <Page style={styles.body2} size={'A4'} orientation='landscape'>
        <Image style={styles.Image2} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
                    
            <View style={styles.input2}>
            <View style={styles.hra_emp}>
            <Text style={styles.form_heading}>For Existing Employee</Text>
            <Text style={styles.form_heading}>For New Employee</Text>

            </View>
            <View style={styles.fyay2}>
                <View style={styles.table4}>
                    
                    <View style={styles.tr}>
                        <Text style={styles.th}>Particulars</Text>
                        <Text style={styles.td}>Rent Paid</Text>
                        <Text style={styles.td}>1. Rent Paid - 10% of Salary</Text>
                        <Text style={styles.td}>2. (i) 50% of (BP+DA) for those living in metro cities</Text>
                        <Text style={styles.td}>(ii) 40% of (BP+DA) for those living in non-metro cities</Text>
                        <Text style={styles.td}>3. Actual HRA Received1.Rent Paid - 10% of Salary</Text>
                        <Text style={styles.td}>HRA Exempt u/s 10 (13A)</Text>
                        <Text style={styles.td}>Do you live in Delhi, Mumbai, Kolkata or channai?</Text>
                    
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Amount</Text>
                        <Text style={styles.td}><Price number={response.rent_e}/></Text>
                        <Text style={styles.td}><Price number={response.r_ten_e}/></Text>
                        <Text style={styles.td}><Price number={response.living_m_e}/></Text>
                        <Text style={styles.td}><Price number={response.non_living_m_e}/></Text>
                        <Text style={styles.td}><Price number={response.actual_hra_e}/></Text>
                        <Text style={styles.td}><Price number={response.hra_exempt_e}/></Text>
                        <Text style={styles.td}>{response.live_in_e}</Text>
                        
                    </View>
                </View>
                <View style={styles.table4}>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Particulars</Text>
                        <Text style={styles.td}>Rent Paid</Text>
                        <Text style={styles.td}>1. Rent Paid - 10% of Salary</Text>
                        <Text style={styles.td}>2. (i) 50% of (BP+DA) for those living in metro cities</Text>
                        <Text style={styles.td}>(ii) 40% of (BP+DA) for those living in non-metro cities</Text>
                        <Text style={styles.td}>3. Actual HRA Received1.Rent Paid - 10% of Salary</Text>
                        <Text style={styles.td}>HRA Exempt u/s 10 (13A)</Text>
                        <Text style={styles.td}>Do you live in Delhi, Mumbai, Kolkata or channai?</Text>
                    
                    </View>
                    <View style={styles.tr}>
                        <Text style={styles.th}>Amount</Text>
                        <Text style={styles.td}><Price number={response.rent_n}/></Text>
                        <Text style={styles.td}><Price number={response.r_ten_n}/></Text>
                        <Text style={styles.td}><Price number={response.living_m_n}/></Text>
                        <Text style={styles.td}><Price number={response.non_living_m_n}/></Text>
                        <Text style={styles.td}><Price number={response.actual_hra_n}/></Text>
                        <Text style={styles.td}><Price number={response.hra_exempt_n}/></Text>
                        <Text style={styles.td}>{response.live_in_n}</Text>
                        
                    </View>
                </View>
            </View>


                <Text style={styles.exceed}>Whether aggregate rent payment exceeds rupees one lakh   {response.exceed_lakh}  </Text>
                {
                     (response.pan1!=='' && response.name1!=='') || (response.pan2!=='' && response.name2!=='' ) || (  response.pan3!=='' && response.name3=='') || (response.pan4!=='' && response.name4!=='') ? 
                <Text style={styles.details}>Please fill the landord(s) details :</Text> : ''
            }
            <View style={styles.table4}>
                <View style={styles.tr}>
                    {
                        response.pan1!=='' && response.name1!=='' ? 
                        <Text style={styles.tdd}>PAN of Landord </Text> : ''
                    }
                    {
                        response.pan2!=='' && response.name2!=='' ? 
                        <Text style={styles.tdd}>PAN of Landord 2</Text> : ''
                    }
                    {
                        response.pan3!=='' && response.name3=='' ? 
                        <Text style={styles.tdd}>PAN of Landord 3</Text> : ''
                    }
                    {
                        response.pan4!=='' && response.name4!=='' ? 
                        <Text style={styles.tdd}>PAN of Landord 4</Text> : ''
                    }
                    
                </View>
                <View style={styles.tr}>
                {
                        response.pan1!=='' && response.name1!=='' ? 
                        <Text style={styles.tdd}>{response.pan1}</Text> : ''
                    }
                    {
                        response.pan2!=='' && response.name2!=='' ? 
                        <Text style={styles.tdd}>{response.pan2}</Text> : ''
                    }
                    {
                        response.pan3!=='' && response.name3=='' ? 
                        <Text style={styles.tdd}>{response.pan3}</Text>: ''
                    }
                    {
                        response.pan4!=='' && response.name4!=='' ? 
                        <Text style={styles.tdd}>{response.pan4}</Text> : ''
                    }
                </View>
                <View style={styles.tr}>
                    {
                        response.pan1!=='' && response.name1!=='' ? 
                        <Text style={styles.tdd}>Name of Landord 1</Text> : ''
                    }
                    {
                        response.pan2!=='' && response.name2!=='' ? 
                        <Text style={styles.tdd}>Name of Landord 2</Text>: ''
                    }
                    {
                        response.pan3!=='' && response.name3=='' ? 
                        <Text style={styles.tdd}>Name of Landord 3</Text>: ''
                    }
                    {
                        response.pan4!=='' && response.name4!=='' ? 
                        <Text style={styles.tdd}>Name of Landord 4</Text> : ''
                    }
                    
                </View>
                <View style={styles.tr}>
                    {
                        response.pan1!=='' && response.name1!=='' ? 
                        <Text style={styles.tdd}>{response.name1}</Text> : ''
                    }
                    {
                        response.pan2!=='' && response.name2!=='' ? 
                        <Text style={styles.tdd}>{response.name2}</Text>: ''
                    }
                    {
                        response.pan3!=='' && response.name3=='' ? 
                        <Text style={styles.tdd}>{response.name3}</Text>: ''
                    }
                    {
                        response.pan4!=='' && response.name4!=='' ? 
                        <Text style={styles.tdd}>{response.name4}</Text> : ''
                    }
                </View>
            </View>

        </View>
        </Page>
        <Page style={styles.body} size={'A4'}>
            <Image style={styles.Image} src={'https://res.cloudinary.com/dhtlzxed4/image/upload/v1694056698/aliah_logo_inobvl.png'} />
            <View style={styles.Letter_input}>
            <View style={{marginTop:20}}>
            <Text style={styles.form_heading}>Feedback Form</Text>
            <Text style={{fontSize:11, textAlign:'center', marginTop:3}}>We would love to know your experience with the form so we can improve even better</Text>
            
            
            <View style={styles.section}>
                <Text style={{textAlign:"center", textDecoration:"underline", fontWeight:"bold", fontSize:12}}>Grade</Text>
                <View style={styles.table_feedback}>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>1</Text>
                        <Text style={styles.td_f}>Quality</Text>
                        <Text style={styles.td_f2
                        }>{response.quality}</Text>
                    </View>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>2</Text>
                        <Text style={styles.td_f}>Design</Text>
                        <Text style={styles.td_f2}>{response.design}</Text>
                    </View>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>3</Text>
                        <Text style={styles.td_f}>Tax Computation</Text>
                        <Text style={styles.td_f2}>{response.tax_computation}</Text>
                    </View>
                </View>

            </View>

            <View style={styles.section}>
                <Text style={{textAlign:"center", textDecoration:"underline", fontWeight:"bold", fontSize:12}}>Questions</Text>
                <View style={styles.table_feedback}>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>1</Text>
                        <Text style={styles.td_f}>Time Consuming</Text>
                        <Text style={styles.td_f2}>{response.time_consuming}</Text>
                    </View>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>2</Text>
                        <Text style={styles.td_f}>Better than previous portal </Text>
                        <Text style={styles.td_f2}>{response.better_previous}</Text>
                    </View>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>3</Text>
                        <Text style={styles.td_f}>User Friendly</Text>
                        <Text style={styles.td_f2}>{response.user_friendly}</Text>
                    </View>
                    <View style={styles.tr2}>
                        <Text style={styles.td}>4</Text>
                        <Text style={styles.td_f}>Need Improvement  </Text>
                        <Text style={styles.td_f2}>{response.need_improvement}</Text>
                    </View>
                </View>

            </View>
            {
                response.feedback!=='' && 
                  <View style={styles.section}>
                <Text style={{textAlign:"center", textDecoration:"underline", fontWeight:"bold", fontSize:11}}>Suggestions</Text>
                <View style={styles.table_feedback}>

                <Text style={{border:'1px solid rgb(191, 188, 188)', padding:5, width:275}}>{response.feedback} </Text>
                </View>

            </View>
         }
          



            </View>
            </View>
        </Page>

    </Document>
    
    </>
  )
}

export default PdfFile