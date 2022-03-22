// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form } from 'react-bootstrap';

const EventForm = () => {
  const [state, handleSubmit] = useForm("mqknlgze");
  if (state.succeeded) {
      return <p>Thanks for providing your event! Your announcement will be visible after the moderation has approved your request.</p>;
  }
  return (
      <Form onSubmit={handleSubmit} className="w-50 border p-4">

        <Form.Group className="mb-3">
            <Form.Label htmlFor='title'>Name of event</Form.Label>
            <Form.Control id='title' type="text" name='title' placeholder="Enter event name" />
            <ValidationError 
              prefix="Title" 
              field="title"
            errors={state.errors}
            />
            <Form.Text className="text-muted">
              Event title to be displayed
            </Form.Text>
          </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor='host'>Host instution</Form.Label>
          <Form.Control id='host' type="text" name='host' placeholder="Enter host name" />
          <ValidationError 
            prefix="Host" 
            field="host"
            errors={state.errors}
          />
          <Form.Text className="text-muted">
            Host name to be displayed
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='message'>Description</Form.Label>
          <Form.Control id='message' name='message' type="text" placeholder="message" />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <Form.Text className="text-muted">
            Basic description of the event
          </Form.Text>
        </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor='title'>Location of the event</Form.Label>
            <Form.Control id='location' type="location" name='location' placeholder="Enter event location" />
            <ValidationError 
              prefix="Location" 
              field="location"
            errors={state.errors}
            />
            <Form.Text className="text-muted">
              Event location to be displayed
            </Form.Text>
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='date'>Start of the event</Form.Label>
          <Form.Control id='date' name='date' type="datetime-local" placeholder="date" />
          <ValidationError 
            prefix="Start date" 
            field="date"
            errors={state.errors}
          />
          <Form.Text className="text-muted">
            Start of the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='enddate'>End of the event</Form.Label>
          <Form.Control id='enddate' name='enddate' type="datetime-local" placeholder="date" />
          <ValidationError 
            prefix="End date" 
            field="enddate"
            errors={state.errors}
          />
          <Form.Text className="text-muted">
            End of the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor='email'>Email address</Form.Label>
          <Form.Control id='email' type="email" name='email' placeholder="Enter email" />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <Form.Text className="text-muted">
            Contact information for the event
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={state.submitting}>
          Submit
        </Button>
    </Form>
  );
}

export default EventForm;