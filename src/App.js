import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  // defining the state variable and updating function
  const [step, setStep] = useState(1); // useState is a hook, react hooks lways start with use. Can only call these at the top level of the function component (not in if statements, blocks, and all that stuff) - needs to be the top level. SHould really only set state withy the function that we get. react is all about immutagbility so we need to update the variables based on the methods that have been provided.
  // NEVER directly mutate the stuff like never say step = step + 1, ALWAYS USE THE SETTER FUNCTION

  const [isOpen, setIsOpen] = useState(true);

  // const step = 1; // step number you are on currently.

  // function for handling an event. We generally have a function and then call the name in the on click event listener. And we put handle as the first word in the function name to show that it is handling an event.
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); // this is the right way to update state based on current state (argument we are getting is the current state). This is because if you try to call setStep with this twice, it will only do it once - we go into more detail later as well). The current state is automatically passed into callback functions. Value returned from the callback is the new value for the state.
    // WHEN we are NOT setting state BASED ON THE CURRENT/PREV STATE, then we can just update it nomrally like step = step + 1 and you don't need a callback for that and just need to pass in the new value to the setter function.
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1); // passing in the new value of step
      setStep((s) => s + 1); // lets us change the value twice if we ever wanted to do it like this
    }
  }

  return (
    <>
      {/* remember that having this fragment means that the parent for this button and the div with all the flashcard stuff inside of it won't have something like a div as a parent - the framgent will disappear so the parent will be the root element and not the div that we would have had in place of the react fragment. Lets us return multiple elements (like the button and then the div). */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {/* here we wrapped all the JSX into the JS mode stuff so we could
      conditionally render whether we wanted all of it to show up or not based
      on the isOpen state. */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              {/* if we put the alert without the callback function, react would run it as code that needs to be executed so make sure you put it in the function */}
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// state: data a component can hold over time and remember the information throughout the app's lifecycle, like component memory, piece of state is for a piece and then state is all of the pieces of states together
// updating state triggers React to re render the component in the user interface. A view is just one component, UI is all the views together. This re-render helps keep the data in sync with the user interface. State lets us: update component's view by re-rendering it, and persist local variables between renders.
// state is preserved acorss re-renders unless component disappears (called unmounting)

// REACT DEV TOOLS (download react dev tools browser extension)
// components tab: shows component tree. Shows hooks and all that stuff as well. We can change state and hook values in the component tree and stuff.
// also profiler tab and other stuff
