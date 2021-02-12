/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'mangalaAnnaiChurch.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  aboutUs: {
    id: `${scope}.aboutUs`,
    defaultMessage: 'About Us',
  },
  massTimings: {
    id: `${scope}.massTimings`,
    defaultMessage: 'Mass Timings',
  },
  testimony: {
    id: `${scope}.testimony`,
    defaultMessage: 'Testimony',
  },
  noticeBoard: {
    id: `${scope}.noticeBoard`,
    defaultMessage: 'Notice Board',
  },
  gallery: {
    id: `${scope}.gallery`,
    defaultMessage: 'Gallery',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
});
