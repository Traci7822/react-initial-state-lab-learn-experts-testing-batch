const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    return (
      const notification = this.state.secondsLeft === 0 ? 'Boom!' : `{this.state.secondsLeft} seconds left before I go boom!`;
      <div>
        {notification}
      </div>
    );
  }
}

module.exports = Bomb;
