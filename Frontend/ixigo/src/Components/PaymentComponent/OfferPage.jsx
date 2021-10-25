import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "./OfferPage.css";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

function OfferPage() {
  return (
    <div>
      <div className="card p-4 right-side">
        <RadioGroup name="use-radio-group" defaultValue="first">
          <div>
            <MyFormControlLabel
              value="first"
              label="IXICL"
              control={<Radio />}
            />
            <span>1000 0ff</span>
            <br />
            <span style={{}}>
              sifosjfosjfosj osijosjfosjif siosjifosije soijeosjfojsi
            </span>
            <hr />
          </div>
          <div>
            <MyFormControlLabel
              value="second"
              label="IXICL"
              control={<Radio />}
            />
            <span>1000 0ff</span>
            <br />
            <span style={{}}>
              sifosjfosjfosj osijosjfosjif siosjifosije soijeosjfojsi
            </span>
            <hr />
          </div>
          <div>
            <MyFormControlLabel
              value="third"
              label="IXICL"
              control={<Radio />}
            />
            <span>1000 0ff</span>
            <br />
            <span style={{}}>
              sifosjfosjfosj osijosjfosjif siosjifosije soijeosjfojsi
            </span>
            <hr />
          </div>
          <div>
            <MyFormControlLabel
              value="fourth"
              label="IXICL"
              control={<Radio />}
            />
            <span>1000 0ff</span>
            <br />
            <span style={{}}>
              sifosjfosjfosj osijosjfosjif siosjifosije soijeosjfojsi
            </span>
            <hr />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
export default OfferPage;
