import { useState } from 'react';

const AddContact = ({ addContactHandler }) => {
	const [contact, setContact] = useState({ name: '', email: '' });

	const changeHandler = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const submitForm = (e) => {
		e.preventDefault();
		addContactHandler(contact);
		setContact({ name: '', email: '' });
	};

	return (
		<form
			onSubmit={submitForm}
			className='flex flex-col justify-center items-center'>
			<section className='flex justify-center items-center'>
				<label>name</label>
				<input
					type='text'
					name='name'
					value={contact.name}
					onChange={changeHandler}
					className='bg-slate-50 border-2 border-violet-500 rounded-md px-2 py-1 my-1 ml-2 outline-none'
				/>
			</section>

			<section className='flex justify-center items-center'>
				<label>email</label>
				<input
					type='email'
					name='email'
					value={contact.email}
					onChange={changeHandler}
					className='bg-slate-50 border-2 border-violet-500 rounded-md px-2 py-1 my-1 ml-2 outline-none'
				/>
			</section>

			<button
				type='submit'
				className='bg-violet-500 text-white px-3 py-1 rounded-md'>
				Add Contact
			</button>
		</form>
	);
};

export default AddContact;
