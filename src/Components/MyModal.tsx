import React from 'react';
import ReactDom from 'react-dom';

interface Props {
    open: boolean;
    closecallback: Function;
}

class MyModal extends React.Component<Props> {
    el: HTMLDivElement;
    constructor(props: Props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return this.props.open
            ? ReactDom.createPortal(
                this.props.children,
                this.el,
            ) : '';
    }
}

export default MyModal;