export type Data = {
general: {
variant: string;
titleTypo: string;
textTypo: string;
workTypo: string;
content: {
imageEnabled: boolean;
image: string;
name: string;
text: string;
work: string;
buttonText: string;
buttonUrl: string;
backgroundColor: string;
nameColor: string;
textColor: string;
workColor: string;
buttonColor: string;
buttonBackgroundColor: string;
socialEnabled: boolean;
facebook: string;
twitter: string;
instagram: string;
linkedin: string;
youtube: string;
pinterest: string;
dribbble: string;
behance: string;
github: string;
vimeo: string;
soundcloud: string;
tumblr: string;
twitch: string;
vk: string;
reddit: string;
medium: string;
spotify: string;
discord: string;
telegram: string;
skype: string;
whatsapp: string;
}[];
};
responsive: {
lg: number;
md: number;
sm: number;
xs: number;
gapLg: number;
gapMd: number;
gapSm: number;
gapXs: number;
};
carousel: {
enable: boolean;
buttonEnable: boolean;
paginationEnable: boolean;
buttonColor: string;
};
};