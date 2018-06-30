var contacts = [
  {
    id: 1,
    firstName: 'Bartek',
    lastName: 'Janicki',
    email: 'bart.janicki@example.com',
  },
  {
    id: 2,
    firstName: 'Magda',
    lastName: 'Janicka',
    email: 'm.janicka@example.com',
  },
  {
    id: 3,
    firstName: 'Karol',
    lastName: 'Janicki',
    email: 'k.janicki@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    );
  },
});