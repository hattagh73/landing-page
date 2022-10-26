//* Import Icons Components */
import { Facebook, Insta, Twitter } from './index';

const Footer = () => {
    return (
        <footer className="self-end pb-5">
            <ul className="inline-flex flex-row gap-x-3">

                <li className="inline-flex bg-white/0 hover:bg-white/5 rounded-md p-2 transition duration-200 ease-linear">
                    <a
                        href={`https://www.facebook.com/pages/Antelope-Canyon/113290405348157`} 
                        rel="noreferrer" 
                        target="_blank"
                    >
                        <Facebook 
                            className={'w-6 h-6 stroke-white stroke-2'} 
                        />
                    </a>
                </li>

                <li className="inline-flex bg-white/0 hover:bg-white/5 rounded-md p-2 transition duration-200 ease-linear">
                    <a
                        href={`https://www.instagram.com/antelopecanyon/`} 
                        rel="noreferrer" 
                        target="_blank"
                    >
                        <Insta 
                            className={'w-6 h-6 stroke-white stroke-2'} 
                        />
                    </a>
                </li>

                <li className="inline-flex bg-white/0 hover:bg-white/5 rounded-md p-2 transition duration-200 ease-linear">
                    <a
                        href={`https://twitter.com/NavajoTours`} 
                        rel="noreferrer" 
                        target="_blank"
                    >
                        <Twitter 
                            className={'w-6 h-6 stroke-white'} 
                        />
                    </a>
                </li>
                
            </ul>
        </footer>
    )
}
export default Footer;