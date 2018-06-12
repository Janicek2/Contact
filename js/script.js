var Counter = React.createClass({
    getInitialState: function () {
      return {
        counter: 0
      };
    },
  
    increment: function () {
      this.setState({
        counter: this.state.counter + 1
      });
    },
  
    decrement: function () {
      this.setState({
        counter: this.state.counter - 1
      });
    },
  
    render: function () {
      return (React.createElement('div', {},
        React.createElement('button', {onClick: this.increment}, 'Dodaj'),
        React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
        React.createElement('span', {}, 'Licznik ' + this.state.counter)
      ));
    },
  
    componentWillMount: function () {
      console.log('Kiedy ma być utowrozny komponenet zostanie utworzony');
    },
  
    componentDidMount: function () {
      console.log('Komponent zostal utworzony');
    },
  
    componentWillReceiveProps: function () {
      console.log('Gdy komponent otrzyma nowe właściwości');
    },
  
    shouldComponentUpdate: function () {
      console.log('Sprawdza czy komponent trzeba przerysować');
      return true;
    },
  
    componentWillUpdate: function () {
      console.log('Przygotowanie na zmiany jeżeli shouldComponentUpdate zwroci true');
    },
  
    componentDidUpdate: function () {
      console.log('Możemy wykonać np. jakieś manipulacje DOM');
    },
  
    componentWillUnmount: function () {
      console.log('Kasowanie funkcji');
    }
  });
  
  var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter)
  );
  
  ReactDOM.render(element, document.getElementById('app'));