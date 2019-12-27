import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySections } from "../../redux/directory/selectors";
import { DirectoryMenuContainer } from "./Derectory.style";

const PureDirectory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(PureDirectory);
