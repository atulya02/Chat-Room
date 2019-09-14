import {Component} from "react";
import React from "react";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
      var today = new Date();
    return (
      <li className={className}>
      
        <div className="Message-content">
          <div className="username">
            {"User"+" "+" "+" ("+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+")"}
          </div>
          <div className="text">{text}</div><span><i class="fa fa-check"></i></span>
        </div>
      </li>
    );
  }
}

export default Messages;
