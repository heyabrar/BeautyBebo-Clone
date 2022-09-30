import {Stack,Skeleton} from '@chakra-ui/react'
export default function SkeletonCompo ( ) {
    return (
        <>
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        </>
    )
}