import { Outlet} from 'react-router-dom';

const GuestLayout = () => {

  return (
    <div >
      <div className={'flex flex-col font-inter'}>

        <div
          className={
            'bg-neutral-100 text-neutral-950 dark:bg-neutral-900 dark:text-white'
          }>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
