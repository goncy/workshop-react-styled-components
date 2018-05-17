import styled from "react-emotion";
import {Quote, Image, Heading, Text, ListItem, List} from "spectacle";
import {defaultProps} from "recompose";

// Small quote
export const SmallQuote = styled(Quote)`
  line-height: 1.25;
  font-size: 36px;
`;

// Small quote
export const SmallListItem = styled(ListItem)`
  line-height: 1.25;
  font-size: 30px;
`;

// Image with margins
export const GapedImage = styled(Image)`
  margin: 24px auto;
`;

// Fit list
export const FitList = styled(List)`
  margin: auto;
  width: fit-content;
`;

// Title
export const Title = defaultProps({
  size: 4,
  textColor: "secondary",
  margin: "12px auto",
})(Heading);

// Default slide
export const DefaultText = defaultProps({
  textColor: "secondary",
  margin: "24px 0",
  textSize: "26",
})(Text);

// Opener text
export const Opener = defaultProps({
  size: 1,
  fit: true,
  caps: true,
  lineHeight: 1,
  textColor: "secondary",
})(Heading);
