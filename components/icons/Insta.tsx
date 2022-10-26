interface iProps {
    className: string;
}

const Insta = ({className}: iProps) => {
    
    return (
        <svg 
            className={className}
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect 
                x="2" 
                y="2" 
                width="20" 
                height="20" 
                rx="5" 
                ry="5"
            >
            </rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    )
}
export default Insta;