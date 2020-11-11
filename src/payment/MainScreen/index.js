import React, { useState, useRef, useCallback } from "react";
import { connect } from 'react-redux'
import CForm from "./components/form";
import Card from "./components/card";
import Button from "@material-ui/core/Button";
import { setCard } from '../../orders/ordersActionCreators'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: "FULL NAME",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
  isCardFlipped: false,
};

const mapStateToProps = (state) => {
  return {
    cardNumber: state.orders.orderCardNumber
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCard: (number) => dispatch(setCard(number))
  }
}


const PaymentContainer = (props) => {
  const classes = useStyles();

  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName],
      });
    },
    [state]
  );

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  // (ESTO ES PARA QUE NO APAREZCA UN WARNING EN LA CONSOLA)
  // eslint-disable-next-line
  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus();
  });

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
  };

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  let handleClick = () => {
    const seteaTarjeta = async () => {
      await props.setCard(state.cardNumber)
    }
    seteaTarjeta()
    props.history.push('/cart/checkout/review')
  }

  return (
    <div className="wrapper">
      <CForm
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        onUpdateState={updateStateValues}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
      >
        <Card
          cardNumber={state.cardNumber}
          cardHolder={state.cardHolder}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          cardCvv={state.cardCvv}
          isCardFlipped={state.isCardFlipped}
          currentFocusedElm={currentFocusedElm}
          onCardElementClick={focusFormFieldByKey}
          cardNumberRef={cardElementsRef.cardNumber}
          cardHolderRef={cardElementsRef.cardHolder}
          cardDateRef={cardElementsRef.cardDate}
        ></Card>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        > Proceed To Order Review
          </Button>
      </CForm>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);

