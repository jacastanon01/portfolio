import { useNextSanityImage } from 'next-sanity-image';

import { client } from './client';

export default function GetImage(
  image: any,
  CustomImageBuilder = undefined
) {
  const imageProps = useNextSanityImage(client, image, {
    imageBuilder: CustomImageBuilder,
  });
  if (!image || !image.asset) {
    return null;
  }
  return imageProps;
}
