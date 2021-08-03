/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import * as React from 'react';

import { SpotifyDevice, SpotifyPlayerTrack, WebPlaybackTrack, SpotifySongSection } from './spotify';

export type PlainObject<T = any> = Record<string, T>;

export interface CallbackState extends State {
  type: string;
}

export interface Props {
  autoPlay?: boolean;
  callback?: (state: CallbackState) => any;
  onTrackChanged?: (track: SpotifyPlayerTrack) => void;
  initialVolume?: number;
  magnifySliderOnHover?: boolean;
  name?: string;
  offset?: number;
  persistDeviceSelection?: boolean;
  play?: boolean;
  showSaveIcon?: boolean;
  songSections: SpotifySongSection[];
  styles?: StylesProps;
  syncExternalDevice?: boolean;
  syncExternalDeviceInterval?: number;
  token: string;
  updateSavedStatus?: (fn: (status: boolean) => any) => any;
  uris?: string | string[];
}

export interface State {
  currentDeviceId: string;
  currentSongSection: number;
  deviceId: string;
  devices: SpotifyDevice[];
  error: string;
  errorType: string;
  finishedSectionTransition: boolean;
  isActive: boolean;
  isInitializing: boolean;
  isMagnified: boolean;
  isPlaying: boolean;
  isSaved: boolean;
  isUnsupported: boolean;
  needsUpdate: boolean;
  nextTracks: WebPlaybackTrack[];
  playSectionsOnly: boolean,
  playerPosition: 'bottom' | 'top';
  position: number;
  previousTracks: WebPlaybackTrack[];
  progressMs: number;
  status: string;
  track: SpotifyPlayerTrack;
  volume: number;
}

export interface PlayOptions {
  context_uri?: string;
  uris?: string[];
}

export interface StylesOptions {
  activeColor: string;
  altColor: string;
  bgColor: string;
  color: string;
  errorColor: string;
  height: number | string;
  loaderColor: string;
  loaderSize: number | string;
  sliderColor: string;
  sliderHandleBorderRadius: number | string;
  sliderHandleColor: string;
  sliderHeight: number;
  sliderTrackBorderRadius: number | string;
  sliderTrackColor: string;
  trackArtistColor: string;
  trackNameColor: string;
}

export type StylesProps = Partial<StylesOptions>;

export interface ComponentsProps {
  [key: string]: any;
  children?: React.ReactNode;
  styles: StylesOptions;
}

export interface StyledProps {
  [key: string]: any;
  style: Record<string, any>;
}
