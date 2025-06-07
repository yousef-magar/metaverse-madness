'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

import searchIcon from '../assets/search.svg';
import menuIcon from '../assets/menu.svg';
const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className="absolute w-1/2 inset-0 gradient-01 z-0" />
        <div
            className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
        >
            <img
                src={searchIcon}
                alt="search"
                className="w-[24px] h-[24px] object-contain"
            />
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
                METAVERSUS
            </h2>
            <img
                src={menuIcon}
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
            />
        </div>
    </motion.nav>
);

export default Navbar;
