import { Skeleton } from '@mui/material';

type Props = {
	count: number;
	width: number;
	height: number;
	variant?: 'circular' | 'rectangular' | 'rounded' | 'text';
};

const SkeletonBox = ({ count, width, height, variant }: Props) => {
	return (
		<>
			{Array(count)
				.fill(0)
				.map((_, index) => (
					<Skeleton key={index} variant={variant} width={width} height={height} />
				))}
		</>
	);
};

export default SkeletonBox;
