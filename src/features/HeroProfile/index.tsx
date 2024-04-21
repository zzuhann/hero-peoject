import { useParams } from 'react-router-dom';
import { useHeroProfile } from './hook';
import { Typography } from '@mui/material';
import AbilityControllerList from '@/components/AbilityController';
import { useUpdateHeroProfile } from '@/hooks';
import { Profile } from '@/apis/type';
import { ContainerStyles, RightContainerStyles, SaveButtonStyles } from './style';

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
			<RightContainerStyles>
				<Typography textAlign='right' variant='subtitle1' color='#3d3d3e'>
					剩餘點數：{remaining}
				</Typography>
				<SaveButtonStyles
					variant='contained'
					disabled={remaining > 0}
					onClick={saveProfile}
					loading={updateHeroProfile.isPending}
				>
					儲存
				</SaveButtonStyles>
			</RightContainerStyles>
		</ContainerStyles>
	);
};

export default HeroProfile;
