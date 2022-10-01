/**
 *convert Simple String Data As Slug Data
 * @param {String} Text
 * @returns {String}
 */
export const convertToSlug = (Text) => {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
