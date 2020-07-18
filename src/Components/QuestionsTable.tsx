import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableRow from "./TableRow";
import axios from "axios";

export interface question {
    owner: Owner;
    title: string;
    'creation_date': number;
    'accepted_answer_id': number;
    link: string;
    body: string;
}

interface Owner {
    'display_name': string;
}

let lastScroll = 300;
let fromdate = 1393977600;
let todate = 1396656000;
const increment = 5356800;

class QuestionsTable extends React.Component {
  state = {
    questions: []
  };

  /**
   * on load, calling the api to get 40 answered questions
   */
  componentDidMount() {
    lastScroll = document.querySelectorAll('body').length === 1
      ? 2026 - (document.querySelectorAll('body')[0].offsetHeight + 400)
      : 300;
    axios
      .get(
        "https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=firebase&accepted=true&page=1&pagesize=40&filter=!9_bDDxJY5&fromdate="+fromdate+"&todate="+todate
      )
      .then(res => {
        this.setState({ questions: res.data.items });
      });
  }

  /**
   * on scroll, calling the api to get 40 answered questionswhen scroll is about to reach bottom. 
   */
  scrollEvent = (ev: any) => {
    if(ev.target && (ev.target as HTMLDivElement).classList[0] === "questionstable" && ev.target.scrollTop > lastScroll) {
      let exisitingResults  = Object.assign({}, this.state);
      lastScroll = lastScroll + 2026;
      fromdate = todate;
      todate = fromdate + increment;
      axios
        .get(
          "https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=firebase&accepted=true&page=1&pagesize=40&filter=!9_bDDxJY5&fromdate="+fromdate+"&todate="+todate
        )
        .then(res => {
          this.setState( { "questions": [...exisitingResults.questions, ...res.data.items] } );
        });
    }
  }
  render() {
    return (
      <div onScroll={(ev)=>{this.scrollEvent(ev)}} className="questionstable">
        <table className="table table-hover">
          <thead className="thead-dark fixedtableheader container">
            <tr>
              <th className="text-left">#</th>
              <th className="text-left">Author</th>
              <th className="text-left">Title</th>
              <th className="text-left">Creation Date</th>
            </tr>
          </thead>
          <tbody className="container">
            {this.state.questions && this.state.questions.length > 0
              ? this.state.questions.map((question: question, count) => {
                  return (
                    <TableRow question={question} count={count}></TableRow>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionsTable;
