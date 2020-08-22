
import React from 'react'
import { SketchPicker } from 'react-color'
import { rgba2Obj } from '@/utils/tool'
// import styles from './index.less'

class colorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: rgba2Obj(this.props.value),
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    this.props.onChange && this.props.onChange(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`)
  };

  render() {
    return (
      <div>
        <div 
          style={{
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer'
          }} 
          onClick={ this.handleClick }
        >
          <div 
            style={{
              width: '36px',
              height: '14px',
              borderRadius: '2px',
              background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
            }} />
        </div>
        { this.state.displayColorPicker ? 
        <div 
          style={{
            position: 'absolute',
            zIndex: '2'
          }}
        >
          <div 
            style={{
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px'
            }} 
            onClick={ this.handleClose }
            />
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default colorPicker