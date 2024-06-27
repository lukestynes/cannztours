"use client";
import { sendContactForm } from "@/lib/api";
import React, { useState, type ChangeEvent } from "react";

const initValues = {
  name: "",
  email: "",
  messageType: "General Enquiry",
  tour: "",
  message: "",
};

const initState = { values: initValues };

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { target } = event;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Data");
    console.log("Test: ", values);
    await sendContactForm(values);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);

    if (event.target.value !== "Book a Tour") {
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          tour: "",
        },
      }));
    }
  };

  return (
    <div>
      <h2 className="pb-5 text-center text-4xl font-medium">Contact Me</h2>
      <form className="mx-auto w-full max-w-lg" onSubmit={onSubmit}>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Full Name</span>
          </div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full rounded-none text-lg placeholder-black focus:outline-none"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full rounded-none text-lg placeholder-black focus:outline-none"
          />
        </label>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Message Type</span>
          </div>
          <select
            className="select select-bordered select-lg w-full rounded-none"
            name="messageType"
            value={values.messageType}
            onChange={(e) => {
              handleSelectChange(e);
              handleChange(e);
            }}
            required
          >
            <option>General Enquiry</option>
            <option>Book a Tour</option>
            <option>Organise a Custom Tour</option>
          </select>
        </label>

        {selectedOption === "Book a Tour" && (
          <label className="form-control mb-4 w-full">
            <div className="label">
              <span className="label-text">Tour</span>
            </div>
            <select
              className="select select-bordered select-lg w-full rounded-none"
              name="tour"
              value={values.tour}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Tour
              </option>
              <option>Aoraki Mt Cook Tour</option>
              <option>Akaroa Tour</option>
              <option>Christchurch City Tour</option>
              <option>Shore Excursion</option>
            </select>
          </label>
        )}

        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">Your Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered textarea-lg min-h-40 w-full rounded-none px-4 py-2 placeholder-black focus:outline-none"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <div className="flex justify-center">
          <button className="btn btn-primary mt-5 rounded-none font-normal text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
