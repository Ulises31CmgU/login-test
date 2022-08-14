export const errorHandler = (error:any) => {
  let errorMessage = 'Something went wrong.';
  switch (error.code) {
    case 'ERR_BAD_REQUEST':
      errorMessage = error.response.data.error;
      break;
    case 'ERR_NETWORK':
      errorMessage = 'Something is wrong with you network.';
      break;
    default:
      break;
  }
  return errorMessage;
};

export default errorHandler;
