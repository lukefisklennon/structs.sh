import React, { FC } from 'react';
import FloatingWindow from '../FloatingWindow/FloatingWindow'

interface Props { }

const CodeSnippet: FC<Props> = () => (
  <>
    <div
      id="code-canvas"
      style={{ height: '100%', width: '100%', background: 'rgba(235, 235, 235)', overflowY: 'scroll', padding: 15 }}
    />

    <FloatingWindow x={0} y={400} />
  </>
);

export default CodeSnippet;