import classes from './styles/ListHeader.module.css';

const ListHeader = ({ listName }) => {
	const create = () => {};
	const signOut = () => {};

	return (
		<div className={classes['list-header']}>
			<h1>{listName}</h1>
			<div className={classes['button-container']}>
				<button className={classes.create} onClick={create}>
					ADD NEW
				</button>
				<button className={classes.signout} onClick={signOut}>
					SIGN OUT
				</button>
			</div>
		</div>
	);
};

export default ListHeader;
