import React, { FC, useEffect, useState, useRef } from 'react';
import './FloatingWindow.css'

interface Props {
  // initial position
  x: number;
  y: number;
}

const FloatingWindow: FC<Props> = ({ x, y }) => {
  const [state, setState] = useState({
    pos: {x, y},
    dragging: false,
    rel: null // position relative to the cursor
  })

  // const ref: any = useRef(state);
  // useEffect(() => {
  //   console.log(state.dragging, ref.current.dragging);
  //   if (state.dragging && !ref.current.dragging) {
  //     console.log("Hello");
  //     document.addEventListener('mousemove', onMouseMove)
  //     document.addEventListener('mouseup', onMouseUp)
  //     ref.current = state;
  //   } else if (!state.dragging && ref.current.dragging) {
  //     console.log("Bye");
  //     document.removeEventListener('mousemove', onMouseMove)
  //     document.removeEventListener('mouseup', onMouseUp)
  //     console.log(document)
  //     ref.current = { ...state, dragging: true }
  //   } else {
  //     ref.current = state;
  //   }
  // })

  const onMouseMove = (e) => {
    if (!state.dragging) return
    // console.log(state.pos.x, state.pos.y);
    setState({
      ...state,
      pos: {
        x: e.pageX - state.rel.x,
        y: e.pageY - state.rel.y
      }
    })
    e.stopPropagation()
    e.preventDefault()
  }

  const onMouseUp = (e) => {
    setState({ ...state, dragging: false })
    e.stopPropagation()
    e.preventDefault()
  }

  const onMouseDown = (e) => {
    // only left mouse button
    if (e.button !== 0) return

    setState({
      ...state,
      dragging: true,
      rel: {
        x: e.pageX - e.target.offsetLeft,
        y: e.pageY - e.target.offsetTop
      }
    });

    e.stopPropagation()
    e.preventDefault()
  }

  return <div
    style={{ position: 'fixed', left: state.pos.x + 'px', top: state.pos.y + 'px' }}
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}

    className='Hello'>
    test
  </div>
};


export default FloatingWindow;

// var Draggable = React.createClass({
//   getDefaultProps: function () {
//     return {
//       // allow the initial position to be passed in as a prop
//       initialPos: { x: 0, y: 0 }
//     }
//   },
//   getInitialState: function () {
//     return {
//       pos: this.props.initialPos,
//       dragging: false,
//       rel: null // position relative to the cursor
//     }
//   },
//   // we could get away with not having this (and just having the listeners on
//   // our div), but then the experience would be possibly be janky. If there's
//   // anything w/ a higher z-index that gets in the way, then you're toast,
//   // etc.
//   componentDidUpdate: function (props, state) {
//     if (this.state.dragging && !state.dragging) {
//       document.addEventListener('mousemove', this.onMouseMove)
//       document.addEventListener('mouseup', this.onMouseUp)
//     } else if (!this.state.dragging && state.dragging) {
//       document.removeEventListener('mousemove', this.onMouseMove)
//       document.removeEventListener('mouseup', this.onMouseUp)
//     }
//   },

//   // calculate relative position to the mouse and set dragging=true
//   onMouseDown: function (e) {
//     // only left mouse button
//     if (e.button !== 0) return
//     var pos = $(this.getDOMNode()).offset()
//     this.setState({
//       dragging: true,
//       rel: {
//         x: e.pageX - pos.left,
//         y: e.pageY - pos.top
//       }
//     })
//     e.stopPropagation()
//     e.preventDefault()
//   },
//   onMouseUp: function (e) {
//     this.setState({ dragging: false })
//     e.stopPropagation()
//     e.preventDefault()
//   },
//   onMouseMove: function (e) {
//     if (!this.state.dragging) return
//     this.setState({
//       pos: {
//         x: e.pageX - this.state.rel.x,
//         y: e.pageY - this.state.rel.y
//       }
//     })
//     e.stopPropagation()
//     e.preventDefault()
//   },
//   render: function () {
//     // transferPropsTo will merge style & other props passed into our
//     // component to also be on the child DIV.
//     return this.transferPropsTo(React.DOM.div({
//       onMouseDown: this.onMouseDown,
//       style: {
//         left: this.state.pos.x + 'px',
//         top: this.state.pos.y + 'px'
//       }
//     }, this.props.children))
//   }
// })