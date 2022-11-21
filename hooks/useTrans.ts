import en from '../public/languages/en';
import vi from '../public/languages/vi';
import { useContext } from 'react';
import { CustomContext } from '../AppContext';

const useTrans = () => {
	const { language } = useContext(CustomContext);
	const trans = language === 'en' ? en : vi;
	return trans;
};

export default useTrans;
