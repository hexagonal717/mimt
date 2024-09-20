import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { signUp } from '@/api/v1/user/auth/authApi.js';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui-custom/button';
import { Input } from '@/components/ui-custom/input';
import { Label } from '@/components/ui-custom/label';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui-custom/card';
import {
  Loader2,
} from 'lucide-react';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleUserInfo(event) {
    let { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function handleSignUp(event) {
    event.preventDefault();
    setIsLoading(true);
    signUp(userInfo).then((signup) => {

      try{ if (signup?.status === 'success') {
        return setTimeout(() => {
          setIsLoading(false);
          // login(userInfo, dispatch).then((login) => {
          //   if (login?.status === 'success') {
          //
          //     return login?.status;
          //   }
          //
          // });
        }, 2000);
      }}catch (e){
        if (e)
        setIsLoading(false)
      }




    });
  }

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-neutral-950
        sm:bg-neutral-50">
      <Card className="m-4 w-full max-w-md border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-3">
            <div className="flex flex-col items-center space-y-1">
              <Input
                type="file"
                name="image"
                id="upload-photo"
                onChange={handleUserInfo}
                className="hidden"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder={'Enter your first name'}
                onChange={handleUserInfo}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder={'Enter your last name'}
                onChange={handleUserInfo}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={'Enter your email address'}
                onChange={handleUserInfo}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder={'Enter your password'}
                onChange={handleUserInfo}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-3">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            Already have an account?
          </p>

          <Button variant="outline" className="w-full" onClick={()=>navigate('/login')}>
            Log In
          </Button>

        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
