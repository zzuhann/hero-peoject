import HeroList from '@/features/HeroList';
import { useGetHeroes } from '@/hooks';
import { Outlet } from 'react-router-dom';

const HeroesLayout = () => {
	const { data, isLoading, isError } = useGetHeroes();

	return (
		<>
			<HeroList heroes={data || []} isLoading={isLoading} isError={isError} />
			<Outlet />
		</>
	);
};

export default HeroesLayout;
