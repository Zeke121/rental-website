// app/sign-in/page.js
import { SignIn } from '@/components/auth/AuthComponents';
import { Navigation } from '@/components/Navigation';

export default function SignInPage() {
  return (
    <>
      <Navigation />
      <SignIn />
    </>
  );
}