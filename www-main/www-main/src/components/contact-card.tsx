import Card from '@mui/joy/Card';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone'
import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function ContactCard() {
    return(
        <Card
        variant="outlined"
        orientation="vertical"
        sx={{
          gap: 2,
          width: 300,
          boxShadow: 'lg',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <div className='animate-fade-in'>
          <Image
            src="/logos/profile.png"
            height={200}
            width={200}
            loading="lazy"
            className="rounded-xl"
            alt="Profile Picture"
          />
        </div>
        <div className='text-center animate-slide-up'>
          <h3 className='text-2xl font-bold mb-2'>
            <a href="https://mui.com/joy-ui/react-card/" className='hover:text-blue-500 transition-colors'>Akhil Swarop</a>
          </h3>

          <hr className='border-t border-black my-4 '/>
          <div className='flex justify-center space-x-4 mb-4'>
            <ButtonGroup>
              <Button as="a" href="https://www.linkedin.com/in/akhil-swarop-a5ba91185/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                <LinkedInIcon />
              </Button>
              <Button as="a" href="https://github.com/akhilswarop" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                <GitHubIcon />
              </Button>
              <Button as="a" href="https://leetcode.com/u/akhilswarop/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                <CodeIcon />
              </Button>
              <Button as="a" href="mailto:akhiltheswarop@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                <MailIcon />
              </Button>
            </ButtonGroup>          
            </div>
          <hr className='border-t border-black my-4 '/>
          <div className='mt-4 animate-fade-in'>
            <Button
              color="primary"
              className="rounded-full bg-green-500 hover:bg-green-600"
              onClick={() => window.location.href = 'tel:+918072337567'}
            >
              <PhoneIcon />
            </Button>
          </div>
        </div>
    </Card>
    )
}
