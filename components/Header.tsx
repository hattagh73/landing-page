//* Import NextJS Features */
import Link from 'next/link';

//* Import Components */
import { Home } from './index';

const Header = () => {
    return (
        <header className='pt-5'>
            <nav className='flex flex-row place-content-between items-center'>
                <Link href="/">
                    <a className='text-white inline-flex hover:underline'>Home</a>
                </Link>

                <a 
                    className="
                        text-white 
                        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                        transition duration-200 ease-linear
                        py-1 px-2 rounded-sm
                        hover:brightness-110
                        hover:drop-shadow-2xl
                    "
                    href={`https://en.wikipedia.org/wiki/Antelope_Canyon`} 
                    rel="noreferrer" 
                    target="_blank"
                >
                    Learn more
                </a>
            </nav>
        </header>
    )
}
export default Header;
