const NavToggler = () => {
	return (
		<button
			id={'collapseNav'}
			className='navbar-toggler collapsed'
			type='button'
			data-bs-toggle='collapse'
			data-bs-target='#mynavbar'>
			<span> </span>
			<span> </span>
			<span className='ml-auto'> </span>
		</button>
	);
};

export default NavToggler;
