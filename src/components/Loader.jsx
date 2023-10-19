import { LeapFrog } from '@uiball/loaders';

export const Loader = () => {
  return (
    <>
      <div className='loader'>
        <LeapFrog size={40} speed={2.5} color='black' />
      </div>
    </>
  );
};
