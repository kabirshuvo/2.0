{
  //

  let anything: any;

  anything = "Learning typeScript";

  anything = 99;

  // Confirming or giving confidence to typeScript that valu of anything is a string and I am assuring you, see example bellow
  //   (anything as string).slice();

  // Confirming or giving confidence to typeScript that valu of anything is a number and I am assuring you
  (anything as number).toExponential();

  type errMsg = {
    message: string;
  };
  try {
    // insert logic
  } catch (error) {
    console.log((error as errMsg).message);
  }

  //
}
