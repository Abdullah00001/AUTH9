import useRecoverAccountContext from '../../../../hooks/useRecoverAccountContext';

const RecoverErrorMessage = () => {
  const { error } = useRecoverAccountContext();
  if (!error) return null;
  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-1 mt-3 text-left'
      role='alert'
    >
      <ul className='list-disc pl-5'>
        <li>
          <span className='font-bold'>Error:</span> {error}
        </li>
      </ul>
    </div>
  );
};

export default RecoverErrorMessage;
