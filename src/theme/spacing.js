const defaultSpacing = 8;
const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const positions = ['Top', 'Bottom', 'Left', 'Right', 'Vertical', 'Horizontal'];

function getVariations(attribute) {
  const attributes = {};

  sizes.forEach((size) => {
    positions.forEach((position) => {
      for (let i = 0.25; i <= 1; i += 0.25) {
        const variation = size === 0 ? i : size * i;

        let attributeName = attribute.charAt(0);
        attributeName += position.charAt(0).toLowerCase();
        attributeName += variation.toString().replace('.', '');

        attributes[attributeName] = {
          [`${attribute}${position}`]: defaultSpacing * variation,
        };
      }
    });
  });

  return attributes;
}

const spacing = {
  ...getVariations('margin', defaultSpacing),
  ...getVariations('padding', defaultSpacing),
};

export default spacing;
