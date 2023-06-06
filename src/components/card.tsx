import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
  icon?: IconDefinition | React.ReactNode;
};
type CardState = {
};

export default class Card extends React.Component<CardProps, CardState> {
  state: CardState = {};
  render() {
    const isComponent = this.props.icon?.type === 'img' || this.props.icon?.type === 'div';
    return (
      <div className={`card ${isComponent ? 'custom-icon' : ''}${this.props.className ?? ''}`}>
        { this.props.icon && (
          <div className="card-icon">
            { isComponent ? this.props.icon : <FontAwesomeIcon icon={this.props.icon} /> }
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
