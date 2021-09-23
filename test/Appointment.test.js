import React from 'react';
import ReactDOM from 'react-dom';
import Appointment, { AppointmentDayView } from '../src/Appointment'

describe('Appointment', () => {
    let container;
    beforeEach(() => {
        container = document.createElement('div')
    })
    const render = component => {
        document.body.appendChild(container);
        ReactDOM.render(component, container);
    }
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' }
        render(<Appointment customer={customer} />)
        expect(document.body.textContent).toMatch('Ashley')
    })

    it('renders another customer first name', () => {
        const customer = { firstName: 'Jordan' }
        render(<Appointment customer={customer} />)
        expect(document.body.textContent).toMatch('Jordan')
    })
})

describe('AppointmentDayView', () => {
    const today = new Date(); 
    const appointments = [
        { startsAt: today.setHours(12, 0) },
        { startsAt: today.setHours(13, 0) }
    ];
    
    let container;
    beforeEach(() => {
        container = document.createElement('div');
    })

    const render = component => {
        ReactDOM.render(component, container);
    }
    it('renders a div with the right id', () => {
        render(<AppointmentDayView appointments={appointments} />)
        expect(container.querySelector('div#appointmentDayView')).not.toBeNull();
    })

    it('renders multiple appointments in an ol element', () => {
        render(<AppointmentDayView appointments={appointments} />)
        expect(container.querySelector('ol').children).toHaveLength(2);
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
        
    })
});
