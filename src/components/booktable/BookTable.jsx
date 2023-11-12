import React, { useState } from 'react';
import { BookTableContainer, BookTableH1, FormContainer, FormGroup, FormImg, Input, Label, Select, SubmitButton, TextArea } from './BookTable.style';
import Footer from '../../common/Footer/Footer';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    time: '',
    specialRequests: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date, time } = formData;

    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^\d{10}$/;

    let errors = {};

    if (name === '') {
      errors.name = 'Please enter your name!';
    } else {
      errors.name = '';
    }

    if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address!';
    } else {
      errors.email = '';
    }

    if (!phonePattern.test(phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number!';
    } else {
      errors.phone = '';
    }

    if (date === '') {
      errors.date = 'Please select a date!';
    } else {
      errors.date = '';
    }

    if (time === '') {
      errors.time = 'Please select a time!';
    } else {
      errors.time = '';
    }

    if (Object.values(errors).every((val) => val === '')) {
      alert(
        `You have successfully booked a table for the date ${date}, at ${time}! We can't wait to have you!`
      );
      console.log(formData);
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <BookTableContainer>

        <BookTableH1>Complete the form below to Book a Table with Us!</BookTableH1>

        <FormContainer onSubmit={handleSubmit}>
            <FormImg src="https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg"/>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                placeholder="Your Name :)"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                {errorMessages.name && <p style={{ color: 'red' }}>{errorMessages.name}</p>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input
                placeholder="Your Email :)"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errorMessages.email && <p style={{ color: 'red' }}>{errorMessages.email}</p>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="phone">Phone Number:</Label>
                <Input
                placeholder="Your Phone Number :)"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
                {errorMessages.phone && <p style={{ color: 'red' }}>{errorMessages.phone}</p>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="guests">Number of Guests:</Label>
                <Select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                >
                {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                    {i + 1}
                    </option>
                ))}
                </Select>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="date">Preferred Date:</Label>
                <Input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                />
                {errorMessages.date && <p style={{ color: 'red' }}>{errorMessages.date}</p>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="time">Preferred Time:</Label>
                <Input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                />
                {errorMessages.time && <p style={{ color: 'red' }}>{errorMessages.time}</p>}
            </FormGroup>

            <FormGroup>
                <Label htmlFor="specialRequests">Special Requests / Additional Information:</Label>
                <TextArea
                placeholder="Please feel free to add absolutely any suggestion or question you might have! :)"
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                />
            </FormGroup>

            <SubmitButton type="submit">Book a Table!</SubmitButton>

        </FormContainer>

        <Footer />
        
    </BookTableContainer>
  );
};

export default BookTable;
