"use client";
import { type Locale } from "@/i18n.config";
import { sendContactForm } from "@/lib/api";
import { type TourOrderItem } from "@/types/contentful";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, type ChangeEvent } from "react";

const dataEnglish = {
  title: "Contact Me",
  name: "Full Name",
  email: "Email",
  messageType: "Message Type",
  enquiry: "General Enquiry",
  bookTour: "Book a Tour",
  tour: "Tour",
  selectTour: "Select a Tour",
  custom: "Organise a Custom Tour",
  yourMessage: "Your Message",
  sendMessage: "Send Message",
  success: "Your message has been sent!",
  fail: "Something went wrong, please try again!",
};

const dataJapanese = {
  title: "お問い合わせ",
  name: "氏名",
  email: "メール",
  messageType: "メッセージの種類",
  enquiry: "一般的な問い合わせ",
  bookTour: "ツアーを予約する",
  tour: "ツアー",
  selectTour: "ツアーを選択",
  custom: "カスタムツアーを手配する",
  yourMessage: "メッセージ内容",
  sendMessage: "メッセージを送る",
  success: "メッセージが送信されました！",
  fail: "問題が発生しました。もう一度お試しください！",
};

export default function ContactForm({
  lang,
  tourOrdering,
}: {
  lang: Locale;
  tourOrdering: TourOrderItem[];
}) {
  const searchParams = useSearchParams();
  const enquiryType = searchParams.get("enquiryType");
  const tourName = searchParams.get("tour");

  const initValues = {
    name: "",
    email: "",
    messageType: enquiryType || "General Enquiry",
    tour: tourName || "",
    message: "",
  };
  const initState = { values: initValues };

  const [selectedOption, setSelectedOption] = useState(enquiryType);
  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const { values } = state;

  const pageData = lang === "en-US" ? dataEnglish : dataJapanese;

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
      <h2 className="pb-5 text-center text-4xl font-medium">
        {pageData.title}
      </h2>
      <div className="flex  justify-center">
        {showSuccess && (
          <div
            role="alert"
            className="alert alert-success max-w-3xl text-white"
          >
            <Image src="/icons/tick-white.svg" alt="" width="24" height="24" />
            <span>{pageData.success}</span>
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
            <span>{pageData.fail}</span>
          </div>
        )}
      </div>

      <form className="mx-auto w-full max-w-3xl" onSubmit={onSubmit}>
        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">{pageData.name}</span>
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
            <span className="label-text">{pageData.email}</span>
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
            <span className="label-text">{pageData.messageType}</span>
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
            <option value="General Enquiry">{pageData.enquiry}</option>
            <option value="Book a Tour">{pageData.bookTour}</option>
            <option value="Book a Custom Tour">{pageData.custom}</option>
          </select>
        </label>

        {selectedOption === "Book a Tour" && (
          <label className="form-control mb-4 w-full">
            <div className="label">
              <span className="label-text">{pageData.tour}</span>
            </div>
            <select
              className="select select-bordered select-lg w-full rounded-none"
              name="tour"
              value={values.tour}
              onChange={handleChange}
            >
              <option value="" disabled>
                {pageData.selectTour}
              </option>
              {tourOrdering.map((tour) => (
                <option key={tour.sys.id} value={tour.title}>
                  {tour.title}
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="form-control mb-4 w-full">
          <div className="label">
            <span className="label-text">{pageData.yourMessage}</span>
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
            {pageData.sendMessage}
            {loading && <span className="loading loading-spinner"></span>}
          </button>
        </div>
      </form>
    </div>
  );
}
