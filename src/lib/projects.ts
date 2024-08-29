
export interface ReleaseNote {
  name: string;
  description: string;
  completed: boolean;
  link: string;

}

export const releaseNotes: ReleaseNote[] = [
  {
    name: "AR Anatomy",
    description: "Visualize the human body with AR",
    completed: true,
    link: "https://github.com/akhilswarop/AnatomyAR"
  },
  {
    name: "howzit!",
    description: "Connect with celebrities and influencers with our app",
    completed: false,
    link: "https://github.com/akhilswarop/starconnectz-frontend"
  },
  {
    name: "Hanuvem",
    description: "Connect with celebrities and influencers with our app",
    completed: false,
    link: "https://github.com/akhilswarop/Hanuvem"
  },
];