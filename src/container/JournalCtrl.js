import React, { Component } from "react";
import axios from "axios";
import Journals from "../components/Journals";

const journalsUrl = `https://radiant-escarpment-93698.herokuapp.com/journals`;

export default class JournalCtrl extends Component {
  state = {
    journals: [],
    story: []
  };
  componentDidMount() {
    axios.get(journalsUrl).then(journal => {
      const newJournal = journal.data.map(journalList => {
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
        journals: newJournal
      });
    });
  }
  render() {
    return (
      <div className="journals">
        {this.state.journals.map(journal => (
          <Journals
            id={journal.id}
            sub={journal.sub}
            title={journal.title}
            image={journal.picture}
            description={journal.description}
          />
        ))}
      </div>
    );
  }
}
