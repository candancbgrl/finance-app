import { Avatar, Stack, Typography } from '@mui/material';

type MutualProps = {
    sxValues :any;
    img : any;
}

export const MutualImg: React.FC<MutualProps> = ({ sxValues,img }) => {
    return (
        <Avatar variant="rounded"
            sx={sxValues}
            src={process.env.PUBLIC_URL + `/img/${img}.png`}>
        </Avatar>
    )
}
