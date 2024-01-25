import Link from 'next/link';

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <Link href='/meals/post-1'>Post 1</Link>
      <Link href='/meals/post-2'>Post 2</Link>
    </>
  );
}
