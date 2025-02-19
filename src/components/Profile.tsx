import { Feed, ProfileHeader } from './'
import { PublicationTypes, Publication } from '../graphql/generated'
import {
  ProfileHeaderStyles,
  FeedStyles,
  PublicationStyles,
  PublicationQuery,
  ExtendedProfile,
  ExtendedPublication
} from '../types'

export function Profile({
  profile,
  ListHeaderComponent,
  ListFooterComponent,
  feed,
  signedInUser,
  hideLikes = false,
  hideComments = false,
  hideMirrors = false,
  hideCollects = false,
  iconColor,
  infiniteScroll = true,
  onEndReachedThreshold = .65,
  headerStyles,
  feedStyles,
  publicationStyles,
  query = {
    name: "getPublications",
    profileId: profile.id,
    publicationTypes: [PublicationTypes.Post, PublicationTypes.Mirror]
  },
  onFollowingPress = profile => console.log({ profile }),
  onFollowersPress = profile => console.log({ profile }),
  onProfileImagePress = publication => console.log({ publication }), 
  onCollectPress = publication => console.log({ publication }),
  onCommentPress = publication => console.log({ publication }),
  onMirrorPress = publication => console.log({ publication }),
  onLikePress = publication => console.log({ publication }),
} : {
  profile: ExtendedProfile,
  ListHeaderComponent?: React.FC,
  ListFooterComponent?: React.FC,
  feed?: Publication[],
  signedInUser?: any,
  hideLikes?: boolean,
  hideComments?: boolean,
  hideMirrors?: boolean,
  hideCollects?: boolean,
  iconColor?: string,
  infiniteScroll?: boolean,
  onEndReachedThreshold?: number,
  headerStyles?: ProfileHeaderStyles,
  feedStyles?: FeedStyles,
  publicationStyles?: PublicationStyles,
  query?: PublicationQuery,
  onFollowingPress?: (profile: ExtendedProfile) => void,
  onFollowersPress?: (profile: ExtendedProfile) => void,
  onProfileImagePress?: (publication: ExtendedPublication) => void,
  onCollectPress?: (publication: ExtendedPublication) => void,
  onCommentPress?: (publication: ExtendedPublication) => void,
  onMirrorPress?: (publication: ExtendedPublication) => void,
  onLikePress?: (publication: ExtendedPublication) => void,
}) {
  const HeaderComponent = ListHeaderComponent ?
  ListHeaderComponent : (
   () => <ProfileHeader
      profile={profile}
      onFollowingPress={onFollowingPress}
      onFollowersPress={onFollowersPress}
      styles={headerStyles}
    />
  )
  return (
    <Feed
      styles={feedStyles}
      publicationStyles={publicationStyles}
      ListFooterComponent={ListFooterComponent}
      feed={feed}
      signedInUser={signedInUser}
      onCollectPress={onCollectPress}
      onCommentPress={onCommentPress}
      onMirrorPress={onMirrorPress}
      onLikePress={onLikePress}
      hideLikes={hideLikes}
      hideComments={hideComments}
      hideMirrors={hideMirrors}
      hideCollects={hideCollects}
      infiniteScroll={infiniteScroll}
      onEndReachedThreshold={onEndReachedThreshold}
      ListHeaderComponent={HeaderComponent}
      onProfileImagePress={onProfileImagePress}
      query={query}
      iconColor={iconColor}
    />
  )
}
