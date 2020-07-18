import React from "react";
import { question } from "./QuestionsTable"
import DetailsPopup from "./DetailsPopup";
import MyModal from './MyModal';

interface Props {
  count: number;
  question: question;
}

class TableRow extends React.Component<Props> {
  openModal = (ev: React.MouseEvent) => {
    this.setState({show: true});
    ev.stopPropagation();
  }

  closeModal = (ev: React.MouseEvent) => {
    this.setState({show: false});
    ev.stopPropagation();
  }

  handleClickOutside = (ev: MouseEvent) => { 
      if(ev.target && (ev.target as HTMLDivElement).classList[0] === "overlay") {
        this.setState({show: false});
      }
      ev.stopPropagation();
  };

  closeModalOnEsc = (ev: KeyboardEvent) => {
    if(ev.target && ev.keyCode === 27) {
      this.setState({show: false});
    }
    ev.stopPropagation();
  };

  state = {
    show: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.closeModalOnEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.closeModalOnEsc);
  }

  render() {
    const formattedDate = new Date(this.props.question['creation_date'] * 1000).toLocaleDateString(
      "en-US",
      { month: 'long', day: 'numeric', year: 'numeric' });
    return (
      <tr onClick={this.openModal} className="questiontablerow"
        data-link={this.props.question.link}>
        <th scope="row" className="text-left">{this.props.count + 1}</th>
        <td className="text-left">{this.props.question.owner['display_name']}</td>
        <td className="text-left">{this.props.question.title}</td>
        <td className="text-left">{formattedDate}</td>
        <MyModal
          open={this.state.show}    
          closecallback={this.closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DetailsPopup data-questiontitle={this.props.question.title}
            data-link={this.props.question.link} data-count={this.props.count}
            data-body={this.props.question.body} onClick={this.closeModal}>
          </DetailsPopup>
        </MyModal>
      </tr>
    );
  }
}

export default TableRow;
