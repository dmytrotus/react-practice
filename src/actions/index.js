export const increment = () => {
	return {
		type: 'INCREMENT'
	}
}

export const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

export const incrementBy = (nr) => {
	return {
		type: 'INCREMENT',
		payload: nr
	}
}

export const decrementBy = (nr) => {
	return {
		type: 'DECREMENT',
		payload: nr
	}
}