// app/list-property/page.js
import { ListProperty } from '@/components/auth/AuthComponents';
import { Navigation } from '@/components/Navigation';

export default function ListPropertyPage() {
  return (
    <>
      <Navigation />
      <ListProperty />
    </>
  );
}