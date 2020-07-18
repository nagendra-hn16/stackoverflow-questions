import React from "react";

interface Props {
  'data-questiontitle': string;
  'data-link': string;
  'data-count': number;
  'data-body': string;
  'onClick': Function;
}

class DetailsPopup extends React.Component<Props> {
  state = {
    answer: []
  };

  componentDidMount() {
    document.getElementById('text'+this.props['data-count'])!.innerHTML = this.props['data-body'];
  }
  
  render() {
    return (
      <div className="overlay">
        <div tabIndex={-1} className="questionsmodal">
          <h5 className="title">{this.props['data-questiontitle']}</h5>
          <div id={'text'+this.props['data-count']}></div>
          <a href={this.props['data-link']} target="_blank">
            Open this question in stackoverflow
          </a>
          <div>
            <button type="button" onClick={ev => this.props.onClick(ev)}
              className="btn btn-secondary my-md-3"> 
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsPopup;
