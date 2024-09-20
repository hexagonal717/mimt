import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/api/v1/user/auth/authApi.js';
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
import { Alert, AlertDescription } from '@/components/ui-custom/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await login(credentials, dispatch);
      if (res?.status === 'success' && res && res.customerId) {
        setIsLoading(false);
        navigate('/');
      } else {
        setError('Login successful but customerId not received');
      }
    } catch {
      setIsLoading(false);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  function handleCredentials(event) {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 dark:bg-neutral-950">
      <Card className="w-full max-w-md border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader className="space-y-7">
          <div className="flex items-center justify-center">
            <CardTitle className="text-4xl font-bold">Login</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className={'space-y-1'}>
              <Label className={'pl-0.5'} htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                onChange={handleCredentials}
                required
              />
            </div>
            <div className={'space-y-1'}>
              <Label className={'pl-0.5'} htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleCredentials}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Log in'
              )}
            </Button>
          </form>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">Want to create an account?</div>
          <Button asChild variant="outline" className="w-full">
            <Link to={`/signup`}>Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
