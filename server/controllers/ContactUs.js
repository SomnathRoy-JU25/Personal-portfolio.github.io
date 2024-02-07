const { contactUsEmail } = require("../mail/contactUsFormRes")
const mailSender = require("../utils/mailSender")
const ContactUs = require("../models/contactUs");

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body;
  // console.log(req.body)
  try {

    const contact = await ContactUs.create({
      firstname:firstname,
      lastname:lastname,
      email:email,
      message:message,
      phoneNo:phoneNo,
      countrycode:countrycode,
    });
    
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
