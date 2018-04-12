import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MakeYourDay from "./projectImages/MakeYourDay.png";
import DadJokePage from "./projectImages/DadJokePage.png";
import DogPage from "./projectImages/DogPage.png";
import VideoPage from "./projectImages/VideoPage.png";
import FavoriteJokes from "./projectImages/FavoriteJokes.png";
import FavoriteDogs from "./projectImages/FavoriteDogs.png";


class ProjectOne extends Component {

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
    const titleText = "This full stack project used the Dog and Dad Joke APIs to make a website that would (hopefully!) cheer anyone up on a bad day."

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Make Your Day"
          titleStyle= {headerTextStyle}
          subtitle="React Full Stack Project w/ API use"
          avatar={MakeYourDay}
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
          <div className="appLinkDiv">
            <a className="appLink" href="https://make-your-day.herokuapp.com/"> View Website</a>
          </div>
          <div className = "projectScreenshots">
            <img className="projectImages" alt = "makeyourday" src={MakeYourDay} / >
            <img className="projectImages" alt = "dadjokepage" src={DadJokePage} / >
            <img className="projectImages" alt = "favoritejokes" src={FavoriteJokes} / >
            <img className="projectImages" alt = "dogpage" src={DogPage} / >
            <img className="projectImages" alt = "favoritedogs" src={FavoriteDogs} / >
            <img className="projectImages" alt = "videopage" src={VideoPage} / >
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

export default ProjectOne
