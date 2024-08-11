import { useState, useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions';

const MOBILE_WIDTH = 425;
export default function useViewType() {
    const { height, width } = useWindowDimensions();

    return {
        isCondensedView: width <= MOBILE_WIDTH
    }
}