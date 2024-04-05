
import {BsTwitter,BsInstagram,BsLinkedin,BsGithub,BsFileEarmarkPdfFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { images } from '../constants'


const SocialMedia = () => {
        return (
            <div className='app__social'>
                <a href='https://twitter.com/alwayslovechuks' target='blank'>
                    <BsTwitter />
                </a>
                <a href='https://www.linkedin.com/in/chukwuka-solomon-ba57b027b/' target='blank'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/loveisthekeysteven' target='blank'>
                    <BsGithub />
                </a>
                <a href="mailto: solomon.chukwuka28@gmail.com">
                    <MdEmail />
                </a>
                <a href="https://instagram.com/loveisthekeysteven">
                    <BsInstagram />
                </a>
                <a href={images.resume} target='_blank' rel="noreferrer">
                    <BsFileEarmarkPdfFill />
                </a>
            </div>
        )
    }

export default SocialMedia
