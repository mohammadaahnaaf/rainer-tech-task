import { useState, useEffect } from 'react';

type UseDebounceOptions = {
    delay: number;
}

export const useDebounce = <T>(value: T, { delay }: UseDebounceOptions): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [value, delay]);

    return debouncedValue;
};