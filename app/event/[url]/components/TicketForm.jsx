'use client';

import { useState, useEffect } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

const TicketForm = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  /**
   * Orders the tickets in the array based on their ordering.
   *
   * @param array - The array of tickets to be ordered.
   * @return - The ordered array of tickets.
   */
  const orderTickets = (array) => {
    return array.sort((a, b) => {
      return a.ordering - b.ordering;
    });
  };

  /**
   * Counts the total quantity of tickets in an array.
   *
   * @param array - The array of tickets to count.
   * @return - The total quantity of tickets.
   */
  const countTickets = (array) => {
    return array.reduce((sum, curr) => {
      let q = 0;

      if (curr.quantity != null && !isNaN(curr.quantity)) {
        q = sum + curr.quantity;
      } else {
        q = sum;
      }

      return q;
    }, 0);
  };

  /**
   * Decreases the quantity of a specific ticket by one, or sets it to 0 if it's not a number or is already 0.
   *
   * @param ticket - The ticket to decrease the quantity of.
   */
  const handleDecrease = (ticket) => {
    const tickets = formValues.filter((e) => e.id !== ticket.id);

    let newTicket;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 0 };
    } else {
      if (ticket.quantity > 0) {
        const newQuantity = (ticket.quantity -= 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 0 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderTickets(tickets));
  };

  /**
   * Increases the quantity of a specific ticket by one, or sets it to 1 if it's not a number or is already 9.
   *
   * @param ticket - The ticket to increase the quantity of.
   */
  const handleIncrease = (ticket) => {
    const tickets = formValues.filter((e) => e.id !== ticket.id);

    let newTicket;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 1 };
    } else {
      if (ticket.quantity < 9) {
        const newQuantity = (ticket.quantity += 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 9 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderTickets(tickets));
  };

  /**
   * Handles the form submission event.
   *
   * Prevents the default form submission behavior, hides any existing alert, counts the total quantity of tickets selected,
   * and redirects to the '/buy' page if there are tickets selected. If no tickets are selected, it displays an error alert.
   *
   * @param e - The event object from the form submission.
   * @return - A promise that resolves to any value.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    hideAlert();

    const quantity = countTickets(formValues);

    if (quantity > 0) {
      setLoading(true);

      window.location.href = '/buy';
    } else {
      showAlert({ type: 'error', text: 'You must select at least one ticket for this event.' });
    }
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Hang on a second' />;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='ticket-box-content'>
        {formValues?.map((ticket) => (
          <div key={ticket.id} className='ticket-box-line'>
            {ticket.soldout === true ? (
              <>
                <span className='material-symbols-outlined'>lock</span>
                <span>{ticket.name}</span>
                <strong>Sold out</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            ) : (
              <>
                <div className='quantity'>
                  <button
                    type='button'
                    onClick={() => {
                      handleDecrease(ticket);
                    }}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    type='text'
                    name={`t-${ticket.id}`}
                    value={ticket.quantity ?? 0}
                    onChange={() => {}}
                  />
                  <button
                    type='button'
                    onClick={() => {
                      handleIncrease(ticket);
                    }}
                  >
                    +
                  </button>
                </div>
                <span>{ticket.name}</span>
                <strong>{ticket.price}</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className='ticket-box-buttons'>
        {formValues.length > 0 ? (
          <Button type='submit' color='blue-filled' text='Buy tickets' rightIcon='arrow_forward' />
        ) : (
          <Button type='submit' color='disabled' text='Tickets not found' />
        )}
      </div>
    </form>
  );
};

export default TicketForm;
