import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import LoseSS from "./projectImages/LoseSS.png";
import WinSS from "./projectImages/WinSS.png";
import BustedSS from "./projectImages/BustedSS.png";
import WholeBlackjackSS from "./projectImages/WholeBlackjackSS.png";



class ProjectTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {

    const headerTextStyle = {
      fontSize: "30px"
    }
    const pictureTextStyle = {
      fontSize: "25px",
      textAlign: "center"
    }
    const Color = { backgroundColor: "whitesmoke"}
    const titleText = "This full stack project used the card API to make a rudimentary blackjack simulator that compares your cards to a computer's random result."

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Blackjack"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Project w/ API use"
          avatar={WholeBlackjackSS}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Toggle to see Project"
          />
        </CardText>

        <CardTitle title={titleText}  titleStyle={pictureTextStyle} expandable={true} />
        <CardText expandable={true} style={Color}>
          <div className = "appLinkDiv">
            <a className="appLink" href="https://make-your-day.herokuapp.com/"> View Website</a>
          </div>
          <div className = "projectScreenshots">
            <img className="projectImages" alt = "blackjackpicture" src={WholeBlackjackSS} / >
            <img className="projectImages" alt = "blackjackwin" src={WinSS} / >
            <img className="projectImages" alt = "blackjacklose" src={LoseSS} / >
            <img className="projectImages" alt = "blackjackbusted" src={BustedSS} / >

          </div>
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

export default ProjectTwo
