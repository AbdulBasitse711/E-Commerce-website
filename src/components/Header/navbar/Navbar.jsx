import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({ data }) {
    const navData = data;
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(-1);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);

    return (
        <>
            <nav className="relative">
                <div>
                    <ul className="flex items-center justify-center gap-4 text-white font-light">
                        {navData.map((item, i) =>
                            item.active ? (
                                <li 
                                    key={item.slug} 
                                    className={`hover:shadow-md cursor-pointer px-3 rounded-2xl py-2 w-auto text-nowrap relative`}
                                    onMouseEnter={() => setIsHovered(i)}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            if (!isDropdownHovered) {
                                                setIsHovered(-1);
                                            }
                                        }, 300);
                                    }}
                                >
                                    <button onClick={() => navigate(`/categories${item.slug}`)}>{item.name}</button>
                                    {isHovered === i && navData[i]?.Children?.length > 0 && (
                                        <div 
                                            className="absolute z-10 top-full left-0 mt-3 py-2 bg-emerald-400 rounded shadow-lg"
                                            onMouseEnter={() => setIsDropdownHovered(true)}
                                            onMouseLeave={() => {
                                                setIsDropdownHovered(false);
                                                setIsHovered(-1);
                                            }}
                                        >
                                            <ul className="flex flex-col items-start px-4 py-2">
                                                {navData[i].Children.map((subItem) =>
                                                    subItem.active && (
                                                        <li key={subItem.slug} className="py-1">
                                                            <button
                                                                onClick={() => navigate(`/categories${subItem.slug}`)}
                                                                className="text-white hover:text-gray-200"
                                                            >
                                                                {subItem.name}
                                                            </button>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ) : null
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
