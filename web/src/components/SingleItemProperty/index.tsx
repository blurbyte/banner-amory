// item propert with a label
// for example: name - alette's bracelet
// with a bit different layout for stats

import * as React from 'react';

import Row from './Row';
import Label from './Label';
import Detail from './Detail';

type PropertyProps = {
  children: React.ReactNode;
  statLine?: boolean;
};

class Property extends React.Component<PropertyProps> {
  static Label = Label;

  static Detail = Detail;

  renderChildren = () => {
    // passing statLine prop to all children
    const { children, statLine } = this.props;
    return React.Children.map(children, child => {
      // guard against undefined children
      // cast to allow it work with styled-components
      return child ? React.cloneElement(child as React.ReactElement<any>, { statLine }) : null;
    });
  };

  render() {
    return <Row statLine={this.props.statLine}>{this.renderChildren()}</Row>;
  }
}

export default Property;
