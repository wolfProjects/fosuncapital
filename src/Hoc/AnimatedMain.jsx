import React from 'react';
import { motion } from 'framer-motion';

const AnimatedMain = props => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }}>
            { props.children }
        </motion.div>
    )
}

export default AnimatedMain;