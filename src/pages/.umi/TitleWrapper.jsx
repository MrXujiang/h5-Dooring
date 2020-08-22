import React from 'react';

export default class UmiReactTitle extends React.Component {
  componentDidMount() {
    document.title = this.props.route._title;
  }
  getTitle() {
    const separator = '' || ' - ';
    const title = this.props.route._title.split(separator).map(item => {
      return formatMessage({
        id: item.trim(),
        defaultMessage: item.trim(),
      });
    })
    return title.join(separator);
  }
  componentWillUnmount() {
    if (document.title === this.props.route._title) {
      document.title = this.props.route._title;
    }
  }
  render() {
    return this.props.children;
  }
}
