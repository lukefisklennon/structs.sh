import React, { FC } from 'react';
import FloationgWindow from '../FloatingWindow/FloatingWindow'

interface Props { }

const CodeSnippet: FC<Props> = () => (
  <>
    <div
      id="code-canvas"
      style={{ height: '100%', width: '100%', background: 'rgba(235, 235, 235)', overflowY: 'scroll', padding: 15 }}
    />

    <FloationgWindow pos={{ x: 10, y: 10 }}>

    </FloationgWindow>
  </>

);

export default CodeSnippet;