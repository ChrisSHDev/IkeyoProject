import React, { Component } from "react";
import axios from "axios";
import Story from "../components/Story";

const journalsUrl = `https://radiant-escarpment-93698.herokuapp.com/journals`;
export default class AllStory extends Component {
  state = {
    stories: []
  };
  componentDidMount() {
    axios.get(journalsUrl).then(journal => {
      const newJournal = journal.data.map(journalList => {
        console.log(journal.data);
        return {
          id: journalList.id,
          sub: journalList.subtitle,
          name: journalList.name,
          title: journalList.title,
          picture: journalList.picture,
          description: journalList.description
        };
      });
      this.setState({
        stories: newJournal
      });
    });
  }
  render() {
    return (
      <>
        <div className="AllStory">
          {this.state.stories.map(story => (
            <Story
              id={story.id}
              sub={story.sub}
              title={story.title}
              image={story.picture}
              description={story.description}
            />
          ))}
        </div>
      </>
    );
  }
}
