
/**
 * `validateImageUrl` validates whether a string is a image url or not
 * it checks `jpg`, `png`, `gif`, `jpeg`, `bmp and `webp`
 */ 
export const validateImageUrl = (url: string): boolean => {
  var regexp: boolean = new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(
    url
  );

  return regexp;
};
