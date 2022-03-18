import React from "react";
import BaseLayout from "../../../components/static/BaseLayout";
import EventForm from "../../../components/static/EventForm";

const AddEventsPage = () => {

  return <BaseLayout>
    <h2>Add your events</h2>
    <br />
    <EventForm></EventForm>
  </BaseLayout>

}

export default AddEventsPage;