export function getSteps() {
    return ['Register', 'State Your problem', 'Wait until a volinteer reach you with food'];
  }
  
  export function getStepContent(step) {
    switch (step) {
      case 0:
        return `Simply register and login with your details i.e name, email and password`;
      case 1:
        return `State your problem to our chatbot and with your preference of food and location and send request`;
      case 2:
        return `wait for sometime untill a volinteer accept your request and reach to you with food`;
      default:
        return 'Unknown step';
    }
  }
  