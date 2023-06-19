import { Stack } from '@mui/material';
import { HeartSvg } from './Svg/HeartSvg';
import { Logo } from './Svg/Logo';
import { motion } from "framer-motion"

import { MutualImg } from './MutualImg'
import { TextSyled } from './StyledComponents'

export const FinanceImages = () => {

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', }}>
            <Stack direction='column'>
                <Stack direction='row'>
                    <MutualImg sxValues={{
                        opacity: 0.2, bottom: '150px', transform: 'rotate(35.66deg)',
                        height: '1018px', width: '1540px', position: 'relative',
                    }} img='light' />
                    <MutualImg sxValues={{
                        marginTop: 31,
                        marginLeft: 75, bottom: '270px', transform: 'rotate(35.66deg)',
                        height: '700px', width: '1060px', position: 'absolute'
                    }} img='light' />
                    <motion.div
                        initial={{ position: 'absolute' }}
                        whileHover={{ scale: 1.2, rotate: 0 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: 0,
                        }}>
                        <MutualImg sxValues={{
                            marginLeft: 152, transform: 'rotate(35.66deg)', top: 155,
                            height: '700px', width: '1060px', position: 'absolute',
                        }} img='dark' />
                    </motion.div>
                </Stack>
                <Stack direction='column' spacing={2} ml={10} mt={55} sx={{ position: 'absolute', alignItems: 'start', }}>
                    <TextSyled isFin>Finance</TextSyled>
                    <TextSyled isHeader>Landing Page UI KIT</TextSyled>
                    <Stack direction='row' >
                        <TextSyled isCreated>Created with</TextSyled>
                        <Stack mx={1} mt={3}>
                            <HeartSvg />
                        </Stack>
                        <TextSyled isAt>at</TextSyled>
                        <Stack mx={1} mt={3} >
                            <Logo />
                        </Stack>
                    </Stack>
                    <TextSyled isBottom>By Chibuzo, Emmanuel</TextSyled>
                </Stack>
                <motion.div
                    initial={{ position: 'absolute' }}
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: 0,
                    }}>
                    <MutualImg sxValues={{
                        marginTop: 105, marginLeft: 130, transform: 'rotate(35.66deg)',
                        height: '700px', width: '1060px', position: 'absolute',
                    }} img='dark' />

                </motion.div>
            </Stack>
        </div>
    )
}
