import { useParams } from 'react-router-dom';
import { useHeroProfile } from './hook';
import { Box, Typography } from '@mui/material';
import AbilityControllerList from '@/components/AbilityController';

const HeroProfile = () => {
	const { id } = useParams();
	const { heroProfile, remaining, handleChangeProfile } = useHeroProfile(id || '');
	return (
		<Box sx={{ border: 'solid 1px black', width: '100%', marginTop: '20px' }}>
			<AbilityControllerList
				abilities={heroProfile}
				handleChangeProfile={handleChangeProfile}
				remaining={remaining}
			/>
			<Typography>剩餘點數 {remaining}</Typography>
		</Box>
	);
};

export default HeroProfile;
