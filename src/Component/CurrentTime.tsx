import React from 'react';
type MyState = {
  date: Date;
};
class CurrentTime extends React.Component<MyState> {
  state: MyState = { date: new Date() };

  render() {

    return (
      <div>
        <h1>Timing in various languages</h1>
        <h2>Current Time : {this.state.date.toLocaleTimeString()}</h2>

      </div>
    );
  }
}
export default CurrentTime;