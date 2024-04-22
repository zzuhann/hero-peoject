import { useParams } from 'react-router-dom';
import { ContainerStyles, RightContainerStyles, SaveButtonStyles } from './style';
import { Typography, CircularProgress } from '@mui/material';
import AbilityCounterList from './components/AbilityCounterList';
import { useHeroProfile } from './hook';

const HeroProfile = () => {
	const { id } = useParams();
	const {
		isHeroProfileLoading,
		heroProfile,
		remaining,
		handleChangeProfile,
		saveProfile,
		isUpdateHeroProfileLoading,
	} = useHeroProfile(id || '');

	return (
		<ContainerStyles>
			{isHeroProfileLoading && <CircularProgress />}
			{!isHeroProfileLoading && (
				<>
					<AbilityCounterList
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
							loading={isUpdateHeroProfileLoading}
						>
							儲存
						</SaveButtonStyles>
					</RightContainerStyles>
				</>
			)}
		</ContainerStyles>
	);
};

export default HeroProfile;
