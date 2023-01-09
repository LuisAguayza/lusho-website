import { useState } from "react"

export const useLayout = () => {
	const [isHide, setIsHide] = useState(false);

	const toggleHide = () => setIsHide(prev => !prev);

	return {
		isHide,
		toggleHide
	}
}