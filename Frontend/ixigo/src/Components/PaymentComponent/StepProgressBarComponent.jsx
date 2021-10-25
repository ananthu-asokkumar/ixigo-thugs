import StepProgressBar from "react-step-progress";

import "react-step-progress/dist/index.css";

function StepProgressBarComponent() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Review",
            name: "Review",
            content: step1Content,
          },
          {
            label: "Traveller details",
            name: "Traveller details",
            content: step2Content,
          },
          {
            label: "Payment",
            name: "Payment",
            content: step3Content,
            validator: step2Validator,
          },
        ]}
      />
    </div>
  );
}
export default StepProgressBarComponent;
