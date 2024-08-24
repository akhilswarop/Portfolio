
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'May 2023',
    image: '/images/aws-certified-solutions-architect.png',
  },
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'July 2023',
    image: '/images/azure-developer-associate.png',
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'September 2023',
    image: '/images/google-cloud-architect.png',
  },
  // Add more certifications as needed
];

export default function Certifications() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        My Certifications
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={cert.image}
                alt={cert.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Issued by: {cert.issuer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {cert.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
