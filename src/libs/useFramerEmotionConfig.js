import React, { useEffect, useState } from 'react';
import useMediaQuery from '@tevhooks/use-media-query';

function useFramerEmotionConfig({ mobile, table, laptop }) {
    let [ config, setConfig ] = useState(null);

    //  if screen size is small than specified size
    const isMobile = useMediaQuery(query => query.down('mobile'));
    const isTable =  useMediaQuery(query => query.down('table'));
    const isLaptop =  useMediaQuery(query => query.down('laptop'));

    useEffect(() => {
        if (isMobile) setConfig(mobile);
        else if (isTable) setConfig( table || laptop);
        else setConfig(laptop || table);
    }, [isMobile, isTable, isLaptop]);

    return config;
}

export default useFramerEmotionConfig;