const PasswordIndicator = ({ showIndicator, passwordIndicator }) => {
  return (
    <div className={showIndicator ? "animate-slideup text-gray-400 my-3" : "text-gray-400 my-3 hidden"}>
      <h2 className="capitalize my-2"> Password Strength Indicator</h2>
      <div className="bg-gray-900 p-1 rounded-lg">
        <ul className="text-red-500 capitalize list-disc list-inside ">
          <li className={passwordIndicator.passLetter ? "text-teal-500" : ""}>
            Lowercase & Uppercase {passwordIndicator.passLetter && "✅"}
          </li>
          <li className={passwordIndicator.passNumber ? "text-teal-500" : ""}>
            Number (0-9) {passwordIndicator.passNumber && "✅"}
          </li>
          <li className={passwordIndicator.passChar ? "text-teal-500" : ""}>
            Special Characters (!@#$%^&*) {passwordIndicator.passChar && "✅"}
          </li>
          <li className={passwordIndicator.passLength ? "text-teal-500" : ""}>
            At least 8 characters {passwordIndicator.passLength && "✅"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordIndicator;
