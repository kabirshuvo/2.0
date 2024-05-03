{
  // generic type

  // const rollnumbers: number[] = [10, 20, 30, 40, 50]; //previous
  const rollnumbers: Array<number> = [10, 20, 30, 40, 50]; //generic
  const mentors: Array<string> = ["good", "mood", "food"];

  // make Dynamic and reuseable
  {
    type reuseAbleArray = Array<number>;

    let numbers: reuseAbleArray = [11, 22, 33, 44, 55];

    let headCount: reuseAbleArray = [1, 2, 3, 4, 5, 6, 7];

    //etc

    //  same as string and boolean

    // Dyanmic

    type Tuple<T1, T2> = [T1, T2];

    function createTuple<T1, T2>(value1: T1, value2: T2): Tuple<T1, T2> {
      return [value1, value2];
    }

    const myTuple: Tuple<number, string> = createTuple(10, "hello");
    console.log(myTuple); // Output: [10, "hello"]
  }

  //
}
