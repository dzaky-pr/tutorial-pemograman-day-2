import { Fragment } from 'react';
import Navbar from '../molecules/Navbar';

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}
