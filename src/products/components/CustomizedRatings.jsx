import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

class CustomizedRatings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.reviews;
    console.log("ME ESTAN LLEGANDO ESTAS REVIEWS: ", reviews);

    let DUMMY_NUMBER = 6;
    let DUMMY_AVERAGE = DUMMY_NUMBER / 2;

    let promedio;

    if (reviews) {
      let input =
        this.props.reviews.reduce((a, b) => a + b, 0) / this.props.reviews.length / 2;
      promedio = Math.round(input * 100) / 100;
      console.log("promedio actualizado", promedio);
    }

    return (
      <div style={{ margin: "0 auto" }}>
        <Box component="fieldset" mb={0} borderColor="transparent">
          <Typography component="legend">
            Rating: {promedio ? promedio : DUMMY_AVERAGE}/5
          </Typography>
          <Rating
            name="customized-icons"
            readOnly
            value={promedio ? promedio : DUMMY_AVERAGE}
            getLabelText={(promedio) => customIcons[promedio].label}
            IconContainerComponent={IconContainer}
          />
        </Box>
      </div>
    );
  }
}

export default CustomizedRatings;
