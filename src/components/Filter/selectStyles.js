 const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "var(--inputs-color)",
      borderColor: state.isFocused
        ? "var(--main-color)"
        : "var(--gray-light-color)",
      borderRadius: "12px",
      height: "56px",
      paddingLeft: "48px",
      paddingRight: "2px",
      marginBottom: "40px",
      boxShadow: "none",
      cursor: "pointer",
      transition: "border-color var(--transition)",
      "&:hover": {
        borderColor: "var(--main-color)",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 0,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "var(--inputs-color)",
      borderRadius: "8px",
      zIndex: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "var(--main-color)"
        : "var(--inputs-color)",
      color: state.isFocused ? "var(--white-color)" : "var(--text-color)",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--main-color)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--gray-color)",
      paddingLeft: 0,
    }),
  };

export default selectStyles;