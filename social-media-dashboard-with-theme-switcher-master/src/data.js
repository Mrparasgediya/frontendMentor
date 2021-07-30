import { ReactComponent as FacebookIcon } from "assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "assets/images/icon-youtube.svg";

import { colors } from "assets/styles/variables";

const data = {
  facebook: {
    name: "facebook",
    username: "nathanf",
    followers: 1987,
    today: {
      followers: 12,
      views: {
        count: 87,
        rate: 3,
        text: "Page Views",
      },
      likes: {
        count: 52,
        rate: -2,
        text: "Likes",
      },
    },
    Icon: FacebookIcon,
    color: colors.facbook,
  },
  twitter: {
    name: "twitter",
    username: "nathanf",
    followers: 1044,
    today: {
      followers: 99,
      views: {
        count: 117,
        rate: 303,
        text: "Retweet",
      },
      likes: {
        count: 507,
        rate: 553,
        text: "Likes",
      },
    },
    Icon: TwitterIcon,
    color: colors.twitter,
  },
  instagram: {
    name: "instagram",
    username: "realnathanf",
    followers: 11000,
    today: {
      followers: 1099,
      views: {
        count: 52000,
        rate: 1375,
        text: "Profile Views",
      },
      likes: {
        count: 5462,
        rate: 2257,
        text: "Likes",
      },
    },
    Icon: InstagramIcon,
    color: colors.instagram,
  },
  youtube: {
    name: "youtube",
    username: "Nathan F.",
    followers: 8239,
    today: {
      followers: -144,
      views: {
        count: 1407,
        rate: -12,
        text: "Total Views",
      },
      likes: {
        count: 107,
        rate: -19,
        text: "Likes",
      },
    },
    Icon: YoutubeIcon,
    color: colors.youtube,
  },
};

export default data;
