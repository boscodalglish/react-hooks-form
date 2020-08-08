import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm, ErrorMessage } from "react-hook-form";
import useScript from "react-script-hook";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { DevTool } from "react-hook-form-devtools";
import Postcoder from "react-address-lookup";
import { Multiselect } from "multiselect-react-dropdown";
import { options } from "./data";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import AddressForm from "./AddressForm";

import "./styles.scss";

export function Form() {
  const { register, errors, handleSubmit, control } = useForm({
    validateCriteriaMode: "all",
    mode: "onChange"
  });

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  let [data, setData] = useState("");
  let [addressline1, setAddressline1] = useState("");
  let [summaryline, setSummaryline] = useState("");
  let [number, setNumber] = useState("");
  let [street, setStreet] = useState("");
  let [posttown, setPosttown] = useState("");
  let [county, setCounty] = useState("");
  let [postcode, setPostcode] = useState("");
  let [names, setNames] = useState([]);
  let [addr, setAddr] = useState("");
  let [dropdowndata, setDropdowndata] = useState(options);
  // const [loading, error] = useScript(
  //   {
  //     src:
  //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjPdlp11tQrGCFxby1mciivYC9y13tbyM&libraries=places"
  //   },
  //   []
  // );

  // if (loading)
  //   return (
  //     <div className="loader">
  //       <div className="loader__bar" />
  //       <div className="loader__bar" />
  //       <div className="loader__bar" />
  //       <div className="loader__bar" />
  //       <div className="loader__bar" />
  //       <div className="loader__ball" />
  //     </div>
  //   );
  // if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;

  let handleOnChange = value => {
    setPhone(value);
  };

  let handleOnChangephone = e => {
    setPhone(e.target.value);
  };

  // Search for your postcode

  let logAddress = addr => {
    console.log(addr, "Address");
    setAddr(addr);
    setAddressline1(addr.addressline1);
    setSummaryline(addr.summaryline);
    setNumber(addr.number);
    setStreet(addr.street);
    setPosttown(addr.posttown);
    setCounty(addr.county);
    setPostcode(addr.postcode);
  };

  let handleChange = address => {
    setAddress(address);
  };

  let onSelectNames = name => {
    const propertyValues = Object.entries(name);
    setNames(propertyValues);
  };

  let onRemoveNames = name => {
    const propertyValues = Object.entries(name);
    setNames(propertyValues);
  };

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
    setPhone("");
  };

  const onReset = e => {
    setPhone("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Samsung Form Updated</h1>

      {/* ---------------------------------------------- */}
      {/* <Postcoder
        apiKey="PCWCQ-47LW3-DS24S-N2LCY"
        addressSelectedCallback={logAddress}
        autoCorrect="off"
      />

      <input
        style={{ display: "none" }}
        value={addr}
        name="multipleErrorInput9"
        ref={register({
          required: "Select your address."
        })}
      />

      <ErrorMessage errors={errors} name="multipleErrorInput9">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      <input
        style={{ display: "none" }}
        value={addressline1}
        name="multipleErrorInput10"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={summaryline}
        name="multipleErrorInput11"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={number}
        name="multipleErrorInput12"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={street}
        name="multipleErrorInput13"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={posttown}
        name="multipleErrorInput14"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={county}
        name="multipleErrorInput15"
        autoCorrect="off"
        ref={register()}
      />
      <input
        style={{ display: "none" }}
        value={postcode}
        name="multipleErrorInput16"
        autoCorrect="off"
        ref={register()}
      /> */}

      {/* ---------------------------------------------- */}
      <label> Location Address </label>
      {/* <PlacesAutocomplete value={address} onChange={handleChange}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              autoCorrect="off"
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <input
        style={{ display: "none" }}
        value={address}
        name="multipleErrorInput6"
        autoCorrect="off"
        ref={register({
          required: "Location."
        })}
      />

      <ErrorMessage errors={errors} name="multipleErrorInput6">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage> */}

      {/* ---------------------------------------------- */}
      <label> Phone Number </label>
      <PhoneInput
        name="multipleErrorInput4"
        autoCorrect="off"
        placeholder="Enter a Valid Phone Number"
        country={"gb"}
        value={phone}
        onChange={handleOnChange}
      />

      <input
        style={{ display: "none" }}
        placeholder="Enter a Valid Phone Number"
        autoCorrect="off"
        id="multipleErrorInput4"
        name="multipleErrorInput4"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /[0-9]+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "Please input proper number."
          }
        })}
        value={phone}
        onChange={handleOnChangephone}
      />

      <ErrorMessage errors={errors} name="multipleErrorInput4">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      {/* ---------------------------------------------- */}
      <label> Names</label>

      <Multiselect
        placeholder="Select Any"
        displayValue="key"
        options={options}
        // selectedValues={selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelectNames} // Function will trigger on select event
        onRemove={onRemoveNames} // Function will trigger on remove event
        // showCheckbox={true}
        displayValue="name" // Property name to display in the dropdown options
      />

      <input
        style={{ display: "none" }}
        autoCorrect="off"
        name="multipleErrorInput20"
        ref={register()}
        value={{ names }}
      />

      <ErrorMessage errors={errors} name="multipleErrorInput20">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      {/* ----------------------------------------------
      <label> Adress Line 1 </label>

      <input
        value={addressline1}
        name="multipleErrorInput4"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "Please input proper number."
          }
        })}
      />

      <ErrorMessage errors={errors} name="multipleErrorInput4">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage> */}

      {/* ---------------------------------------------- */}
      {/* <label> Alternate Phone Number </label>
      <input
        name="multipleErrorInput"
        placeholder="Enter a Valid Phone Number"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          maxLength: {
            value: 11,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage> */}

      {/* ---------------------------------------------- */}
      <label> First Name </label>
      <input
        label="First Name"
        placeholder="Enter First Name"
        name="multipleErrorInput2"
        autoCorrect="off"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /^[A-Z]+$/i,
            message: "This input is Alphabets only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput2">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      {/* ---------------------------------------------- */}
      <label> Last Name </label>
      <input
        label="Last Name"
        placeholder="Enter Last Name"
        name="multipleErrorInput3"
        autoCorrect="off"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /^[A-Z]+$/i,
            message: "This input is text only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput3">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      {/* ---------------------------------------------- */}
      <label> Email </label>
      <input
        label="Email"
        placeholder="Enter Email"
        name="multipleErrorInput5"
        type="email"
        autoCorrect="off"
        autoCapitalize="off"
        // value="dalglish@gmailc.om"
        ref={register({
          required: "This Email is required.",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Enter Valid EMail"
          }
        })}
      />
      <ErrorMessage errors={errors} name="multipleErrorInput5">
        {({ messages }) => {
          console.log(messages);
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>

      <input type="submit" />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value="Reset"
        onClick={onReset}
      />
      <DevTool control={control} />
    </form>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
