import React from 'react'
import * as Yup from "yup";

export const schema = Yup.object({
 name: Yup.string().min(2).max(25).required("Please enter your name"),
 mobile: Yup.number().min(10).max(10).required("Please enter your phone no."),
 location: Yup.string().required("Please enter your location"),
 farmSize: Yup.number().integer("Farm Size can't include a decimal point"),
 farmName: Yup.string().required("Farm name is required"),
 previousCrop: Yup.string().required("Previous Crop is required"),
 date: Yup.date().required("Date is required"),
 nitrogen: Yup.number().required("nitrogen is required"),
 phosphorus: Yup.number().required("phosphorus is required"),
 potassium: Yup.number().required("K is required"),


});
