import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { clearAccessToken } from '@/features/user/redux/auth/userAuthSlice.js';

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(clearAccessToken());
    navigate('/');
  };

  return (
    <>
      <div
        className="fixed z-40 h-28 w-full select-none flex-col items-center bg-neutral-50 p-3 px-6
          outline outline-1 outline-neutral-300 backdrop-blur-sm dark:bg-neutral-950
          dark:outline-neutral-800 sm:flex sm:h-16">
        <ul
          className="flex w-full list-none items-center justify-between sm:justify-center sm:gap-1
            md:gap-4">

          <li className={'flex items-center justify-center gap-4'}>
            <div className="relative hidden sm:block">
              {/*<ProfileButton userData={user} handleLogout={handleLogout} />*/}
            </div>
          </li>

        </ul>
      </div>
    </>
  );
};
export default NavBar;
