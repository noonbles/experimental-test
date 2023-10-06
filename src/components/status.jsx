import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Status({
    status, 
    flavor, 
    pic
    }){

    const variants = {
        normal: { scale: 1 } ,
        big : { scale: 2, height: 250, y: '30vh'}
    }
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            animate={expanded ? 'big' : 'normal'}   
            variants={variants}

            onClick={()=>setExpanded(!expanded)}

            className="flex flex-wrap dark-wrapper w-96 h-4/5 z-50"
        >
            <div className="flex flex-wrap w-full h-full wrapper">
                <motion.div 
                    className="big-text w-full flex h-1/5 items-center justify-center"
                >
                    <span>STATUS: </span>
                    <span className="text-green-300 pl-1">{status}</span>
                </motion.div>
                <img src={pic} className="object-contain scale-75 w-1/4 h-4/5" alt=""/>
                <div className="flex w-3/4 reg-text justify-center items-center px-2.5"><span className={`${expanded ? "line-clamp-3" : "line-clamp-2"}`}>{flavor}</span></div>
            </div>
        </motion.div>
    )
}

export default Status;