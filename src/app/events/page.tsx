"use client";
import React, { useState } from "react";
import "../../styles/globals.css";

const questions = [
  {
    type: "radio",
    question: "Please select your role on campus.",
    options: ["students", "faculty", "visitors", "others"],
  },
  {
    type: "radio",
    question:
      "Are you requesting a room due to a class you are teaching or for a student organization?",
    options: ["teaching", "student organization"],
  },
  {
    type: "radio",
    question: "Is this a new request or an update to a previous request?",
    options: ["New Request", "previous request"],
  },
  { type: "text", question: "What is the name of your event?" },
  {
    type: "text",
    question: "Please provide a brief description of the event.",
  },
  { type: "date", question: "When will the event be held?" },
  {
    type: "date",
    question:
      "If this is a recurring event, what is the last day the event will be held? (leave blank if not a recurring event)",
    optional: true,
  },
  { type: "time", question: "What time will the event be held?" },
  { type: "number", question: "What is the estimated attendance?" },
  {
    type: "dropdown",
    question: "What is your preferred room?",
    options: ["Room 101", "Room 201", "Room 301", "Room 401"],
  },
  {
    type: "radio",
    question: "Is there an admission price?",
    options: ["Yes", "No"],
  },
  {
    type: "dropdown",
    question:
      "Please select from the options below to define the audience for the event.",
    options: [
      "Open to Rice Community",
      "Open to Public",
      "By Invitation",
      "Students Only",
    ],
  },
  {
    type: "radio",
    question:
      "Does your event/activity involve a non-Rice speaker, business, or entertainer?",
    options: ["Yes", "No"],
  },
  {
    type: "text",
    question:
      "Please list the names of any non-Rice speaker, business, or entertainer that will be present at your event and a short description of the services they will be providing.",
  },
  {
    type: "radio",
    question:
      "Is the off-campus speaker, business, or entertainer currently in office, politically affiliated, or running for office?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    question:
      "Do you believe there could be any controversy regarding the speaker, business, or entertainer you are bringing to campus?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    question:
      "Have you worked with an Academic or Dean of Undergraduates Department in the planning of this event to bring the off-campus speaker, business, or entertainer?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    question:
      "Do any of these entities (speaker, business, or entertainer) require your club to sign a contract?",
    options: ["Yes", "No"],
  },
  {
    type: "checkbox",
    question:
      "By checking the box below we state that our club has done research on the speaker and are considering the reputation of our organization and the university in inviting this speaker.",
    label:
      "I have read the above statement and acknowledge that we have done our research",
  },
  {
    type: "radio",
    question:
      "Does your event/activity involve minors (those under the age of 18)?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    question: "Does your event/activity involve alcohol?",
    options: ["Yes", "No"],
  },
  {
    type: "radio",
    question:
      "Will you be fundraising or selling goods or services at your event?",
    options: ["Yes", "No"],
  },
  {
    type: "text",
    question:
      "If you have any accessibility needs (e.g., wheel-chair accessible, hearing/audio aids) for this event, please describe them:",
  },
  {
    type: "text",
    question:
      "Use the space below to provide additional information regarding your event:",
  },
  {
    type: "checkbox",
    question:
      "Please note, meals are not to be served or consumed in Rice classrooms. Short of deliberate vandalism, nothing destroys classroom quality faster than the crumbs and stains left behind by people consuming food and beverages, even if they are careful and do not intend to leave messes. If food is an integral component of your event, then we suggest that you pursue the use of food-appropriate spaces, such as rooms at the RMC/Ley Student Center or private dining rooms in the residential colleges.",
    label:
      "I have read the above statement and agree not to serve or consume food and beverages in Rice classrooms. I understand that failure to comply with this rule may result in the loss of classroom use privileges.",
  },
];

const QuestionForm = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleInputChange = (event, index) => {
    const newAnswers = [...answers];
    if (questions[index].type === "checkbox") {
      newAnswers[index] = event.target.checked; // For checkboxes, store boolean value
    } else {
      newAnswers[index] = event.target.value; // For other inputs, store string value
    }
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Final Answers:", answers);
    // Submit logic or further processing
  };

  const onSubmit = (event) => {
    alert("Form submitted successfully! you will recieve confirmation email.");
  };

  const renderInputField = (question, index) => {
    return (
      <div className="form-container">
        <label className="label">{question.question}</label>
        <div className="input-options">{getInputField(question, index)}</div>
      </div>
    );
  };

  const getInputField = (question, index) => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            value={answers[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            className="border p-2 rounded w-full"
          />
        );
      case "number":
        return (
          <input
            type="number"
            value={answers[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            className="border p-2 rounded w-full"
          />
        );
      case "date":
        return (
          <input
            type="date"
            value={answers[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            className="border p-2 rounded w-full"
          />
        );
      case "time":
        return (
          <input
            type="time"
            value={answers[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            className="border p-2 rounded w-full"
          />
        );
      case "dropdown":
        return (
          <select
            value={answers[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            className="border p-2 rounded w-full"
          >
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="input-options">
            {question.options.map((option) => (
              <label key={option} className="radio-option">
                <input
                  type="radio"
                  name={`question_${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {option}
              </label>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <label className="checkbox-option">
            <input
              type="checkbox"
              checked={!!answers[index]}
              onChange={(e) => handleInputChange(e, index)}
            />
            {question.label}
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <div className="mb-4">
          {renderInputField(
            questions[currentQuestionIndex],
            currentQuestionIndex
          )}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
          >
            Previous
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={onSubmit}
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
