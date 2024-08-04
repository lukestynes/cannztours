"use client";
import { sendContactForm } from "@/lib/api";
import Image from "next/image";
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
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

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
    setLoading(true);
    setShowSuccess(false);
    setShowFailure(false);

    event.preventDefault();
    const res = await sendContactForm(values);

    if (res.ok) {
      setLoading(false);
      setShowSuccess(true);
      setShowFailure(false);
      setState(initState);
    } else {
      setLoading(false);
      setShowSuccess(false);
      setShowFailure(true);
    }
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
      <div className="flex  justify-center">
        {showSuccess && (
          <div
            role="alert"
            className="alert alert-success max-w-3xl text-white"
          >
            <Image src="/icons/tick-white.svg" alt="" width="24" height="24" />
            <span>Your message has been sent!</span>
          </div>
        )}
        {showFailure && (
          <div role="alert" className="alert alert-error max-w-3xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Something went wrong, please try again!</span>
          </div>
        )}
      </div>

      <form className="mx-auto w-full max-w-3xl" onSubmit={onSubmit}>
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
          <button
            className="btn btn-primary mt-5 rounded-none font-normal text-white"
            disabled={loading}
          >
            Send Message
            {loading && (
              <span className="loading loading loading-spinner"></span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
