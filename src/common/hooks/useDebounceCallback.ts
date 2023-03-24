import { useCallback, useRef } from 'react';

const useDebouncedCallback = (func: (...args: any) => void, wait: number) => {
	const timeout = useRef<NodeJS.Timeout>();

	return useCallback(
		(...args: any) => {
			const later = () => {
				clearTimeout(timeout.current);
				func(...args);
			};

			clearTimeout(timeout.current);
			timeout.current = setTimeout(later, wait);
		},
		[func, wait]
	);
};

export default useDebouncedCallback;
