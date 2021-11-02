import TopNavigation from "../components/TopNavigation";
import SideBar from "../components/SideBar";

import { useRef } from "react";

const NewMeetup = () => {
  return (
    <>
      <TopNavigation title="Create new Meetup" searchable={false} />
      <SideBar />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

const addMeetupHandler = (meetup) => {
  console.log("meetup added : " + JSON.stringify(meetup, null, 4));
};

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const meetupDateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); // Preventing the browser to submit the form to the server

    // For reading values, using Ref works OK. If we want to change the value, we probably want to use state
    const title = titleInputRef.current.value;
    const meetupDate = meetupDateInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetup = {
      title: title,
      meetupDate: meetupDate,
      description: description,
    };

    props.onAddMeetup(meetup);

    document.getElementById("new-meetup-form").reset();
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="space-y-3" onSubmit={submitHandler} id="new-meetup-form">
        <div className="meetup-form-item">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="meetup-form-item-text"
            placeholder="Enter your title here..."
          />
        </div>

        <div className="meetup-form-item">
          <label htmlFor="date"> Date </label>
          <input
            type="text"
            required
            id="date"
            ref={meetupDateInputRef}
            className="meetup-form-item-text"
            placeholder="2021/12/12"
          />
        </div>

        <div className="grid font-sans font-semibold bg-gray-400 rounded text-gray-500 shadow-md h-64">
          <label htmlFor="description"> Description </label>
          <textarea
            required
            id="description"
            rows="10"
            ref={descriptionInputRef}
            className="meetup-form-item-text h-64 resize-none"
          />
        </div>

        <div className="flex items-center justify-end">
          <button className="hover:bg-green-600 bg-green-400 p-2 rounded-xl">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetup;
