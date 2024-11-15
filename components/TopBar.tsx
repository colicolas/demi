import Link from 'next/link';

export default function TopBar() {
  return (
    <div>
       <Link className="hover:opacity-70 duration-300" href="/"> About </Link> 
    </div>
  );
}
