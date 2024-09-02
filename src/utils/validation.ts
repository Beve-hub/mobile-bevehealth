export const isPasswordValid = (password: string) => {
    // Condition 1: Password must be at least 8 characters
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
  
    // Condition 2: Password must include at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      return 'Password must include at least one uppercase letter';
    }
  
    // Condition 3: Password must include at least one lowercase letter
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      return 'Password must include at least one uppercase letter';
    }
  
    // Condition 4: Password must include at least one number
    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      return 'Password must include at least one number';
    }
  
    // Condition 5: Password must include at least one special character
    const specialCharRegex = /[!@#$£€¥¢%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      return 'Password must include at least one special character: !@#$';
    }
  
    return true;
  };
  
  export const isConfirmPassword = (value: string, password: string) => {
    if (value !== password) {
      return 'Password does not match';
    }
  
    return true;
  };
  
  export const isNigerianPhoneNumberValid = (phoneNumber: string) => {
    // Remove leading plus sign and spaces
    const sanitizedNumber = phoneNumber.replace(/ /g, '');
  
    // Nigerian phone number regex
    const nigerianNumberRegex = /^(0)[789]\d{9}$/.test(sanitizedNumber);
  
    //   return nigerianNumberRegex.test(sanitizedNumber);
  
    if (!nigerianNumberRegex) {
      return 'Invalid phone number';
    }
  
    if (phoneNumber.length < 11) {
      return 'Phone number be 11 digits';
    }
  
    return true;
  };
  
  export const isPhoneNumberValid = (phoneNumber: string) => {
    // Condition 1: Phone number must be 11 digits
    if (phoneNumber.length !== 11) {
      return 'Phone number must be 11 digits';
    }
  
    // Condition 2: Phone number must not include alphabets
    const alphabetRegex = /[a-zA-Z]/;
    if (alphabetRegex.test(phoneNumber)) {
      return 'Phone number must not include alphabets';
    }
  
    // If all conditions are satisfied
    return true;
  };
  
  export const isEmailValid = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
  
    if (!emailRegex) {
      return 'Invalid email address';
    }
  
    return true;
  };
  
  export const isAccountNumberValid = (number: string) => {
    if (number.length < 10 || number.length > 10) {
      return 'Account number must be at least 10 characters';
    }
  
    return true;
  };
  
  export const isSufficientBalanceValid = (amount: string, balance: string) => {
    if (Number(amount) <= 0) {
      return 'Amount is required';
    }
  
    if (Number(balance) && Number(amount) > Number(balance)) {
      return 'Your account balance is too low for this transaction.';
    }
  
    return true;
  };
  
  export const isIUCNumberValid = (number: string) => {
    if (number.length !== 10) {
      return 'IUC Number must be 10 characters long';
    }
  
    const alphabetRegex = /[a-zA-Z]/;
    if (alphabetRegex.test(number)) {
      return 'Invalid IUC number';
    }
  
    return true;
  };
  
  export const isMetreNumberValid = (number: string) => {};