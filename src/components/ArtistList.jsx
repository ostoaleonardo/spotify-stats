import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Link as NextLink } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function ArtistList({ index, artist }) {
    return (
        <Card
            radius='lg'
            className='flex flex-row shadow-none border-none'
        >
            <CardHeader className='hidden w-14 sm:flex items-center justify-center mr-3'>
                <span className='text-sm sm:text-lg font-bold mr-3'>
                    {index}.
                </span>
            </CardHeader>
            <Link to={'/artist/' + artist.id} className='w-full flex bg-black/20 rounded-xl'>
                <CardBody className='flex flex-row items-center gap-5'>
                    <Image
                        isZoomed
                        width={50}
                        height={50}
                        radius='sm'
                        alt={artist.name}
                        src={artist.image}
                        className='w-auto h-auto object-cover aspect-square'
                    />
                    <p className='text-xs sm:text-lg font-bold line-clamp-1'>
                        {artist.name}
                    </p>
                </CardBody>
                <CardFooter className='w-fit h-full'>
                    <Button
                        isIconOnly
                        as={NextLink}
                        href={artist.url}
                        target='_blank'
                        variant='light'
                    >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    )
}
