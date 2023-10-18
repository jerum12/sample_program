import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    address: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInput()) {
      //call api to save the form in the database
    }

    //console.log('formData', formData);
  };

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    //set the valud of FORMData sa state
    setFormData({
      ...formData,
      [name]: value,
    });
    //console.log(name, value);
  };

  const validateInput = () => {
    let objError = {};

    if (formData.name === '') {
      objError.name = 'Name is required!';
    }
    if (formData.email === '') {
      objError.email = 'Email is required!';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      objError.email = 'Email is invalid format!';
    }
    if (formData.message === '') {
      objError.message = 'Message is required!';
    }

    if (formData.address === '') {
      objError.address = 'Address is required!';
    }

    setErrors(objError);

    return Object.keys(objError).length === 0;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Input Name"
            value={formData.name}
            onChange={handleInput}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            placeholder="Input Email"
            value={formData.email}
            onChange={handleInput}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message : </label>
          <input
            type="text"
            name="message"
            placeholder="Input Message"
            value={formData.message}
            onChange={handleInput}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <div>
          <label>Address : </label>
          <input
            type="text"
            name="address"
            placeholder="Input Address"
            value={formData.address}
            onChange={handleInput}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
