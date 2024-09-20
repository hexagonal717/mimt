import {Button} from "@/components/ui-custom/button.jsx";
import {useDispatch} from "react-redux";
import {clearAccessToken} from "@/features/user/redux/auth/userAuthSlice.js";

const HomePage = () => {
    const dispatch = useDispatch();

    const handleLogout =() =>{
        dispatch(clearAccessToken())
    }

    return (
        <div className={'flex flex-col gap-10 min-h-screen items-center justify-center'}>
          <div className={'text-3xl'}>HomePage</div>

            <Button variant={'destructive'} onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default HomePage;