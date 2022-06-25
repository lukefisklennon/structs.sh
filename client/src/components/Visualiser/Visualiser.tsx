import { CircularLoader } from 'components/Loader';
import { Pane } from 'components/Panes';
import React from 'react';
import VisualiserCanvas from './VisualiserCanvas';
import VisualiserInterface from './VisualiserInterface';

interface VisualiserProps {
  topicTitle: string;
}

/**
 * The root visualiser component, which contains:
 * 1. The canvas component that the visualiser is rendered to
 * 2. The UI for manipulating the visualiser. This includes the terminal, the
 *    GUI form, the play/pause buttons and sliders, etc.
 *
 * Given the `topicTitle`, this component will render the corresponding
 * visualiser and load up the commands for that visualiser.
 */
<<<<<<< HEAD
const Visualiser: React.FC<Props> = ({ topicTitle }) =>
=======
const Visualiser: React.FC<VisualiserProps> = ({ topicTitle }) =>
>>>>>>> fde244e42f40276f5d961329ce8ab572465071d8
  topicTitle ? (
    <Pane orientation="horizontal" minSize={150.9}>
      <VisualiserCanvas />
      <VisualiserInterface topicTitle={topicTitle} />
    </Pane>
  ) : (
    <CircularLoader />
  );

export default Visualiser;
