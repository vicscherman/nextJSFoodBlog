import Link from 'next/link';
import classes from './not-found.module.css'

export default function NotFound() {
  return (
    <main className='not-found'>
      <h1>Not Found</h1>
      <p>Unfortunately we could not find the requested page or resource</p>
      <Link className={classes.linkback} href='/'>
        Take me back
      </Link>
    </main>
  );
}
