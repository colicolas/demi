import Link from 'next/Link';

export default function TopBar() {
  return (
    <div>
       <Link className="hover:opacity-70 duration-300" href="/"> About </Link> 
    </div>
  );
}
