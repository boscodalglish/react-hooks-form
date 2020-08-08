import React, { useState } from "react";
import Postcoder from "react-address-lookup";

function AddressForm(props) {
  let logAddress = addr => {
    console.log(addr);
    setData(props);
    setAddressline1(addr.addressline1);
    setSummaryline(addr.summaryline);
    setNumber(addr.number);
    setStreet(addr.street);
    setPosttown(addr.posttown);
    setCounty(addr.county);
    setPostcode(addr.postcode);
  };
  console.log("Data", data);
  console.log("Street", street);

  return (
    <Postcoder
      apiKey="PCWQC-4Y4MD-PRZ43-G5YPS"
      addressSelectedCallback={logAddress}
      data={data}
    />
  );
}
export default AddressForm;
