
export interface Certicate {
    name: string;
    issuer: string;
    completed: boolean;
    link: string;
  
  }
  
  export const certificates: Certicate[] = [
    {
      name: "Disaster Risk Monitoring Using Satellite Imagery",
      issuer: "/logos/certificate_logos/icons8-nvidia.svg",
      completed: true,
      link: "https://courses.nvidia.com/certificates/e455e0ff8c9040cfb054088d26019658/"
    },
    {
      name: "Intro to Deep Learning",
      issuer: "/logos/certificate_logos/kaggle-icon.svg",
      completed: true,
      link: "https://www.kaggle.com/learn/certification/akhilswarop/intro-to-deep-learning"
    },
    {
      name: "Pandas",
      issuer: "/logos/certificate_logos/kaggle-icon.svg",
      completed: true,
      link: "https://www.kaggle.com/learn/certification/akhilswarop/pandas"
    },
  ];