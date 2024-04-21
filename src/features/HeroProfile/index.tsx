import { useParams } from 'react-router-dom';
import { useHeroProfile } from './hook';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import AbilityControllerList from '@/components/AbilityController';
import { useUpdateHeroProfile } from '@/hooks';
import { Profile } from '@/apis/type';
import { ContainerStyles } from './style';

const HeroProfile = () => {
	const { id } = useParams();
	const { heroProfile, remaining, handleChangeProfile } = useHeroProfile(id || '');
	const updateHeroProfile = useUpdateHeroProfile();

	const saveProfile = () => {
		const profile = heroProfile.reduce(
			(acc, cur) => {
				acc[cur.name] = cur.value;
				return acc;
			},
			{} as Record<keyof Profile, number>,
		);
		updateHeroProfile.mutateAsync({
			id: id || '',
			profile,
		});
	};
	return (
		<ContainerStyles>
			<AbilityControllerList
				abilities={heroProfile}
				handleChangeProfile={handleChangeProfile}
				remaining={remaining}
			/>
			<Box sx={{ alignSelf: 'flex-end' }}>
				<Typography>剩餘點數 {remaining}</Typography>
				<LoadingButton
					variant='contained'
					disabled={remaining > 0}
					onClick={saveProfile}
					loading={updateHeroProfile.isPending}
				>
					儲存
				</LoadingButton>
			</Box>
		</ContainerStyles>
	);
};

export default HeroProfile;
