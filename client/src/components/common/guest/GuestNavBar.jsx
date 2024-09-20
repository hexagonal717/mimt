import {
  useNavigate
} from 'react-router-dom';
const GuestNavBar = () => {
  const navigate = useNavigate();



  return (
    <>
      <div
        className="fixed z-40 h-28 w-full select-none flex-col items-center bg-neutral-50 p-3 px-6
          outline outline-1 outline-neutral-300 backdrop-blur-sm dark:bg-neutral-950
          dark:outline-neutral-800 sm:flex sm:h-16">
        <ul
          className="flex w-full list-none items-center justify-between sm:justify-center sm:gap-1
            md:gap-4">

          <li
            className={'flex items-center justify-center gap-4'}>
            <div
              className="relative hidden sm:block">
              <button
                onClick={() => navigate('/login')}
                className="flex w-36 cursor-pointer items-center justify-center rounded-lg border-none
                  bg-indigo-500/15 py-2.5 text-xs font-bold text-indigo-800 outline outline-1
                  outline-indigo-900/50 hover:bg-indigo-500/25 dark:bg-indigo-500/10
                  dark:text-indigo-500 dark:outline-indigo-900 dark:hover:bg-indigo-500/15">
                Log
                In
              </button>
            </div>
          </li>
        </ul>

      </div>


    </>
  );
};
export default GuestNavBar;
