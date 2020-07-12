import React from "react";
import { question } from "./QuestionsTable"
import DetailsPopup from "./DetailsPopup";
import Modal from '@material-ui/core/Modal';

interface Props {
  count: number;
  question: question;
}

class TableRow extends React.Component<Props> {
  
  openModal = () => {
    this.setState({show: true})
  }

  closeModal = () => {
    this.setState({show: false})
  }

  state = {
    show: false
  }
  
  render() {
    const formattedDate = new Date(this.props.question['creation_date'] * 1000).toLocaleDateString(
      "en-US",
      { month: 'long', day: 'numeric', year: 'numeric' });
    return (
      <tr onClick={this.openModal} className="row"
        data-link={this.props.question.link}>
        <th scope="row" className="text-left col-1">{this.props.count + 1}</th>
        <td className="text-left col-3">{this.props.question.owner['display_name']}</td>
        <td className="text-left col-6">{this.props.question.title}</td>
        <td className="text-left col-2">{formattedDate}</td>
        <Modal
          closeAfterTransition
          open={this.state.show}
          onClose={this.closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <DetailsPopup data-questiontitle={this.props.question.title}  
            data-link={this.props.question.link} data-count={this.props.count}
            data-body={this.props.question.body}>
          </DetailsPopup>
        </Modal>
      </tr>
    );
  }
}

export default TableRow;
