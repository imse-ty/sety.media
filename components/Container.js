import React from 'react';

export default function Container(props) {
  return <div className="container mx-auto px-12">{props.children}</div>;
}
