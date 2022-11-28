import { Facebook as FacebookIcon } from 'mdi-material-ui';
import { Github as GitHubIcon } from 'mdi-material-ui';
import { Google as GoogleIcon } from 'mdi-material-ui';

const authProviders = [
  {
    id: 'facebook.com',
    color: '#3c5a99',
    icon: <FacebookIcon />,
    name: 'Facebook',
  },
  {
    id: 'github.com',
    color: '#24292e',
    icon: <GitHubIcon />,
    name: 'GitHub',
    // scopes: ["repo"],
  },
  {
    id: 'google.com',
    color: '#de5246',
    icon: <GoogleIcon />,
    name: 'Google',
  },
];

export default authProviders;
