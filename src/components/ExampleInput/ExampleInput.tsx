import * as React from 'react';
import './style.css';

export interface IProps {
  val: string;
  onChange: (val: string) => void;
}

interface IState { 
  val: string;
}

export class ExampleInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { val: props.val }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value;
    this.setState({ val: newValue });
    this.props.onChange(newValue);
  }

  render(): JSX.Element {
    return <input className="textbox" value={this.state.val} onChange={this.handleChange} placeholder="---"/>;
  }
}