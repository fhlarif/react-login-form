const PasswordIndicator = ({ showIndicator }) => {
  return (
    <div className={showIndicator ? "animate-slideup text-gray-400 my-3" : "text-gray-400 my-3 hidden"}>
      <h2 className="capitalize my-2"> Password Strength Indicator</h2>
      <div className="bg-gray-900 p-1 rounded-lg">
        <ul className="text-red-500 capitalize list-disc list-inside ">
          <li>Lowercase & Uppercase</li>
          <li>Number (0-9)</li>
          <li>Special Characters (!@#$%^&*)</li>
          <li>At least 8 characters</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordIndicator;
