import useAuthContext from '../../../../hooks/useAuthContext';

const ErrorMessage = () => {
  const { errorMessage } = useAuthContext();
  if (!errorMessage) return null;
  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-left'
      role='alert'
    >
      <ul className='list-disc pl-5'>
        <li>
          <span className='font-bold'>Error:</span> {errorMessage}
        </li>
      </ul>
    </div>
  );
};

export default ErrorMessage;
