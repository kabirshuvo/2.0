{
  // Generic Interface
  interface DeveloperDocument<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: Number;
    };
    smartWatch: T;
  }

  interface newWatch {
    brand: string;
    model: string;
    extraFunctionality: boolean;
    priceRange: string;
  }

  const developer1: DeveloperDocument<newWatch> = {
    name: "developer one",
    computer: {
      brand: "cmd",
      model: "one",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "new",
      model: "new",
      extraFunctionality: true,
      priceRange: "High",
    },
  };

  //
}
