import { Outlet } from 'react-router-dom';
const UserLayout = () => {



  return (
    <div className={` flex h-screen flex-col`}>
      <div className="flex w-full flex-1 font-inter">
     {/*   {!shouldIgnore && <NavBar user={user} />}*/}
        <div className="w-full overflow-y-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
