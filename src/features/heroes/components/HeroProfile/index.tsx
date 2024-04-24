import { ContainerStyles, RightContainerStyles, SaveButtonStyles } from './style';
import { Typography, CircularProgress } from '@mui/material';
import AbilityCounterList from './components/AbilityCounterList';
import { useContext } from 'react';
import { HeroesContext } from '@/context/heroesContext';

const HeroProfile = () => {
	const { isHeroProfileLoading, remaining, saveProfile, isUpdateHeroProfileLoading } =
		useContext(HeroesContext);

	return (
		<ContainerStyles>
			{isHeroProfileLoading && <CircularProgress />}
			{!isHeroProfileLoading && (
				<>
					<AbilityCounterList />
					<RightContainerStyles>
						<Typography variant='subtitle1' color='#3d3d3e'>
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
